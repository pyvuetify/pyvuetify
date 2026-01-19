Checkbox
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/checkboxes/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Checkbox <ipyvuetify.Checkbox>` component provides users the ability
to choose between two distinct values. These are very similar to a switch and can
be used in complex forms and checklists. A simpler version,
:py:class:`SimpleCheckbox <ipyvuetify.SimpleCheckbox>` is used primarily as a
lightweight alternative in data-table components to select rows or display inline
boolean data.

Usage
-----

A :py:class:`Checkbox <ipyvuetify.Checkbox>` in its simplest form provides a toggle
between 2 values.

.. jupyter-execute:: Checkbox/usage.py
    :raises:

.. api::

    - :py:class:`ipyvuetify.Checkbox`
    - :py:class:`ipyvuetify.SimpleCheckbox`

Colors
------

Checkboxes can be colored by using any of the builtin colors and contextual names
using the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Checkbox/colors.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Checkbox/colors.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Checkbox/colors.vue

Model as Array
--------------

Multiple :py:class:`Checkbox <ipyvuetify.Checkbox>`'s can share the same ``v_model`` by using an array.

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

A single :py:class:`Checkbox <ipyvuetify.Checkbox>` will have a boolean value as its value.

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

:py:class:`Checkbox <ipyvuetify.Checkbox>` can have different states such as default,
disabled, and indeterminate.

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

        .. jupyter-execute:: Checkbox/label_slot.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Checkbox/label_slot.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Checkbox/label_slot.vue

Inline text field
-----------------

You can place :py:class:`Checkbox <ipyvuetify.Checkbox>` in line with other components
such as :py:class:`TextField <ipyvuetify.TextField>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Checkbox/inline_text_field.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Checkbox/inline_text_field.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Checkbox/inline_text_field.vue

