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

.. jupyter-execute:: DatePicker/usage.py
    :raises:

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

        .. jupyter-execute:: DatePicker/colors.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/colors.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/colors.vue

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

        .. jupyter-execute:: DatePicker/icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/icons.vue

Multiple
--------

Allow selecting multiple dates with :py:class:`DatePicker <ipyvuetify.DatePicker>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/multiple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/multiple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/multiple.vue

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

        .. jupyter-execute:: DatePicker/range.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/range.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/range.vue

Readonly
--------

Selecting new date could be disabled by adding ``readonly`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/readonly.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/readonly.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/readonly.vue

Show current
------------

By default the current date is displayed using outlined button ``show-current``
prop allows you to remove the border or select different date to be displayed as
the current one.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/show_current.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/show_current.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/show_current.vue

Show sibling months
-------------------

By default days from previous and next months are not visible. They can be
displayed using the ``show-adjacent-months`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/show_sibling_months.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/show_sibling_months.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/show_sibling_months.vue

Width
-----

You can specify the picker’s width or make it full width.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/width.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/width.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/width.vue

Date events
-----------

You can specify events using arrays, objects or functions. To change the default
color of the event use ``event-color`` prop. Your ``events`` function or object can
return an array of colors (material or css) in case you want to display multiple
event indicators.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/date_events.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/date_events.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/date_events.vue

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

        .. jupyter-execute:: DatePicker/dialog_and_menu.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/dialog_and_menu.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/dialog_and_menu.vue

Internationalization
--------------------

The date picker supports internationalization through the JavaScript Date object.
Specify a BCP 47 language tag using the ``locale`` prop, and then set the first day
of the week with the ``first-day-of-week`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/internationalization.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/internationalization.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/internationalization.vue

Orientation
-----------

Date pickers come in two orientation variations, portrait (default) and landscape.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/orientation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/orientation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/orientation.vue

