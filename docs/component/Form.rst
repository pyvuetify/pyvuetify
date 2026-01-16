Form
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Form documentation
    <https://v2.vuetifyjs.com/en/components/forms/>`__.
    All examples have been converted to ipyvuetify syntax.

When it comes to form validation, Vuetify has a multitude of integrations and baked
in functionality. Want to use a 3rd party validation plugin? Out of the box you
can use `Vee-validate <https://github.com/baianat/Vee-validate>`__ and
`vuelidate <https://github.com/vuelidate/vuelidate>`__.

.. api::

    :py:class:`ipyvuetify.Form`

Usage
-----

The internal :py:class:`Form <ipyvuetify.Form>` component makes it easy to add
validation to form inputs. All input components have a ``rules`` prop which accepts
a mixed array of types ``function``, ``boolean`` and ``string``. These allow you
to specify conditions in which the input is valid or invalid. Whenever the value
of an input is changed, each function in the array will receive the new value and
each array element will be evaluated. If a function or array element returns
``false`` or a ``string``, validation has failed and the ``string`` value
will be presented as an error message.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    v.Form(
        v_model=True,
        children=[
            v.TextField(
                v_model='',
                #rules=[
                #    lambda v: bool(v) or 'Name is required',
                #    lambda v: len(v) <= 10 or 'Name must be less than 10 characters',
                #],
                counter=10,
                label='Name',
                required=True,
            ),
            v.TextField(
                v_model='',
                #rules=[
                #    lambda v: bool(v) or 'E-mail is required',
                #    lambda v: '@' in v or 'E-mail must be valid',
                #],
                label='E-mail',
                required=True,
            ),
            v.TextField(
                v_model='',
                #rules=[
                #    lambda v: bool(v) or 'Password is required',
                #    lambda v: len(v) >= 8 or 'Password must be at least 8 characters',
                #],
                type='password',
                label='Password',
                required=True,
            )
        ]
    )

Examples
--------

Rules
^^^^^

Rules allow you to apply custom validation on all form components. These are validated
sequentially and will display a **maximum** of 1 error at a time, so make sure you
order your rules accordingly.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Row(
                        justify='space-between',
                        children=[
                            v.Col(
                                cols=12,
                                md=4,
                                children=[
                                    v.Form(
                                        ref='form',
                                        children=[
                                            v.TextField(
                                                v_model='',
                                                counter=20,
                                                # rules will be set in Vue template
                                                label='First name',
                                            )
                                        ]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=12,
                                md=6,
                                children=[
                                    v.Slider(
                                        v_model=20,
                                        label='Max characters',
                                    ),
                                    v.Checkbox(
                                        v_model=True,
                                        label='Allow spaces',
                                    ),
                                    v.TextField(
                                        v_model='',
                                        label='Value must match',
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(
                children=[
                    v.Row(
                        justify='space-between',
                        children=[
                            v.Col(
                                cols=12,
                                md=4,
                                children=[
                                    v.Form(
                                        ref='form',
                                        children=[
                                            v.TextField(
                                                v_model='',
                                                counter=20,
                                                # rules will be set in Vue template
                                                label='First name',
                                            )
                                        ]
                                    )
                                ]
                            ),
                            v.Col(
                                cols=12,
                                md=6,
                                children=[
                                    v.Slider(
                                        v_model=20,
                                        label='Max characters',
                                    ),
                                    v.Checkbox(
                                        v_model=True,
                                        label='Allow spaces',
                                    ),
                                    v.TextField(
                                        v_model='',
                                        label='Value must match',
                                    )
                                ]
                            )
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container>
                <v-row

                justify="space-between"
                >
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-form ref="form">
                    <v-text-field
                        v-model="model"
                        :counter="max"
                        :rules="rules"
                        label="First name"
                    ></v-text-field>
                    </v-form>
                </v-col>

                <v-col
                    cols="12"
                    md="6"
                >
                    <v-slider
                    v-model="max"
                    label="Max characters"
                    >
                    </v-slider>

                    <v-checkbox
                    v-model="allowSpaces"
                    label="Allow spaces"
                    ></v-checkbox>

                    <v-text-field
                    v-model="match"
                    label="Value must match"
                    ></v-text-field>
                </v-col>
                </v-row>
            </v-container>
            </template>

Validation with submit & clear
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The :py:class:`Form <ipyvuetify.Form>` component has **three** functions that can be
accessed by setting a ref on the component. A ref allows us to access internal
methods on a component, for example, ``<v-form ref="form">``.
``this.$refs.form.validate()`` will validate all inputs and return if they are
all valid or not. ``this.$refs.form.reset()`` will clear all inputs and reset
their validation errors. ``this.$refs.form.resetValidation()`` will only reset
input validation and not alter their state.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Form(
                ref='form',
                children=[
                    v.TextField(
                        v_model='',
                        counter=10,
                        # rules will be set in Vue template
                        label='Name',
                        required=True,
                    ),
                    v.TextField(
                        v_model='',
                        # rules will be set in Vue template
                        label='E-mail',
                        required=True,
                    ),
                    v.Select(
                        v_model=None,
                        items=['Item 1', 'Item 2', 'Item 3'],
                        # rules will be set in Vue template
                        label='Item',
                        required=True,
                    ),
                    v.Checkbox(
                        v_model=False,
                        # rules will be set in Vue template
                        label='Do you agree?',
                        required=True,
                    ),
                    v.Btn(
                        children=['Validate'],
                        color='success',
                        class_='mr-4',
                    ),
                    v.Btn(
                        children=['Reset Form'],
                        color='error',
                        class_='mr-4',
                    ),
                    v.Btn(
                        children=['Reset Validation'],
                        color='warning',
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Form(
                ref='form',
                children=[
                    v.TextField(
                        v_model='',
                        counter=10,
                        # rules will be set in Vue template
                        label='Name',
                        required=True,
                    ),
                    v.TextField(
                        v_model='',
                        # rules will be set in Vue template
                        label='E-mail',
                        required=True,
                    ),
                    v.Select(
                        v_model=None,
                        items=['Item 1', 'Item 2', 'Item 3'],
                        # rules will be set in Vue template
                        label='Item',
                        required=True,
                    ),
                    v.Checkbox(
                        v_model=False,
                        # rules will be set in Vue template
                        label='Do you agree?',
                        required=True,
                    ),
                    v.Btn(
                        children=['Validate'],
                        color='success',
                        class_='mr-4',
                    ),
                    v.Btn(
                        children=['Reset Form'],
                        color='error',
                        class_='mr-4',
                    ),
                    v.Btn(
                        children=['Reset Validation'],
                        color='warning',
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
                <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
                ></v-text-field>

                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>

                <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="Item"
                required
                ></v-select>

                <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
                ></v-checkbox>

                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >
                Validate
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                Reset Form
                </v-btn>

                <v-btn
                color="warning"
                @click="resetValidation"
                >
                Reset Validation
                </v-btn>
            </v-form>
            </template>

Vee-validate
^^^^^^^^^^^^

vee-validate is a template Based Validation Framework for Vue.js.
`Documentation <https://vee-validate.logaretm.com/v3>`__

.. todo::

    Add Vee-validate example when ipyvuetify supports it.

Vuelidate
^^^^^^^^^

vuelidate is a simple, lightweight model-based validation for Vue.js.
`Documentation <https://vuelidate.netlify.com/>`__

.. todo::

    Add Vuelidate example when ipyvuetify supports it.
