Tooltip
=======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Tooltips
    documentation <https://v2.vuetifyjs.com/en/components/tooltips/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Tooltip <ipyvuetify.Tooltip>` component is useful for conveying
information when a user hovers over an element. You can also programmatically
control the display of tooltips through a ``v_model``. When activated, tooltips
display a text label identifying an element, such as a description of its function.

.. api::

    - :py:class:`ipyvuetify.Tooltip`

.. note:: Caveats

    In order for :py:class:`Tooltip <ipyvuetify.Tooltip>` to be positioned
    correctly a position prop (**top** | **bottom** | **left** | **right**) is
    required.

Usage
-----

Tooltips can wrap any element.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>

Examples
--------

Alignment
^^^^^^^^^

A tooltip can be aligned to any of the **four sides** of the activator element.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>

Color
^^^^^

Tooltip color can be set with the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>

Visibility
^^^^^^^^^^

Tooltip visibility can be programmatically changed using ``v_model``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>
