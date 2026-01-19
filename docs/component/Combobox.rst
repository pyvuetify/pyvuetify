Combobox
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation
    <https://v2.vuetifyjs.com/en/components/combobox/>`_. All examples have been
    converted to ipyvuetify syntax.

The :py:class:`Combobox <ipyvuetify.Combobox>` component is a :py:class:`Autocomplete
<ipyvuetify.Autocomplete>` that allows the user to enter values that do not exist
within the provided items. Created items will be returned as strings.

Usage
-----

With :py:class:`Combobox <ipyvuetify.Combobox>`, you can allow a user to create
new values that may not be present in a provided items list.

.. jupyter-execute:: Combobox/usage.py
    :raises:
    :hide-code:

.. api::

    :py:class:`ipyvuetify.Combobox`

Caveats
-------

.. danger::

    As the Combobox allows user input, it always returns the full value provided
    to it (for example a list of Objects will always return an Object when selected).
    This is because there’s no way to tell if a value is supposed to be user input
    or an object lookup `GitHub Issue <https://github.com/vuetifyjs/vuetify/issues/5479>`__.

.. warning::

    The ``auto`` property of ``menu-props`` is only supported for the default input style.

.. note::

    Browser autocomplete is set to off by default, may vary by browser and may be ignored.
    `MDN <https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion>`__

Dense
-----

You can use ``dense`` prop to reduce combobox height and lower max height of list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Combobox/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Combobox/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Combobox/dense.vue

Multiple combobox
-----------------

Previously known as **tags** - user is allowed to enter more than 1 value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Combobox/multiple_combobox.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Combobox/multiple_combobox.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Combobox/multiple_combobox.vue

No data with chips
------------------

In this example we utilize a custom ``no-data`` slot to provide context to the user
when searching / creating items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Combobox/no_data_with_chips.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Combobox/no_data_with_chips.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Combobox/no_data_with_chips.vue

Advanced custom options
-----------------------

The :py:class:`Combobox <ipyvuetify.Combobox>` improves upon the added functionality
from :py:class:`Select <ipyvuetify.Select>` and :py:class:`Autocomplete
<ipyvuetify.Autocomplete>`. This provides you with an expansive interface to
create truly customized implementations. This example takes advantage of some more
advanced features such as a custom filter algorithm, inline list editing and
dynamic input items.

.. todo::

    This example is pending completion as it's a very complex slot-based example.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Combobox/advanced_custom_options.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Combobox/advanced_custom_options.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Combobox/advanced_custom_options.vue

