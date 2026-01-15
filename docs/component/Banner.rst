Banner
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/banners/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Banner <ipyvuetify.Banner>` component is used as middle-interruptive message to user
with 1-2 actions. It comes in 2 variations single-line and multi-line (implicit). These can have icons
which you can use with your message and actions.

.. api::

    :py:class:`ipyvuetify.Banner`

Usage
-----

Banners can have 1-2 lines of text, actions and icon.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Container(
        style_='width: 100%',
        children=[
            v.Banner(
                children=['A banner for use on desktop / mobile']
            )
        ]
    )

Single line
-----------

Single-line :py:class:`Banner <ipyvuetify.Banner>` is used for small amount of information and is
recommended for desktop only implementations. You can optionally enable the ``sticky`` prop to ensure
the content is pinned to the screen (note: does not work in IE11).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            switch = v.Switch(
                v_model=False,
                label='Sticky Banner',
                hide_details=True
            )

            banner = v.Banner(
                single_line=True,
                sticky=False,
                v_slots=[{
                    'name': 'actions',
                    'children': v.Btn(
                        text=True,
                        color='deep-purple accent-4',
                        children=['Get Online']
                    )
                }],
                children=["We can't save your edits while you are in offline mode."]
            )

            def update_sticky(widget, event, data):
                banner.sticky = data

            switch.on_event('change', update_sticky)

            v.Card(children=[
                v.SystemBar(),
                v.Toolbar(
                    flat=True,
                    children=[
                        v.ToolbarTitle(children=['My Document']),
                        v.Spacer(),
                        v.Html(tag='div', children=[switch])
                    ]
                ),
                banner,
                v.CardText(
                    class_='grey lighten-4',
                    children=[
                        v.Sheet(
                            max_width=800,
                            height=500,
                            class_='mx-auto'
                        )
                    ]
                )
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            switch = v.Switch(
                v_model=False,
                label='Sticky Banner',
                hide_details=True
            )

            banner = v.Banner(
                single_line=True,
                sticky=False,
                v_slots=[{
                    'name': 'actions',
                    'children': v.Btn(
                        text=True,
                        color='deep-purple accent-4',
                        children=['Get Online']
                    )
                }],
                children=["We can't save your edits while you are in offline mode."]
            )

            def update_sticky(widget, event, data):
                banner.sticky = data

            switch.on_event('change', update_sticky)

            v.Card(children=[
                v.SystemBar(),
                v.Toolbar(
                    flat=True,
                    children=[
                        v.ToolbarTitle(children=['My Document']),
                        v.Spacer(),
                        v.Html(tag='div', children=[switch])
                    ]
                ),
                banner,
                v.CardText(
                    class_='grey lighten-4',
                    children=[
                        v.Sheet(
                            max_width=800,
                            height=500,
                            class_='mx-auto'
                        )
                    ]
                )
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-card>
                    <v-system-bar></v-system-bar>
                    <v-toolbar flat>
                        <v-toolbar-title>My Document</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <div>
                            <v-switch
                                v-model="sticky"
                                label="Sticky Banner"
                                hide-details
                            ></v-switch>
                        </div>
                    </v-toolbar>
                    <v-banner
                        single-line
                        :sticky="sticky"
                    >
                        We can't save your edits while you are in offline mode.
                        <template v-slot:actions>
                            <v-btn
                                text
                                color="deep-purple accent-4"
                            >
                                Get Online
                            </v-btn>
                        </template>
                    </v-banner>
                    <v-card-text class="grey lighten-4">
                        <v-sheet
                            max-width="800"
                            height="300"
                            class="mx-auto"
                        ></v-sheet>
                    </v-card-text>
                </v-card>
            </template>

            <script>
                export default {
                    data: () => ({
                    sticky: false,
                    }),
                }
            </script>

Icon click event
----------------

:py:class:`Banner <ipyvuetify.Banner>` emits ``click:icon`` event on icon click, even with custom icon slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            def on_icon_click(widget, event, data):
                print('Icon clicked!')

            banner = v.Banner(
                single_line=True,
                v_slots=[{
                    'name': 'icon',
                    'children': v.Icon(
                        color='warning',
                        size=36,
                        children=['mdi-wifi-strength-alert-outline']
                    )
                }, {
                    'name': 'actions',
                    'children': v.Btn(
                        color='primary',
                        text=True,
                        children=['Connection Settings']
                    )
                }],
                children=['Unable to verify your Internet connection']
            )

            banner.on_event('click:icon', on_icon_click)

            v.Container(children=[banner])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            def on_icon_click(widget, event, data):
                print('Icon clicked!')

            banner = v.Banner(
                single_line=True,
                v_slots=[{
                    'name': 'icon',
                    'children': v.Icon(
                        color='warning',
                        size=36,
                        children=['mdi-wifi-strength-alert-outline']
                    )
                }, {
                    'name': 'actions',
                    'children': v.Btn(
                        color='primary',
                        text=True,
                        children=['Connection Settings']
                    )
                }],
                children=['Unable to verify your Internet connection']
            )

            banner.on_event('click:icon', on_icon_click)

            v.Container(children=[banner])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-banner
                    single-line
                    @click:icon="alert"
                >
                    <v-icon
                        slot="icon"
                        color="warning"
                        size="36"
                    >
                        mdi-wifi-strength-alert-outline
                    </v-icon>
                    Unable to verify your Internet connection
                    <template v-slot:actions>
                        <v-btn
                            color="primary"
                            text
                        >
                            Connection Settings
                        </v-btn>
                    </template>
                </v-banner>
            </template>

            <script>
                export default {
                    methods: {
                        alert () {
                            alert('Hello, World!')
                        },
                    },
                }
            </script>

Actions slot
------------

The ``actions`` slot has ``dismiss`` function in its scope, you can use it to easily dismiss banner.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            checkbox = v.Checkbox(
                v_model=True,
                label='Visible'
            )

            def on_dismiss(*args):
                banner.v_model = False
                checkbox.v_model = False

            def on_checkbox_change(widget, event, data):
                banner.v_model = data

            checkbox.on_event('change', on_checkbox_change)

            banner = v.Banner(
                v_model=True,
                single_line=True,
                transition='slide-y-transition',
                v_slots=[{
                    'name': 'actions',
                    'children': [
                        v.Btn(
                            text=True,
                            color='primary',
                            children=['Dismiss'],
                            on_click=on_dismiss
                        ),
                        v.Btn(
                            text=True,
                            color='primary',
                            children=['Retry']
                        )
                    ]
                }],
                children=['No Internet connection']
            )

            v.Container(children=[checkbox, banner])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            visible_state = v.use_state(True)

            checkbox = v.Checkbox(
                v_model=True,
                label='Visible'
            )

            def on_dismiss(*args):
                banner.v_model = False
                checkbox.v_model = False

            def on_checkbox_change(widget, event, data):
                banner.v_model = data

            checkbox.on_event('change', on_checkbox_change)

            banner = v.Banner(
                v_model=True,
                single_line=True,
                transition='slide-y-transition',
                v_slots=[{
                    'name': 'actions',
                    'children': [
                        v.Btn(
                            text=True,
                            color='primary',
                            children=['Dismiss'],
                            on_click=on_dismiss
                        ),
                        v.Btn(
                            text=True,
                            color='primary',
                            children=['Retry']
                        )
                    ]
                }],
                children=['No Internet connection']
            )

            v.Container(children=[checkbox, banner])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-checkbox
                        v-model="v0"
                        label="Visible"
                    ></v-checkbox>
                    <v-banner
                        v-model="v0"
                        single-line
                        transition="slide-y-transition"
                    >
                        No Internet connection
                        <template v-slot:actions="{ dismiss }">
                            <v-btn
                                text
                                color="primary"
                                @click="dismiss"
                            >
                                Dismiss
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                            >
                                Retry
                            </v-btn>
                        </template>
                    </v-banner>
                </div>
            </template>

            <script>
                export default {
                    data: () => ({
                        v0: true,
                    }),
                }
            </script>

Icon slot
---------

The icon slot allows you to explicitly control the content and functionality within it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Banner(
                two_line=True,
                v_slots=[{
                    'name': 'icon',
                    'children': v.Avatar(
                        color='deep-purple accent-4',
                        size=40,
                        children=[
                            v.Icon(
                                icon='mdi-lock',
                                color='white',
                                children=['mdi-lock']
                            )
                        ]
                    )
                }, {
                    'name': 'actions',
                    'children': [
                        v.Btn(
                            text=True,
                            color='deep-purple accent-4',
                            children=['Action']
                        ),
                        v.Btn(
                            text=True,
                            color='deep-purple accent-4',
                            children=['Action']
                        )
                    ]
                }],
                children=[
                    'Three line text string example with two actions. One to two lines is preferable. '
                    'Three lines should be considered the maximum string length on desktop in order to '
                    'keep messages short and actionable.'
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Banner(
                two_line=True,
                v_slots=[{
                    'name': 'icon',
                    'children': v.Avatar(
                        color='deep-purple accent-4',
                        size=40,
                        children=[
                            v.Icon(
                                icon='mdi-lock',
                                color='white',
                                children=['mdi-lock']
                            )
                        ]
                    )
                }, {
                    'name': 'actions',
                    'children': [
                        v.Btn(
                            text=True,
                            color='deep-purple accent-4',
                            children=['Action']
                        ),
                        v.Btn(
                            text=True,
                            color='deep-purple accent-4',
                            children=['Action']
                        )
                    ]
                }],
                children=['Three line text string example with two actions....']
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-banner two-line>
                    <v-avatar
                        slot="icon"
                        color="deep-purple accent-4"
                        size="40"
                    >
                        <v-icon
                            icon="mdi-lock"
                            color="white"
                        >
                            mdi-lock
                        </v-icon>
                    </v-avatar>

                        Three line text string example with two actions. One to two lines is preferable. Three lines should be considered the maximum string length on desktop in order to keep messages short and actionable.

                    <template v-slot:actions>
                        <v-btn
                            text
                            color="deep-purple accent-4"
                        >
                            Action
                        </v-btn>
                        <v-btn
                            text
                            color="deep-purple accent-4"
                        >
                            Action
                        </v-btn>
                    </template>
                </v-banner>
            </template>
Two line
--------

Two-line :py:class:`Banner <ipyvuetify.Banner>` can store larger amount of data, use it for big messages.
This is recommended for mobile implementations.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Banner(
                v_slots=[{
                    'name': 'actions',
                    'children': [
                        v.Btn(
                            text=True,
                            color='primary',
                            children=['Dismiss']
                        ),
                        v.Btn(
                            text=True,
                            color='primary',
                            children=['Retry']
                        )
                    ]
                }],
                children=[
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus nec sem '
                    'id malesuada. Curabitur lacinia sem et turpis euismod, eget elementum ex pretium.'
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Banner(
                v_slots=[{
                    'name': 'actions',
                    'children': [
                        v.Btn(
                            text=True,
                            color='primary',
                            children=['Dismiss']
                        ),
                        v.Btn(
                            text=True,
                            color='primary',
                            children=['Retry']
                        )
                    ]
                }],
                children=['Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-banner>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus nec sem id malesuada. Curabitur lacinia sem et turpis euismod, eget elementum ex pretium.
                    <template v-slot:actions>
                        <v-btn
                            text
                            color="primary"
                        >
                            Dismiss
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                        >
                            Retry
                        </v-btn>
                    </template>
                </v-banner>
            </template>
