Slider
======

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/sliders/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Slider <ipyvuetify.Slider>` component is a better visualization of the number input. It is used for gathering numerical user data.

.. api::

    :py:class:`ipyvuetify.Slider`

Usage
-----

Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            slider = v.Slider(v_model=0)
            slider

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            slider = v.Slider(v_model=0)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-slider v-model="value"></v-slider>
            </template>

Discrete
--------

Discrete sliders offer a thumb label that displays the exact current amount. Using the ``step`` prop you can control the precision of the selection.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            slider = v.Slider(
                v_model=20,
                thumb_label=True,
                step=10
            )
            slider

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            slider = v.Slider(
                v_model=20,
                thumb_label=True,
                step=10
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-slider
                v-model="value"
                thumb-label
                :step="10"
              ></v-slider>
            </template>

Colors
------

You can set the colors of the slider using the props ``color``, ``track_color`` and ``thumb_color``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            slider = v.Slider(
                v_model=25,
                color='orange',
                track_color='grey',
                thumb_color='red'
            )
            slider

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            slider = v.Slider(
                v_model=25,
                color='orange',
                track_color='grey',
                thumb_color='red'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-slider
                v-model="value"
                color="orange"
                track-color="grey"
                thumb-color="red"
              ></v-slider>
            </template>
