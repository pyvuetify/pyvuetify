Autocomplete
============

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/autocompletes/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Autocomplete <ipyvuetify.Autocomplete>` component offers simple and flexible type-ahead
functionality. This is useful when searching large sets of data or even dynamically requesting information
from an API. The autocomplete component extends :py:class:`Select <ipyvuetify.Select>` and adds the
ability to filter items.

.. api::

    :py:class:`ipyvuetify.Autocomplete`

Usage
-----

The autocomplete component extends :py:class:`Select <ipyvuetify.Select>` and adds the ability to filter items.

.. jupyter-execute:: Autocomplete/usage.py
    :raises:

Dense
-----

You can use ``dense`` prop to reduce autocomplete height and lower max height of list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/dense.vue

No-Filter
---------

The ``no-filter`` prop can be used to prevent filtering of the items. Useful when
you want to display all options regardless of the search input.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/no_filter.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/no_filter.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/no_filter.vue

Slots
-----

With the power of slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/slots.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/slots.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/slots.vue

Asynchronous items
------------------

Sometimes you need to load data externally based upon a search query. Use the ``search_input`` prop
with the ``.sync`` modifier when using the ``autocomplete`` prop. We also make use of the new
``cache_items`` prop. This will keep a unique list of all items that have been passed to the ``items``
prop and is REQUIRED when using asynchronous items and the multiple prop.

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

Using a combination of :py:class:`Autocomplete <ipyvuetify.Autocomplete>` slots and transitions, you
can create a stylish toggleable autocomplete field such as this state selector.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Autocomplete/state_selector.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Autocomplete/state_selector.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Autocomplete/state_selector.vue

