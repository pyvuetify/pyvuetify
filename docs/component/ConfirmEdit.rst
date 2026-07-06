ConfirmEdit
===========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/confirm-edit/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.ConfirmEdit` component is used to allow the user to verify their changes before they are committed.

.. api::

    :py:class:`pyvuetify.ConfirmEdit`

Pickers
-------

It's easy to integrate pickers into the :py:class:`pyvuetify.ConfirmEdit` component. This allows you to provide a more user-friendly experience when selecting dates, times, or colors.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ConfirmEdit/date_picker.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ConfirmEdit/date_picker.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ConfirmEdit/date_picker.vue


Disable actions
---------------

You can control the disabled state of action buttons using **disabled** prop by either passing an array to disable targeted actions or a boolean value to disable all actions. If the **disabled** prop is not provided, the component will use internal logic to determine the disabled state.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: ConfirmEdit/disable_actions.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: ConfirmEdit/disable_actions.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: ConfirmEdit/disable_actions.vue

