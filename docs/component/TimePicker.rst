TimePicker
==========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Time Pickers
    documentation <https://v2.vuetifyjs.com/en/components/time-pickers/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`TimePicker <ipyvuetify.TimePicker>` is a stand-alone component that
can be utilized in many existing Vuetify components. It offers the user a visual
representation for selecting the time.

.. api::

    - :py:class:`ipyvuetify.TimePicker`
    - :py:class:`ipyvuetify.TimePickerTitle`
    - :py:class:`ipyvuetify.TimePickerClock`

Usage
-----

Time pickers have the light theme enabled by default.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.TimePicker(
        full_width=False,
        landscape=True,
        scrollable=True,
    )

Examples
--------

Allowed times
^^^^^^^^^^^^^

You can specify allowed times using arrays, objects, and functions. You can also
specify time step/precision/interval - e.g. **10 minutes**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around",
                children=[
                    v.TimePicker(
                        v_model="11:15",
                        allowed_hours=[h for h in range(24) if h % 2 == 1],
                        allowed_minutes=[m for m in range(60) if 10 <= m <= 50],
                        format="24hr",
                        scrollable=True,
                        min="9:30",
                        max="22:15",
                    ),
                    v.TimePicker(
                        v_model="10:10",
                        allowed_minutes=[m for m in range(60) if m % 10 == 0],
                        format="24hr",
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around",
                children=[
                    v.TimePicker(
                        v_model="11:15",
                        allowed_hours=[h for h in range(24) if h % 2 == 1],
                        allowed_minutes=[m for m in range(60) if 10 <= m <= 50],
                        format="24hr",
                        scrollable=True,
                        min="9:30",
                        max="22:15",
                    ),
                    v.TimePicker(
                        v_model="10:10",
                        allowed_minutes=[m for m in range(60) if m % 10 == 0],
                        format="24hr",
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-time-picker
                v-model="time"
                :allowed-hours="allowedHours"
                :allowed-minutes="allowedMinutes"
                class="mt-4"
                format="24hr"
                scrollable
                min="9:30"
                max="22:15"
                ></v-time-picker>
                <v-time-picker
                v-model="timeStep"
                :allowed-minutes="allowedStep"
                class="mt-4"
                format="24hr"
                ></v-time-picker>
            </v-row>
            </template>

AMPM in title
^^^^^^^^^^^^^

You can move AM/PM switch to picker's title.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        ampm_in_title=True,
                    ),
                    v.TimePicker(
                        landscape=True,
                        ampm_in_title=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        ampm_in_title=True,
                    ),
                    v.TimePicker(
                        landscape=True,
                        ampm_in_title=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row

                justify="space-around"
                align="center"
            >
                <v-time-picker
                v-model="picker"
                ampm-in-title
                ></v-time-picker>
                <v-time-picker
                v-model="picker"
                :landscape="$vuetify.breakpoint.smAndUp"
                ampm-in-title
                ></v-time-picker>
            </v-row>
            </template>

Colors
^^^^^^

Time picker colors can be set using the ``color`` and ``header_color`` props. If
``header_color`` prop is not provided header will use the ``color`` prop value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            time_picker = v.TimePicker(
                v_model="10:10",
                color="green lighten-1",
                header_color="primary",
            )
            time_picker2 = v.TimePicker(
                v_model="10:10",
                color="green lighten-1",
            )

            jslink((time_picker, 'v_model'), (time_picker2, 'v_model'))

            v.Container(
                class_="d-flex flex-row justify-space-around",
                children=[time_picker, time_picker2],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            time_picker = v.TimePicker(
                v_model="10:10",
                color="green lighten-1",
                header_color="primary",
            )
            time_picker2 = v.TimePicker(
                v_model="10:10",
                color="green lighten-1",
            )

            jslink((time_picker, 'v_model'), (time_picker2, 'v_model'))

            v.Container(
                class_="d-flex flex-row justify-space-around",
                children=[time_picker, time_picker2],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-time-picker
                v-model="e4"
                color="green lighten-1"
                ></v-time-picker>
                <v-time-picker
                v-model="e4"
                color="green lighten-1"
                header-color="primary"
                ></v-time-picker>
            </v-row>
            </template>

Disabled
^^^^^^^^

You can't interact with **disabled** picker.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        v_model="10:10",
                        disabled=True,
                    ),
                    v.TimePicker(
                        v_model="10:10",
                        landscape=True,
                        disabled=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        v_model="10:10",
                        disabled=True,
                    ),
                    v.TimePicker(
                        v_model="10:10",
                        landscape=True,
                        disabled=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row
                justify="space-around"
                align="center"
            >
                <v-time-picker
                v-model="picker"
                disabled
                ></v-time-picker>
                <v-time-picker
                v-model="picker"
                :landscape="$vuetify.breakpoint.smAndUp"
                disabled
                ></v-time-picker>
            </v-row>
            </template>

Format
^^^^^^

A time picker can be switched to **24hr** format. Note that the ``format`` prop
defines only the way the picker is displayed, picker's value (model) is always in
**24hr** format.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-center",
                children=[
                    v.TimePicker(
                        v_model="13:30",
                        format="24hr",
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-center",
                children=[
                    v.TimePicker(
                        v_model="13:30",
                        format="24hr",
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-col>
                <v-time-picker
                    v-model="e7"
                    format="24hr"
                ></v-time-picker>
                </v-col>
            </v-row>
            </template>

No title
^^^^^^^^

You can remove picker's title.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        no_title=True,
                    ),
                    v.TimePicker(
                        landscape=True,
                        no_title=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        no_title=True,
                    ),
                    v.TimePicker(
                        landscape=True,
                        no_title=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row
                justify="space-around"
            >
                <v-time-picker
                v-model="picker"
                no-title
                ></v-time-picker>
                <v-time-picker
                v-model="picker"
                :landscape="$vuetify.breakpoint.smAndUp"
                no-title
                ></v-time-picker>
            </v-row>
            </template>

Range
^^^^^

This is an example of joining pickers together using ``min`` and ``max`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            start_picker = v.TimePicker(
                v_model="10:00",
                max="12:00",
            )
            end_picker = v.TimePicker(
                v_model="11:00",
                min="10:00",
            )

            jslink((start_picker, 'v_model'), (end_picker, 'min'))
            jslink((end_picker, 'v_model'), (start_picker, 'max'))

            v.Container(
                class_="d-flex flex-row justify-space-around",
                children=[start_picker, end_picker],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            start_picker = v.TimePicker(
                v_model="10:00",
                max="12:00",
            )
            end_picker = v.TimePicker(
                v_model="11:00",
                min="10:00",
            )

            jslink((start_picker, 'v_model'), (end_picker, 'min'))
            jslink((end_picker, 'v_model'), (start_picker, 'max'))

            v.Container(
                class_="d-flex flex-row justify-space-around",
                children=[start_picker, end_picker],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <h1>Plan your event:</h1>
                <v-row
                justify="space-around"
                align="center"
                >
                <v-col style="width: 350px; flex: 0 1 auto;">
                    <h2>Start:</h2>
                    <v-time-picker
                    v-model="start"
                    :max="end"
                    ></v-time-picker>
                </v-col>
                <v-col style="width: 350px; flex: 0 1 auto;">
                    <h2>End:</h2>
                    <v-time-picker
                    v-model="end"
                    :min="start"
                    ></v-time-picker>
                </v-col>
                </v-row>
            </div>
            </template>

Read-only
^^^^^^^^^

**Read-only** picker behaves same as disabled one, but looks like default one.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        v_model="10:10",
                        readonly=True,
                    ),
                    v.TimePicker(
                        v_model="10:10",
                        landscape=True,
                        readonly=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        v_model="10:10",
                        readonly=True,
                    ),
                    v.TimePicker(
                        v_model="10:10",
                        landscape=True,
                        readonly=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row
                justify="space-around"
                align="center"
            >
                <v-time-picker
                v-model="picker"
                readonly
                ></v-time-picker>
                <v-time-picker
                v-model="picker"
                :landscape="$vuetify.breakpoint.smAndUp"
                readonly
                ></v-time-picker>
            </v-row>
            </template>

Scrollable
^^^^^^^^^^

You can edit time picker's value using mouse wheel.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        scrollable=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        scrollable=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row
                justify="space-around"
                align="center"
            >
                <v-time-picker
                v-model="picker"
                scrollable
                ></v-time-picker>
            </v-row>
            </template>

Use seconds
^^^^^^^^^^^

Time picker can have seconds input.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        use_seconds=True,
                    ),
                    v.TimePicker(
                        landscape=True,
                        use_seconds=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        use_seconds=True,
                    ),
                    v.TimePicker(
                        landscape=True,
                        use_seconds=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row
                justify="space-around"
                align="center"
            >
                <v-time-picker
                v-model="picker"
                use-seconds
                ></v-time-picker>
                <v-time-picker
                v-model="picker"
                :landscape="$vuetify.breakpoint.smAndUp"
                use-seconds
                ></v-time-picker>
            </v-row>
            </template>

Width
^^^^^

You can specify the picker's width or make it full width.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        width=200,
                        class_="mr-4",
                    ),
                    v.TimePicker(
                        landscape=True,
                        full_width=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="d-flex flex-row justify-space-around align-center",
                children=[
                    v.TimePicker(
                        width=200,
                        class_="mr-4",
                    ),
                    v.TimePicker(
                        landscape=True,
                        full_width=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row align="center">
                <v-time-picker
                v-model="time"
                type="month"
                width="290"
                class="ml-4"
                ></v-time-picker>
                <v-col class="pa-0 mx-4 mt-4 mt-sm-0">
                <v-time-picker
                    v-model="time"
                    :landscape="$vuetify.breakpoint.mdAndUp"
                    full-width
                    type="month"
                ></v-time-picker>
                </v-col>
            </v-row>
            </template>

Dialog and menu
^^^^^^^^^^^^^^^

Due to the flexibility of pickers, you can really dial in the experience exactly
how you want it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            input_menu = v.TextField(
                v_model="12:00",
                label="Picker in menu",
                prepend_icon="mdi-clock-time-four-outline",
                readonly=True,
                v_bind="props.attrs",
                v_on="props.on",
            )

            tp_menu = v.TimePicker(
                v_model="12:00",
                full_width=True,
            )

            jslink((input_menu, 'v_model'), (tp_menu, 'v_model'))

            menu = v.Menu(
                v_model=False,
                close_on_content_click=False,
                nudge_right=40,
                transition="scale-transition",
                offset_y=True,
                max_width="290px",
                min_width="290px",
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': [input_menu],
                }],
                children=[tp_menu],
            )

            input_dialog = v.TextField(
                v_model="12:00",
                label="Picker in dialog",
                prepend_icon="mdi-clock-time-four-outline",
                readonly=True,
                v_bind="props.attrs",
                v_on="props.on",
            )

            tp_dialog = v.TimePicker(
                close_on_content_click=False,
                v_model="12:00",
                full_width=True,
            )

            jslink((input_dialog, 'v_model'), (tp_dialog, 'v_model'))

            dialog = v.Dialog(
                v_model=False,
                persistent=False,
                width="290px",
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': [input_dialog],
                }],
                children=[tp_dialog],
            )

            v.Container(
                class_="d-flex flex-row justify-space-around",
                children=[menu, dialog],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            input_menu = v.TextField(
                v_model="12:00",
                label="Picker in menu",
                prepend_icon="mdi-clock-time-four-outline",
                readonly=True,
                v_bind="props.attrs",
                v_on="props.on",
            )

            tp_menu = v.TimePicker(
                v_model="12:00",
                full_width=True,
            )

            jslink((input_menu, 'v_model'), (tp_menu, 'v_model'))

            menu = v.Menu(
                v_model=False,
                close_on_content_click=False,
                nudge_right=40,
                transition="scale-transition",
                offset_y=True,
                max_width="290px",
                min_width="290px",
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': [input_menu],
                }],
                children=[tp_menu],
            )

            input_dialog = v.TextField(
                v_model="12:00",
                label="Picker in dialog",
                prepend_icon="mdi-clock-time-four-outline",
                readonly=True,
                v_bind="props.attrs",
                v_on="props.on",
            )

            tp_dialog = v.TimePicker(
                close_on_content_click=False,
                v_model="12:00",
                full_width=True,
            )

            jslink((input_dialog, 'v_model'), (tp_dialog, 'v_model'))

            dialog = v.Dialog(
                v_model=False,
                persistent=False,
                width="290px",
                v_slots=[{
                    'name': 'activator',
                    'variable': 'props',
                    'children': [input_dialog],
                }],
                children=[tp_dialog],
            )

            v.Container(
                class_="d-flex flex-row justify-space-around",
                children=[menu, dialog],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row>
                <v-col
                cols="11"
                sm="5"
                >
                <v-menu
                    ref="menu"
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    :return-value.sync="time"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="time"
                        label="Picker in menu"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-time-picker
                    v-if="menu2"
                    v-model="time"
                    full-width
                    @click:minute="$refs.menu.save(time)"
                    ></v-time-picker>
                </v-menu>
                </v-col>
                <v-spacer></v-spacer>
                <v-col
                cols="11"
                sm="5"
                >
                <v-dialog
                    ref="dialog"
                    v-model="modal2"
                    :return-value.sync="time"
                    persistent
                    width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="time"
                        label="Picker in dialog"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-time-picker
                    v-if="modal2"
                    v-model="time"
                    full-width
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="modal2 = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.dialog.save(time)"
                    >
                        OK
                    </v-btn>
                    </v-time-picker>
                </v-dialog>
                </v-col>
            </v-row>
            </template>
