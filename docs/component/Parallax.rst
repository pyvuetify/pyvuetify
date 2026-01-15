Parallax
========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/parallax/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Parallax <ipyvuetify.Parallax>` component creates a 3d effect that makes an image appear to scroll slower than the window.

.. api::

    :py:class:`ipyvuetify.Parallax`

Usage
-----

A parallax causes a shift in a background image when the user scrolls the page.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Parallax(
                src='https://cdn.vuetifyjs.com/images/parallax/material.jpg'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Parallax(
                src='https://cdn.vuetifyjs.com/images/parallax/material.jpg'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-parallax
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              ></v-parallax>
            </template>

Content
-------

You can also place any content inside of the parallax. This allows you to use the parallax as a hero image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Parallax(
                dark=True,
                src='https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
                children=[
                    v.Row(
                        align='center',
                        justify='center',
                        children=[
                            v.Col(
                                class_='text-center',
                                cols=12,
                                children=[
                                    v.Html(
                                        tag='h1',
                                        class_='text-h1 font-weight-thin mb-4',
                                        children=['Vuetify']
                                    ),
                                    v.Html(
                                        tag='h4',
                                        class_='subheading',
                                        children=['Build your application today!']
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Parallax(
                dark=True,
                src='https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
                children=[
                    v.Row(
                        align='center',
                        justify='center',
                        children=[
                            v.Col(
                                class_='text-center',
                                cols=12,
                                children=[
                                    v.Html(
                                        tag='h1',
                                        class_='text-h1 font-weight-thin mb-4',
                                        children=['Vuetify']
                                    ),
                                    v.Html(
                                        tag='h4',
                                        class_='subheading',
                                        children=['Build your application today!']
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-parallax
                dark
                src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
              >
                <v-row align="center" justify="center">
                  <v-col class="text-center" cols="12">
                    <h1 class="text-h1 font-weight-thin mb-4">
                      Vuetify
                    </h1>
                    <h4 class="subheading">
                      Build your application today!
                    </h4>
                  </v-col>
                </v-row>
              </v-parallax>
            </template>

Custom Height
-------------

You can specify a custom height on a parallax. Keep in mind this can break the parallax if your image is not sized properly.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Parallax(
                height='300',
                src='https://cdn.vuetifyjs.com/images/parallax/material.jpg'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Parallax(
                height='300',
                src='https://cdn.vuetifyjs.com/images/parallax/material.jpg'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-parallax
                height="300"
                src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
              ></v-parallax>
            </template>
