Overlay
=======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Overlays
    documentation <https://v2.vuetifyjs.com/en/components/overlays/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Overlay <ipyvuetify.Overlay>` component is used to provide
emphasis on a particular element or parts of it. It signals to the user of a
state change within the application and can be used for creating loaders,
dialogs and more.

.. api::

    :py:class:`ipyvuetify.Overlay`

Usage
-----

In its simplest form, the :py:class:`Overlay <ipyvuetify.Overlay>` component
will add a dimmed layer over your application.

.. jupyter-execute:: Overlay/usage.py
    :raises:

Examples
--------

Absolute
^^^^^^^^

``absolute`` overlays are positioned absolutely and contained inside of their
parent element.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Overlay/absolute.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Overlay/absolute.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Overlay/absolute.vue

Opacity
^^^^^^^

``opacity`` allows you to customize the transparency of
:py:class:`Overlay <ipyvuetify.Overlay>` components.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Overlay/opacity.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Overlay/opacity.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Overlay/opacity.vue

Advanced
^^^^^^^^

Using the :py:class:`Hover <ipyvuetify.Hover>`, we are able to add a nice scrim
over the information card with additional actions the user can take.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Overlay/advanced.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Overlay/advanced.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Overlay/advanced.vue

Loader
^^^^^^

Using the :py:class:`Overlay <ipyvuetify.Overlay>` as a background, add a
progress component to easily create a custom loader.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Overlay/loader.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Overlay/loader.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Overlay/loader.vue

