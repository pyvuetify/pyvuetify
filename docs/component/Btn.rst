Btn
===

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Btn documentation <https://v2.vuetifyjs.com/en/components/buttons/>`_. All examples have been converted to ipyvuetify syntax.

The :py:class:`Btn <ipyvuetify.Btn>` component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.

.. api::

    :py:class:`ipyvuetify.Btn`

Usage
-----

Buttons in their simplest form contain uppercase text, a slight elevation, hover effect, and a ripple effect on click.

.. jupyter-execute::

    import ipyvuetify as v

    v.Btn(children=['Click Me'])

Block
-----

``block`` buttons extend the full available width.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Btn(block=True, children=['Block Button'])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Btn(block=True, children=['Block Button'])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-btn block>
                    Block Button
                </v-btn>
            </template>

Depressed
---------

``depressed`` buttons still maintain their background color, but have no box shadow.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Row(
                align="center",
                justify="space-around",
                children=[
                    v.Btn(depressed=True, children=['Normal']),
                    v.Btn(depressed=True, color='primary', children=['Primary']),
                    v.Btn(depressed=True, color='error', children=['Error']),
                    v.Btn(depressed=True, disabled=True, children=['Disabled']),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Row(
                align="center",
                justify="space-around",
                children=[
                    v.Btn(depressed=True, children=['Normal']),
                    v.Btn(depressed=True, color='primary', children=['Primary']),
                    v.Btn(depressed=True, color='error', children=['Error']),
                    v.Btn(depressed=True, disabled=True, children=['Disabled']),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-row align="center" justify="space-around">
                    <v-btn depressed>Normal</v-btn>
                    <v-btn depressed color="primary">Primary</v-btn>
                    <v-btn depressed color="error">Error</v-btn>
                    <v-btn depressed disabled>Disabled</v-btn>
                </v-row>
            </template>

Icon
----

Icons can be used for the primary content of a button. This property makes the button rounded and applies the text prop styles.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Row(
                children=[
                    v.Btn(icon=True, color='pink', children=[v.Icon(children=['mdi-heart'])]),
                    v.Btn(icon=True, color='indigo', children=[v.Icon(children=['mdi-star'])]),
                    v.Btn(icon=True, color='green', children=[v.Icon(children=['mdi-cached'])]),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Row(
                children=[
                    v.Btn(icon=True, color='pink', children=[v.Icon(children=['mdi-heart'])]),
                    v.Btn(icon=True, color='indigo', children=[v.Icon(children=['mdi-star'])]),
                    v.Btn(icon=True, color='green', children=[v.Icon(children=['mdi-cached'])]),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-row>
                    <v-btn icon color="pink">
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn icon color="indigo">
                        <v-icon>mdi-star</v-icon>
                    </v-btn>
                    <v-btn icon color="green">
                        <v-icon>mdi-cached</v-icon>
                    </v-btn>
                </v-row>
            </template>

Outlined
--------

``outlined`` buttons inherit their borders from the current color applied.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(outlined=True, color='indigo', class_='ma-2', children=['Outlined Button']),
                v.Btn(outlined=True, fab=True, color='teal', class_='ma-2', children=[v.Icon(children=['mdi-format-list-bulleted-square'])]),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(outlined=True, color='indigo', class_='ma-2', children=['Outlined Button']),
                v.Btn(outlined=True, fab=True, color='teal', class_='ma-2', children=[v.Icon(children=['mdi-format-list-bulleted-square'])]),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-btn outlined color="indigo" class="ma-2">
                        Outlined Button
                    </v-btn>
                    <v-btn outlined fab color="teal" class="ma-2">
                        <v-icon>mdi-format-list-bulleted-square</v-icon>
                    </v-btn>
                </div>
            </template>

Rounded
-------

``rounded`` buttons behave the same as regular buttons but have rounded edges.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Btn(rounded=True, color='primary', dark=True, children=['Rounded Button'])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Btn(rounded=True, color='primary', dark=True, children=['Rounded Button'])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-btn rounded color="primary" dark>
                    Rounded Button
                </v-btn>
            </template>

Text
----

Text buttons have no box shadow and no background. Only on hover is the container for the button shown.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Row(
                align="center",
                justify="space-around",
                children=[
                    v.Btn(text=True, children=['Normal']),
                    v.Btn(text=True, color='primary', children=['Primary']),
                    v.Btn(text=True, color='error', children=['Error']),
                    v.Btn(text=True, disabled=True, children=['Disabled']),
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Row(
                align="center",
                justify="space-around",
                children=[
                    v.Btn(text=True, children=['Normal']),
                    v.Btn(text=True, color='primary', children=['Primary']),
                    v.Btn(text=True, color='error', children=['Error']),
                    v.Btn(text=True, disabled=True, children=['Disabled']),
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-row align="center" justify="space-around">
                    <v-btn text>Normal</v-btn>
                    <v-btn text color="primary">Primary</v-btn>
                    <v-btn text color="error">Error</v-btn>
                    <v-btn text disabled>Disabled</v-btn>
                </v-row>
            </template>

Tile
----

``tile`` buttons behave the same as regular buttons but have no border radius.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Btn(
                tile=True,
                color='success',
                children=[
                    v.Icon(left=True, children=['mdi-pencil']),
                    'Edit'
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Btn(
                tile=True,
                color='success',
                children=[
                    v.Icon(left=True, children=['mdi-pencil']),
                    'Edit'
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <v-btn tile color="success">
                    <v-icon left>mdi-pencil</v-icon>
                    Edit
                </v-btn>
            </template>
