Chip
====


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/chips/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Chip` component is used to convey small pieces of information. Using the ``close`` property, the chip becomes interactive, allowing user interaction. This component is used by the :doc:`ChipGroup <ChipGroup>` for advanced selection options.

.. api::

    :py:class:`pyvuetify.Chip`

Props
-----

Similar to other components such as :doc:`Button <Button>` and :doc:`List <List>`, the :py:class:`pyvuetify.Chip` component has a large selection of props for customizing the appearance.


Closable
--------

Closable chips can be controlled with a v-model. You can also listen to the ``click:close`` event if you want to know when a chip has been closed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/closable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/closable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/closable.vue


Color and variants
------------------

Any color from the Material Design palette can be used to change a chips color.



The **variant** prop gives you easy access to several different button styles. Available variants are: **elevated**, **flat**, **tonal** (default), **outlined**, **text**, and **plain**.

| Value        | Example                                                  | Description                                                     |
|--------------|----------------------------------------------------------|-----------------------------------------------------------------|
| **elevated** | Chip | Elevates the chip with a shadow                               |
| **flat**     | Chip     | Removes chip shadow                                           |
| **tonal**    | Chip    | Background color is a lowered opacity of the current text color |
| **outlined** | Chip | Applies a thin border with the current text color               |
| **text**     | Chip     | Removes the background and removes shadow                       |
| **plain**    | Chip    | Removes the background and lowers the opacity until hovered     |

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/colored.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/colored.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/colored.vue


Size and density
----------------

Chips can have various sizes from ``x-small`` to ``x-large``. ``density`` is used to adjust the vertical spacing without affecting width or font size.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/sizes.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/sizes.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/sizes.vue


Draggable
---------

``draggable`` :py:class:`pyvuetify.Chip` component can be dragged by mouse.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/draggable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/draggable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/draggable.vue


Label
-----

Label chips use the :py:class:`pyvuetify.Card` border-radius.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/label.vue


No ripple
---------

:py:class:`pyvuetify.Chip` can be rendered without ripple if ``ripple`` prop is set to ``false``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/no_ripple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/no_ripple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/no_ripple.vue


Outlined
--------

Outlined chips inherit their border color from the current text color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/outlined.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/outlined.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/outlined.vue


Icon
----

Chips can use text or any icon available in the Material Icons font library.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/icon.vue


Action chips
------------

Chips can be used as actionable items. Provided with a *click* event, the chip becomes interactive and can invoke methods.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/action_chips.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/action_chips.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/action_chips.vue


Custom list
-----------

In this example we opt to use a customized list instead of :doc:`Autocomplete <Autocomplete>`. This allows us to always display the options available while still providing the same functionality of search and selection.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/custom_list.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/custom_list.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/custom_list.vue


Expandable
----------

Chips can be combined with :py:class:`pyvuetify.Menu` to enable a specific set of actions for a chip.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/expandable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/expandable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/expandable.vue


Filtering
---------

Chips are great for providing supplementary actions to a particular task. In this instance, we are searching a list of items and collecting a subset of information to display available keywords.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/filtering.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/filtering.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/filtering.vue


In selects
----------

Selects can use chips to display the selected data. Try adding your own tags below.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Chip/in_selects.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Chip/in_selects.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Chip/in_selects.vue

