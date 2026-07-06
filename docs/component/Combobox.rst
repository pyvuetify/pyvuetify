Combobox
========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/combobox/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Combobox` component is a :doc:`TextField <TextField>` that allows the user to select values from a provided **items** array, or to enter their own value. Created items will be returned as strings.

.. api::

    :py:class:`pyvuetify.Combobox`

Density
-------

You can use ``density`` prop to adjust vertical spacing within the component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Combobox/density.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Combobox/density.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Combobox/density.vue


Placeholder
-----------

Use the **placeholder** prop to give users additional context about the expected values in the combobox. The placeholder will only appear when no items are selected.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Combobox/placeholder.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Combobox/placeholder.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Combobox/placeholder.vue


Multiple combobox
-----------------

Previously known as **tags** - user is allowed to enter more than one value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Combobox/multiple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Combobox/multiple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Combobox/multiple.vue


No data
-------

In this example we utilize a custom **no-data** slot to provide context to the user when searching / creating items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Combobox/no_data.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Combobox/no_data.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Combobox/no_data.vue


Menu header
-----------

The **menu-header** slot allows you to add custom content at the top of the dropdown menu, such as tabs to filter items by category.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Combobox/menu_header.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Combobox/menu_header.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Combobox/menu_header.vue


Custom chips
------------

When working with custom chip slots, it’s recommended to use ``v-bind="props"`` to pass event handler ``@mousedown.stop``. This helps prevent unintentionally opening the dropdown.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Combobox/custom_chip.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Combobox/custom_chip.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Combobox/custom_chip.vue


Advanced custom options
-----------------------

The :py:class:`pyvuetify.Combobox` improves upon the added functionality from :py:class:`pyvuetify.Select` and :py:class:`pyvuetify.Autocomplete`. This provides you with an expansive interface to create truly customized implementations. This example takes advantage of some more advanced features such as a custom **filter** algorithm, inline list editing and dynamic input items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Combobox/advanced.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Combobox/advanced.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Combobox/advanced.vue

