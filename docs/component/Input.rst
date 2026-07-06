Input
=====


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/inputs/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Input` component gives you a baseline to create your own custom inputs. It consists of a prepend/append slot, messages, and a default slot.

.. api::

    :py:class:`pyvuetify.Input`

Error
-----

As any validatable Vuetify component, :py:class:`pyvuetify.Input` can be set to error state using **error** prop, messages can be added using **error-messages** prop. You can determine error messages count to show using **error-count** property.


Error count
-----------

You can add multiple errors to :py:class:`pyvuetify.Input` using **error-count** property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Input/error_count.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Input/error_count.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Input/error_count.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Input/error.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Input/error.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Input/error.vue


Hide details
------------

When the **hide-details** prop is set to ``auto`` messages will be rendered only if there's a message (hint, error message etc) to display.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Input/hide_details.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Input/hide_details.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Input/hide_details.vue


Hint
----

:py:class:`pyvuetify.Input` can have **hint** which can tell user how to use the input (when focused). **persistent-hint** prop makes the hint visible always if no ``error-messages`` are displayed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Input/hint.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Input/hint.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Input/hint.vue


Loading
-------

:py:class:`pyvuetify.Input` has **loading** state which can be used, e.g. for data loading indication. Note: :py:class:`pyvuetify.TextField` is used just for example.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Input/loading.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Input/loading.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Input/loading.vue


Rules
-----

You can add custom validation rules to :py:class:`pyvuetify.Input`, add them as functions returning ``true``/error message. Note: :py:class:`pyvuetify.TextField` is used just for example.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Input/rules.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Input/rules.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Input/rules.vue


Slot clicks
-----------

:py:class:`pyvuetify.Input` can have ``click:append`` and ``click:prepend`` events for its slots. Note: :py:class:`pyvuetify.TextField` is used just for example.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Input/slot_clicks.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Input/slot_clicks.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Input/slot_clicks.vue


Append and prepend
------------------

:py:class:`pyvuetify.Input` has ``append`` and ``prepend`` slots. You can place custom icons in them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Input/append_and_prepend.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Input/append_and_prepend.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Input/append_and_prepend.vue

