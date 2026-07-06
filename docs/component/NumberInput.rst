NumberInput
===========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/number-inputs/>`__.
    All examples have been converted to pyvuetify syntax.

The VNumberInput extends the standard HTML number-type input, ensuring style consistency across browsers as a replacement for ``



.. api::

    :py:class:`pyvuetify.NumberInput`

Props
-----

The :py:class:`pyvuetify.NumberInput` component has support for most of :py:class:`pyvuetify.Field`'s props and is follows the same design patterns as other inputs.


Control-variant
---------------

The ``control-variant`` prop offers an easy way to customize steppers button layout. The following values are valid options: **default**, **stacked**, **split** and **hidden**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NumberInput/control_variant.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NumberInput/control_variant.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NumberInput/control_variant.vue


Reverse
-------

The ``reverse`` prop automatically changes the stepper buttons' position to the opposite side for both the default and stacked control variants.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NumberInput/reverse.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NumberInput/reverse.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NumberInput/reverse.vue


Hide-input
----------

The ``hide-input`` prop hides the input field, allowing only the stepper buttons to be visible. These stepper buttons follow a stacked control-variant layout.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NumberInput/hide_input.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NumberInput/hide_input.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NumberInput/hide_input.vue


Inset
-----

The ``inset`` prop adjusts the style of the stepper buttons by reducing the size of the button dividers.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NumberInput/inset.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NumberInput/inset.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NumberInput/inset.vue


Min/Max
-------

The ``min`` and ``max`` props specify the minimum and maximum values accepted by ``NumberInput``, behaving identically to the native min and max attributes for ``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NumberInput/min_max.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NumberInput/min_max.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NumberInput/min_max.vue


Step
----

The ``step`` prop behaves the same as the ``step`` attribute in the ``, it defines the incremental steps for adjusting the numeric value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NumberInput/step.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NumberInput/step.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NumberInput/step.vue


Precision
---------

The ``precision`` prop enforces strict precision. It is expected to be an integer value in range between ``0`` and ``15``. Input will prevent user from typing or pasting an invalid value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NumberInput/precision.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NumberInput/precision.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NumberInput/precision.vue


Grouping
--------

The ``grouping`` prop enables digit grouping (e.g. thousands separators). The value is passed to `Intl.NumberFormat <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#usegrouping>`__ - ``"auto"`` should be preferred over ``true``. Use ``group-separator`` to override the separator character.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: NumberInput/grouping.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: NumberInput/grouping.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: NumberInput/grouping.vue

