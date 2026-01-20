TextField
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Text Fields
    documentation <https://v2.vuetifyjs.com/en/components/text-fields/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`TextField <ipyvuetify.TextField>` component is used for collecting
user provided information.

.. api::

    - :py:class:`ipyvuetify.TextField`

Usage
-----

A simple text field with placeholder and/or label.

.. jupyter-execute:: TextField/usage.py
    :raises:

Examples
--------

Counter
^^^^^^^

Use a ``counter`` prop to inform a user of the character limit. The counter does
not perform any validation by itself - you will need to pair it with either the
internal validation system, or a 3rd party library. The counter can be customised
with the ``counter_value`` prop and counter scoped slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/counter.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/counter.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/counter.vue

Clearable
^^^^^^^^^

When ``clearable``, you can customize the clear icon with ``clear_icon``. Note that
**readonly** will not remove the clear icon, to prevent readonly inputs from being
cleared you should also disable clearable.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/clearable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/clearable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/clearable.vue

Custom colors
^^^^^^^^^^^^^

You can optionally change a text field into any color in the Material design
palette.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/custom_colors.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/custom_colors.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/custom_colors.vue

Dense
^^^^^

You can reduce the text field height with ``dense`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/dense.vue

Disabled and readonly
^^^^^^^^^^^^^^^^^^^^^

Text fields can be **disabled** or **readonly**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/disabled_and_readonly.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/disabled_and_readonly.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/disabled_and_readonly.vue

Filled
^^^^^^

Text fields can be used with an alternative box design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/filled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/filled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/filled.vue

Hide details
^^^^^^^^^^^^

When ``hide_details`` is set to **auto** messages will be rendered only if there's
a message (hint, error message, counter value etc) to display.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/hide_details.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/hide_details.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/hide_details.vue

Hint
^^^^

The ``hint`` property on text fields adds the provided string beneath the text
field. Using ``persistent_hint`` keeps the hint visible when the text field is not
focused. Hint prop is not supported in solo mode.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/hint.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/hint.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/hint.vue

Icons
^^^^^

You can add icons to the text field with ``prepend_icon``, ``append_icon`` and
``append_outer_icon`` props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/icons.vue

Outlined
^^^^^^^^

Text fields can be used with an alternative outlined design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/outlined.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/outlined.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/outlined.vue

Prefixes and suffixes
^^^^^^^^^^^^^^^^^^^^^

The ``prefix`` and ``suffix`` properties allows you to prepend and append inline
non-modifiable text next to the text field.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/prefixes_and_suffixes.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/prefixes_and_suffixes.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/prefixes_and_suffixes.vue

Shaped
^^^^^^

**Shaped** text fields are rounded if they're outlined and have higher
border-radius if filled.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/shaped.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/shaped.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/shaped.vue

Single line
^^^^^^^^^^^

**Single-line** text fields do not float their label on focus or with data.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/single_line.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/single_line.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/single_line.vue

Solo
^^^^

Text fields can be used with an alternative solo design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/solo.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/solo.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/solo.vue

Validation
^^^^^^^^^^

Vuetify includes simple validation through the ``rules`` prop. The prop accepts a
mixed array of types **function**, **boolean** and **string**. When the input value
changes, each element in the array will be validated. Functions pass the current
v-model as an argument and must return either **true** / **false** or a **string**
containing an error message.

.. todo::

    Rules and validation require a active kernel.

Icon events
^^^^^^^^^^^

``click:prepend``, ``click:append``, ``click:append-outer``, and ``click:clear``
will be emitted when you click on the respective icon. Note that these events will
not be fired if the slot is used instead.

.. todo::

    Icon events require a active kernel.

Icon slots
^^^^^^^^^^

Instead of using ``prepend``/``append``/``append-outer`` icons you can use slots to
extend input's functionality.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/icon_slots.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/icon_slots.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/icon_slots.vue

Label
^^^^^

Text field label can be defined in ``label`` slot - that will allow to use HTML
content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/label.vue

Progress
^^^^^^^^

You can display a progress bar instead of the bottom line. You can use the default
indeterminate progress having same color as the text field or designate a custom
one using the ``progress`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/progress.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/progress.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/progress.vue

Custom validation
^^^^^^^^^^^^^^^^^

While the built in :py:class:`Form <ipyvuetify.Form>` or 3rd party plugin such as
vuelidate__ or vee-validation__ can help streamline your validation process, you
can choose to simply control it yourself.

.. __: https://github.com/monterail/vuelidate
.. __: https://github.com/logaretm/vee-validate

.. todo::

    Rules and validation require an active kernel.

Password input
^^^^^^^^^^^^^^

Using the HTML input `type password`__ can be used with an appended icon and
callback to control the visibility.

.. __: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/password_input.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/password_input.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/password_input.vue

