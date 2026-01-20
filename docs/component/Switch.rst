Switch
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Switch
    documentation <https://v2.vuetifyjs.com/en/components/switches/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Switch <ipyvuetify.Switch>` component provides users the
ability to choose between two distinct values. These are very similar to a
toggle, or on/off switch, though aesthetically different than a checkbox.

.. api::

    - :py:class:`ipyvuetify.Switch`

Usage
-----

A :py:class:`Switch <ipyvuetify.Switch>` in its simplest form provides a
toggle between 2 values.

.. jupyter-execute:: Switch/usage.py
    :raises:

Examples
--------

Colors
^^^^^^

Switches can be colored by using any of the builtin colors and contextual
names using the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Switch/colors.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Switch/colors.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Switch/colors.vue

Flat
^^^^

You can make switch render without elevation of thumb using ``flat`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Switch/flat.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Switch/flat.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Switch/flat.vue

Inset
^^^^^

You can make switch render in inset mode.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Switch/inset.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Switch/inset.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Switch/inset.vue

Model as array
^^^^^^^^^^^^^^

Multiple :py:class:`Switch <ipyvuetify.Switch>` can share the same
``v_model`` by using an array.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Switch/model_as_array.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Switch/model_as_array.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Switch/model_as_array.vue

Model as boolean
^^^^^^^^^^^^^^^^

A single :py:class:`Switch <ipyvuetify.Switch>` will have a boolean value as
its value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Switch/model_as_boolean.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Switch/model_as_boolean.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Switch/model_as_boolean.vue

States
^^^^^^

:py:class:`Switch <ipyvuetify.Switch>` can have different states such as
default, disabled, and loading.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Switch/states.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Switch/states.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Switch/states.vue

Slots
-----

Label
^^^^^

Switch labels can be defined in ``label`` slot - that will allow to use HTML
content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Switch/label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Switch/label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Switch/label.vue

