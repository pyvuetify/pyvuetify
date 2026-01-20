ExpansionPanels
===============

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Expansion Panels documentation
    <https://v2.vuetifyjs.com/en/components/expansion-panels/>`__. All examples have been converted
    to ipyvuetify syntax.

The :py:class:`ExpansionPanel <ipyvuetify.ExpansionPanel>` component is useful for reducing
vertical space with large amounts of information. The default functionality of the component is
to only display one expansion-panel body at a time; however, with the ``multiple`` property,
the expansion-panel can remain open until explicitly closed.

.. api::

    - :py:class:`ipyvuetify.ExpansionPanels`
    - :py:class:`ipyvuetify.ExpansionPanel`
    - :py:class:`ipyvuetify.ExpansionPanelHeader`
    - :py:class:`ipyvuetify.ExpansionPanelContent`
    - :py:class:`ipyvuetify.ExpandTransition`

Usage
-----

Expansion panels in their simplest form display a list of expandable items.

.. jupyter-execute:: ExpansionPanels/usage.py
    :raises:

Examples
--------

Accordion
^^^^^^^^^

Accordion expansion-panel hasn't got margins around active panel.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanels/accordion.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanels/accordion.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanels/accordion.vue

Disabled
^^^^^^^^

Both the :py:class:`ExpansionPanel <ipyvuetify.ExpansionPanel>` and its content
can be disabled using the ``disabled`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanels/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanels/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanels/disabled.vue

Focusable
^^^^^^^^^

The expansion-panel headers can be made focusable with the prop ``focusable``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanels/focusable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanels/focusable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanels/focusable.vue

Inset
^^^^^

Inset expansion-panel becomes smaller when activated.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanels/inset.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanels/inset.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanels/inset.vue

Model
^^^^^

Expansion panels can be controlled externally by modifying the ``v_model``. Its
value corresponds to a zero-based index of the currently opened expansion panel
content. If ``multiple`` prop is used then it is an array containing the indices
of the open items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanels/model.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanels/model.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanels/model.vue

Popout
^^^^^^

The expansion-panel also has ``popout`` design. With it, expansion-panel is
enlarged when activated.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanels/popout.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanels/popout.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanels/popout.vue

Readonly
^^^^^^^^

The ``readonly`` prop does the same thing as ``disabled``, but it doesn't touch styles.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanels/readonly.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanels/readonly.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanels/readonly.vue

Advanced
^^^^^^^^

The expansion panel component provides a rich playground to build truly advanced
implementations. Here we take advantage of slots in the
:py:class:`ExpansionPanelHeader <ipyvuetify.ExpansionPanelHeader>` component to
react to the state of being open or closed by fading content in and out.

.. todo::

    This example depends heavily on the slot system which is quite sophisticated,
    any brave soul willing to translate it to ipyvuetify syntax will be greatly appreciated.
    :fas:`heart`

Custom icon
^^^^^^^^^^^

Expand action icon can be customized with ``expand_icon`` prop or the ``actions`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanels/custom_icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanels/custom_icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanels/custom_icon.vue

