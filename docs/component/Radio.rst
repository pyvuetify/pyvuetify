Radio
=====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Radio buttons
    documentation <https://v2.vuetifyjs.com/en/components/radio-buttons/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Radio <ipyvuetify.Radio>` component is a simple radio button.
When combined with the :py:class:`RadioGroup <ipyvuetify.RadioGroup>` component
you can provide groupable functionality to allow users to select from a
predefined set of options.

.. api::

    - :py:class:`ipyvuetify.Radio`
    - :py:class:`ipyvuetify.RadioGroup`

Usage
-----

Although :py:class:`Radio <ipyvuetify.Radio>` can be used on its own, it is
best used in conjunction with :py:class:`RadioGroup <ipyvuetify.RadioGroup>`.
Using the v-model on the :py:class:`RadioGroup <ipyvuetify.RadioGroup>` you can
access the value of the selected radio button inside the group.

.. jupyter-execute:: Radio/usage.py
    :raises:

Examples
--------

Colors
^^^^^^

Radios can be colored by using any of the builtin colors and contextual names
using the color prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Radio/colors.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Radio/colors.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Radio/colors.vue

Direction
^^^^^^^^^

Radio-groups can be presented either as a row or a column, using their
respective props. The default is as a column.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Radio/direction.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Radio/direction.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Radio/direction.vue

Label
^^^^^

Radio Group labels can be defined in ``label`` slot - that will allow to use
HTML content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Radio/label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Radio/label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Radio/label.vue

