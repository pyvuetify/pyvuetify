Img
===

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Images documentation
    <https://v2.vuetifyjs.com/en/components/images/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Img <ipyvuetify.Img>` component is packed with features to
support rich media. Combined with the `vuetify-loader
<https://github.com/vuetifyjs/vuetify-loader>`__, you can add dynamic
progressive images to provide a better user experience.

.. api::

    :py:class:`ipyvuetify.Img`

Usage
-----

:py:class:`Img <ipyvuetify.Img>` component is used to display a responsive
image with lazy-load and placeholder.

.. jupyter-execute:: Img/usage.py
    :raises:

Examples
--------

Aspect ratio
^^^^^^^^^^^^

You can set a fixed aspect ratio if you want to change aspect ratio of the
image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Img/aspect_ratio.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Img/aspect_ratio.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Img/aspect_ratio.vue

Contain
^^^^^^^

If the provided aspect ratio doesn't match that of the actual image, the default
behavior is to fill as much space as possible, clipping the sides of the image.
Enabling the ``contain`` prop will prevent this, but will result in empty space
at the sides.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Img/contain.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Img/contain.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Img/contain.vue

Gradients
^^^^^^^^^

The ``gradient`` prop can be used to apply a simple gradient overlay to the
image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Img/gradients.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Img/gradients.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Img/gradients.vue

Height
^^^^^^

:py:class:`Img <ipyvuetify.Img>` will automatically grow to the size of its
``src``, preserving the correct aspect ratio. You can limit this with the
``height`` and ``max-height`` props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Img/height.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Img/height.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Img/height.vue

Placeholder
^^^^^^^^^^^

:py:class:`Img <ipyvuetify.Img>` has a special ``placeholder`` slot for
placeholder to display while image's loading. Note: the example below has bad
src which won't load for you to see placeholder.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Img/placeholder.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Img/placeholder.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Img/placeholder.vue

Grid
^^^^

You can use :py:class:`Img <ipyvuetify.Img>` to make, for example, a picture
gallery.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Img/grid.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Img/grid.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Img/grid.vue

