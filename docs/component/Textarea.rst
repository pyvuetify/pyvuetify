Textarea
========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/textareas/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Textarea <ipyvuetify.Textarea>` component is used for collecting large amounts of textual data. Textarea components are used for collecting large amounts of textual data.

.. api::

    :py:class:`ipyvuetify.Textarea`

Usage
-----

``v-textarea`` in its simplest form is a multi-line text-field, useful for larger amounts of text.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            textarea = v.Textarea(
                v_model='The Woodman set to work at once.',
                label='Label'
            )
            textarea

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            textarea = v.Textarea(
                v_model='The Woodman set to work at once.',
                label='Label'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-textarea
                v-model="value"
                label="Label"
              ></v-textarea>
            </template>

Auto Grow
---------

When using the ``auto_grow`` prop, textarea's will automatically increase in size when the contained text exceeds its size.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            textarea = v.Textarea(
                v_model='The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through.',
                label='Label',
                auto_grow=True
            )
            textarea

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            textarea = v.Textarea(
                v_model='The Woodman set to work at once.',
                label='Label',
                auto_grow=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-textarea
                v-model="value"
                label="Label"
                auto-grow
              ></v-textarea>
            </template>

Counter
-------

The ``counter`` prop informs the user of a character limit for the textarea.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            textarea = v.Textarea(
                v_model='Hello!',
                label='Text',
                counter=True
            )
            textarea

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            textarea = v.Textarea(
                v_model='Hello!',
                label='Text',
                counter=True
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-textarea
                v-model="value"
                label="Text"
                counter
              ></v-textarea>
            </template>
