<template>
  <v-navigation-drawer
    :border="_border"
    :modelValue="_model_value"
    :width="_width"
    :elevation="_elevation"
    :location="_location"
    :absolute="_absolute"
    :sticky="_sticky"
    :rounded="_rounded"
    :tile="_tile"
    :tag="_tag"
    :theme="_theme"
    :color="_color"
    :name="_name"
    :persistent="_persistent"
    :scrim="_scrim"
    :closeDelay="_close_delay"
    :openDelay="_open_delay"
    :retainFocus="_retain_focus"
    :captureFocus="_capture_focus"
    :image="_image"
    :mobile="_mobile"
    :order="_order"
    :floating="_floating"
    :disableResizeWatcher="_disable_resize_watcher"
    :disableRouteWatcher="_disable_route_watcher"
    :expandOnHover="_expand_on_hover"
    :permanent="_permanent"
    :rail="_rail"
    :railWidth="_rail_width"
    :temporary="_temporary"
    :touchless="_touchless"
    :mobileBreakpoint="_mobile_breakpoint"
  >
    {{ children }}
  </v-navigation-drawer>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _border = useModelState("border");
const _model_value = useModelState("model_value");
const _width = useModelState("width");
const _elevation = useModelState("elevation");
const _location = useModelState("location");
const _absolute = useModelState("absolute");
const _sticky = useModelState("sticky");
const _rounded = useModelState("rounded");
const _tile = useModelState("tile");
const _tag = useModelState("tag");
const _theme = useModelState("theme");
const _color = useModelState("color");
const _name = useModelState("name");
const _persistent = useModelState("persistent");
const _scrim = useModelState("scrim");
const _close_delay = useModelState("close_delay");
const _open_delay = useModelState("open_delay");
const _retain_focus = useModelState("retain_focus");
const _capture_focus = useModelState("capture_focus");
const _image = useModelState("image");
const _mobile = useModelState("mobile");
const _order = useModelState("order");
const _floating = useModelState("floating");
const _disable_resize_watcher = useModelState("disable_resize_watcher");
const _disable_route_watcher = useModelState("disable_route_watcher");
const _expand_on_hover = useModelState("expand_on_hover");
const _permanent = useModelState("permanent");
const _rail = useModelState("rail");
const _rail_width = useModelState("rail_width");
const _temporary = useModelState("temporary");
const _touchless = useModelState("touchless");
const _mobile_breakpoint = useModelState("mobile_breakpoint");
</script>