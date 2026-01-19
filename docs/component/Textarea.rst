Textarea
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Textarea
    documentation <https://v2.vuetifyjs.com/en/components/textareas/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Textarea <ipyvuetify.Textarea>` component is used for collecting
large amounts of textual data.

.. api::

    - :py:class:`ipyvuetify.Textarea`

Usage
-----

:py:class:`Textarea <ipyvuetify.Textarea>` in its simplest form is a multi-line
text-field, useful for larger amounts of text.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    text = "The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."

    v.Container(
        fluid=True,
        children=[
            v.Row(
                children=[
                    v.Col(
                        cols="12",
                        md="6",
                        children=[
                            v.Textarea(
                                name="input-7-1",
                                label="Default style",
                                value=text,
                                hint="Hint text",
                            )
                        ],
                    ),
                    v.Col(
                        cols="12",
                        md="6",
                        children=[
                            v.Textarea(
                                solo=True,
                                name="input-7-4",
                                label="Solo textarea",
                                value=text,
                            )
                        ],
                    ),
                    v.Col(
                        cols="12",
                        md="6",
                        children=[
                            v.Textarea(
                                filled=True,
                                name="input-7-4",
                                label="Filled textarea",
                                value=text,
                            )
                        ],
                    ),
                    v.Col(
                        cols="12",
                        md="6",
                        children=[
                            v.Textarea(
                                outlined=True,
                                name="input-7-4",
                                label="Outlined textarea",
                                value=text,
                            )
                        ],
                    ),
                ],
            )
        ],
    )

Examples
--------

Auto grow
^^^^^^^^^

When using the ``auto_grow`` prop, textarea's will automatically increase in size
when the contained text exceeds its size.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.Textarea(
                        name="input-7-1",
                        filled=True,
                        label="Label",
                        auto_grow=True,
                        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.",
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.Textarea(
                        name="input-7-1",
                        filled=True,
                        label="Label",
                        auto_grow=True,
                        value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.",
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-textarea
                name="input-7-1"
                filled
                label="Label"
                auto-grow
                value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
                ></v-textarea>
            </v-container>
            </template>

Background color
^^^^^^^^^^^^^^^^

The ``background_color`` and ``color`` props give you more control over styling
:py:class:`Textarea <ipyvuetify.Textarea>`'s.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            colors = [
                ("light-blue", "black"),
                ("grey lighten-2", "cyan"),
                ("amber lighten-4", "orange orange-darken-4"),
            ]

            v.Container(
                children=[
                    v.Textarea(
                        background_color=bg,
                        color=fg,
                        label="Label",
                    )
                    for bg, fg in colors
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            colors = [
                ("light-blue", "black"),
                ("grey lighten-2", "cyan"),
                ("amber lighten-4", "orange orange-darken-4"),
            ]

            v.Container(
                children=[
                    v.Textarea(
                        background_color=bg,
                        color=fg,
                        label="Label",
                    )
                    for bg, fg in colors
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container>
                <v-textarea
                background-color="light-blue"
                color="black"
                label="Label"
                ></v-textarea>

                <v-textarea
                background-color="grey lighten-2"
                color="cyan"
                label="Label"
                ></v-textarea>

                <v-textarea
                background-color="amber lighten-4"
                color="orange orange-darken-4"
                label="Label"
                ></v-textarea>
            </v-container>
            </template>

Clearable
^^^^^^^^^

You can clear the text from a :py:class:`Textarea <ipyvuetify.Textarea>` by using
the ``clearable`` prop, and customize the icon used with the ``clearable_icon``
prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.Textarea(
                        clearable=True,
                        clear_icon="mdi-close-circle",
                        label="Text",
                        value="This is clearable text.",
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.Textarea(
                        clearable=True,
                        clear_icon="mdi-close-circle",
                        label="Text",
                        value="This is clearable text.",
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Text"
                value="This is clearable text."
                ></v-textarea>
            </v-container>
            </template>

Counter
^^^^^^^

The ``counter`` prop informs the user of a character limit for the
:py:class:`Textarea <ipyvuetify.Textarea>`.

.. todo::

    We don't yet support validation rules, so the example below is missing that
    functionality.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.Textarea(
                        counter=True,
                        label="Text",
                        #rules=[lambda v: len(v) <= 50 or "Max 50 characters"],
                        value="This is some text.",
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.Textarea(
                        counter=True,
                        label="Text",
                        #rules=[lambda v: len(v) <= 50 or "Max 50 characters"],
                        value="This is some text.",
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-textarea
                counter
                label="Text"
                :rules="rules"
                :value="value"
                ></v-textarea>
            </v-container>
            </template>

Icons
^^^^^

The ``append_icon`` and ``prepend_icon`` props help add context to
:py:class:`Textarea <ipyvuetify.Textarea>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        class_="mx-2",
                                        label="prepend-icon",
                                        rows="1",
                                        prepend_icon="mdi-comment",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        append_icon="mdi-comment",
                                        class_="mx-2",
                                        label="append-icon",
                                        rows="1",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        prepend_inner_icon="mdi-comment",
                                        class_="mx-2",
                                        label="prepend-inner-icon",
                                        rows="1",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        append_outer_icon="mdi-comment",
                                        class_="mx-2",
                                        label="append-outer-icon",
                                        rows="1",
                                    )
                                ],
                            ),
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        class_="mx-2",
                                        label="prepend-icon",
                                        rows="1",
                                        prepend_icon="mdi-comment",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        append_icon="mdi-comment",
                                        class_="mx-2",
                                        label="append-icon",
                                        rows="1",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        prepend_inner_icon="mdi-comment",
                                        class_="mx-2",
                                        label="prepend-inner-icon",
                                        rows="1",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        append_outer_icon="mdi-comment",
                                        class_="mx-2",
                                        label="append-outer-icon",
                                        rows="1",
                                    )
                                ],
                            ),
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container>
                <v-row>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-textarea
                    class="mx-2"
                    label="prepend-icon"
                    rows="1"
                    prepend-icon="mdi-comment"
                    ></v-textarea>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-textarea
                    append-icon="mdi-comment"
                    class="mx-2"
                    label="append-icon"
                    rows="1"
                    ></v-textarea>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-textarea
                    prepend-inner-icon="mdi-comment"
                    class="mx-2"
                    label="prepend-inner-icon"
                    rows="1"
                    ></v-textarea>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-textarea
                    append-outer-icon="mdi-comment"
                    class="mx-2"
                    label="append-outer-icon"
                    rows="1"
                    ></v-textarea>
                </v-col>
                </v-row>
            </v-container>
            </template>

No resize
^^^^^^^^^

:py:class:`Textarea <ipyvuetify.Textarea>`'s have the option to remain the same
size regardless of their content's size, using the ``no_resize`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            v.Container(
                fluid=True,
                children=[
                    v.Textarea(
                        label="Text",
                        no_resize=True,
                        rows="1",
                        value=text,
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

            v.Container(
                fluid=True,
                children=[
                    v.Textarea(
                        label="Text",
                        no_resize=True,
                        rows="1",
                        value=text,
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-textarea
                label="Text"
                no-resize
                rows="1"
                :value="value"
                ></v-textarea>
            </v-container>
            </template>

Rows
^^^^

The ``rows`` prop allows you to define how many rows the textarea has, when
combined with the ``row_height`` prop you can further customize your rows by
defining their height.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        label="One row",
                                        auto_grow=True,
                                        outlined=True,
                                        rows="1",
                                        row_height="15",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        filled=True,
                                        auto_grow=True,
                                        label="Two rows",
                                        rows="2",
                                        row_height="20",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        label="Three rows",
                                        auto_grow=True,
                                        outlined=True,
                                        rows="3",
                                        row_height="25",
                                        shaped=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        filled=True,
                                        auto_grow=True,
                                        label="Four rows",
                                        rows="4",
                                        row_height="30",
                                        shaped=True,
                                    )
                                ],
                            ),
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                fluid=True,
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        label="One row",
                                        auto_grow=True,
                                        outlined=True,
                                        rows="1",
                                        row_height="15",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        filled=True,
                                        auto_grow=True,
                                        label="Two rows",
                                        rows="2",
                                        row_height="20",
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        label="Three rows",
                                        auto_grow=True,
                                        outlined=True,
                                        rows="3",
                                        row_height="25",
                                        shaped=True,
                                    )
                                ],
                            ),
                            v.Col(
                                cols="12",
                                sm="6",
                                children=[
                                    v.Textarea(
                                        filled=True,
                                        auto_grow=True,
                                        label="Four rows",
                                        rows="4",
                                        row_height="30",
                                        shaped=True,
                                    )
                                ],
                            ),
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container fluid>
                <v-row>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-textarea
                    label="One row"
                    auto-grow
                    outlined
                    rows="1"
                    row-height="15"
                    ></v-textarea>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-textarea
                    filled
                    auto-grow
                    label="Two rows"
                    rows="2"
                    row-height="20"
                    ></v-textarea>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-textarea
                    label="Three rows"
                    auto-grow
                    outlined
                    rows="3"
                    row-height="25"
                    shaped
                    ></v-textarea>
                </v-col>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-textarea
                    filled
                    auto-grow
                    label="Four rows"
                    rows="4"
                    row-height="30"
                    shaped
                    ></v-textarea>
                </v-col>
                </v-row>
            </v-container>
            </template>

Signup form
^^^^^^^^^^^

Utilizing alternative input styles, you can create amazing interfaces that are
easy to build and easy to use.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            bio = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts'

            v.Card(
                class_="mx-auto",
                width=600,
                children=[
                    v.SystemBar(
                        color="deep-purple darken-4",
                        dark=True,
                        children=[
                            v.Spacer(),
                            v.Icon(
                                small=True,
                                children=["mdi-square"],
                            ),
                            v.Icon(
                                small=True,
                                class_="ml-1",
                                children=["mdi-circle"],
                            ),
                            v.Icon(
                                small=True,
                                class_="ml-1",
                                children=["mdi-triangle"],
                            ),
                        ],
                    ),
                    v.Toolbar(
                        color="deep-purple accent-4",
                        cards=True,
                        dark=True,
                        flat=True,
                        children=[
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-arrow-left"])
                                ],
                            ),
                            v.CardTitle(
                                class_="text-h6 font-weight-regular",
                                children=["Sign up"],
                            ),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-magnify"])
                                ],
                            ),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-dots-vertical"])
                                ],
                            ),
                        ],
                    ),
                    v.Form(
                        ref="form",
                        class_="pa-4 pt-6",
                        children=[
                            v.TextField(
                                model_value="",
                                rules=[
                                    # rules would go here
                                ],
                                filled=True,
                                color="deep-purple",
                                counter="6",
                                label="Password",
                                style_="min-height: 96px",
                                type_="password",
                            ),
                            v.TextField(
                                model_value="",
                                filled=True,
                                color="deep-purple",
                                label="Phone number",
                            ),
                            v.TextField(
                                model_value="",
                                rules=[
                                    # rules would go here
                                ],
                                filled=True,
                                color="deep-purple",
                                label="Email address",
                                type_="email",
                            ),
                            v.Textarea(
                                model_value=bio,
                                auto_grow=True,
                                filled=True,
                                color="deep-purple",
                                label="Bio",
                                rows="1",
                            ),
                            v.Checkbox(
                                model_value=False,
                                rules=[
                                    # rules would go here
                                ],
                                color="deep-purple",
                                v_slots=[{
                                    "name": "label",
                                    "children": [
                                        "I agree to the ",
                                        v.Html(tag="a", attributes={"href": "#"}, children=["Terms of Service"]),
                                        " and ",
                                        v.Html(tag="a", attributes={"href": "#"}, children=["Privacy Policy"]),
                                        "*",
                                    ],
                                }],
                            ),
                        ],
                    ),
                    v.Divider(),
                    v.CardActions(
                        children=[
                            v.Btn(
                                text=True,
                                children=["Clear"],
                                # on_click would go here
                            ),
                            v.Spacer(),
                            v.Btn(
                                disabled=True,
                                loading=False,
                                class_="white--text",
                                color="deep-purple accent-4",
                                depressed=True,
                                children=["Submit"],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            bio = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts'

            v.Card(
                class_="mx-auto",
                width=600,
                children=[
                    v.SystemBar(
                        color="deep-purple darken-4",
                        dark=True,
                        children=[
                            v.Spacer(),
                            v.Icon(
                                small=True,
                                children=["mdi-square"],
                            ),
                            v.Icon(
                                small=True,
                                class_="ml-1",
                                children=["mdi-circle"],
                            ),
                            v.Icon(
                                small=True,
                                class_="ml-1",
                                children=["mdi-triangle"],
                            ),
                        ],
                    ),
                    v.Toolbar(
                        color="deep-purple accent-4",
                        cards=True,
                        dark=True,
                        flat=True,
                        children=[
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-arrow-left"])
                                ],
                            ),
                            v.CardTitle(
                                class_="text-h6 font-weight-regular",
                                children=["Sign up"],
                            ),
                            v.Spacer(),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-magnify"])
                                ],
                            ),
                            v.Btn(
                                icon=True,
                                children=[
                                    v.Icon(children=["mdi-dots-vertical"])
                                ],
                            ),
                        ],
                    ),
                    v.Form(
                        ref="form",
                        class_="pa-4 pt-6",
                        children=[
                            v.TextField(
                                model_value="",
                                rules=[
                                    # rules would go here
                                ],
                                filled=True,
                                color="deep-purple",
                                counter="6",
                                label="Password",
                                style_="min-height: 96px",
                                type_="password",
                            ),
                            v.TextField(
                                model_value="",
                                filled=True,
                                color="deep-purple",
                                label="Phone number",
                            ),
                            v.TextField(
                                model_value="",
                                rules=[
                                    # rules would go here
                                ],
                                filled=True,
                                color="deep-purple",
                                label="Email address",
                                type_="email",
                            ),
                            v.Textarea(
                                model_value=bio,
                                auto_grow=True,
                                filled=True,
                                color="deep-purple",
                                label="Bio",
                                rows="1",
                            ),
                            v.Checkbox(
                                model_value=False,
                                rules=[
                                    # rules would go here
                                ],
                                color="deep-purple",
                                v_slots=[{
                                    "name": "label",
                                    "children": [
                                        "I agree to the ",
                                        v.Html(tag="a", attributes={"href": "#"}, children=["Terms of Service"]),
                                        " and ",
                                        v.Html(tag="a", attributes={"href": "#"}, children=["Privacy Policy"]),
                                        "*",
                                    ],
                                }],
                            ),
                        ],
                    ),
                    v.Divider(),
                    v.CardActions(
                        children=[
                            v.Btn(
                                text=True,
                                children=["Clear"],
                                # on_click would go here
                            ),
                            v.Spacer(),
                            v.Btn(
                                disabled=True,
                                loading=False,
                                class_="white--text",
                                color="deep-purple accent-4",
                                depressed=True,
                                children=["Submit"],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                style="max-width: 500px;"
            >
                <v-system-bar
                color="deep-purple darken-4"
                dark
                >
                <v-spacer></v-spacer>
                <v-icon small>
                    mdi-square
                </v-icon>
                <v-icon
                    class="ml-1"
                    small
                >
                    mdi-circle
                </v-icon>
                <v-icon
                    class="ml-1"
                    small
                >
                    mdi-triangle
                </v-icon>
                </v-system-bar>
                <v-toolbar
                color="deep-purple accent-4"
                cards
                dark
                flat
                >
                <v-btn icon>
                    <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
                <v-card-title class="text-h6 font-weight-regular">
                    Sign up
                </v-card-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
                </v-toolbar>
                <v-form
                ref="form"
                v-model="form"
                class="pa-4 pt-6"
                >
                <v-text-field
                    v-model="password"
                    :rules="[rules.password, rules.length(6)]"
                    filled
                    color="deep-purple"
                    counter="6"
                    label="Password"
                    style="min-height: 96px"
                    type="password"
                ></v-text-field>
                <v-text-field
                    v-model="phone"
                    filled
                    color="deep-purple"
                    label="Phone number"
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    :rules="[rules.email]"
                    filled
                    color="deep-purple"
                    label="Email address"
                    type="email"
                ></v-text-field>
                <v-textarea
                    v-model="bio"
                    auto-grow
                    filled
                    color="deep-purple"
                    label="Bio"
                    rows="1"
                ></v-textarea>
                <v-checkbox
                    v-model="agreement"
                    :rules="[rules.required]"
                    color="deep-purple"
                >
                    <template v-slot:label>
                    I agree to the&nbsp;
                    <a
                        href="#"
                        @click.stop.prevent="dialog = true"
                    >Terms of Service</a>
                    &nbsp;and&nbsp;
                    <a
                        href="#"
                        @click.stop.prevent="dialog = true"
                    >Privacy Policy</a>*
                    </template>
                </v-checkbox>
                </v-form>
                <v-divider></v-divider>
                <v-card-actions>
                <v-btn
                    text
                    @click="$refs.form.reset()"
                >
                    Clear
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="!form"
                    :loading="isLoading"
                    class="white--text"
                    color="deep-purple accent-4"
                    depressed
                >
                    Submit
                </v-btn>
                </v-card-actions>
                <v-dialog
                v-model="dialog"
                absolute
                max-width="400"
                persistent
                >
                <v-card>
                    <v-card-title class="text-h5 grey lighten-3">
                    Legal
                    </v-card-title>
                    <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                    <v-btn
                        text
                        @click="agreement = false, dialog = false"
                    >
                        No
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        class="white--text"
                        color="deep-purple accent-4"
                        @click="agreement = true, dialog = false"
                    >
                        Yes
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-dialog>
            </v-card>
            </template>
