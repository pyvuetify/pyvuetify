ProgressLinear
==============


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/progress-linear/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.ProgressLinear` component is used to convey data visually to users. It supports both indeterminate amounts, such as loading or processing, and finite amounts of progress (including separate buffer values).

.. api::

    :py:class:`pyvuetify.ProgressLinear`

Buffering
---------

The primary value is controlled by **v-model**, whereas the buffer is controlled by the **buffer-value** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/buffer_value.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/buffer_value.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/buffer_value.vue


Chunks
------

The component can be split into chunks using ``chunk-count`` or ``chunk-width``. Visible progress is snapped to the last filled chunk.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/chunks.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/chunks.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/chunks.vue


Colors
------

You can set the colors of the progress bar using the props **color** and **bg-color**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/colors.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/colors.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/colors.vue


Indeterminate
-------------

Using the **indeterminate** prop, :py:class:`pyvuetify.ProgressLinear` continuously animates.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/indeterminate.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/indeterminate.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/indeterminate.vue


Reversed
--------

Displays reversed progress. The component also has RTL support, such that a progress bar in right-to-left mode with **reverse** prop enabled will display left-to-right.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/reverse.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/reverse.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/reverse.vue


Rounded
-------

The **rounded** prop is used to apply a border radius to the :py:class:`pyvuetify.ProgressLinear` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/rounded.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/rounded.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/rounded.vue


Stream
------

The **stream** property works with **buffer-value** to convey to the user that there is some action taking place.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/stream.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/stream.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/stream.vue


Striped
-------

This applies a striped background over the value portion of the :py:class:`pyvuetify.ProgressLinear`. This prop has no effect when using **indeterminate**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/striped.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/striped.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/striped.vue


Default
-------

Default slot exposes current value as **percentage** (0–100) in relation to ``max`` prop (100 by default). It is recommended to round it in order to avoid JavaScript floating point number representation with lots of decimal digits. You can use ``Math.round()`` or ``.toFixed()`` to render the value correctly.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/default.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/default.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/default.vue


Determinate
-----------

The progress linear component can have a determinate state modified by **v-model**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/determinate.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/determinate.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/determinate.vue


File loader
-----------

The :py:class:`pyvuetify.ProgressLinear` component is good for communicating to the user that they are waiting for a response.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/file_loader.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/file_loader.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/file_loader.vue


Toolbar loader
--------------

Using the **absolute** prop we are able to position the :py:class:`pyvuetify.ProgressLinear` component at the bottom of the :py:class:`pyvuetify.Toolbar`. We also use the **active** prop which allows us to control the visibility of the progress.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/toolbar_loader.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/toolbar_loader.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/toolbar_loader.vue


Buffer color and opacity
------------------------

The buffer color and opacity can be controlled using the **buffer-color** and **buffer-opacity** props. This enables you to make multi colored progress bars.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/buffer_color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/buffer_color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/buffer_color.vue

