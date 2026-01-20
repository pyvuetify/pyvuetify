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

.. jupyter-execute:: Form/usage.py
    :raises:

Examples
--------

Rules
^^^^^

Rules allow you to apply custom validation on all form components. These are validated
sequentially and will display a **maximum** of 1 error at a time, so make sure you
order your rules accordingly.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Form/rules.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Form/rules.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Form/rules.vue

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

        .. jupyter-execute:: Form/validation_with_submit_clear.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Form/validation_with_submit_clear.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Form/validation_with_submit_clear.vue

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
