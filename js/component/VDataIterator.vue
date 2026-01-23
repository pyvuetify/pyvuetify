<template>
  <v-data-iterator
    :search="_search"
    :tag="_tag"
    :modelValue="_model_value"
    :transition="_transition"
    :items="_items"
    :loading="_loading"
    :valueComparator="_value_comparator"
    :itemValue="_item_value"
    :itemSelectable="_item_selectable"
    :returnObject="_return_object"
    :showSelect="_show_select"
    :selectStrategy="_select_strategy"
    :page="_page"
    :initialSortOrder="_initial_sort_order"
    :sortBy="_sort_by"
    :multiSort="_multi_sort"
    :mustSort="_must_sort"
    :customKeySort="_custom_key_sort"
    :itemsPerPage="_items_per_page"
    :expandOnClick="_expand_on_click"
    :showExpand="_show_expand"
    :expanded="_expanded"
    :groupBy="_group_by"
    :filterMode="_filter_mode"
    :noFilter="_no_filter"
    :customFilter="_custom_filter"
    :customKeyFilter="_custom_key_filter"
    :filterKeys="_filter_keys"
  >
    {{ children }}
  </v-data-iterator>
</template>

<script setup>
import { useModelState } from "@pyvuetify/vuetify";

// Reactive state synced with Python
const children = useModelState("children");
const _search = useModelState("search");
const _tag = useModelState("tag");
const _model_value = useModelState("model_value");
const _transition = useModelState("transition");
const _items = useModelState("items");
const _loading = useModelState("loading");
const _value_comparator = useModelState("value_comparator");
const _item_value = useModelState("item_value");
const _item_selectable = useModelState("item_selectable");
const _return_object = useModelState("return_object");
const _show_select = useModelState("show_select");
const _select_strategy = useModelState("select_strategy");
const _page = useModelState("page");
const _initial_sort_order = useModelState("initial_sort_order");
const _sort_by = useModelState("sort_by");
const _multi_sort = useModelState("multi_sort");
const _must_sort = useModelState("must_sort");
const _custom_key_sort = useModelState("custom_key_sort");
const _items_per_page = useModelState("items_per_page");
const _expand_on_click = useModelState("expand_on_click");
const _show_expand = useModelState("show_expand");
const _expanded = useModelState("expanded");
const _group_by = useModelState("group_by");
const _filter_mode = useModelState("filter_mode");
const _no_filter = useModelState("no_filter");
const _custom_filter = useModelState("custom_filter");
const _custom_key_filter = useModelState("custom_key_filter");
const _filter_keys = useModelState("filter_keys");
</script>