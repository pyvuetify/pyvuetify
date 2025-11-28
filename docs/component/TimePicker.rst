TimePicker
==========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/time-pickers/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`TimePicker <ipyvuetify.TimePicker>` is a stand-alone component that can be utilized in many existing Vuetify components. It offers the user a visual representation for selecting the time.

.. api::

    :py:class:`ipyvuetify.TimePicker`

Usage
-----

Time pickers have the light theme enabled by default.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            time_picker = v.TimePicker(
                v_model=None
            )
            time_picker

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            time_picker = v.TimePicker(
                v_model=None
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-time-picker
                v-model="time"
              ></v-time-picker>
            </template>

Format
------

A time picker can be switched to 24hr format. Note that the ``format`` prop defines only the way the picker is displayed, picker's value (model) is always in 24hr format.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            time_picker = v.TimePicker(
                v_model=None,
                format='24hr'
            )
            time_picker

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            time_picker = v.TimePicker(
                v_model=None,
                format='24hr'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-time-picker
                v-model="time"
                format="24hr"
              ></v-time-picker>
            </template>

Use Seconds
-----------

Time picker can have seconds input.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            time_picker = v.TimePicker(
                v_model=None,
                use_seconds=True
            )
            time_picker

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            time_picker = v.TimePicker(
                v_model=None,
                use_seconds=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-time-picker
                v-model="time"
                use-seconds
              ></v-time-picker>
            </template>
