Autocomplete
============


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/autocompletes/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Autocomplete` component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically requesting information from an API.

.. api::

    :py:class:`pyvuetify.Autocomplete`

Density
-------

You can use ``density`` prop to adjust vertical spacing within the component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/density.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/density.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/density.vue


Filter
------

The ``custom-filter`` prop can be used to filter each individual item with custom logic. In this example we filter items by name.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/filter.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/filter.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/filter.vue


Filter keys
-----------

When user is typing in the field to narrow the list of options, the input text is matched against the ``title``. With ``filter-keys`` you can specify which properties should be used instead. Properties of original objects passed to ``items`` need to be accessed via the ``raw.*`` path, as ``filter-keys`` index the root level of ``InternalItem``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/filter_keys.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/filter_keys.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/filter_keys.vue


Subheaders and dividers
-----------------------

The ``items`` prop recognizes special type of ``divider`` and ``subheader``. Those items will be excluded when using filter and can be further customized with dedicated slots.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/items.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/items.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/items.vue


Item and selection
------------------

With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items.



When customizing ``Autocomplete`` items with the #item slot, make sure to forward the slot props using v-bind="props".
This is required for virtual scrolling to work properly — without it, only part of your items may be displayed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/item_and_selection.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/item_and_selection.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/item_and_selection.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/item_and_vbind_props.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/item_and_vbind_props.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/item_and_vbind_props.vue


Menu footer
-----------

The **menu-footer** slot allows you to add custom content at the bottom of the dropdown menu, such as action buttons for clearing the selection or closing the menu.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/menu_footer.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/menu_footer.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/menu_footer.vue


Asynchronous items
------------------

Sometimes you need to load data externally based upon a search query. Simply bind to the ``search`` prop with the **v-model** and watch for the changes to the reactive variable. Make sure to apply debounce and avoid race conditions.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/asynchronous_items.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/asynchronous_items.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/asynchronous_items.vue


State selector
--------------

Using a combination of :py:class:`pyvuetify.Autocomplete` slots and transitions, you can create a stylish toggleable autocomplete field such as this state selector.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/state_selector.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/state_selector.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/state_selector.vue


New tab
-------

The **auto-select-first** property highlights the first result when searching, allowing you to press tab or enter to quickly select it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/new_tab.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/new_tab.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/new_tab.vue

