ChipGroup
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/chips/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ChipGroup <ipyvuetify.ChipGroup>` supercharges the :py:class:`Chip <ipyvuetify.Chip>` component by providing groupable functionality. It is used for creating groups of selections using chips.

.. api::

    :py:class:`ipyvuetify.ChipGroup`

Usage
-----

Chip groups make it easy to create selectable groups of chips. By default, chip groups only allow a single chip to be selected.

.. jupyter-execute::

    import ipyvuetify as v

    chip_group = v.ChipGroup(
        active_class='primary--text',
        children=[
            v.Chip(children=['Option 1']),
            v.Chip(children=['Option 2']),
            v.Chip(children=['Option 3']),
            v.Chip(children=['Option 4']),
        ]
    )

    output = v.Alert(
        class_='mt-4',
        type='info',
        children=['Select a chip']
    )

    def on_change(widget, event, data):
        if data is not None:
            output.children = [f'Selected index: {data}']
        else:
            output.children = ['No selection']

    chip_group.on_event('change', on_change)

    v.Container(
        children=[
            chip_group,
            output
        ]
    )

Multiple
--------

Chip groups can allow multiple selections with the ``multiple`` prop. This allows you to select multiple chips at once.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            chip_group = v.ChipGroup(
                v_model=[],
                multiple=True,
                active_class='primary--text',
                children=[
                    v.Chip(children=['Work']),
                    v.Chip(children=['Home']),
                    v.Chip(children=['Social']),
                    v.Chip(children=['Personal']),
                    v.Chip(children=['Urgent']),
                ]
            )

            output = v.Alert(
                class_='mt-4',
                type='info',
                children=['Select chips']
            )

            def on_change(widget, event, data):
                if data and len(data) > 0:
                    output.children = [f'Selected indices: {data}']
                else:
                    output.children = ['No selection']

            chip_group.on_event('change', on_change)

            v.Container(
                children=[
                    chip_group,
                    output
                ]
            )

    .. tab-item:: :fas:`code` Code

        .. jupyter-execute::

            import ipyvuetify as v

            chip_group = v.ChipGroup(
                v_model=[],
                multiple=True,
                active_class='primary--text',
                children=[
                    v.Chip(children=['Work']),
                    v.Chip(children=['Home']),
                    v.Chip(children=['Social']),
                    v.Chip(children=['Personal']),
                    v.Chip(children=['Urgent']),
                ]
            )

            output = v.Alert(
                class_='mt-4',
                type='info',
                children=['Select chips']
            )

            def on_change(widget, event, data):
                if data and len(data) > 0:
                    output.children = [f'Selected indices: {data}']
                else:
                    output.children = ['No selection']

            chip_group.on_event('change', on_change)

            v.Container(
                children=[
                    chip_group,
                    output
                ]
            )

Column
------

Chip groups with the ``column`` prop will display chips in a vertical layout instead of the default horizontal layout.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            chip_group = v.ChipGroup(
                column=True,
                active_class='primary',
                children=[
                    v.Chip(children=['Monday']),
                    v.Chip(children=['Tuesday']),
                    v.Chip(children=['Wednesday']),
                    v.Chip(children=['Thursday']),
                    v.Chip(children=['Friday']),
                    v.Chip(children=['Saturday']),
                    v.Chip(children=['Sunday']),
                ]
            )

            output = v.Alert(
                class_='mt-4',
                type='info',
                children=['Select a day']
            )

            def on_change(widget, event, data):
                days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                if data is not None:
                    output.children = [f'Selected: {days[data]}']
                else:
                    output.children = ['No selection']

            chip_group.on_event('change', on_change)

            v.Container(
                children=[
                    v.Row(
                        children=[
                            v.Col(cols=6, children=[chip_group]),
                            v.Col(cols=6, children=[output]),
                        ]
                    )
                ]
            )

    .. tab-item:: :fas:`code` Code

        .. jupyter-execute::

            import ipyvuetify as v

            chip_group = v.ChipGroup(
                column=True,
                active_class='primary',
                children=[
                    v.Chip(children=['Monday']),
                    v.Chip(children=['Tuesday']),
                    v.Chip(children=['Wednesday']),
                    v.Chip(children=['Thursday']),
                    v.Chip(children=['Friday']),
                    v.Chip(children=['Saturday']),
                    v.Chip(children=['Sunday']),
                ]
            )

            output = v.Alert(
                class_='mt-4',
                type='info',
                children=['Select a day']
            )

            def on_change(widget, event, data):
                days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
                if data is not None:
                    output.children = [f'Selected: {days[data]}']
                else:
                    output.children = ['No selection']

            chip_group.on_event('change', on_change)

            v.Container(
                children=[
                    v.Row(
                        children=[
                            v.Col(cols=6, children=[chip_group]),
                            v.Col(cols=6, children=[output]),
                        ]
                    )
                ]
            )

Mandatory
---------

The ``mandatory`` prop will make the chip group require at least one selected chip. This means a chip cannot be deselected if it's the only selected one.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            chip_group = v.ChipGroup(
                v_model=0,
                mandatory=True,
                active_class='deep-purple accent-4 white--text',
                children=[
                    v.Chip(children=['Small']),
                    v.Chip(children=['Medium']),
                    v.Chip(children=['Large']),
                    v.Chip(children=['Extra Large']),
                ]
            )

            output = v.Alert(
                class_='mt-4',
                type='success',
                children=['Selected: Small (cannot be deselected)']
            )

            def on_change(widget, event, data):
                sizes = ['Small', 'Medium', 'Large', 'Extra Large']
                output.children = [f'Selected: {sizes[data]} (cannot be deselected)']

            chip_group.on_event('change', on_change)

            v.Container(
                children=[
                    chip_group,
                    output
                ]
            )

    .. tab-item:: :fas:`code` Code

        .. jupyter-execute::

            import ipyvuetify as v

            chip_group = v.ChipGroup(
                v_model=0,
                mandatory=True,
                active_class='deep-purple accent-4 white--text',
                children=[
                    v.Chip(children=['Small']),
                    v.Chip(children=['Medium']),
                    v.Chip(children=['Large']),
                    v.Chip(children=['Extra Large']),
                ]
            )

            output = v.Alert(
                class_='mt-4',
                type='success',
                children=['Selected: Small (cannot be deselected)']
            )

            def on_change(widget, event, data):
                sizes = ['Small', 'Medium', 'Large', 'Extra Large']
                output.children = [f'Selected: {sizes[data]} (cannot be deselected)']

            chip_group.on_event('change', on_change)

            v.Container(
                children=[
                    chip_group,
                    output
                ]
            )
