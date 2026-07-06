Switch
======


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/switches/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Switch` component provides users the ability to choose between two distinct values. These are very similar to a toggle, or on/off switch, though aesthetically different than a checkbox.

.. api::

    :py:class:`pyvuetify.Switch`

Colors
------

Switches can be colored by using any of the builtin colors and contextual names using the **color** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Switch/colors.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Switch/colors.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Switch/colors.vue


Model as array
--------------

Multiple :py:class:`pyvuetify.Switch`'s can share the same **v-model** by using an array.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Switch/model_as_array.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Switch/model_as_array.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Switch/model_as_array.vue


Custom true/false values
------------------------

The switch can use custom values for its v-model, using the props **true-value** and **false-value**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Switch/custom_values.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Switch/custom_values.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Switch/custom_values.vue


States
------

:py:class:`pyvuetify.Switch` can have different states such as **default**, **disabled**, and **loading**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Switch/states.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Switch/states.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Switch/states.vue


Label
-----

If you need to render a switch label with more complex markup than plain text, you can use the **label** slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Switch/label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Switch/label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Switch/label.vue

