Parallax
========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/parallax/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Parallax` component creates a 3d effect that makes an image appear to scroll slower than the window.

.. api::

    :py:class:`pyvuetify.Parallax`

Content
-------

You can also place any content inside of the parallax. This allows you to use the parallax as a hero image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Parallax/content.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Parallax/content.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Parallax/content.vue


Welcome
-------

You can use it as a welcome section or as a portfolio hero section.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Parallax/welcome.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Parallax/welcome.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Parallax/welcome.vue


Custom height
-------------

You can specify a custom height on a parallax. Keep in mind this can break the parallax if your image is not sized properly

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Parallax/custom_height.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Parallax/custom_height.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Parallax/custom_height.vue

