Calendar
========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/calendars/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Calendar` component is used to display information in a daily, weekly, monthly, or category view. The daily view has slots for all day or timed elements, and the weekly and monthly view has a slot for each day. The category view has a slot for each category in the day and timed sections based on the categories given or the categories in the given events. Optionally you can pass in an array of events and they will be rendered over the appropriate days and times.

.. api::

    :py:class:`pyvuetify.Calendar`

Type category
-------------

This is an example of an event calendar with a **type** of ``category`` that allows you to compare two schedules side-by-side.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Calendar/type_category.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Calendar/type_category.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Calendar/type_category.vue


Type day
--------

This is an example of calendar with content in each interval slot and a **type** of ``day``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Calendar/type_day.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Calendar/type_day.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Calendar/type_day.vue


Type week
---------

This is an example of an event calendar with all-day and timed events with a **type** of ``week``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Calendar/type_week.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Calendar/type_week.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Calendar/type_week.vue


24-hour format
--------------

By default, interval labels and event times adapt to the active locale. Use the ``format`` prop to set ``24hr`` or ``ampm`` regardless of locale.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Calendar/hour24.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Calendar/hour24.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Calendar/hour24.vue


Click
-----

This is an example of a planner with additional event handlers and external components controlling the display of the calendar.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Calendar/click.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Calendar/click.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Calendar/click.vue


Day
---

Slots allow you to define the content for each day, time interval for the daily views, and various labels.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Calendar/day.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Calendar/day.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Calendar/day.vue


Day body
--------

Using the ``day-body`` slot you can customize the calendar content for the day. In this example we added a line for the current time.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Calendar/day_body.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Calendar/day_body.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Calendar/day_body.vue


Drag and drop
-------------

This is an example of an event calendar where you can drag events, extend their length, and create events.





.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Calendar/drag_and_drop.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Calendar/drag_and_drop.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Calendar/drag_and_drop.vue

