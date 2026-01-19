Treeview
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Treeview
    documentation <https://v2.vuetifyjs.com/en/components/treeview/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Treeview <ipyvuetify.Treeview>` component is useful for displaying
large amounts of nested data.

.. api::

    - :py:class:`ipyvuetify.Treeview`
    - :py:class:`ipyvuetify.TreeviewNode`

Usage
-----

A basic example.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items)

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items)

Examples
--------

Activatable
^^^^^^^^^^^

Treeview nodes can be activated by clicking on them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, activatable=True)

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, activatable=True)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-treeview
                activatable
                :items="items"
            ></v-treeview>
            </template>

Color
^^^^^

You can control the text and background color of the active treeview node.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, activatable=True, color="warning")

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, activatable=True, color="warning")

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-treeview
                activatable
                color="warning"
                :items="items"
            ></v-treeview>
            </template>

Dense mode
^^^^^^^^^^

**Dense** mode provides more compact layout with decreased heights of the items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, activatable=True, dense=True)

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, activatable=True, dense=True)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-treeview
                dense
                :items="items"
            ></v-treeview>
            </template>

Hoverable
^^^^^^^^^

Treeview nodes can have a **hover** effect.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, activatable=True, dense=True, hoverable=True)

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, activatable=True, dense=True, hoverable=True)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-treeview
                hoverable
                :items="items"
            ></v-treeview>
            </template>

Item disabled
^^^^^^^^^^^^^

Setting ``item_disabled`` prop allows to control which node's property disables the
node when set to **true**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "locked": True, "children": [
                    {"id": 2, "name": "Calendar : app", "locked": True},
                    {"id": 3, "name": "Chrome : app", "locked": True},
                    {"id": 4, "name": "Webstorm : app", "locked": True},
                ]},
                {"id": 5, "name": "Documents :", "locked": False, "children": [
                    {"id": 6, "name": "vuetify :", "locked": False, "children": [
                        {"id": 7, "name": "src :", "locked": False, "children": [
                            {"id": 8, "name": "index : ts", "locked": False,},
                            {"id": 9, "name": "bootstrap : ts", "locked": False},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "locked": False, "children": [
                        {"id": 11, "name": "src :", "locked": False, "children": [
                            {"id": 12, "name": "v-btn : ts", "locked": True},
                            {"id": 13, "name": "v-card : ts", "locked": True},
                            {"id": 14, "name": "v-window : ts", "locked": False},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "locked": False, "children": [
                    {"id": 16, "name": "October : pdf", "locked": False},
                    {"id": 17, "name": "November : pdf", "locked": True},
                    {"id": 18, "name": "Tutorial : html", "locked": False},
                ]},
                {"id": 19, "name": "Videos :", "locked": False, "children": [
                    {"id": 20, "name": "Tutorials :", "locked": False, "children": [
                        {"id": 21, "name": "Basic layouts : mp4", "locked": False},
                        {"id": 22, "name": "Advanced techniques : mp4", "locked": False},
                        {"id": 23, "name": "All about app : dir", "locked": False},
                    ]},
                    {"id": 24, "name": "Intro : mov", "locked": False},
                    {"id": 25, "name": "Conference introduction : avi", "locked": False},
                ]},
            ]

            v.Treeview(items=items, dense=True, hoverable=True, item_disabled="locked")

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "locked": True, "children": [
                    {"id": 2, "name": "Calendar : app", "locked": True},
                    {"id": 3, "name": "Chrome : app", "locked": True},
                    {"id": 4, "name": "Webstorm : app", "locked": True},
                ]},
                {"id": 5, "name": "Documents :", "locked": False, "children": [
                    {"id": 6, "name": "vuetify :", "locked": False, "children": [
                        {"id": 7, "name": "src :", "locked": False, "children": [
                            {"id": 8, "name": "index : ts", "locked": False,},
                            {"id": 9, "name": "bootstrap : ts", "locked": False},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "locked": False, "children": [
                        {"id": 11, "name": "src :", "locked": False, "children": [
                            {"id": 12, "name": "v-btn : ts", "locked": True},
                            {"id": 13, "name": "v-card : ts", "locked": True},
                            {"id": 14, "name": "v-window : ts", "locked": False},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "locked": False, "children": [
                    {"id": 16, "name": "October : pdf", "locked": False},
                    {"id": 17, "name": "November : pdf", "locked": True},
                    {"id": 18, "name": "Tutorial : html", "locked": False},
                ]},
                {"id": 19, "name": "Videos :", "locked": False, "children": [
                    {"id": 20, "name": "Tutorials :", "locked": False, "children": [
                        {"id": 21, "name": "Basic layouts : mp4", "locked": False},
                        {"id": 22, "name": "Advanced techniques : mp4", "locked": False},
                        {"id": 23, "name": "All about app : dir", "locked": False},
                    ]},
                    {"id": 24, "name": "Intro : mov", "locked": False},
                    {"id": 25, "name": "Conference introduction : avi", "locked": False},
                ]},
            ]

            v.Treeview(items=items, dense=True, hoverable=True, item_disabled="locked")

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-treeview
                selectable
                item-disabled="locked"
                :items="items"
            ></v-treeview>
            </template>

Load children
^^^^^^^^^^^^^

You can dynamically load child data by supplying a Promise callback to the
``load_children`` prop. This callback will be executed the first time a user tries
to expand an item that has a children property that is an empty array.

.. todo::

    This example requires an actual asynchronous data source to demonstrate properly.
    and a talented contributor to set it up :fas:`heart`

Open all
^^^^^^^^

Treeview nodes can be pre-opened on page load.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, open_all=True)

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, open_all=True)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-treeview
                open-all
                :items="items"
            ></v-treeview>
            </template>

Rounded
^^^^^^^

You can make treeview nodes **rounded**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, rounded=True, hoverable=True, activatable=True)

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, rounded=True, hoverable=True, activatable=True)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-treeview
                rounded
                hoverable
                activatable
                :items="items"
            ></v-treeview>
            </template>

Selectable
^^^^^^^^^^

You can easily select treeview nodes and children.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, selectable=True)

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, selectable=True)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-treeview
                selectable
                :items="items"
            ></v-treeview>
            </template>

Selected color
^^^^^^^^^^^^^^

You can control the color of the selected node checkbox.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, selectable=True, selected_color="red")

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, selectable=True, selected_color="red")

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-treeview
                selectable
                selected-color="red"
                :items="items"
            ></v-treeview>
            </template>

Selection type
^^^^^^^^^^^^^^

Treeview now supports two different selection types. The default type is **leaf**,
which will only include leaf nodes in the v-model array, but will render parent
nodes as either partially or fully selected. The alternative mode is
**independent**, which allows one to select parent nodes, but each node is
independent of its parent and children.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            select_type = v.Select(
                items=['leaf', 'independent'],
                label='Selection type',
                v_model='independent'
            )

            select_viz = v.Combobox(v_model=[], label='Selected nodes', readonly=True, chips=True)

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            treeview = v.Treeview(v_model=[], items=items, selection_type="independent", selectable=True)

            jslink((select_type, 'v_model'), (treeview, 'selection_type'))
            jslink((treeview, 'v_model'), (select_viz, 'v_model'))

            v.Container(children=[select_type, select_viz, treeview])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            select_type = v.Select(
                items=['leaf', 'independent'],
                label='Selection type',
                v_model='independent'
            )

            select_viz = v.Combobox(v_model=[], label='Selected nodes', readonly=True, chips=True)

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            treeview = v.Treeview(v_model=[], items=items, selection_type="independent", selectable=True)

            jslink((select_type, 'v_model'), (treeview, 'selection_type'))
            jslink((treeview, 'v_model'), (select_viz, 'v_model'))

            v.Container(children=[select_type, select_viz, treeview])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container>
                <v-select
                v-model="selectionType"
                :items="['leaf', 'independent']"
                label="Selection type"
                ></v-select>
                <v-row>
                <v-col>
                    <v-treeview
                    v-model="selection"
                    :items="items"
                    :selection-type="selectionType"
                    selectable
                    return-object
                    open-all
                    ></v-treeview>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col
                    class="pa-6"
                    cols="6"
                >
                    <template v-if="!selection.length">
                    No nodes selected.
                    </template>
                    <template v-else>
                    <div
                        v-for="node in selection"
                        :key="node.id"
                    >
                        {{ node.name }}
                    </div>
                    </template>
                </v-col>
                </v-row>
            </v-container>
            </template>

Shaped
^^^^^^

**Shaped** treeview's have rounded borders on one side of the nodes.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, shaped=True, hoverable=True, activatable=True)

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = [
                {"id": 1, "name": "Applications :", "children": [
                    {"id": 2, "name": "Calendar : app"},
                    {"id": 3, "name": "Chrome : app"},
                    {"id": 4, "name": "Webstorm : app"},
                ]},
                {"id": 5, "name": "Documents :", "children": [
                    {"id": 6, "name": "vuetify :", "children": [
                        {"id": 7, "name": "src :", "children": [
                            {"id": 8, "name": "index : ts"},
                            {"id": 9, "name": "bootstrap : ts"},
                        ]},
                    ]},
                    {"id": 10, "name": "material2 :", "children": [
                        {"id": 11, "name": "src :", "children": [
                            {"id": 12, "name": "v-btn : ts"},
                            {"id": 13, "name": "v-card : ts"},
                            {"id": 14, "name": "v-window : ts"},
                        ]},
                    ]},
                ]},
                {"id": 15, "name": "Downloads :", "children": [
                    {"id": 16, "name": "October : pdf"},
                    {"id": 17, "name": "November : pdf"},
                    {"id": 18, "name": "Tutorial : html"},
                ]},
                {"id": 19, "name": "Videos :", "children": [
                    {"id": 20, "name": "Tutorials :", "children": [
                        {"id": 21, "name": "Basic layouts : mp4"},
                        {"id": 22, "name": "Advanced techniques : mp4"},
                        {"id": 23, "name": "All about app : dir"},
                    ]},
                    {"id": 24, "name": "Intro : mov"},
                    {"id": 25, "name": "Conference introduction : avi"},
                ]},
            ]

            v.Treeview(items=items, shaped=True, hoverable=True, activatable=True)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-treeview
                shaped
                hoverable
                activatable
                :items="items"
            ></v-treeview>
            </template>

Append and label
^^^^^^^^^^^^^^^^

Using the ``label``, and an ``append`` slots we are able to create an intuitive
file explorer.

.. todo::

    This example requires custom slots to demonstrate properly, and a talented
    contributor to set it up :fas:`heart`

Search and filter
^^^^^^^^^^^^^^^^^

Easily filter your treeview by using the ``search`` prop. You can easily apply your
custom filtering function if you need case-sensitive or fuzzy filtering by setting
the ``filter`` prop. This works similar to the
:py:class:`Autocomplete <ipyvuetify.Autocomplete>`__.

.. __: https://v2.vuetifyjs.com/en/components/autocompletes/

.. todo::

    This example requires custom slots to demonstrate properly, and a talented
    contributor to set it up :fas:`heart`

Selectable icons
^^^^^^^^^^^^^^^^

Customize the **on**, **off** and **indeterminate** icons for your selectable tree.
Combine with other advanced functionality like API loaded items.

.. todo::

    This example requires custom slots to demonstrate properly, and a talented
    contributor to set it up :fas:`heart`
