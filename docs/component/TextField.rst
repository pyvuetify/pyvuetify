TextField
=========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/text-fields/>`__.
    All examples have been converted to pyvuetify syntax.

Text field components are used for collecting user provided information.

.. api::

    :py:class:`pyvuetify.TextField`

Props
-----

The :py:class:`pyvuetify.TextField` component has an massive API with numerous options to modify the display, functionality, or style of your inputs. Many of the configurable options are also available through `slots <#slots>`__.


Labeling
--------

The **label** prop displays custom text for identifying an input's purpose. The following code snippet is an example of a basic :py:class:`pyvuetify.TextField` component:

```html

```

Using this baseline makes it easy to put together quick mock implementations of your interface without needing to hook up any functional logic.

The following code snippet is an example of a simple form for for collecting a user's **First** name:

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/label.vue


Placeholders
------------

Sometimes a label alone doesn't convey enough information and you need to expose more. For those use-cases, use the **placeholder** property with or without the `label <#labeling>`__ or `hint <#hint>`__ properties.

In the following snippet, we improve the user experience of a :py:class:`pyvuetify.TextField` that is capturing an email address:

```html

```

When the user focuses the input, the placeholder fades in as the label translates up. The added visual element improves the user experience when using multiple field inputs.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/placeholder.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/placeholder.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/placeholder.vue


Hints & messages
----------------

The **label** and **placeholder** props are useful for providing context to the input but are typically concise. For longer textual information, all Vuetify inputs contain a **details** section that is used to provide **hints**, regular **messages**, and **error-messages**. In the following example watch the custom hint message display when you focus the input:



If you want to make the hint visible at all times, use the **persistent-hint** property. The following example demonstrates how to force a **hint** to show in the input's details:

```html

```

In addition to **persistent-hint**, there are 3 other properties that support a persistent state:

* **persistent-clear** - always show the input clear icon when a **value** is present
* **persistent-counter** - always show input character length element
* **persistent-placeholder** - always show placeholder, causes label to automatically elevate


Clearable
---------

The **clearable** prop appends an inner :doc:`Icon <Icon>` that clears the :py:class:`pyvuetify.TextField` when clicked. When an input is cleared, it resets the current :py:class:`pyvuetify.TextField` value. The following example displays an interactive icon when the mouse hovers over the input:



Note that **readonly** will not remove the clear icon, to prevent readonly inputs from being cleared you should also disable **clearable**.

Sometimes you may need to perform an action when the user clears an input. By using a custom `Vue Event Handler <https://vuejs.org/guide/essentials/event-handling.html>`__, you can bind a custom function that is invoked whenever the :py:class:`pyvuetify.TextField` is cleared by the user. The following example demonstrates how to use a a custom event handler to invoke the **onClear** method:

```html { resource="Component.vue" }

  



  onClear () {
    alert('User cleared the input')
  }

```

You can see more supported events on the :py:class:`pyvuetify.TextField` :py:class:`pyvuetify.TextField`.


Validation & rules
------------------

When working with inputs you often need to validate the user's input in some manner; i.e. Email, Password. Use the **rules** property to invoke custom functions based upon the :py:class:`pyvuetify.TextField`'s state. It accepts an array of **functions** that return either ``true`` or a ``string``. In the following example, enter a value into the field and then clear it:




Forms
-----

Group multiple :py:class:`pyvuetify.TextField` components and other functionality within a :py:class:`pyvuetify.Form` component; for a more detailed look at forms, please visit the :doc:`Form <Form>` page. Forms are useful for validating more than 1 input and make it easy to interact with the state of many fields at once. The following example combines multiple :py:class:`pyvuetify.TextField` components to create a login form:

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/guide.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/guide.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/guide.vue


Examples
--------

The following is a collection of :py:class:`pyvuetify.TextField` examples that demonstrate how different the properties work in an application.


Custom colors
-------------

The **color** prop provides an easy way to change the color of textual content; label, prefix, suffix, etc. This color is applied as long as :py:class:`pyvuetify.TextField` is focused.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/custom_colors.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/custom_colors.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/custom_colors.vue


Density
-------

The **density** prop decreases the height of the text field based upon 1 of 3 levels of density; **default**, **comfortable**, and **compact**.

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
---------------------

The state of a text field can be changed by providing the **disabled** or **readonly** props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/disabled_and_readonly.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/disabled_and_readonly.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/disabled_and_readonly.vue


Hide details
------------

When **hide-details** is set to ``auto`` messages will be rendered only if there's a message (hint, error message, counter value etc) to display.

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
----

The **hint** property on text fields adds the provided string beneath the text field. Using **persistent-hint** keeps the hint visible when the text field is not focused.

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
-----

You can add icons to the text field with **prepend-icon**, **append-icon** and **append-inner-icon** props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/icon.vue


Prefixes and suffixes
---------------------

The **prefix** and **suffix** properties allows you to prepend and append inline non-modifiable text next to the text field.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/prefixes_and_suffixes.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/prefixes_and_suffixes.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/prefixes_and_suffixes.vue


Validation
----------

Vuetify includes simple validation through the **rules** prop. The prop accepts a mixed array of types ``function``, ``boolean`` and ``string``. When the input value changes, each element in the array will be validated. Functions pass the current v-model as an argument and must return either ``true`` / ``false`` or a ``string`` containing an error message.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/validation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/validation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/validation.vue


Variant
-------

The **variant** prop provides an easy way to customize the style of your text field. The following values are valid options: **solo**, **filled**, **outlined**, **plain**, and **underlined**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/variant.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/variant.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/variant.vue


Focused
-------

The **focused** prop that sets the initial focus state of the component. It is a model prop, which handles 2 way binding with ``focused`` and ``@update:focused``. This means its value sets the initial state but will be updated internally by focus/blur events.
If you want to override this behavior (e.g., keep the input always focused), you can bind an empty ``@update:focused`` handler.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/focused.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/focused.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/focused.vue


Icon events
-----------

``click:prepend``, ``click:append``, ``click:append-inner``, and ``click:clear`` are emitted when you click on the respective icon. Note that these events will not be fired if the slot is used instead.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/icons.vue


Slots
-----

Slots allow you to customize the display of many :py:class:`pyvuetify.TextField` properties to modify what Vuetify does by default. The following slots are available on the :py:class:`pyvuetify.TextField` component:

| Slot name | Description |
| - | - |
| 1. prepend | Provided by :py:class:`pyvuetify.Input`, positioned before the input field |
| 2. prepend-inner | Provided by :py:class:`pyvuetify.Field`, positioned at the start of the input field |
| 3. label | The form input label |
| 4. append-inner | Provided by :py:class:`pyvuetify.Field`, positioned at the end of the input field |
| 5. append | Provided by :py:class:`pyvuetify.Input`, positioned after the input field |
| 6. details | Used for displaying **messages**, **hint**, **error-messages**, and more |

The following example uses the **label**, **prepend**, and **prepend-inner** slots and adds custom elements to the :py:class:`pyvuetify.TextField`

```html { resource="Component.vue" }

  
    
      Type something...
    

    
      
    

    
      
    

    
      

      See our Terms and Service
    
  



  import { shallowRef } from 'vue'

  const model = shallowRef('')

```




Icon slots
----------

Instead of using ``prepend``/``append``/``append-inner`` icons you can use slots to extend input's functionality.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/icons.vue


Label
-----

Text field label can be defined in ``label`` slot - that will allow to use HTML content

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
--------

You can display a progress bar instead of the bottom line. You can use the default indeterminate progress having same color as the text field or designate a custom one using the ``progress`` slot

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
-----------------

While the built in :py:class:`pyvuetify.Form` or 3rd party plugin such as `vuelidate <https://github.com/monterail/vuelidate>`__ or `vee-validation <https://github.com/logaretm/vee-validate>`__ can help streamline your validation process, you can choose to simply control it yourself.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/custom_validation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/custom_validation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/custom_validation.vue


Full width with counter
-----------------------

Full width text fields allow you to create boundless inputs. In this example, we use a :py:class:`pyvuetify.Divider` to separate the fields.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/full_width_with_counter.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/full_width_with_counter.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/full_width_with_counter.vue


Password input
--------------

Using the HTML input **type** `password <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password>`__ can be used with an appended icon and callback to control the visibility.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/password.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/password.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/password.vue


Login Form
----------

In this example we use a combination of prepend and append icon to create a custom login form.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TextField/login_form.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TextField/login_form.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TextField/login_form.vue

