Banner
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/banners/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Banner <ipyvuetify.Banner>` component is used as middle-interruptive message to user
with 1-2 actions. It comes in 2 variations single-line and multi-line (implicit). These can have icons
which you can use with your message and actions.

.. api::

    :py:class:`ipyvuetify.Banner`

Usage
-----

Banners can have 1-2 lines of text, actions and icon.

.. jupyter-execute:: Banner/usage.py
    :raises:

Single line
-----------

Single-line :py:class:`Banner <ipyvuetify.Banner>` is used for small amount of information and is
recommended for desktop only implementations. You can optionally enable the ``sticky`` prop to ensure
the content is pinned to the screen (note: does not work in IE11).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Banner/single_line.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Banner/single_line.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Banner/single_line.vue

Icon click event
----------------

:py:class:`Banner <ipyvuetify.Banner>` emits ``click:icon`` event on icon click, even with custom icon slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Banner/icon_click_event.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Banner/icon_click_event.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Banner/icon_click_event.vue

Actions slot
------------

The ``actions`` slot has ``dismiss`` function in its scope, you can use it to easily dismiss banner.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Banner/actions_slot.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Banner/actions_slot.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Banner/actions_slot.vue

Icon slot
---------

The icon slot allows you to explicitly control the content and functionality within it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Banner/icon_slot.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Banner/icon_slot.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Banner/icon_slot.vue

Two line
--------

Two-line :py:class:`Banner <ipyvuetify.Banner>` can store larger amount of data, use it for big messages.
This is recommended for mobile implementations.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Banner/two_line.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Banner/two_line.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Banner/two_line.vue

