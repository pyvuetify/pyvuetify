DatePicker
==========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/date-pickers/>`__.
    All examples have been converted to pyvuetify syntax.

:py:class:`pyvuetify.DatePicker` is a fully featured date selection component that lets users select a date.

.. api::

    :py:class:`pyvuetify.DatePicker`

Props
-----

The :py:class:`pyvuetify.DatePicker` component supports multiple props for configuring dates that can be selected, date formats, translations and more.


Elevation
---------

The :py:class:`pyvuetify.DatePicker` component supports elevation up to a maximum value of 5. For more information on elevations, visit the official `Material Design elevations <https://m3.material.io/styles/elevation>`__ page.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/elevation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/elevation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/elevation.vue


Width
-----

You can specify the picker's width or make it full width.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/width.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/width.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/width.vue


Show sibling months
-------------------

By default days from previous and next months are not visible. They can be displayed using the **show-adjacent-months** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/show_adjacent_months.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/show_adjacent_months.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/show_adjacent_months.vue


Colors
------

Date picker colors can be set using the **color** props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/colors.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/colors.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/colors.vue


Allowed dates
-------------

Specify allowed dates using objects or functions. When using objects, accepts a date string in the format of YYYY-MM-DD. When using functions, accepts a date object as a parameter and should return a boolean.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/allowed_dates.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/allowed_dates.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/allowed_dates.vue


Landscape
---------

Using ``landscape`` moves header to the side. You can customize it further using custom width and date format.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/landscape.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/landscape.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/landscape.vue


Date events
-----------

You can specify events using arrays, objects or functions. To change the default color of the event use **event-color** prop. Your **events** function or object can return an array of colors (material or css) in case you want to display multiple event indicators.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/events.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/events.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/events.vue


Controls
--------

Replace main controls to adapt behavior and/or visual appearance beyond CSS styling.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DatePicker/slots_controls.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DatePicker/slots_controls.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DatePicker/slots_controls.vue


Internationalization
--------------------

Vuetify components can localize date formats by utilizing the `i18n <https://vuetifyjs.com/features/internationalization>`__ feature. This determines the appropriate locale for date display. When the default date adapter is in use, localization is managed automatically.

For those not using the default date adapter, you need to create a mapping between the i18n locale string and your chosen date library's locale. This can be done in the Vuetify options as shown below:

```js
import DateFnsAdapter from '@date-io/date-fns'
import enUS from 'date-fns/locale/en-US'
import svSE from 'date-fns/locale/sv'

createVuetify({
  date: {
    adapter: DateFnsAdapter,
    locale: {
      en: enUS,
      sv: svSE,
    },
  },
})
```


Parsing dates
-------------

It's recommended that you use the `Date composable <https://vuetifyjs.com/features/dates/>`__ for parsing and formatting when working with string dates. The following example uses the parseISO function to convert a string date to a Date object.

```js
import { useDate } from 'vuetify'

const adapter = useDate()
const date = '2023-11-30'

console.log(new Date(date)) // Wed Nov 29 2023 18:00:00 GMT-0600
console.log(adapter.parseISO(date)) // Thu Nov 30 2023 00:00:00 GMT-0600
```

Using this function ensures that the date is parsed correctly regardless of the user's timezone.

