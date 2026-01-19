Select
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Selects
    documentation <https://v2.vuetifyjs.com/en/components/selects/>`__.
    All examples have been converted to ipyvuetify syntax.

Select fields components are used for collecting user provided information from
a list of options.

.. api::

    - :py:class:`ipyvuetify.Select`

Usage
-----

Select fields components are used for collecting user provided information from
a list of options.

.. jupyter-execute:: Select/usage.py
    :raises:

.. note::

    Browser autocomplete is set to off by default, may vary by browser and may be
    ignored. See `MDN documentation
    <https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion>`__
    for more information.

.. warning::

    The ``auto`` property of ``menu_props`` is only supported for the default input style.

.. danger::

    When using objects for the ``items`` prop, you must associate ``item-text`` and
    ``item-value`` with existing properties on your objects. These values are defaulted
    to ``text`` and ``value`` and can be changed.

Examples
--------

Custom text and value
^^^^^^^^^^^^^^^^^^^^^

You can specify the specific properties within your items array correspond to
the text and value fields. By default, this is text and value. In this example
we also use the return-object prop which will return the entire object of the
selected item on selection.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/custom_text_and_value.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/custom_text_and_value.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/custom_text_and_value.vue

Dense
^^^^^

You can use ``dense`` prop to reduce the field height and lower max height of list
items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/dense.vue

Disabled
^^^^^^^^

Applying the disabled prop to a :py:class:`Select <ipyvuetify.Select>` will
prevent a user from interacting with the component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/disabled.vue

Icons
^^^^^

Use a custom prepended or appended icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/icons.vue

Chips
^^^^^

A standard single select has a multitude of configuration options.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/chips.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/chips.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/chips.vue

Multiple
^^^^^^^^

A multi-select can utilize :py:class:`Chip <ipyvuetify.Chip>` as the display
for selected items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/multiple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/multiple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/multiple.vue

Readonly
^^^^^^^^

You can use the read-only prop on :py:class:`Select <ipyvuetify.Select>` which
will prevent a user from changing its value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Select/readonly.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Select/readonly.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Select/readonly.vue

Append and prepend item
^^^^^^^^^^^^^^^^^^^^^^^

The :py:class:`Select <ipyvuetify.Select>` components can be optionally
expanded with prepended and appended items. This is perfect for customized
select-all functionality.

.. todo::

    This example requires custom logic to handle the select-all functionality.

Selection
^^^^^^^^^

The selection slot can be used to customize the way selected values are shown
in the input. This is great when you want something like ``foo (+20 others)``
or don't want the selection to occupy multiple lines.

.. todo::

    This example requires custom logic to handle the selection display.
