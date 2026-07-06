Snackbar
========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/snackbars/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Snackbar` component is used to display a quick message to a user. Snackbars support positioning, removal delay, and callbacks.

.. api::

    :py:class:`pyvuetify.Snackbar`

Timeout
-------

The **timeout** property lets you customize the delay before the :py:class:`pyvuetify.Snackbar` is hidden.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Snackbar/timeout.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Snackbar/timeout.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Snackbar/timeout.vue


Variants
--------

Use the **variant** and **rounded** prop to apply distinct look and shape to the snackbar. Transparent variants such as ``tonal`` and ``outlined`` render with a surface background to remain legible against the page.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Snackbar/variants.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Snackbar/variants.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Snackbar/variants.vue


Prepend icon
------------

The **prepend-icon** prop adds an icon to the start of the snackbar.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Snackbar/prepend_icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Snackbar/prepend_icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Snackbar/prepend_icon.vue


Prepend avatar
--------------

The **prepend-avatar** prop adds an avatar image to the start of the snackbar.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Snackbar/prepend_avatar.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Snackbar/prepend_avatar.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Snackbar/prepend_avatar.vue


Loading
-------

The **loading** prop displays a circular progress indicator in the prepend area, useful for indicating an ongoing process.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Snackbar/loading.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Snackbar/loading.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Snackbar/loading.vue


Timer position
--------------

The **timer** prop accepts ``'top'`` or ``'bottom'`` to control where the progress bar is rendered. Use **timer-color** to change its color and **reverse-timer** to invert the direction.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Snackbar/timer_position.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Snackbar/timer_position.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Snackbar/timer_position.vue


Vertical
--------

The **vertical** property allows you to stack the content of your :py:class:`pyvuetify.Snackbar`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Snackbar/vertical.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Snackbar/vertical.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Snackbar/vertical.vue


Header
------

The **header** slot renders content above the snackbar wrapper, useful for metadata like a provider name or timestamp.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Snackbar/header.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Snackbar/header.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Snackbar/header.vue


Prepend
-------

The **prepend** slot overrides the default prepend area, allowing you to customize the content beyond what is possible with simple props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Snackbar/prepend.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Snackbar/prepend.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Snackbar/prepend.vue

