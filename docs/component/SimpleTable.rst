SimpleTable
===========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Simple tables
    documentation <https://v2.vuetifyjs.com/en/components/simple-tables/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`SimpleTable <ipyvuetify.SimpleTable>` component is a simple
wrapper component around the ``<table>`` element. Inside the component you can
use all the regular table elements such as ``<thead>``, ``<tbody>``, ``<tr>``,
etc.

.. api::

    - :py:class:`ipyvuetify.SimpleTable`

Usage
-----

The simple table is a wrapper component around the ``<table>`` element.

.. jupyter-execute:: SimpleTable/usage.py
    :raises:

Examples
--------

Dark
^^^^

Use dark prop to switch table to the dark theme.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SimpleTable/dark.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SimpleTable/dark.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SimpleTable/dark.vue

Dense
^^^^^

You can show a dense version of the table by using the dense prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SimpleTable/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SimpleTable/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SimpleTable/dense.vue

Fixed header
^^^^^^^^^^^^

Use the fixed-header prop together with the height prop to fix the header to
the top of the table.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SimpleTable/fixed_header.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SimpleTable/fixed_header.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SimpleTable/fixed_header.vue

Height
^^^^^^

Use the height prop to set the height of the table.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SimpleTable/height.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SimpleTable/height.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SimpleTable/height.vue

