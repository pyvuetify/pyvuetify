BtnToggle
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/button-groups/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`BtnToggle <ipyvuetify.BtnToggle>` component is a simple wrapper for :py:class:`ItemGroup <ipyvuetify.ItemGroup>` built specifically to work with :py:class:`Btn <ipyvuetify.Btn>`.

.. api::

    -   :py:class:`ipyvuetify.BtnToggle`
    -   :py:class:`ipyvuetify.Btn`

.. seealso::

    :doc:`Btn`

Usage
-----

Toggle buttons allow you to create a styled group of buttons that can be selected or toggled under a single ``v_model``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BtnToggle/usage.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BtnToggle/usage.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BtnToggle/usage.vue

Mandatory
---------

A :py:class:`BtnToggle <ipyvuetify.BtnToggle>` with the ``mandatory`` prop will always have a value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BtnToggle/mandatory.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BtnToggle/mandatory.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BtnToggle/mandatory.vue

Multiple
--------

A :py:class:`BtnToggle <ipyvuetify.BtnToggle>` with the ``multiple`` prop will allow a user to select
multiple return values as an array.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BtnToggle/multiple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BtnToggle/multiple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BtnToggle/multiple.vue

Rounded
-------

You can make :py:class:`BtnToggle <ipyvuetify.BtnToggle>` rounded using the ``rounded`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BtnToggle/rounded.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BtnToggle/rounded.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BtnToggle/rounded.vue

Toolbar
-------

Easily integrate customized button solutions with a v-toolbar.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BtnToggle/toolbar.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BtnToggle/toolbar.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BtnToggle/toolbar.vue

