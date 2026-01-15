FileInput
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify File Input documentation
    <https://v2.vuetifyjs.com/en/components/file-inputs/>`__. All examples have been converted
    to ipyvuetify syntax.

The :py:class:`FileInput <ipyvuetify.FileInput>` component is a specialized input that provides
a clean interface for selecting files, showing detailed selection information and upload progress.
It is meant to be a direct replacement for a standard file input.

.. api::

    :py:class:`ipyvuetify.FileInput`

Usage
-----

At its core, the :py:class:`FileInput <ipyvuetify.FileInput>` component is a basic
container that extends :py:class:`TextField <ipyvuetify.TextField>`.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.FileInput(
        chips=True,
        counter=True,
        show_size=True,
        truncate_length=20,
    )

Examples
--------

Accept
^^^^^^

:py:class:`FileInput <ipyvuetify.FileInput>` component can accept only specific
media formats/file types if you want. For more information, checkout the documentation
on the `accept attribute <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.FileInput(
                accept="image/*",
                label="File input",
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.FileInput(
                accept="image/*",
                label="File input",
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-file-input
                accept="image/*"
                label="File input"
            ></v-file-input>
            </template>

Chips
^^^^^

A selected file can be displayed as a :py:class:`Chip <ipyvuetify.Chip>`. When using
the ``chips`` and ``multiple`` props, each chip will be displayed (as opposed to
the file count).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            chip = v.FileInput(
                v_model=None,
                chips=True,
                label="File input w/ chips",
            )
            small_chip = v.FileInput(
                v_model=None,
                small_chips=True,
                label="File input w/ small chips",
            )

            jslink((chip, 'v_model'), (small_chip, 'v_model'))

            v.Container(children=[chip, small_chip])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            chip = v.FileInput(
                v_model=None,
                chips=True,
                label="File input w/ chips",
            )
            small_chip = v.FileInput(
                v_model=None,
                small_chips=True,
                label="File input w/ small chips",
            )

            jslink((chip, 'v_model'), (small_chip, 'v_model'))

            v.Container(children=[chip, small_chip])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-file-input
                chips
                multiple
                label="File input w/ chips"
                ></v-file-input>
                <v-file-input
                small-chips
                multiple
                label="File input w/ small chips"
                ></v-file-input>
            </div>
            </template>

Counter
^^^^^^^

When using the ``show_size`` property along with ``counter``, the total number of
files and size will be displayed under the input.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.FileInput(
                show_size=True,
                counter=True,
                multiple=True,
                label="File input",
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.FileInput(
                show_size=True,
                counter=True,
                multiple=True,
                label="File input",
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-file-input
                show-size
                counter
                multiple
                label="File input"
            ></v-file-input>
            </template>

Dense
^^^^^

You can reduces the file input height with ``dense`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.FileInput(
                label="File input",
                outlined=True,
                dense=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.FileInput(
                label="File input",
                outlined=True,
                dense=True,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-file-input
                label="File input"
                outlined
                dense
            ></v-file-input>
            </template>

Multiple
^^^^^^^^

The :py:class:`FileInput <ipyvuetify.FileInput>` can contain multiple files at the
same time when using the ``multiple`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.FileInput(
                multiple=True,
                label="File input",
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.FileInput(
                multiple=True,
                label="File input",
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-file-input
                multiple
                label="File input"
            ></v-file-input>
            </template>

Prepend icon
^^^^^^^^^^^^

The :py:class:`FileInput <ipyvuetify.FileInput>` has a default ``prepend_icon``
that can be set on the component or adjusted globally. More information on
changing global components can be found on the
`customizing icons page <https://v2.vuetifyjs.com/en/features/icon-fonts/>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.FileInput(
                label="File input",
                filled=True,
                prepend_icon="mdi-camera",
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.FileInput(
                label="File input",
                filled=True,
                prepend_icon="mdi-camera",
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-file-input
                label="File input"
                filled
                prepend-icon="mdi-camera"
            ></v-file-input>
            </template>

Show size
^^^^^^^^^

The displayed size of the selected file(s) can be configured with the ``show_size``
property. Display sizes can be either 1024 (the default used when providing
``True``) or 1000.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.FileInput(
                show_size=True,
                label="File input"
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.FileInput(
                show_size=True,
                label="File input"
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-file-input
                show-size
                label="File input"
            ></v-file-input>
            </template>

Validation
^^^^^^^^^^

Similar to other inputs, you can use the ``rules`` prop to create your own
custom validation parameters.

.. todo::

    I'm not sure it's possible to make this work in ipyvuetify since it rely on javascript
    functions. Maybe a genius from the community can figure it out :fas:`face-smile-wink`

Selection slot
^^^^^^^^^^^^^^

Using the ``selection`` slot, you can customize the appearance of your input selections.
This is typically done with :py:class:`Chip <ipyvuetify.Chip>` components, however
any component or markup can be used.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.FileInput(
                v_model=None,
                label="File input",
                multiple=True,
                placeholder="Upload your documents",
                prepend_icon="mdi-paperclip",
                v_slots = [{
                    'name': 'selection',
                    'variable': 'selection',
                    'children': v.Chip(
                        children=['selection.text'],
                        small=True,
                        label=True,
                        color='primary',
                    ),
                }],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.FileInput(
                v_model=None,
                label="File input",
                multiple=True,
                placeholder="Upload your documents",
                prepend_icon="mdi-paperclip",
                v_slots = [{
                    'name': 'selection',
                    'variable': 'selection',
                    'children': v.Chip(
                        children=['selection.text'],
                        small=True,
                        label=True,
                        color='primary',
                    ),
                }],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-file-input
                v-model="files"
                placeholder="Upload your documents"
                label="File input"
                multiple
                prepend-icon="mdi-paperclip"
            >
                <template v-slot:selection="{ text }">
                <v-chip
                    small
                    label
                    color="primary"
                >
                    {{ text }}
                </v-chip>
                </template>
            </v-file-input>
            </template>

Complex selection slot
^^^^^^^^^^^^^^^^^^^^^^

The flexibility of the selection slot allows you accommodate complex use-cases. In this example we show the first 2 selections as chips while adding a number indicator for the remaining amount.

.. todo::

    I'm not sure it's possible to make this work in ipyvuetify since it rely on javascript
    functions. Maybe a genius from the community can figure it out :fas:`face-smile-wink`
