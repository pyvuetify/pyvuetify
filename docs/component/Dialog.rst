Dialog
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/dialogs/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Dialog <ipyvuetify.Dialog>` component inform users about a specific task and may contain critical information, require decisions, or involve multiple tasks. Use dialogs sparingly because they are interruptive.

.. api::

    - :py:class:`ipyvuetify.Dialog`
    - :py:class:`ipyvuetify.DialogBottomTransition`
    - :py:class:`ipyvuetify.DialogTransition`

Usage
-----

A dialog contains two slots, one for its activator and one for its content (default). Good for Privacy Policies.

.. jupyter-execute:: Dialog/usage.py
    :raises:

Fullscreen
----------

Due to limited space, full-screen dialogs may be more appropriate for mobile devices
than dialogs used on devices with larger screens.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/fullscreen.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/fullscreen.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/fullscreen.vue

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

Persistent
----------

Similar to a Simple Dialog, except that it's not dismissed when touching outside or pressing esc key.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/persistent.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/persistent.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/persistent.vue

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

The :py:class:`Dialog <ipyvuetify.Dialog>` component makes it easy to create a
customized loading experience for your application.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Dialog/loader.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Dialog/loader.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Dialog/loader.vue

Nesting
-------

Dialogs can be nested: you can open one dialog from another.

.. todo::

    It's a very chalenging example please help us !

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

