Parallax
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Parallax
    documentation <https://v2.vuetifyjs.com/en/components/parallax/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Parallax <ipyvuetify.Parallax>` component creates a 3d effect
that makes an image appear to scroll slower than the window.

.. api::

    :py:class:`ipyvuetify.Parallax`

Usage
-----

A parallax causes a shift in a background image when the user scrolls the page.

.. jupyter-execute:: Parallax/usage.py
    :raises:

Examples
--------

Content
^^^^^^^

You can also place any content inside of the parallax. This allows you to use
the parallax as a hero image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Parallax/content.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Parallax/content.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Parallax/content.vue

Custom height
^^^^^^^^^^^^^

You can specify a custom height on a parallax. Keep in mind this can break the
parallax if your image is not sized properly.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Parallax/custom_height.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Parallax/custom_height.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Parallax/custom_height.vue

