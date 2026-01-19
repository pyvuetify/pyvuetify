Calendar
========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/calendars/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Calendar <ipyvuetify.Calendar>` component is used to display information in a daily, weekly, monthly, or category view. The daily view has slots for all day or timed elements, and the weekly and monthly view has a slot for each day. Optionally you can pass in an array of events and they will be rendered over the appropriate days and times.

.. api::

    :py:class:`ipyvuetify.Calendar`
    :py:class:`ipyvuetify.CalendarDaily`
    :py:class:`ipyvuetify.CalendarWeekly`
    :py:class:`ipyvuetify.CalendarMonthly`

Usage
-----

A calendar has a type and a value which determines what type of calendar is shown over what span of time. This shows the bare minimum configuration, an array of events with name, start and end properties.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Calendar/usage.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Calendar/usage.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Calendar/usage.vue

Type Week
---------

This is an example of an event calendar with all-day and timed events with a type of ``week``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Calendar/type_week.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Calendar/type_week.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Calendar/type_week.vue

Type Day
--------

This is an example of calendar with a type of ``day``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Calendar/type_day.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Calendar/type_day.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Calendar/type_day.vue

