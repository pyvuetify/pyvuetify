Chip
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/chips/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Chip <ipyvuetify.Chip>` component is used to convey small pieces of information.
Using the ``close`` property, the chip becomes interactive, allowing user interaction.
This component is used by the :py:class:`ChipGroup <ipyvuetify.ChipGroup>` for advanced selection options.

Usage
-----

Chips come in the following variations: closeable, colored, outlined, and sized.
The default slot allows you to customize the content inside the chip.

.. jupyter-execute:: Chip/usage.py
    :raises:

.. api::

    - :py:class:`ipyvuetify.Chip`
    - :py:class:`ipyvuetify.ChipGroup`

Closeable
---------

Closeable chips can be controlled with a ``v_model``. You can also listen to the
``click:close`` event to perform actions when the chip is closed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/closeable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/closeable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/closeable.vue

Colored
-------

Any color from the Material Design palette can be used to change a chip's color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/colored.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/colored.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/colored.vue

Draggable
---------

``draggable`` :py:class:`Chip <ipyvuetify.Chip>` component can be dragged by mouse.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/draggable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/draggable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/draggable.vue

Filter
------

:py:class:`Chip <ipyvuetify.Chip>` component has ``filter`` option which shows an
additional icon to you if chip is active. It can be customized using ``filter-icon``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/filter.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/filter.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/filter.vue

Label
-----

Label chips use the :py:class:`Card <ipyvuetify.Card>` border-radius.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/label.vue

No ripple
---------

:py:class:`Chip <ipyvuetify.Chip>` can be rendered without ripple if ``ripple`` prop is set to ``false``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/no_ripple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/no_ripple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/no_ripple.vue

Outlined
--------

Outlined chips inherit their border color from the current text color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/outlined.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/outlined.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/outlined.vue

Sizes
-----

:py:class:`Chip <ipyvuetify.Chip>` component can have various sizes from ``x-small`` to ``x-large``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/sizes.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/sizes.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/sizes.vue

Icon
----

Chips can use text or any icon available in the Material Icons font library.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/icon.vue

