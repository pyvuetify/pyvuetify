Rating
======


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/ratings/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Rating` component is a specialized but important piece in building user widgets. Collecting user feedback via ratings is a simple analytic that can provide a lot of feedback to your product or application.

.. api::

    :py:class:`pyvuetify.Rating`

Color
-----

The :py:class:`pyvuetify.Rating` component can be colored as you want, you can set both selected and not selected colors.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/color.vue


Density
-------

Control the space occupied by :py:class:`pyvuetify.Rating` items using the **density** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/density.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/density.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/density.vue


Clearable
---------

Clicking on a current rating value can reset the rating by using **clearable** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/clearable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/clearable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/clearable.vue


Readonly
--------

For ratings that are not meant to be changed you can use **readonly** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/readonly.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/readonly.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/readonly.vue


Hover effect
------------

When using the **hover** prop, the rating icons will become a solid color and slightly increase its scale when the mouse is hovered over them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/hover.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/hover.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/hover.vue


Labels
------

The :py:class:`pyvuetify.Rating` component can display labels above or below each item.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/item_labels.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/item_labels.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/item_labels.vue


Icons
-----

You can use custom icons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/icons.vue


Length
------

Change the number of items by modifying the the **length** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/length.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/length.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/length.vue


Half increments
---------------

The **half-increments** prop increases the granularity of the ratings, allow for ``.5`` values as well.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/half_increments.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/half_increments.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/half_increments.vue


Size
----

Utilize the same sizing classes available in :py:class:`pyvuetify.Icon` or provide your own with the **size** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/size.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/size.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/size.vue


Aria Label
----------

Provide a label to assistive technologies for each item.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/icon_label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/icon_label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/icon_label.vue


Item slot
---------

Slots enable advanced customization possibilities and provide you with more freedom in how you display the rating.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/item.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/item.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/item.vue


Custom labels slot
------------------

Any arbitrary content could be displayed for labels in **item-label** slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/item_label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/item_label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/item_label.vue


Misc
----



.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/advanced.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/advanced.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/advanced.vue


Card ratings
------------

The rating component pairs well with products allowing you to gather and display customer feedback.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/card.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/card_overview.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/card_overview.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/card_overview.vue

