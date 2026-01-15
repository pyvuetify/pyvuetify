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

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            events = [
                {'name': 'Meeting', 'start': '2025-11-01 09:00', 'end': '2025-11-01 10:00'},
                {'name': 'Conference', 'start': '2025-11-05 14:00', 'end': '2025-11-05 17:00'},
                {'name': 'Birthday Party', 'start': '2025-11-10', 'color': 'green'},
                {'name': 'PTO', 'start': '2025-11-15', 'end': '2025-11-17', 'color': 'blue'}
            ]

            v.Calendar(
                type='month',
                value='2025-11-01',
                events=events
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            events = [
                {'name': 'Meeting', 'start': '2025-11-01 09:00', 'end': '2025-11-01 10:00'},
                {'name': 'Conference', 'start': '2025-11-05 14:00', 'end': '2025-11-05 17:00'},
                {'name': 'Birthday Party', 'start': '2025-11-10', 'color': 'green'},
                {'name': 'PTO', 'start': '2025-11-15', 'end': '2025-11-17', 'color': 'blue'}
            ]

            v.Calendar(
                type='month',
                value='2025-11-01',
                events=events
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-calendar
                type="month"
                :value="value"
                :events="events"
              ></v-calendar>
            </template>

            <script>
              export default {
                data: () => ({
                  value: '2025-11-01',
                  events: [
                    {
                      name: 'Meeting',
                      start: '2025-11-01 09:00',
                      end: '2025-11-01 10:00',
                    },
                    {
                      name: 'Conference',
                      start: '2025-11-05 14:00',
                      end: '2025-11-05 17:00',
                    },
                    {
                      name: 'Birthday Party',
                      start: '2025-11-10',
                      color: 'green',
                    },
                    {
                      name: 'PTO',
                      start: '2025-11-15',
                      end: '2025-11-17',
                      color: 'blue',
                    },
                  ],
                }),
              }
            </script>

Type Week
---------

This is an example of an event calendar with all-day and timed events with a type of ``week``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            events = [
                {'name': 'Weekly Meeting', 'start': '2025-11-07 09:00', 'end': '2025-11-07 10:00'},
                {'name': 'Lunch', 'start': '2025-11-08 12:30', 'end': '2025-11-08 13:30'},
                {'name': 'Thomas Birthday', 'start': '2025-11-10', 'color': 'green'}
            ]

            v.Calendar(
                type='week',
                value='2025-11-07',
                events=events
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            events = [
                {'name': 'Weekly Meeting', 'start': '2025-11-07 09:00', 'end': '2025-11-07 10:00'},
                {'name': 'Lunch', 'start': '2025-11-08 12:30', 'end': '2025-11-08 13:30'},
                {'name': 'Thomas Birthday', 'start': '2025-11-10', 'color': 'green'}
            ]

            v.Calendar(
                type='week',
                value='2025-11-07',
                events=events
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-calendar
                type="week"
                :value="value"
                :events="events"
              ></v-calendar>
            </template>

            <script>
              export default {
                data: () => ({
                  value: '2025-11-07',
                  events: [
                    {
                      name: 'Weekly Meeting',
                      start: '2025-11-07 09:00',
                      end: '2025-11-07 10:00',
                    },
                    {
                      name: 'Lunch',
                      start: '2025-11-08 12:30',
                      end: '2025-11-08 13:30',
                    },
                    {
                      name: 'Thomas Birthday',
                      start: '2025-11-10',
                      color: 'green',
                    },
                  ],
                }),
              }
            </script>

Type Day
--------

This is an example of calendar with a type of ``day``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            events = [
                {'name': 'Morning Meeting', 'start': '2025-11-28 09:00', 'end': '2025-11-28 10:00'},
                {'name': 'Lunch Break', 'start': '2025-11-28 12:00', 'end': '2025-11-28 13:00'},
                {'name': 'Afternoon Session', 'start': '2025-11-28 14:00', 'end': '2025-11-28 16:00'}
            ]

            v.Calendar(
                type='day',
                value='2025-11-28',
                events=events
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            events = [
                {'name': 'Morning Meeting', 'start': '2025-11-28 09:00', 'end': '2025-11-28 10:00'},
                {'name': 'Lunch Break', 'start': '2025-11-28 12:00', 'end': '2025-11-28 13:00'},
                {'name': 'Afternoon Session', 'start': '2025-11-28 14:00', 'end': '2025-11-28 16:00'}
            ]

            v.Calendar(
                type='day',
                value='2025-11-28',
                events=events
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-calendar
                type="day"
                :value="value"
                :events="events"
              ></v-calendar>
            </template>

            <script>
              export default {
                data: () => ({
                  value: '2025-11-28',
                  events: [
                    {
                      name: 'Morning Meeting',
                      start: '2025-11-28 09:00',
                      end: '2025-11-28 10:00',
                    },
                    {
                      name: 'Lunch Break',
                      start: '2025-11-28 12:00',
                      end: '2025-11-28 13:00',
                    },
                    {
                      name: 'Afternoon Session',
                      start: '2025-11-28 14:00',
                      end: '2025-11-28 16:00',
                    },
                  ],
                }),
              }
            </script>
