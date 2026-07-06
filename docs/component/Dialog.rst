Dialog
======

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/dialogs/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Dialog` component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.

.. api::

    :py:class:`pyvuetify.Dialog`

Props
-----

The :py:class:`pyvuetify.Dialog` component extends :doc:`Overlay <Overlay>` and has access to all of its props.


v-model
-------

You can also trigger a dialog by simply updating the v-model, without using either **activator** slot or prop. In this case, the dialog will not appear to be activated by any specific element, and will simply appear in the middle of the screen.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/model.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/model.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/model.vue


Persistent
----------

Persistent dialogs are not dismissed when touching outside or pressing the **esc** key.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/persistent.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/persistent.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/persistent.vue


Transitions
-----------

You can make the dialog appear from the top or the bottom.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/transitions.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/transitions.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/transitions.vue


Nesting
-------

Dialogs can be nested: you can open one dialog from another.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/nesting.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/nesting.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/nesting.vue


Overflowed
----------

Modals that do not fit within the available window space will scroll the container.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/overflowed.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/overflowed.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/overflowed.vue


Slots
-----

The :py:class:`pyvuetify.Dialog` component has 2 slots, **activator** and **default**. The **activator** slot is used to designate an element that will activate the dialog. The **default** slot provides an **isActive** ref which is tied to the current state of the dialog.


Default
-------

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/default.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/default.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/default.vue


Activator
---------

In addition using the **activator** slot, we can instead use the **activator** prop to activate a dialog. By placing the dialog component inside the button, and setting the **activator** prop value to **"parent"** we can designate the parent (button) as the activator.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/activator.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/activator.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/activator.vue


Scrollable
----------

Example of a dialog with scrollable content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/scrollable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/scrollable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/scrollable.vue


Form
----

A simple example of a form in a dialog.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/form.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/form.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/form.vue


Loader
------

The :py:class:`pyvuetify.Dialog` component makes it easy to create a customized loading experience for your application.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/loader.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/loader.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/loader.vue


Fullscreen
----------

Due to limited space, full-screen dialogs may be more appropriate for mobile devices than dialogs used on devices with larger screens.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/fullscreen.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/fullscreen.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/fullscreen.vue


Invite dialog
-------------

This example demonstrates a dialog that is used to invite users to a group.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/invite_dialog.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/invite_dialog.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/invite_dialog.vue


Data Table
----------

The **activator** prop allows you to use just one instance of the :py:class:`pyvuetify.Dialog` component. For example, a row in a :py:class:`pyvuetify.DataTable` can trigger the same dialog.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/data_table.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/data_table.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/data_table.vue

