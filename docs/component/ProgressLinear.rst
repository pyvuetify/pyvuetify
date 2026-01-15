ProgressLinear
==============

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/progress-linear/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`ProgressLinear <ipyvuetify.ProgressLinear>` component is used to convey data visually to users. It also can display an indeterminate amount of wait time.

.. api::

    :py:class:`ipyvuetify.ProgressLinear`

Usage
-----

In its simplest form, v-progress-linear displays a horizontal progress bar.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.ProgressLinear(value=15)

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.ProgressLinear(value=15)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-progress-linear :value="15"></v-progress-linear>
            </template>

Indeterminate
-------------

Using the ``indeterminate`` prop, v-progress-linear continuously animates.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.ProgressLinear(indeterminate=True, color='primary')

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.ProgressLinear(indeterminate=True, color='primary')

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-progress-linear indeterminate color="primary"></v-progress-linear>
            </template>

Buffer
------

The buffer prop adds a buffer section to the progress bar for showing buffered progress.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.ProgressLinear(
                value=20,
                buffer_value=60
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.ProgressLinear(
                value=20,
                buffer_value=60
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-progress-linear
                :value="20"
                :buffer-value="60"
              ></v-progress-linear>
            </template>
