OverflowBtn
===========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Overflow buttons
    documentation <https://v2.vuetifyjs.com/en/components/overflow-btns/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` is used to give the user
the ability to select items from the list. It has 3 variations: ``editable``,
``overflow`` and ``segmented``.

.. api::

    :py:class:`ipyvuetify.OverflowBtn`

Usage
-----

:py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` is used for creating selection
lists.

.. jupyter-execute:: OverflowBtn/usage.py
    :raises:

Examples
--------

Counter
^^^^^^^

You can add a counter to :py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` to
control the max char count.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OverflowBtn/counter.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OverflowBtn/counter.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OverflowBtn/counter.vue

Dense
^^^^^

You can use ``dense`` prop to reduce overflow button height and lower max
height of list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OverflowBtn/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OverflowBtn/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OverflowBtn/dense.vue

Disabled
^^^^^^^^

:py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` can be disabled in order to
prevent a user from interacting with it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OverflowBtn/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OverflowBtn/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OverflowBtn/disabled.vue

Editable
^^^^^^^^

``editable`` :py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` can be directly
edited, just as :py:class:`TextField <ipyvuetify.TextField>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OverflowBtn/editable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OverflowBtn/editable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OverflowBtn/editable.vue

Filled
^^^^^^

Text fields can be used with an alternative box design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OverflowBtn/filled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OverflowBtn/filled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OverflowBtn/filled.vue

Hint
^^^^

You can add a hint for the user using the ``hint`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OverflowBtn/hint.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OverflowBtn/hint.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OverflowBtn/hint.vue

Loading
^^^^^^^

:py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` can have ``loading`` state
with a linear progress bar under them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OverflowBtn/loading.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OverflowBtn/loading.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OverflowBtn/loading.vue

Menu props
^^^^^^^^^^

You can set underlying :py:class:`Menu <ipyvuetify.Menu>` props using
``menu-props`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OverflowBtn/menu_props.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OverflowBtn/menu_props.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OverflowBtn/menu_props.vue

Readonly
^^^^^^^^

:py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` can be put into ``readonly``
mode, it'll become inactive but won't change the color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OverflowBtn/readonly.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OverflowBtn/readonly.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OverflowBtn/readonly.vue

Segmented
^^^^^^^^^

``segmented`` :py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` has an
additional divider between the content and the icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: OverflowBtn/segmented.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: OverflowBtn/segmented.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: OverflowBtn/segmented.vue

