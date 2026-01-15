Rating
======

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/ratings/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Rating <ipyvuetify.Rating>` component is a specialized but crucial piece in building user widgets. Collecting user feedback via ratings is a simple analytic that can provide a lot of feedback to your product or application.

.. api::

    :py:class:`ipyvuetify.Rating`

Usage
-----

The ``v-rating`` component provides a simple interface for gathering user feedback.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Rating(
                v_model=3,
                length=5
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Rating(
                v_model=3,
                length=5
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-rating
                v-model="rating"
                :length="5"
              ></v-rating>
            </template>

Color
-----

The ``v-rating`` component can be colored as you want, you can set both selected and not selected colors.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Rating(
                v_model=4,
                color='yellow darken-3',
                background_color='grey darken-1',
                empty_icon='mdi-star-outline',
                full_icon='mdi-star'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Rating(
                v_model=4,
                color='yellow darken-3',
                background_color='grey darken-1',
                empty_icon='mdi-star-outline',
                full_icon='mdi-star'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-rating
                v-model="rating"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
              ></v-rating>
            </template>

Length
------

Sometimes an application will call for a customized implementation. Easily change length or displayed icons.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Rating(
                v_model=2,
                length=10
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Rating(
                v_model=2,
                length=10
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-rating
                v-model="rating"
                :length="10"
              ></v-rating>
            </template>
