ChipGroup
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/chip-groups/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ChipGroup <ipyvuetify.ChipGroup>` supercharges the :py:class:`Chip <ipyvuetify.Chip>`
component by providing groupable functionality. It is used for creating groups of
selections using chips.

Usage
-----

Chip groups make it easy for users to select filtering options for more complex
implementations. By default, :py:class:`ChipGroup <ipyvuetify.ChipGroup>` will
overflow to the right but can be changed to a **column** only mode.

.. jupyter-execute:: ChipGroup/usage.py
    :raises:

.. api::

    - :py:class:`ipyvuetify.ChipGroup`
    - :py:class:`ipyvuetify.Chip`

Column
------

Chip groups with the ``column`` prop can wrap their chips in a vertical layout.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/column.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/column.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: ChipGroup/column.vue

Filter results
--------------

Easily create chip groups that provide additional feedback with the ``filter`` prop.
This creates an alternative visual style that communicates to the user that the
chip is selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/filter_results.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/filter_results.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: ChipGroup/filter_results.vue

Mandatory
---------

Chip groups with the ``mandatory`` prop must always have a value selected.
This means a chip cannot be deselected if it's the only selected one.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/mandatory.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/mandatory.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: ChipGroup/mandatory.vue

Multiple
--------

Chip groups with the ``multiple`` prop can have many values selected.
This allows you to select multiple chips at once.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/multiple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/multiple.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: ChipGroup/multiple.vue

Product card
------------

Chip groups can be used in combination with cards to create rich selection interfaces.
This example shows a product size selector.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/product_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/product_card.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: ChipGroup/product_card.vue

Toothbrush card
---------------

This example demonstrates how chip groups can be used to select product variations,
such as toothbrush bristle types.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/toothbrush_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/toothbrush_card.py

    .. tab-item:: :fab:`vuejs` Vue

        .. literalinclude:: ChipGroup/toothbrush_card.vue

