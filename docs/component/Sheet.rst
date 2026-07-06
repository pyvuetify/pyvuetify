Sheet
=====

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/sheets/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Sheet` component is a transformable piece of *paper* that provides a basic foundation for Vuetify features.

.. api::

    :py:class:`pyvuetify.Sheet`

Props
-----

Some of the standard props that can be applied to the :py:class:`pyvuetify.Sheet` component are listed below.


Elevation
---------

The :py:class:`pyvuetify.Sheet` component accepts a custom elevation between **0** and **5** (0 is default). The *elevation* property modifies the ``box-shadow`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sheet/elevation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sheet/elevation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sheet/elevation.vue


Rounded
-------

The **rounded** prop adds a default ``border-radius`` of *4px*. By default, the :py:class:`pyvuetify.Sheet` component has no border-radius. Customize the radius's size and location by providing a custom rounded value; e.g. a rounded value of *tr-xl l-pill* equates to *rounded-tr-xl rounded-l-pill*. Additional information is on the `Border Radius <https://vuetifyjs.com/styles/border-radius/>`__ page.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sheet/rounded.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sheet/rounded.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sheet/rounded.vue


Color
-----

Sheets and components based on them can have different sizes and colors.

The :py:class:`pyvuetify.Sheet` component accepts custom `Material Design Color <https://vuetifyjs.com/styles/colors/>`__ values such as ``warning``, ``amber darken-3``, and ``deep-purple accent`` — as well as *rgb*, *rgba*, and *hexadecimal* values.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sheet/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sheet/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sheet/color.vue


Congratulations
---------------

This example uses a sheet component to create a banner congratulating users for signing up for the Vuetify community.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sheet/congratulations.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sheet/congratulations.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sheet/congratulations.vue


Reconcile Notification
----------------------

The following example uses a sheet component to create a banner that notifies users that the account balance has been reconciled.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sheet/reconcile.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sheet/reconcile.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sheet/reconcile.vue


Privacy Policy
--------------

Creating a Privacy Policy notification is a great use case for the :py:class:`pyvuetify.Sheet` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sheet/privacy_policy.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sheet/privacy_policy.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sheet/privacy_policy.vue


Referral program
----------------

Even for simple use-cases, the :py:class:`pyvuetify.Sheet` component is versatile makes it easy to contain content and other components.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sheet/referral_program.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sheet/referral_program.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sheet/referral_program.vue

