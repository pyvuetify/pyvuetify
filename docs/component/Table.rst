Table
=====

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/tables/>`__.
    All examples have been converted to pyvuetify syntax.

The simpler of the table components is :py:class:`pyvuetify.Table`, a basic wrapper component for the HTML `` element. In addition, regular table elements such as ``, ``, ``, and `` work by default.

::: info
More advanced tables such as :doc:`DataTable <DataTable>` are available.
:::

.. api::

    :py:class:`pyvuetify.Table`

Theme
-----

Use **theme** prop to switch table to another theme.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Table/dark.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Table/dark.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Table/dark.vue


Density
-------

You can show a dense version of the table by using the **density** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Table/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Table/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Table/dense.vue


Height
------

Use the **height** prop to set the height of the table.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Table/height.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Table/height.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Table/height.vue


Fixed header
------------

Use the **fixed-header** prop together with the **height** prop to fix the header to the top of the table.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Table/fixed_header.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Table/fixed_header.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Table/fixed_header.vue


Striped
-------

By applying the **striped** prop, you can have a background applied to either the **even** or **odd** rows of the table. Color can be further adjusted using sass variables.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Table/striped.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Table/striped.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Table/striped.vue

