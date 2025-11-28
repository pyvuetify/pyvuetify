FileInput
=========

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/file-inputs/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`FileInput <ipyvuetify.FileInput>` component is a specialized input that provides a clean interface for selecting files, showing detailed selection information and upload progress. It is meant to be a direct replacement for a standard file input.

.. api::

    :py:class:`ipyvuetify.FileInput`

Usage
-----

At its core, the ``v-file-input`` component is a basic container that extends v-text-field.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.FileInput(
                label='File input'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.FileInput(
                label='File input'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-file-input label="File input"></v-file-input>
            </template>

Chips
-----

A selected file can be displayed as a chip. When using the ``chips`` and ``multiple`` props, each chip will be displayed (as opposed to the file count).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.FileInput(
                    chips=True,
                    label='File input w/ chips'
                ),
                v.FileInput(
                    small_chips=True,
                    label='File input w/ small chips'
                )
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.FileInput(
                    chips=True,
                    label='File input w/ chips'
                ),
                v.FileInput(
                    small_chips=True,
                    label='File input w/ small chips'
                )
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-container>
                <v-file-input chips label="File input w/ chips"></v-file-input>
                <v-file-input small-chips label="File input w/ small chips"></v-file-input>
              </v-container>
            </template>

Multiple
--------

The ``v-file-input`` can contain multiple files at the same time when using the ``multiple`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.FileInput(
                multiple=True,
                label='File input'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.FileInput(
                multiple=True,
                label='File input'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-file-input multiple label="File input"></v-file-input>
            </template>

Show Size
---------

The displayed size of the selected file(s) can be configured with the ``show_size`` property. Display sizes can be either 1024 (the default used when providing True) or 1000.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.FileInput(
                show_size=True,
                label='File input'
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.FileInput(
                show_size=True,
                label='File input'
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
              <v-file-input show-size label="File input"></v-file-input>
            </template>
