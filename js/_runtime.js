/**
 * Shared pyvuetify runtime with globalThis caching.
 *
 * The first component loaded initializes Vue + Vuetify and stores the shared
 * state on globalThis.__pyvuetify. Subsequent components reuse it, avoiding
 * redundant heavy initialization (createVuetify, component/directive registration).
 */
import {
  createApp,
  customRef,
  defineComponent,
  h,
  inject,
  onMounted,
  onUnmounted,
  provide,
  ref,
  toValue,
  unref,
  watch,
} from "vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

// Initialize shared runtime once across all component bundles
if (!globalThis.__pyvuetify) {
  globalThis.__pyvuetify = {
    vuetify: createVuetify({ components, directives }),
    RENDER_CONTEXT_KEY: Symbol("pyvuetify.RenderContext"),
  };
}

const { vuetify, RENDER_CONTEXT_KEY } = globalThis.__pyvuetify;

function useRenderContext() {
  const ctx = inject(RENDER_CONTEXT_KEY);
  if (!ctx) throw new Error("pyvuetify: RenderContext is not provided.");
  return ctx;
}

export function useModel() {
  return useRenderContext().model;
}

export function useExperimental() {
  return useRenderContext().experimental;
}

export function useHost() {
  return useRenderContext().host;
}

export function useModelState(key) {
  const model = useModel();
  let trigger;

  const value = customRef((_track, _trigger) => {
    trigger = _trigger;
    return {
      get() {
        _track();
        return model.get(unref(key));
      },
      set(newValue) {
        model.set(unref(key), toValue(newValue));
        model.save_changes();
      },
    };
  });

  const update = () => {
    value.value = model.get(unref(key));
    trigger();
  };

  onMounted(() => model.on(`change:${key}`, update));
  onUnmounted(() => model.off(`change:${key}`, update));

  return value;
}

const WidgetWrapper = defineComponent(
  ({ model, experimental, host }, ctx) => {
    provide(RENDER_CONTEXT_KEY, { model, experimental, host });
    return () => ctx.slots?.default?.();
  },
  {
    props: ["model", "experimental", "host"],
    name: "WidgetWrapper",
  }
);

export function createRender(Widget) {
  return ({ el, model, experimental, host }) => {
    const app = createApp(
      h(WidgetWrapper, { model, experimental, host }, h(Widget))
    );
    app.use(vuetify).mount(el);
    return () => app.unmount();
  };
}

export const WidgetSlot = defineComponent(
  (props) => {
    const host = useHost();
    const container = ref(null);
    let abortController = null;

    async function mountWidget(reference) {
      if (abortController) {
        abortController.abort();
        abortController = null;
      }
      if (!container.value) return;

      if (typeof reference === "string" && reference.startsWith("anywidget:")) {
        abortController = new AbortController();
        const child = await host.getWidget(reference);
        if (abortController.signal.aborted) return;
        container.value.innerHTML = "";
        await child.render({
          el: container.value,
          signal: abortController.signal,
        });
      } else if (reference != null) {
        container.value.textContent = String(reference);
      } else {
        container.value.innerHTML = "";
      }
    }

    onMounted(() => mountWidget(props.reference));
    onUnmounted(() => {
      if (abortController) abortController.abort();
    });

    watch(
      () => props.reference,
      (newRef) => mountWidget(newRef)
    );

    return () => h("span", { ref: container });
  },
  {
    props: ["reference"],
    name: "WidgetSlot",
  }
);
