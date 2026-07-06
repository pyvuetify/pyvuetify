ColorInput
==========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/color-inputs/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.ColorInput` component combines a text field with a color picker..

.. api::

    :py:class:`pyvuetify.ColorInput`

Props
-----

The :py:class:`pyvuetify.ColorInput` component extends the :doc:`TextField <TextField>` and :doc:`ColorPicker <ColorPicker>` component; and supports all of their props.


Pip location
------------

You can move the pip icon within the input by utilizing the ``pip-location`` or hide it entirely with ``hide-pip``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ColorInput/pip_location.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ColorInput/pip_location.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ColorInput/pip_location.vue


Color Pip
---------

The ``color-pip`` is a boolean that determines whether the pip icon color matches the selected color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ColorInput/color_pip.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ColorInput/color_pip.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ColorInput/color_pip.vue


Pip variant
-----------

The ``pip-variant`` lets you further customize the pip icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ColorInput/pip_variant.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ColorInput/pip_variant.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ColorInput/pip_variant.vue

