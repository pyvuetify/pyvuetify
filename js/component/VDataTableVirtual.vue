<template>
  <v-data-table-virtual
    :search="_search"
    :tag="_tag"
    :height="_height"
    :width="_width"
    :modelValue="_model_value"
    :color="_color"
    :density="_density"
    :theme="_theme"
    :sticky="_sticky"
    :mobile="_mobile"
    :mobileBreakpoint="_mobile_breakpoint"
    :items="_items"
    :loading="_loading"
    :hover="_hover"
    :valueComparator="_value_comparator"
    :itemValue="_item_value"
    :itemSelectable="_item_selectable"
    :returnObject="_return_object"
    :showSelect="_show_select"
    :selectStrategy="_select_strategy"
    :initialSortOrder="_initial_sort_order"
    :sortBy="_sort_by"
    :multiSort="_multi_sort"
    :mustSort="_must_sort"
    :customKeySort="_custom_key_sort"
    :expandOnClick="_expand_on_click"
    :showExpand="_show_expand"
    :expanded="_expanded"
    :groupBy="_group_by"
    :filterMode="_filter_mode"
    :noFilter="_no_filter"
    :customFilter="_custom_filter"
    :customKeyFilter="_custom_key_filter"
    :filterKeys="_filter_keys"
    :headerProps="_header_props"
    :cellProps="_cell_props"
    :disableSort="_disable_sort"
    :headers="_headers"
    :loadingText="_loading_text"
    :hideNoData="_hide_no_data"
    :noDataText="_no_data_text"
    :collapseIcon="_collapse_icon"
    :expandIcon="_expand_icon"
    :groupCollapseIcon="_group_collapse_icon"
    :groupExpandIcon="_group_expand_icon"
    :rowProps="_row_props"
    :hideDefaultBody="_hide_default_body"
    :hideDefaultHeader="_hide_default_header"
    :fixedHeader="_fixed_header"
    :sortAscIcon="_sort_asc_icon"
    :sortDescIcon="_sort_desc_icon"
    :fixedFooter="_fixed_footer"
    :striped="_striped"
    :itemHeight="_item_height"
    :itemKey="_item_key"
  >
    {{ children }}
  </v-data-table-virtual>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _search = useModelState("search");
const _tag = useModelState("tag");
const _height = useModelState("height");
const _width = useModelState("width");
const _model_value = useModelState("model_value");
const _color = useModelState("color");
const _density = useModelState("density");
const _theme = useModelState("theme");
const _sticky = useModelState("sticky");
const _mobile = useModelState("mobile");
const _mobile_breakpoint = useModelState("mobile_breakpoint");
const _items = useModelState("items");
const _loading = useModelState("loading");
const _hover = useModelState("hover");
const _value_comparator = useModelState("value_comparator");
const _item_value = useModelState("item_value");
const _item_selectable = useModelState("item_selectable");
const _return_object = useModelState("return_object");
const _show_select = useModelState("show_select");
const _select_strategy = useModelState("select_strategy");
const _initial_sort_order = useModelState("initial_sort_order");
const _sort_by = useModelState("sort_by");
const _multi_sort = useModelState("multi_sort");
const _must_sort = useModelState("must_sort");
const _custom_key_sort = useModelState("custom_key_sort");
const _expand_on_click = useModelState("expand_on_click");
const _show_expand = useModelState("show_expand");
const _expanded = useModelState("expanded");
const _group_by = useModelState("group_by");
const _filter_mode = useModelState("filter_mode");
const _no_filter = useModelState("no_filter");
const _custom_filter = useModelState("custom_filter");
const _custom_key_filter = useModelState("custom_key_filter");
const _filter_keys = useModelState("filter_keys");
const _header_props = useModelState("header_props");
const _cell_props = useModelState("cell_props");
const _disable_sort = useModelState("disable_sort");
const _headers = useModelState("headers");
const _loading_text = useModelState("loading_text");
const _hide_no_data = useModelState("hide_no_data");
const _no_data_text = useModelState("no_data_text");
const _collapse_icon = useModelState("collapse_icon");
const _expand_icon = useModelState("expand_icon");
const _group_collapse_icon = useModelState("group_collapse_icon");
const _group_expand_icon = useModelState("group_expand_icon");
const _row_props = useModelState("row_props");
const _hide_default_body = useModelState("hide_default_body");
const _hide_default_header = useModelState("hide_default_header");
const _fixed_header = useModelState("fixed_header");
const _sort_asc_icon = useModelState("sort_asc_icon");
const _sort_desc_icon = useModelState("sort_desc_icon");
const _fixed_footer = useModelState("fixed_footer");
const _striped = useModelState("striped");
const _item_height = useModelState("item_height");
const _item_key = useModelState("item_key");
</script>