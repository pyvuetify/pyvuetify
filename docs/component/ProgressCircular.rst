ProgressCircular
================

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/progress-circular/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.ProgressCircular` component is used to convey data circularly to users. It also can be put into an indeterminate state to portray loading.

.. api::

    :py:class:`pyvuetify.ProgressCircular`

Color
-----

Alternate colors can be applied to :py:class:`pyvuetify.ProgressCircular` using the ``color`` prop.

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
-------------

Using the ``indeterminate`` prop, a :py:class:`pyvuetify.ProgressCircular` continues to animate indefinitely.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressCircular/indeterminate.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressCircular/indeterminate.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressCircular/indeterminate.vue


Reveal
------

The ``reveal`` prop animates the progress circle from 0 to its model value when the component mounts.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressCircular/reveal.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressCircular/reveal.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressCircular/reveal.vue


Rotate
------

The ``rotate`` prop gives you the ability to customize the :py:class:`pyvuetify.ProgressCircular`'s origin.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressCircular/rotate.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressCircular/rotate.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressCircular/rotate.vue


Size and Width
--------------

The ``size`` and ``width`` props allow you to easily alter the size and width of the :py:class:`pyvuetify.ProgressCircular` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressCircular/size_and_width.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressCircular/size_and_width.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressCircular/size_and_width.vue


Default
-------

``default`` slot can be used to replace the text inside the loader.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ProgressCircular/slot_default.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ProgressCircular/slot_default.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ProgressCircular/slot_default.vue

