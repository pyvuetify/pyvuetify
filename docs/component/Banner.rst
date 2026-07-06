Banner
======

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/banners/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Banner` component is used as a middle-interrupting message to the user with one to two actions.

.. api::

    :py:class:`pyvuetify.Banner`

Lines
-----

The prop **lines** can be used to specify how the displayed text should be handled based on its length.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Banner/lines.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Banner/lines.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Banner/lines.vue


Sticky
------

You can optionally turn on the **sticky** prop to ensure that the content is pinned to the top of the screen.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Banner/sticky.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Banner/sticky.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Banner/sticky.vue


Actions
-------

Banners may have one or two text buttons that don't stand out that much.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Banner/actions.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Banner/actions.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Banner/actions.vue


Icon
----

The icon slot allows you to explicitly control the content and functionality within it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Banner/icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Banner/icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Banner/icon.vue


Prepend
-------

The prepend slot allows you to explicitly control the content and functionality within it. Icons also help to emphasize a banner's message.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Banner/prepend.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Banner/prepend.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Banner/prepend.vue

