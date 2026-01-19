Snackbar
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Snackbar
    documentation <https://v2.vuetifyjs.com/en/components/snackbars/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Snackbar <ipyvuetify.Snackbar>` component is used to display a
quick message to a user. Snackbars support positioning, removal delay, and
callbacks.

.. api::

    - :py:class:`ipyvuetify.Snackbar`

Usage
-----

A :py:class:`Snackbar <ipyvuetify.Snackbar>` in its simplest form displays a
temporary and closable notification to the user.

.. jupyter-execute:: Snackbar/usage.py
    :raises:
    :hide-code:

Examples
--------

Multi line
^^^^^^^^^^

The ``multi_line`` property extends the height of the
:py:class:`Snackbar <ipyvuetify.Snackbar>` to give you a little more room for
content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Snackbar/multi_line.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Snackbar/multi_line.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Snackbar/multi_line.vue

Timeout
^^^^^^^

The ``timeout`` property lets you customize the delay before the
:py:class:`Snackbar <ipyvuetify.Snackbar>` is hidden.

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
^^^^^^^^

Apply different styles to the snackbar using props such as ``text``,
``shaped``, ``outlined``, and more.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Snackbar/variants.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Snackbar/variants.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Snackbar/variants.vue

Vertical
^^^^^^^^

The ``vertical`` property allows you to stack the content of your
:py:class:`Snackbar <ipyvuetify.Snackbar>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Snackbar/vertical.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Snackbar/vertical.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Snackbar/vertical.vue

