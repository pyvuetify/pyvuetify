ChipGroup
=========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/chip-groups/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.ChipGroup` supercharges the :py:class:`pyvuetify.Chip` component by providing groupable functionality. It is used for creating groups of selections using chips.

.. api::

    :py:class:`pyvuetify.ChipGroup`

Column
------

Chip groups with **column** prop can wrap their chips.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/column.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/column.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ChipGroup/column.vue


Filter results
--------------

Easily create chip groups that provide additional feedback with the **filter** prop. This creates an alternative visual style that communicates to the user that the chip is selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/filter.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/filter.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ChipGroup/filter.vue


Mandatory
---------

Chip groups with **mandatory** prop must always have a value selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/mandatory.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/mandatory.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ChipGroup/mandatory.vue


Multiple
--------

Chip groups with **multiple** prop can have many values selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/multiple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/multiple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ChipGroup/multiple.vue


Product card
------------

The :py:class:`pyvuetify.Chip` component can have an explicit value used for its model. This gets passed to the :py:class:`pyvuetify.ChipGroup` component and is useful for when you don't want to use the chips index as their values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/product_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/product_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ChipGroup/product_card.vue


Toothbrush card
---------------

Chip groups allow the creation of custom interfaces that perform the same actions as an item group or radio controls, but are stylistically different.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/toothbrush_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/toothbrush_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ChipGroup/toothbrush_card.vue


Reddit style categories
-----------------------

Use a combination of utility classes and emojis to create a Reddit-style category selection.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ChipGroup/reddit_categories.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ChipGroup/reddit_categories.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ChipGroup/reddit_categories.vue

