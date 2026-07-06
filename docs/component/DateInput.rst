DateInput
=========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/date-inputs/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.DateInput` component combines a text field with a date picker. It is meant to be a direct replacement for a standard date input.

.. api::

    :py:class:`pyvuetify.DateInput`

Props
-----

The :py:class:`pyvuetify.DateInput` component extends the :doc:`TextField <TextField>` and :doc:`DatePicker <DatePicker>` component; and supports all of their props.


Model
-----

The default model value is a Date object, but is displayed as formatted text in the input..

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DateInput/model.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DateInput/model.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DateInput/model.vue


Multiple
--------

Using the **multiple** prop, the default model value is an empty array.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DateInput/multiple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DateInput/multiple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DateInput/multiple.vue


Range
-----

Using the multiple prop with a value of **range**, select 2 dates to select them and all the dates between them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DateInput/multiple_range.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DateInput/multiple_range.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DateInput/multiple_range.vue


Calendar icon
-------------

You can move the calendar icon within the input or entirely by utilizing the **prepend-icon** and **prepend-inner-icon** properties.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DateInput/prepend_icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DateInput/prepend_icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DateInput/prepend_icon.vue


Input format
------------

You can use the **input-format** prop to change the displayed format of the date in the input. This will make the field expect the same format when typing and pasting values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DateInput/input_format.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DateInput/input_format.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DateInput/input_format.vue


Passenger
---------

In this example, the :py:class:`pyvuetify.DateInput` component is used to select a date of birth.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DateInput/passenger.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DateInput/passenger.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DateInput/passenger.vue

