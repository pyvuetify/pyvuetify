Rating
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Ratings
    documentation <https://v2.vuetifyjs.com/en/components/ratings/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Rating <ipyvuetify.Rating>` component is a specialized but
crucial piece in building user widgets. Collecting user feedback via ratings
is a simple analytic that can provide a lot of feedback to your product or
application.

.. api::

    - :py:class:`ipyvuetify.Rating`

Usage
-----

The :py:class:`Rating <ipyvuetify.Rating>` component provides a simple
interface for gathering user feedback.

.. jupyter-execute:: Rating/usage.py
    :raises:

Examples
--------

Color
^^^^^

The :py:class:`Rating <ipyvuetify.Rating>` component can be colored as you
want, you can set both selected and not selected colors.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/color.vue

Length
^^^^^^

Sometimes an application will call for a customized implementation. Easily
change length or displayed icons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/length.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/length.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/length.vue

Incremented
^^^^^^^^^^^

A rating can have 3 defined icons, full-icon, half-icon (with the
half-increments prop) and empty-icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/incremented.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/incremented.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/incremented.vue

Size
^^^^

Utilize the same sizing classes available in :py:class:`Icon <ipyvuetify.Icon>`
or provide your own with the size prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/size.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/size.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/size.vue

Icon Label
^^^^^^^^^^

Provide a label to assistive technologies for icons.

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
^^^^^^^^^

Slots are provided to give you even more freedom in how you display the
rating.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/item_slot.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/item_slot.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/item_slot.vue

Advanced usage
^^^^^^^^^^^^^^

The :py:class:`Rating <ipyvuetify.Rating>` component fits right in with
existing components. Build truly complex examples with rich features and
beautiful designs.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/advanced_usage.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/advanced_usage.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/advanced_usage.vue

Card ratings
^^^^^^^^^^^^

The rating component pairs well with products allowing you to gather and
display customer feedback.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Rating/card_ratings.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Rating/card_ratings.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Rating/card_ratings.vue

