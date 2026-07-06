Checkbox
========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/checkboxes/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Checkbox` component provides users the ability to choose between two distinct values. These are very similar to a switch and can be used in complex forms and checklists.

.. api::

    :py:class:`pyvuetify.Checkbox`

Colors
------

Checkboxes can be colored by using any of the builtin colors and contextual names using the **color** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Checkbox/colors.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Checkbox/colors.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Checkbox/colors.vue


Model as array
--------------

Multiple :py:class:`pyvuetify.Checkbox`'s can share the same **v-model** by using an array.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Checkbox/model_as_array.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Checkbox/model_as_array.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Checkbox/model_as_array.vue


Model as boolean
----------------

A single :py:class:`pyvuetify.Checkbox` will have a boolean value as its **value**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Checkbox/model_as_boolean.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Checkbox/model_as_boolean.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Checkbox/model_as_boolean.vue


States
------

:py:class:`pyvuetify.Checkbox` can have different states such as **default**, **disabled**, and **indeterminate**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Checkbox/states.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Checkbox/states.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Checkbox/states.vue


Label slot
----------

Checkbox labels can be defined in ``label`` slot - that will allow to use HTML content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Checkbox/label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Checkbox/label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Checkbox/label.vue


Inline text-field
-----------------

If you need to place checkboxes in line with other components, you can use the :py:class:`pyvuetify.CheckboxBtn` component.

This component renders just checkbox, without the trapping of a form input such as validation, a label, and messages.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Checkbox/inline_textfield.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Checkbox/inline_textfield.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Checkbox/inline_textfield.vue

