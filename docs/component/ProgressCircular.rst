ProgressCircular
================

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Progress circular
    documentation <https://v2.vuetifyjs.com/en/components/progress-circular/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ProgressCircular <ipyvuetify.ProgressCircular>` component is
used to convey data circularly to users. It also can be put into an
indeterminate state to portray loading.

.. api::

    :py:class:`ipyvuetify.ProgressCircular`

Usage
-----

In its simplest form, :py:class:`ProgressCircular <ipyvuetify.ProgressCircular>`
displays a circular progress bar. Use the value prop to control the progress.

.. jupyter-execute:: ProgressCircular/usage.py
    :raises:

Examples
--------

Color
^^^^^

Alternate colors can be applied to
:py:class:`ProgressCircular <ipyvuetify.ProgressCircular>` using the ``color``
prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressCircular/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressCircular/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressCircular/color.vue

Indeterminate
^^^^^^^^^^^^^

Using the ``indeterminate`` prop, a
:py:class:`ProgressCircular <ipyvuetify.ProgressCircular>` continues to animate
indefinitely.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressCircular/indeterminate.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressCircular/indeterminate.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressCircular/indeterminate.vue

Rotate
^^^^^^

The ``rotate`` prop gives you the ability to customize the
:py:class:`ProgressCircular <ipyvuetify.ProgressCircular>`'s origin.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressCircular/rotate.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressCircular/rotate.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressCircular/rotate.vue

Size and width
^^^^^^^^^^^^^^

The ``size`` and ``width`` props allow you to easily alter the size and width
of the :py:class:`ProgressCircular <ipyvuetify.ProgressCircular>` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressCircular/size_and_width.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressCircular/size_and_width.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressCircular/size_and_width.vue

