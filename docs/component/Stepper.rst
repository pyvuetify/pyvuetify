Stepper
=======


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/steppers/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Stepper` component displays progress through numbered steps.

.. api::

    :py:class:`pyvuetify.Stepper`

Props
-----

The :py:class:`pyvuetify.Stepper` component has multiple props to customize its visual appearance and functionality.


Non editable steps
------------------

A basic stepper has non-editable steps that force a user to move linearly through your process.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Stepper/non_editable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Stepper/non_editable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Stepper/non_editable.vue


Editable steps
--------------

An editable step can be selected by a user at any point and will navigate them to that step.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Stepper/editable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Stepper/editable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Stepper/editable.vue


Alternate label
---------------

Steppers also have an alternative label style which places the title under the step itself.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Stepper/alternate_label.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Stepper/alternate_label.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Stepper/alternate_label.vue


Linear steppers
---------------

Linear steppers will always move a user through your defined path.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Stepper/linear.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Stepper/linear.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Stepper/linear.vue


Optional steps
--------------

An optional step can be called out with sub-text.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Stepper/optional.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Stepper/optional.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Stepper/optional.vue


Items
-----

The stepper component accepts an array of items similar to other components such as :doc:`List <List>` and :doc:`Select <Select>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Stepper/horizontal.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Stepper/horizontal.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Stepper/horizontal.vue


Mobile
------

Use the **mobile** prop to hide the title and subtitle of the :py:class:`pyvuetify.StepperItem` component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Stepper/mobile.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Stepper/mobile.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Stepper/mobile.vue


Errors
------

An error state can be displayed to notify the user of some action that must be taken.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Stepper/error.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Stepper/error.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Stepper/error.vue


Dynamic steps
-------------

Steppers can have their steps dynamically added or removed. If a currently active step is removed, be sure to account for this by changing the applied model.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Stepper/dynamic.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Stepper/dynamic.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Stepper/dynamic.vue


Alternative label with errors
-----------------------------

The error state can also be applied to the alternative label style.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Stepper/alternate_error.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Stepper/alternate_error.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Stepper/alternate_error.vue


Non linear
----------

Non-linear steppers allow the user to move through your process in whatever way they choose.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Stepper/non_linear.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Stepper/non_linear.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Stepper/non_linear.vue

