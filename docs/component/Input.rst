Input
=====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Input documentation
    <https://v2.vuetifyjs.com/en/components/inputs/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Input <ipyvuetify.Input>` component gives you a baseline to
create your own custom inputs. It consists of a prepend/append slot, messages,
and a default slot. It is recommended that you extend this component, but it can
be used as a standalone.

.. api::

    :py:class:`ipyvuetify.Input`

Usage
-----

:py:class:`Input <ipyvuetify.Input>` has 4 main areas. The prepended slot, the
appended slot, the default slot, and messages. These make up the core logic
shared between all form components.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Container(
        id="input-usage",
        fluid=True,
        children=[
            v.Row(
                children=[
                    v.Col(
                        cols=12,
                        children=[
                            v.Input(
                                messages=['Messages'],
                                append_icon='mdi-close',
                                prepend_icon='mdi-phone',
                                children=['Default Slot']
                            )
                        ]
                    )
                ]
            )
        ]
    )

.. warning::

    The :py:class:`Input <ipyvuetify.Input>` component is used as a wrapper for all
    of the Vuetify form controls. It does NOT inherit attributes as they are
    expected to be passed down to inner inputs.

Examples
--------

Error
^^^^^

As any validatable Vuetify component, :py:class:`Input <ipyvuetify.Input>` can
be set to error state using ``error`` prop, messages can be added using
``error-messages`` prop. You can determine error messages count to show using
``error-count`` property.

Error count
^^^^^^^^^^^

You can add multiple errors to :py:class:`Input <ipyvuetify.Input>` using
``error-count`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Input(
                error_count=2,
                error_messages=['Fatal error', 'Another error'],
                error=True,
                disabled=True,
                children=['Input']
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Input(
                error_count=2,
                error_messages=['Fatal error', 'Another error'],
                error=True,
                disabled=True,
                children=['Input']
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-input
                error-count="2"
                :error-messages="['Fatal error', 'Another error']"
                error
                disabled
            >
                Input
            </v-input>
            </template>

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Input(
                error_messages=['Fatal error'],
                error=True,
                disabled=True,
                children=['Input']
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Input(
                error_messages=['Fatal error'],
                error=True,
                disabled=True,
                children=['Input']
            )


    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-input
                :error-messages="['Fatal error']"
                error
                disabled
            >
                Input
            </v-input>
            </template>

Hide details
^^^^^^^^^^^^

When the ``hide-details`` prop is set to ``auto`` messages will be rendered only
if there's a message (hint, error message etc) to display.

.. todo::

    The rule syntax is not clearly available through ipyvuetify at the moment.
    Please help me improve this section.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag='div',
                children=[
                    v.TextField(
                        label='Main input',
                        hide_details='auto',
                    ),
                    v.TextField(
                        label='Another input'
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag='div',
                children=[
                    v.TextField(
                        label='Main input',
                        hide_details='auto',
                    ),
                    v.TextField(
                        label='Another input'
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-text-field
                label="Main input"
                :rules="rules"
                hide-details="auto"
                ></v-text-field>
                <v-text-field label="Another input"></v-text-field>
            </div>
            </template>

Hint
^^^^

:py:class:`Input <ipyvuetify.Input>` can have hint which can tell user how to
use the input. ``persistent-hint`` prop makes the hint visible always if no
messages are displayed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            message = v.Select(
                v_model=[],
                items=["message"],
                label='Message',
                multiple=True,
                clearable=True,
            )
            input_field = v.Input(
                hint='I am hint',
                persistent_hint=True,
                messages=[],
                children=['Input']
            )

            jslink((message, 'v_model'), (input_field, 'messages'))

            v.Container(children=[message, input_field])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v
            from ipywidgets import jslink

            message = v.Select(
                v_model=[],
                items=["message"],
                label='Message',
                multiple=True,
                clearable=True,
            )
            input_field = v.Input(
                hint='I am hint',
                persistent_hint=True,
                messages=[],
                children=['Input']
            )

            jslink((message, 'v_model'), (input_field, 'messages'))

            v.Container(children=[message, input_field])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-row>
                <v-switch
                v-model="showMessages"
                label="Show messages"
                ></v-switch>
                <v-input
                hint="I am hint"
                persistent-hint
                :messages="messages"
                >
                Input
                </v-input>
            </v-row>
            </template>

Loading
^^^^^^^

:py:class:`Input <ipyvuetify.Input>` has loading state which can be used, e.g.
for data loading indication. Note: :py:class:`TextField <ipyvuetify.TextField>`
is used just for example.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.TextField(
                color='success',
                loading=True,
                disabled=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.TextField(
                color='success',
                loading=True,
                disabled=True,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-text-field
                color="success"
                loading
                disabled
            ></v-text-field>
            </template>

Rules
^^^^^

You can add custom validation rules to :py:class:`Input <ipyvuetify.Input>`,
add them as functions returning ``true``/error message. Note:
:py:class:`TextField <ipyvuetify.TextField>` is used just for example.

.. todo::

    We need to better understand how to set customized rules in ipyvuetify.
    help welcomed :fas:`coffee`

Success
^^^^^^^

As any validatable Vuetify component, :py:class:`Input <ipyvuetify.Input>` can
be set to success state using ``success`` prop, you can add message to it using
``success-messages`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Input(
                success_messages=['Success'],
                success=True,
                disabled=True,
                children=['Input']
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Input(
                success_messages=['Success'],
                success=True,
                disabled=True,
                children=['Input']
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-input
                :success-messages="['Success']"
                success
                disabled
            >
                Input
            </v-input>
            </template>

Append and prepend
^^^^^^^^^^^^^^^^^^

:py:class:`Input <ipyvuetify.Input>` has ``append`` and ``prepend`` slots. You
can place custom icons in them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.TextField(
                v_slots = [{
                    "name": "append",
                    "children": [
                        v.Icon(
                            children=['mdi-plus'],
                            slot='append',
                            color='red',
                        ),
                    ]
                },
                {
                    "name": "prepend",
                    "children": [
                        v.Icon(
                            children=['mdi-minus'],
                            slot='prepend',
                            color='green',
                        )
                    ]
                }],
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python


            import ipyvuetify as v

            v.TextField(
                v_slots = [{
                    "name": "append",
                    "children": [
                        v.Icon(
                            children=['mdi-plus'],
                            slot='append',
                            color='red',
                        ),
                    ]
                },
                {
                    "name": "prepend",
                    "children": [
                        v.Icon(
                            children=['mdi-minus'],
                            slot='prepend',
                            color='green',
                        )
                    ]
                }],
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-text-field>
                <v-icon
                slot="append"
                color="red"
                >
                mdi-plus
                </v-icon>
                <v-icon
                slot="prepend"
                color="green"
                >
                mdi-minus
                </v-icon>
            </v-text-field>
            </template>
