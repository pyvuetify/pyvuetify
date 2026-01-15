Sparkline
=========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/sparklines/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Sparkline <ipyvuetify.Sparkline>` component can be used to create simple graphs, like GitHub's contribution chart. The sparkline component comes in 2 variations, trend (default) and bar.

.. api::

    :py:class:`ipyvuetify.Sparkline`

Usage
-----

A sparkline is a tiny chart that provides a visual representation of data. Each supports a multitude of options for customizing the look and feel of the sparkline.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Sparkline(
                value=[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Sparkline(
                value=[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-sparkline
                :value="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
              ></v-sparkline>
            </template>

Fill
----

You can create a ``v-sparkline`` with fill using the ``fill`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Sparkline(
                value=[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
                fill=True,
                color='blue',
                line_width=2
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Sparkline(
                value=[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
                fill=True,
                color='blue',
                line_width=2
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-sparkline
                :value="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
                fill
                color="blue"
                :line-width="2"
              ></v-sparkline>
            </template>
