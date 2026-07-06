DefaultsProvider
================

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/defaults-providers/>`__.
    All examples have been converted to pyvuetify syntax.

The defaults provider allows you to provide specific default prop values to components in a section of your application

.. api::

    :py:class:`pyvuetify.DefaultsProvider`

Defaults
--------

The :py:class:`pyvuetify.DefaultsProvider` expects a prop **defaults** which looks the same as the **defaults** object that you can pass to ``createVuetify`` when creating your application.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: DefaultsProvider/defaults.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: DefaultsProvider/defaults.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: DefaultsProvider/defaults.vue

