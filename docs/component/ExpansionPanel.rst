ExpansionPanel
==============

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/expansion-panels/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.ExpansionPanel` component is useful for reducing vertical space with large amounts of information. The default functionality of the component is to only display one expansion-panel body at a time; however, with the ``multiple`` property, the expansion-panel can remain open until explicitly closed.

.. api::

    :py:class:`pyvuetify.ExpansionPanel`

Variant
-------

There are four different variants of the expansion-panel. Accordion expansion-panels have no margins around the currently active panel. Inset expansion-panels become smaller when activated, while poput expansion-panels become larger.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanel/variant.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanel/variant.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanel/variant.vue


Gap
---

Use **gap** to add spacing between accordion panels. Can be combined with ``:rounded="[outerRadius, innerRadius]"`` to adjust the panels corner rounding.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanel/rounded_gap.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanel/rounded_gap.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanel/rounded_gap.vue


Disabled
--------

Both the expansion-panel and its content can be disabled using the **disabled** prop.





.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanel/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanel/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanel/disabled.vue


Model
-----

Expansion panels can be controlled externally by using the **v-model**. You will need to set a **value** on each panel, so that you can refer to them outside the component. If the **multiple** prop is set, then the **v-model** value will be an array.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanel/model.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanel/model.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanel/model.vue


Readonly
--------

**readonly** prop does the same thing as **disabled**, but it doesn't touch styles.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanel/readonly.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanel/readonly.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanel/readonly.vue


Advanced
--------

The expansion panel component provides a rich playground to build truly advanced implementations. Here we take advantage of slots in the :py:class:`pyvuetify.ExpansionPanelTitle` component to react to the state of being open or closed by fading content in and out.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanel/advanced.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanel/advanced.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanel/advanced.vue


Custom icon
-----------

Expand action icon can be customized with **expand-icon** prop or the ``actions`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ExpansionPanel/custom_icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ExpansionPanel/custom_icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ExpansionPanel/custom_icons.vue

