RangeSlider
===========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/range-sliders/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`RangeSlider <ipyvuetify.RangeSlider>` component is an extension of v-slider that allows you to select a range of values.

.. api::

    :py:class:`ipyvuetify.RangeSlider`

Usage
-----

Range sliders allow you to select a range of values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.RangeSlider(
                v_model=[20, 60],
                label='Range'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.RangeSlider(
                v_model=[20, 60],
                label='Range'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-range-slider
                v-model="range"
                label="Range"
              ></v-range-slider>
            </template>

Min and Max
-----------

You can set the min and max values of the range slider.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.RangeSlider(
                v_model=[20, 80],
                min=0,
                max=100,
                label='Range'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.RangeSlider(
                v_model=[20, 80],
                min=0,
                max=100,
                label='Range'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-range-slider
                v-model="range"
                :min="0"
                :max="100"
                label="Range"
              ></v-range-slider>
            </template>
