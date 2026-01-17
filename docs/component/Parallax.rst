Parallax
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Parallax
    documentation <https://v2.vuetifyjs.com/en/components/parallax/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Parallax <ipyvuetify.Parallax>` component creates a 3d effect
that makes an image appear to scroll slower than the window.

.. api::

    :py:class:`ipyvuetify.Parallax`

Usage
-----

A parallax causes a shift in a background image when the user scrolls the page.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Parallax(
        height=200,
        src='https://cdn.vuetifyjs.com/images/parallax/material.jpg',
    )

Examples
--------

Content
^^^^^^^

You can also place any content inside of the parallax. This allows you to use
the parallax as a hero image.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Parallax(
                height=200,
                dark=True,
                src='https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
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
                                        class_='font-weight-thin mb-0 white--text',
                                        children=['Vuetify'],
                                    ),
                                    v.Html(
                                        tag='h3',
                                        class_='subheading white--text mt-1',
                                        children=['Build your application today!'],
                                    ),
                                ],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Parallax(
                height=200,
                src='https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
                children=[
                    v.Row(
                        children=[
                            v.Col(
                                class_='text-center',
                                cols=12,
                                children=[
                                    v.Html(
                                        tag='h4',
                                        class_='font-weight-thin mb-0',
                                        children=['Vuetify'],
                                    ),
                                    v.Html(
                                        tag='h4',
                                        class_='subheading mt-0 text--white white--text',
                                        children=['Build your application today!'],
                                    ),
                                ],
                            ),
                        ],
                    ),
                ],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-parallax
                dark
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            >
                <v-row
                align="center"
                justify="center"
                >
                <v-col
                    class="text-center"
                    cols="12"
                >
                    <h1 class="text-h4 font-weight-thin mb-4">
                    Vuetify
                    </h1>
                    <h4 class="subheading">
                    Build your application today!
                    </h4>
                </v-col>
                </v-row>
            </v-parallax>
            </template>

Custom height
^^^^^^^^^^^^^

You can specify a custom height on a parallax. Keep in mind this can break the
parallax if your image is not sized properly.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Parallax(
                height=200,
                src='https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Parallax(
                height=200,
                src='https://cdn.vuetifyjs.com/images/parallax/material2.jpg',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-parallax
                height="300"
                src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
            ></v-parallax>
            </template>
