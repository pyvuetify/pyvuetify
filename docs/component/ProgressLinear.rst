ProgressLinear
==============

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Progress linear
    documentation <https://v2.vuetifyjs.com/en/components/progress-linear/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` component is used to
convey data visually to users. They can also represent an indeterminate amount,
such as loading or processing.

.. api::

    :py:class:`ipyvuetify.ProgressLinear`

Usage
-----

In its simplest form, :py:class:`ProgressLinear <ipyvuetify.ProgressLinear>`
displays a horizontal progress bar. Use the value prop to control the progress.

.. jupyter-execute:: ProgressLinear/usage.py
    :raises:

Examples
--------

Buffer value
^^^^^^^^^^^^

A buffer state represents two values simultaneously. The primary value is
controlled by v-model, whereas the buffer is controlled by the buffer-value
prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/buffer_value.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/buffer_value.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/buffer_value.vue

Colors
^^^^^^

You can also set the color using the props color and background-color.

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
^^^^^^^^^^^^^

Using the ``indeterminate`` prop,
:py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` continuously animates.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/indeterminate.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/indeterminate.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/indeterminate.vue

Rounded
^^^^^^^

The rounded prop is an alternative style that adds a border radius to the
:py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` component.

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
^^^^^^

The stream property works with buffer-value to convey to the user that there is
some action taking place. You can use any combination of buffer-value and value
to achieve your design.

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
^^^^^^^

This applies a striped background over the value portion of the
:py:class:`ProgressLinear <ipyvuetify.ProgressLinear>`.

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
^^^^^^^

The :py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` component will be
responsive to user input when using v-model. You can use the default slot or
bind a local model to display inside of the progress. If you are looking for
advanced features on a linear type component, check out
:py:class:`Slider <ipyvuetify.Slider>`.

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
^^^^^^^^^^^

The progress linear component can have a determinate state modified by v-model.

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
^^^^^^^^^^^

The :py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` component is good
for translating to the user that they are waiting for a response.

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
^^^^^^^^^^^^^^

Using the absolute prop we are able to position the
:py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` component at the bottom
of the :py:class:`Toolbar <ipyvuetify.Toolbar>`. We also use the active prop
which allows us to control the visibility of the progress.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressLinear/toolbar_loader.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressLinear/toolbar_loader.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressLinear/toolbar_loader.vue

