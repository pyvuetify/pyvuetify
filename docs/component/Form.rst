Form
====

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/forms/>`__.
    All examples have been converted to pyvuetify syntax.

Vuetify offers a simple built-in form validation system based on functions as rules, making it easy for developers to get set up quickly.

.. api::

    :py:class:`pyvuetify.Form`

Disabled
--------

You can easily disable all input components in a :py:class:`pyvuetify.Form` by setting the **disabled** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Form/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Form/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Form/disabled.vue


Fast fail
---------

When the **fast-fail** prop is set, validation will short-circuit after the first invalid input is found. This can be useful if some of your rules are computationally heavy and can take a long time. In this example, notice how when the submit button is clicked, the second input does not show validation errors even though it does not satisfy the rules.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Form/fast_fail.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Form/fast_fail.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Form/fast_fail.vue


Exposed properties
------------------

The :py:class:`pyvuetify.Form` component has a number of exposed properties that can be accessed by setting a **ref** on the component. A ref allows us to access internal methods on a component. You can find all of them on the API page, but some of the more commonly used ones are ``validate()``, ``reset()``, and ``resetValidation()``.

The difference between ``reset()`` and ``resetValidation()`` is that the former resets both input values and validation state, while the latter only resets validation state.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Form/exposed.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Form/exposed.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Form/exposed.vue


Vee-validate
------------

**vee-validate** documentation can be found `here <https://vee-validate.logaretm.com/v4/>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Form/vee_validate.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Form/vee_validate.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Form/vee_validate.vue


Vuelidate
---------

**vuelidate** documentation can be found `here <https://vuelidate-next.netlify.app/>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Form/vuelidate.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Form/vuelidate.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Form/vuelidate.vue

