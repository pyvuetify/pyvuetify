OverflowBtn
===========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/overflow-btns/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` component is used to give the user the ability to select items from the list. It has 3 variations: editable, overflow and segmented.

.. api::

    :py:class:`ipyvuetify.OverflowBtn`

Usage
-----

``v-overflow-btn`` is used for creating selection lists.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.OverflowBtn(
                label='Overflow Btn',
                items=['Option 1', 'Option 2', 'Option 3', 'Option 4']
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.OverflowBtn(
                label='Overflow Btn',
                items=['Option 1', 'Option 2', 'Option 3', 'Option 4']
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-overflow-btn
                label="Overflow Btn"
                :items="['Option 1', 'Option 2', 'Option 3', 'Option 4']"
              ></v-overflow-btn>
            </template>

Editable
--------

Editable ``v-overflow-btn`` can be directly edited, just as ``v-text-field``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.OverflowBtn(
                editable=True,
                label='Overflow Btn w/ editable',
                items=['Option 1', 'Option 2', 'Option 3', 'Option 4']
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.OverflowBtn(
                editable=True,
                label='Overflow Btn w/ editable',
                items=['Option 1', 'Option 2', 'Option 3', 'Option 4']
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-overflow-btn
                editable
                label="Overflow Btn w/ editable"
                :items="['Option 1', 'Option 2', 'Option 3', 'Option 4']"
              ></v-overflow-btn>
            </template>

Segmented
---------

Segmented ``v-overflow-btn`` has an additional divider between the content and the icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.OverflowBtn(
                segmented=True,
                label='Overflow Btn w/ segmented',
                items=['Option 1', 'Option 2', 'Option 3', 'Option 4']
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.OverflowBtn(
                segmented=True,
                label='Overflow Btn w/ segmented',
                items=['Option 1', 'Option 2', 'Option 3', 'Option 4']
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-overflow-btn
                segmented
                label="Overflow Btn w/ segmented"
                :items="['Option 1', 'Option 2', 'Option 3', 'Option 4']"
              ></v-overflow-btn>
            </template>

Dense
-----

You can use ``dense`` prop to reduce overflow button height and lower max height of list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.OverflowBtn(
                dense=True,
                label='Overflow Btn - Dense',
                items=['Option 1', 'Option 2', 'Option 3', 'Option 4']
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.OverflowBtn(
                dense=True,
                label='Overflow Btn - Dense',
                items=['Option 1', 'Option 2', 'Option 3', 'Option 4']
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-overflow-btn
                dense
                label="Overflow Btn - Dense"
                :items="['Option 1', 'Option 2', 'Option 3', 'Option 4']"
              ></v-overflow-btn>
            </template>
