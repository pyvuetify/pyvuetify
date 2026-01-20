#!/usr/bin/env python3
"""
Script to add mixin documentation from Vuetify GitHub to vuetify_api.json
"""
import json

# Documentation from mixin files
MIXIN_DOCS = {
    "colorable": {
        "color": "Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors)."
    },
    "themeable": {
        "dark": "Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).",
        "light": "Applies the light theme variant to the component.",
    },
    "elevatable": {
        "elevation": "Designates an elevation applied to the component between 0 and 24. You can find more information on the [elevation page](/styles/elevation)."
    },
    "measurable": {
        "height": "Sets the height for the component.",
        "maxHeight": "Sets the maximum height for the component.",
        "minHeight": "Sets the minimum height for the component.",
        "maxWidth": "Sets the maximum width for the component.",
        "minWidth": "Sets the minimum width for the component.",
        "width": "Sets the width for the component.",
    },
    "positionable": {
        "absolute": "Applies **position: absolute** to the component.",
        "bottom": "Aligns the component towards the bottom.",
        "fixed": "Applies **position: fixed** to the component.",
        "left": "Aligns the component towards the left.",
        "right": "Aligns the component towards the right.",
        "top": "Aligns the content towards the top.",
    },
    "scrollable": {
        "scrollTarget": "Designates the element to target for scrolling events. Uses `window` by default.",
        "scrollThreshold": "The amount of scroll distance down before **hide-on-scroll** activates.",
    },
    "toggleable": {"value": "Controls whether the component is visible or hidden."},
    "applicationable": {
        "app": "Designates the component as part of the application layout. Used for dynamically adjusting content sizing. Components using this prop should reside **outside** of `v-main` component to function properly. You can find more information about layouts on the [application page](/components/application). **Note:** this prop automatically applies **position: fixed** to the layout element. You can overwrite this functionality by using the `absolute` prop"
    },
    "routable": {
        "activeClass": "Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.",
        "append": "Setting **append** prop always appends the relative path to the current path. You can find more information about the [**append** prop](https://router.vuejs.org/api/#append) on the vue-router documentation.",
        "disabled": "Removes the ability to click or target the component.",
        "exact": "Exactly match the link. Without this, '/' will match every route. You can find more information about the [**exact** prop](https://router.vuejs.org/api/#exact) on the vue-router documentation.",
        "exactPath": "Exactly match the link, ignoring the `query` and the `hash` sections. You can find more information about the [**exact-path** prop](https://router.vuejs.org/api/#exact-path) on the vue-router documentation.",
        "exactActiveClass": "Configure the active CSS class applied when the link is active with exact match. You can find more information about the [**exact-active-class** prop](https://router.vuejs.org/api/#exact-active-class) on the vue-router documentation.",
        "href": "Designates the component as anchor and applies the **href** attribute.",
        "link": "Designates that the component is a link. This is automatic when using the **href** or **to** prop.",
        "nuxt": "Specifies the link is a `nuxt-link`. For use with the [nuxt framework](https://nuxtjs.org/api/components-nuxt-link/).",
        "replace": "Setting **replace** prop will call `router.replace()` instead of `router.push()` when clicked, so the navigation will not leave a history record. You can find more information about the [**replace** prop](https://router.vuejs.org/api/#replace) on the vue-router documentation.",
        "ripple": "Applies the [v-ripple](/directives/ripple) directive.",
        "to": "Denotes the target route of the link. You can find more information about the [**to** prop](https://router.vuejs.org/api/#to) on the vue-router documentation.",
        "target": "Designates the target attribute. This should only be applied when using the **href** prop.",
    },
    "sizeable": {
        "large": "Makes the component large.",
        "medium": "Makes the component medium.",
        "small": "Makes the component small.",
        "xSmall": "Makes the component extra small.",
        "xLarge": "Makes the component extra large.",
    },
    "roundable": {
        "rounded": "Designates the **border-radius** applied to the component. You can find more information on the [Border Radius page](/styles/border-radius).",
        "tile": "Removes the component's **border-radius**.",
    },
    "rippleable": {"ripple": "Applies the [v-ripple](/directives/ripple) directive."},
    "validatable": {
        "disabled": "Disable the input",
        "error": "Puts the input in a manual error state",
        "errorCount": "The total number of errors that should display at once",
        "errorMessages": "Puts the input in an error state and passes through custom error messages. Will be combined with any validations that occur from the **rules** prop. This field will not trigger validation",
        "messages": "Displays a list of messages or message if using a string",
        "readonly": "Puts input in readonly state",
        "rules": "Accepts a mixed array of types `function`, `boolean` and `string`. Functions pass an input value as an argument and must return either `true` / `false` or a `string` containing an error message. The input field will enter an error state if a function returns (or any value in the array contains) `false` or is a `string`",
        "success": "Puts the input in a manual success state",
        "successMessages": "Puts the input in a success state and passes through custom success messages.",
        "validateOnBlur": "Delays validation until blur event",
    },
    "loadable": {
        "loading": "Displays linear progress bar. Can either be a String which specifies which color is applied to the progress bar (any material color or theme color - **primary**, **secondary**, **success**, **info**, **warning**, **error**) or a Boolean which uses the component **color** (set by color prop - if it's supported by the component) or the primary color",
        "loaderHeight": "Specifies the height of the loader",
    },
    "bootable": {
        "eager": "Will force the components content to render on mounted. This is useful if you have content that will not be rendered in the DOM that you want crawled for SEO."
    },
    "transitionable": {
        "mode": "Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).",
        "origin": "Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).",
        "transition": "Sets the component transition. Can be one of the [built in transitions](/styles/transitions) or one your own.",
    },
    "delayable": {
        "openDelay": "Milliseconds to wait before opening component. Only applies to hover and focus events.",
        "closeDelay": "Milliseconds to wait before closing component. Only applies to hover and focus events.",
    },
    "detachable": {
        "attach": "Specifies which DOM element that this component should detach to. String can be any valid querySelector and Object can be any valid Node. This will attach to the root `v-app` component by default.",
        "contentClass": "Applies a custom class to the detached element. This is useful because the content is moved to the beginning of the `v-app` component (unless the **attach** prop is provided) and is not targetable by classes passed directly on the component.",
    },
    "menuable": {
        "allowOverflow": "Removes overflow re-positioning for the content",
        "inputActivator": "Sets a new activator target for the detached element. Use when placing detachable items in `v-input` slots",
        "maxWidth": "Sets the maximum width for the content",
        "minWidth": "Sets the minimum width for the content",
        "nudgeBottom": "Nudge the content to the bottom",
        "nudgeLeft": "Nudge the content to the left",
        "nudgeRight": "Nudge the content to the right",
        "nudgeTop": "Nudge the content to the top",
        "nudgeWidth": "Nudge the content width",
        "offsetOverflow": "Causes the component to flip to the opposite side when repositioned due to overflow",
        "positionX": "Used to position the content when not using an activator slot",
        "positionY": "Used to position the content when not using an activator slot",
        "zIndex": "The z-index used for the component",
    },
    "overlayable": {
        "hideOverlay": "Hides the display of the overlay.",
        "overlayColor": "Sets the overlay color.",
        "overlayOpacity": "Sets the overlay opacity.",
    },
    "proxyable": {"value": "The designated model value for the component."},
    "comparable": {"valueComparator": "Apply a custom value comparator function"},
    "filterable": {"noDataText": "Display text when there is no data"},
    "groupable": {
        "activeClass": "Configure the active CSS class applied when the link is active. You can find more information about the [**active-class** prop](https://router.vuejs.org/api/#active-class) on the vue-router documentation.",
        "disabled": "Removes the ability to click or target the component.",
        "value": "The value used when the component is selected in a group. If not provided, the index will be used.",
    },
    "activatable": {
        "activator": "Designate a custom activator when the `activator` slot is not used. String can be any valid querySelector and Object can be any valid Node.",
        "disabled": "Disables the ability to open the component.",
    },
    "picker": {
        "actions": "Use this when using actions inside the picker",
        "autosave": "Automatically save the selected value. This updates the internal previous value so if cancel is clicked, it will not revert the user changes",
        "headerColor": "Defines the header color. If not specified it will use the color defined by <code>color</code> prop or the default picker color",
        "landscape": "Orients picker horizontal",
        "noTitle": "Hide the picker title",
        "scrollable": "Allows the use of the mouse wheel in the picker",
        "value": "Picker value",
    },
    "generic": {
        "auto": "Centers list on selected element",
        "clearable": "Add input clear functionality, default icon is Material Design Icons **mdi-clear**",
        "height": "Sets the height for the component",
        "falseValue": "Sets value for falsy state",
        "fullWidth": "Forces 100% width",
        "id": "Sets the DOM id on the component",
        "persistent": "Clicking outside or pressing **esc** key will not dismiss the dialog",
        "size": "Sets the height and width of the component.",
        "tag": "Specify a custom tag used on the root element.",
        "textColor": "Applies a specified color to the control text",
        "trueValue": "Sets value for truthy state",
        "width": "Sets the width for the component.",
    },
    "transitions": {
        "mode": "Sets the transition mode (does not apply to transition-group). You can find more information on the Vue documentation [for transition modes](https://vuejs.org/v2/api/#transition).",
        "origin": "Sets the transition origin on the element. You can find more information on the MDN documentation [for transition origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).",
        "group": "Creates a `transition-group` component. [vue docs](https://vuejs.org/v2/api/#transition-group)",
        "hideOnLeave": "Hides the leaving element (no exit animation)",
        "leaveAbsolute": "Absolutely positions the leaving element (useful for [FLIP](https://aerotwist.com/blog/flip-your-animations/))",
    },
    "v-input": {
        "appendIcon": "Appends an icon to the component, uses the same syntax as `v-icon`",
        "backgroundColor": "Changes the background-color of the input",
        "hideDetails": "Hides hint and validation errors. When set to `auto` messages will be rendered only if there's a message (hint, error message, counter value etc) to display",
        "dense": "Reduces the input height",
        "hint": "Hint text",
        "label": "Sets input label",
        "persistentHint": "Forces hint to always be visible",
        "placeholder": "Sets the input's placeholder text",
        "prependIcon": "Prepends an icon to the component, uses the same syntax as `v-icon`",
    },
    "v-text-field": {
        "appendOuterIcon": "Appends an icon to the outside the component's input, uses same syntax as `v-icon`",
        "filled": "Applies the alternate filled input style",
        "clearIcon": "Applied when using **clearable** and the input is dirty",
        "counter": "Creates counter for input length; if no number is specified, it defaults to 25. Does not apply any validation.",
        "flat": "Removes elevation (shadow) added to element when using the **solo** or **solo-inverted** props",
        "outlined": "Applies the outlined style to the input",
        "prefix": "Displays prefix text",
        "prependInnerIcon": "Prepends an icon inside the component's input, uses the same syntax as `v-icon`",
        "reverse": "Reverses the input orientation",
        "rounded": "Adds a border radius to the input",
        "singleLine": "Label does not move on focus/dirty",
        "solo": "Changes the style of the input",
        "soloInverted": "Reduces element opacity until focused",
        "shaped": "Round if `outlined` and increase `border-radius` if `filled`. Must be used with either `outlined` or `filled`",
    },
    "v-select": {
        "chips": "Changes display of selections to chips",
        "deletableChips": "Adds a remove icon to selected chips",
        "multiple": "Changes select to multiple. Accepts array for value",
        "smallChips": "Changes display of selections to chips with the **small** property",
    },
    "base-item-group": {
        "max": "Sets a maximum number of selections that can be made.",
        "multiple": "Allow multiple selections. The **value** prop must be an _array_.",
    },
}

# Flatten all prop docs into one dict
ALL_PROP_DOCS = {}
for mixin_name, props in MIXIN_DOCS.items():
    for prop_name, doc in props.items():
        if prop_name not in ALL_PROP_DOCS:
            ALL_PROP_DOCS[prop_name] = doc


def main():
    api_file = "/home/rambap/github/ipyvuetify/generate_source/vuetify_api.json"
    print(f"Loading {api_file}...")

    with open(api_file, "r") as f:
        api_data = json.load(f)

    total_updated = 0
    components_updated = 0

    # Process each component
    for component_name, component_data in api_data.items():
        component_props_updated = 0

        if "props" in component_data:
            for prop in component_data["props"]:
                prop_name = prop.get("name")
                # Only add doc if not already present and we have a doc for it
                if prop_name and "doc" not in prop and prop_name in ALL_PROP_DOCS:
                    prop["doc"] = ALL_PROP_DOCS[prop_name]
                    component_props_updated += 1
                    total_updated += 1

        if component_props_updated > 0:
            components_updated += 1
            print(f"  {component_name}: Added {component_props_updated} prop docs")

    # Save updated data
    print("\nSaving updated data...")
    with open(api_file, "w") as f:
        json.dump(api_data, f, indent=2)

    print(f"\n{'='*60}")
    print("Summary:")
    print(f"  Components updated: {components_updated}")
    print(f"  Total props documented: {total_updated}")
    print(f"{'='*60}")


if __name__ == "__main__":
    main()
