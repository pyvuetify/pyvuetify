ProgressCircular
================

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/progress-circular/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ProgressCircular <ipyvuetify.ProgressCircular>` component is used to convey data circularly to users. It also can be put into an indeterminate state to portray loading.

.. api::

    :py:class:`ipyvuetify.ProgressCircular`

Usage
-----

In its simplest form, v-progress-circular displays a circular progress bar. Use the value prop to control the progress.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.ProgressCircular(value=0),
                v.ProgressCircular(value=25),
                v.ProgressCircular(value=50),
                v.ProgressCircular(value=75),
                v.ProgressCircular(value=100)
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.ProgressCircular(value=0),
                v.ProgressCircular(value=25),
                v.ProgressCircular(value=50),
                v.ProgressCircular(value=75),
                v.ProgressCircular(value=100)
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-progress-circular :value="0"></v-progress-circular>
                <v-progress-circular :value="25"></v-progress-circular>
                <v-progress-circular :value="50"></v-progress-circular>
                <v-progress-circular :value="75"></v-progress-circular>
                <v-progress-circular :value="100"></v-progress-circular>
              </v-container>
            </template>

Color
-----

Alternate colors can be applied to ``v-progress-circular`` using the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.ProgressCircular(value=100, color='blue-grey'),
                v.ProgressCircular(value=80, color='deep-orange lighten-2'),
                v.ProgressCircular(value=60, color='brown'),
                v.ProgressCircular(value=40, color='lime'),
                v.ProgressCircular(value=20, color='indigo')
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.ProgressCircular(value=100, color='blue-grey'),
                v.ProgressCircular(value=80, color='deep-orange lighten-2'),
                v.ProgressCircular(value=60, color='brown'),
                v.ProgressCircular(value=40, color='lime'),
                v.ProgressCircular(value=20, color='indigo')
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-progress-circular :value="100" color="blue-grey"></v-progress-circular>
                <v-progress-circular :value="80" color="deep-orange lighten-2"></v-progress-circular>
                <v-progress-circular :value="60" color="brown"></v-progress-circular>
                <v-progress-circular :value="40" color="lime"></v-progress-circular>
                <v-progress-circular :value="20" color="indigo"></v-progress-circular>
              </v-container>
            </template>

Indeterminate
-------------

Using the ``indeterminate`` prop, a ``v-progress-circular`` continues to animate indefinitely.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.ProgressCircular(indeterminate=True, color='primary'),
                v.ProgressCircular(indeterminate=True, color='red'),
                v.ProgressCircular(indeterminate=True, color='purple'),
                v.ProgressCircular(indeterminate=True, color='green'),
                v.ProgressCircular(indeterminate=True, color='amber')
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.ProgressCircular(indeterminate=True, color='primary'),
                v.ProgressCircular(indeterminate=True, color='red'),
                v.ProgressCircular(indeterminate=True, color='purple'),
                v.ProgressCircular(indeterminate=True, color='green'),
                v.ProgressCircular(indeterminate=True, color='amber')
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-progress-circular indeterminate color="primary"></v-progress-circular>
                <v-progress-circular indeterminate color="red"></v-progress-circular>
                <v-progress-circular indeterminate color="purple"></v-progress-circular>
                <v-progress-circular indeterminate color="green"></v-progress-circular>
                <v-progress-circular indeterminate color="amber"></v-progress-circular>
              </v-container>
            </template>

Size and Width
--------------

The ``size`` and ``width`` props allow you to easily alter the size and width of the ``v-progress-circular`` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.ProgressCircular(indeterminate=True, size=20),
                v.ProgressCircular(indeterminate=True, size=40),
                v.ProgressCircular(indeterminate=True),
                v.ProgressCircular(indeterminate=True, size=70, width=3),
                v.ProgressCircular(indeterminate=True, size=70, width=7)
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.ProgressCircular(indeterminate=True, size=20),
                v.ProgressCircular(indeterminate=True, size=40),
                v.ProgressCircular(indeterminate=True),
                v.ProgressCircular(indeterminate=True, size=70, width=3),
                v.ProgressCircular(indeterminate=True, size=70, width=7)
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-progress-circular indeterminate size="20"></v-progress-circular>
                <v-progress-circular indeterminate size="40"></v-progress-circular>
                <v-progress-circular indeterminate></v-progress-circular>
                <v-progress-circular indeterminate size="70" width="3"></v-progress-circular>
                <v-progress-circular indeterminate size="70" width="7"></v-progress-circular>
              </v-container>
            </template>
