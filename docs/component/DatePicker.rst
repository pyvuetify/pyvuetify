DatePicker
==========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/date-pickers/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`DatePicker <ipyvuetify.DatePicker>` is a fully featured date selection component that lets users select a date, or range of dates.

.. api::

    :py:class:`ipyvuetify.DatePicker`

Usage
-----

Date pickers come in two orientation variations, portrait (default) and landscape.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            date_picker = v.DatePicker(
                v_model=None
            )
            date_picker

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            date_picker = v.DatePicker(
                v_model=None
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-date-picker
                v-model="date"
              ></v-date-picker>
            </template>

Multiple
--------

Date picker can now select multiple dates with the ``multiple`` prop. If using multiple then date picker expects its model to be an array.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            date_picker = v.DatePicker(
                v_model=[],
                multiple=True
            )
            date_picker

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            date_picker = v.DatePicker(
                v_model=[],
                multiple=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-date-picker
                v-model="dates"
                multiple
              ></v-date-picker>
            </template>

Range
-----

Date picker can select date range with the ``range`` prop. When using range prop date picker expects its model to be an array of length 2 or empty.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            date_picker = v.DatePicker(
                v_model=[],
                range=True
            )
            date_picker

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            date_picker = v.DatePicker(
                v_model=[],
                range=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-date-picker
                v-model="dateRange"
                range
              ></v-date-picker>
            </template>
