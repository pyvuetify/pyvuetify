DatePicker
==========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/date-pickers/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`DatePicker <ipyvuetify.DatePicker>` component is used for selecting dates. It supports multiple selection modes, formatting, internationalization, and can be embedded in dialogs or menus.

.. api::

    - :py:class:`ipyvuetify.DatePicker`
    - :py:class:`ipyvuetify.Menu`
    - :py:class:`ipyvuetify.Dialog`
    - :py:class:`ipyvuetify.TextField`
    - :py:class:`ipyvuetify.DatePickerTable`
    - :py:class:`ipyvuetify.DatePickerHeader`
    - :py:class:`ipyvuetify.DatePickerMonthTable`
    - :py:class:`ipyvuetify.DatePickerYears`
    - :py:class:`ipyvuetify.DatePickerTitle`

Usage
-----

Basic usage of :py:class:`DatePicker <ipyvuetify.DatePicker>`.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Container(
        class_="my-2",
        children=[
            v.DatePicker(),
        ]
    )

.. warning::

    :py:class:`DatePicker <ipyvuetify.DatePicker>` accepts ISO 8601 **date** strings
    (YYYY-MM-DD). For more information regarding ISO 8601 and other standards,
    visit the official ISO (International Organization for Standardization)
    `International Standards <https://www.iso.org/standards.html>`__ page.

Colors
------

Customize the color of :py:class:`DatePicker <ipyvuetify.DatePicker>` with the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2019-10-13",
                        color="green lighten-1",
                    ),
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2019-10-13",
                        color="green lighten-1",
                        header_color="primary",
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2019-10-13",
                        color="green lighten-1",
                    ),
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2019-10-13",
                        color="green lighten-1",
                        header_color="primary",
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-date-picker
                v-model="picker"
                color="green lighten-1"
                ></v-date-picker>
                <v-date-picker
                v-model="picker2"
                color="green lighten-1"
                header-color="primary"
                ></v-date-picker>
            </v-row>
            </template>

Elevation
---------

The :py:class:`DatePicker <ipyvuetify.DatePicker>` component supports elevation
up to a maximum value of 24. For more information on elevations, visit the
`official Material Design elevations <https://material.io/design/environment/elevation.html>`__
page.

.. todo::

    Add example for elevation prop once supported.

Icons
-----

You can override the default icons used in the picker.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        v_model="2019-10-13",
                        year_icon="mdi-calendar-blank",
                        prev_icon="mdi-skip-previous",
                        next_icon="mdi-skip-next",
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        v_model="2019-10-13",
                        year_icon="mdi-calendar-blank",
                        prev_icon="mdi-skip-previous",
                        next_icon="mdi-skip-next",
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-date-picker
                v-model="picker"
                year-icon="mdi-calendar-blank"
                prev-icon="mdi-skip-previous"
                next-icon="mdi-skip-next"
                ></v-date-picker>
            </v-row>
            </template>

Multiple
--------

Allow selecting multiple dates with :py:class:`DatePicker <ipyvuetify.DatePicker>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            date_picker = v.DatePicker(
                v_model=["2019-10-13", "2019-10-16"],
                multiple=True,
            )

            select = v.Combobox(
                v_model=["2019-10-13", "2019-10-16"],
                label="Select dates",
                multiple=True,
                chips=True,
                small_chips=True,
                prepend_inner_icon="mdi-calendar",
                readonly=True,
            )

            jslink((date_picker, "v_model"), (select, "v_model"))

            v.Container(
                class_="my-2",
                children=[date_picker, select],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            date_picker = v.DatePicker(
                v_model=["2019-10-13", "2019-10-16"],
                multiple=True,
            )

            select = v.Combobox(
                v_model=["2019-10-13", "2019-10-16"],
                label="Select dates",
                multiple=True,
                chips=True,
                small_chips=True,
                prepend_inner_icon="mdi-calendar",
                readonly=True,
            )

            jslink((date_picker, "v_model"), (select, "v_model"))

            v.Container(
                class_="my-2",
                children=[date_picker, select],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row>
                <v-col
                cols="12"
                sm="6"
                >
                <v-date-picker
                    v-model="dates"
                    multiple
                ></v-date-picker>
                </v-col>
                <v-col
                cols="12"
                sm="6"
                >
                <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="dates"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-combobox
                        v-model="dates"
                        multiple
                        chips
                        small-chips
                        label="Multiple picker in menu"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-combobox>
                    </template>
                    <v-date-picker
                    v-model="dates"
                    multiple
                    no-title
                    scrollable
                    >
                    <v-spacer></v-spacer>
                    <v-btn
                        text
                        color="primary"
                        @click="menu = false"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(dates)"
                    >
                        OK
                    </v-btn>
                    </v-date-picker>
                </v-menu>
                </v-col>
            </v-row>
            </template>

Picker date

You can watch the `picker-date`` which is the displayed month/year (depending on
the picker type and active view) to perform some action when it changes. This uses
the `.sync` modifier.

.. todo::

    Help us add an example for picker-date !


Range
-----

Enable date range selection with :py:class:`DatePicker <ipyvuetify.DatePicker>`
using ``range``. When using ``range`` prop date picker expects its model to be an
array of length 2 or empty.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            date_picker = v.DatePicker(
                v_model=["2019-10-13", "2019-10-16"],
                range=True,
            )

            select = v.Combobox(
                v_model=["2019-10-13", "2019-10-16"],
                label="Select dates",
                multiple=True,
                chips=True,
                small_chips=True,
                prepend_inner_icon="mdi-calendar",
                readonly=True,
            )

            jslink((date_picker, "v_model"), (select, "v_model"))

            v.Container(
                class_="my-2",
                children=[date_picker, select],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            date_picker = v.DatePicker(
                v_model=["2019-10-13", "2019-10-16"],
                range=True,
            )

            select = v.Combobox(
                v_model=["2019-10-13", "2019-10-16"],
                label="Select dates",
                multiple=True,
                chips=True,
                small_chips=True,
                prepend_inner_icon="mdi-calendar",
                readonly=True,
            )

            jslink((date_picker, "v_model"), (select, "v_model"))

            v.Container(
                class_="my-2",
                children=[date_picker, select],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row>
                <v-col
                cols="12"
                sm="6"
                >
                <v-date-picker
                    v-model="dates"
                    range
                ></v-date-picker>
                </v-col>
                <v-col
                cols="12"
                sm="6"
                >
                <v-text-field
                    v-model="dateRangeText"
                    label="Date range"
                    prepend-icon="mdi-calendar"
                    readonly
                ></v-text-field>
                model: {{ dates }}
                </v-col>
            </v-row>
            </template>

Readonly
--------

Selecting new date could be disabled by adding ``readonly`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        v_model="2019-10-13",
                        readonly=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        v_model="2019-10-13",
                        readonly=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="center">
                <v-date-picker
                v-model="date"
                readonly
                ></v-date-picker>
            </v-row>
            </template>

Show current
------------

By default the current date is displayed using outlined button ``show-current``
prop allows you to remove the border or select different date to be displayed as
the current one.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2019-10-13",
                        show_current=False,
                    ),
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2019-10-13",
                        show_current="2013-07-13",
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2019-10-13",
                        show_current=False,
                    ),
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2019-10-13",
                        show_current="2013-07-13",
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-date-picker
                v-model="date1"
                :show-current="false"
                ></v-date-picker>
                <v-date-picker
                v-model="date2"
                show-current="2013-07-13"
                ></v-date-picker>
            </v-row>
            </template>

Show sibling months
-------------------

By default days from previous and next months are not visible. They can be
displayed using the ``show-adjacent-months`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        v_model="2019-10-13",
                        show_adjacent_months=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        v_model="2019-10-13",
                        show_adjacent_months=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-date-picker
                v-model="picker"
                show-adjacent-months
            ></v-date-picker>
            </template>

Width
-----

You can specify the picker’s width or make it full width.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        v_model="2019-10-13",
                        width="290",
                        class_="mt-4",
                    ),
                    v.DatePicker(
                        v_model="2019-10-13",
                        full_width=True,
                        class_="mt-4",
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        v_model="2019-10-13",
                        width="290",
                        class_="mt-4",
                    ),
                    v.DatePicker(
                        v_model="2019-10-13",
                        full_width=True,
                        class_="mt-4",
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row align="center">
                <v-date-picker
                v-model="date"
                width="290"
                class="mt-4"
                ></v-date-picker>
                <v-date-picker
                v-model="date"
                full-width
                class="mt-4"
                ></v-date-picker>
            </v-row>
            </template>

Date events
-----------

You can specify events using arrays, objects or functions. To change the default
color of the event use ``event-color`` prop. Your ``events`` function or object can
return an array of colors (material or css) in case you want to display multiple
event indicators.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2022-06-15",
                        events=["2022-06-10", "2022-06-15", "2022-06-20"],
                        event_color="green lighten-1",
                    ),
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2022-06-15",
                        events=["2022-06-10", "2022-06-15", "2022-06-20"],
                        event_color=["red", "blue", "green"],
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2022-06-15",
                        events=["2022-06-10", "2022-06-15", "2022-06-20"],
                        event_color="green lighten-1",
                    ),
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2022-06-15",
                        events=["2022-06-10", "2022-06-15", "2022-06-20"],
                        event_color=["red", "blue", "green"],
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-between">
                <div>
                <div class="subheading">
                    Defined by array
                </div>
                <v-date-picker
                    v-model="date1"
                    :events="arrayEvents"
                    event-color="green lighten-1"
                ></v-date-picker>
                </div>
                <div>
                <div class="subheading">
                    Defined by function
                </div>
                <v-date-picker
                    v-model="date2"
                    :event-color="date => date[9] % 2 ? 'red' : 'yellow'"
                    :events="functionEvents"
                ></v-date-picker>
                </div>
            </v-row>
            </template>

Active picker
-------------

You can create a birthday picker - starting with year picker by default, restricting
dates range and closing the picker menu after selecting the day make the perfect
birthday picker.

.. todo::

    Add example for active-picker once supported.


Dialog and menu
---------------

When integrating a ``picker`` into a :py:class:`TextField <ipyvuetify.TextField>`,
it is recommended to use the ``readonly`` prop. This will prevent mobile keyboards
from triggering. To save vertical space, you can also hide the picker title.

Pickers expose a slot that allow you to hook into save and cancel functionality.
This will maintain an old value which can be replaced if the user cancels.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            date_picker = v.DatePicker(v_model=None)

            text_field = v.TextField(
                v_model="",
                label="Picker in dialog",
                prepend_icon="mdi-calendar",
                readonly=True,
                v_bind="activator.attrs",
                v_on="activator.on",
            )

            jslink((date_picker, "v_model"), (text_field, "v_model"))

            v.Container(
                class_="my-2",
                children=[
                    v.Menu(
                        v_model=False,
                        close_on_content_click=False,
                        nudge_right=40,
                        transition="scale-transition",
                        offset_y=True,
                        min_width="auto",
                        children=[date_picker],
                        v_slots=[
                            {
                                "name": "activator",
                                "variable": "activator",
                                "children": text_field,
                            }
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            date_picker = v.DatePicker(v_model=None)

            text_field = v.TextField(
                v_model="",
                label="Picker in dialog",
                prepend_icon="mdi-calendar",
                readonly=True,
                v_bind="activator.attrs",
                v_on="activator.on",
            )

            jslink((date_picker, "v_model"), (text_field, "v_model"))

            v.Container(
                class_="my-2",
                children=[
                    v.Menu(
                        v_model=False,
                        close_on_content_click=False,
                        nudge_right=40,
                        transition="scale-transition",
                        offset_y=True,
                        min_width="auto",
                        children=[date_picker],
                        v_slots=[
                            {
                                "name": "activator",
                                "variable": "activator",
                                "children": text_field,
                            }
                        ],
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row>
                <v-col
                cols="12"
                sm="6"
                md="4"
                >
                <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="date"
                        label="Picker without buttons"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                    </template>
                    <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                    ></v-date-picker>
                </v-menu>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            </template>

Internationalization
--------------------

The date picker supports internationalization through the JavaScript Date object.
Specify a BCP 47 language tag using the ``locale`` prop, and then set the first day
of the week with the ``first-day-of-week`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2022-06-15",
                        first_day_of_week=0,
                        locale="zh-cn",
                    ),
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2022-06-15",
                        first_day_of_week=1,
                        locale="sv-se",
                    )
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2022-06-15",
                        first_day_of_week=0,
                        locale="zh-cn",
                    ),
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2022-06-15",
                        first_day_of_week=1,
                        locale="sv-se",
                    )
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row justify="space-around">
                <v-date-picker
                v-model="picker"
                :first-day-of-week="0"
                locale="zh-cn"
                ></v-date-picker>
                <v-date-picker
                v-model="picker"
                :first-day-of-week="1"
                locale="sv-se"
                ></v-date-picker>
            </v-row>
            </template>

Orientation
-----------

Date pickers come in two orientation variations, portrait (default) and landscape.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2019-10-13",
                        landscape=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                class_="my-2",
                children=[
                    v.DatePicker(
                        class_="mx-2",
                        v_model="2019-10-13",
                        landscape=True,
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row align="center">
                <v-checkbox
                v-model="landscape"
                label="Landscape"
                ></v-checkbox>
                <v-date-picker
                v-model="picker"
                :landscape="landscape"
                ></v-date-picker>
            </v-row>
            </template>
