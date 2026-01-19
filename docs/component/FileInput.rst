FileInput
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify File Input documentation
    <https://v2.vuetifyjs.com/en/components/file-inputs/>`__. All examples have been converted
    to ipyvuetify syntax.

The :py:class:`FileInput <ipyvuetify.FileInput>` component is a specialized input that provides
a clean interface for selecting files, showing detailed selection information and upload progress.
It is meant to be a direct replacement for a standard file input.

.. api::

    :py:class:`ipyvuetify.FileInput`

Usage
-----

At its core, the :py:class:`FileInput <ipyvuetify.FileInput>` component is a basic
container that extends :py:class:`TextField <ipyvuetify.TextField>`.

.. jupyter-execute:: FileInput/usage.py
    :raises:

Examples
--------

Accept
^^^^^^

:py:class:`FileInput <ipyvuetify.FileInput>` component can accept only specific
media formats/file types if you want. For more information, checkout the documentation
on the `accept attribute <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileInput/accept.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileInput/accept.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileInput/accept.vue

Chips
^^^^^

A selected file can be displayed as a :py:class:`Chip <ipyvuetify.Chip>`. When using
the ``chips`` and ``multiple`` props, each chip will be displayed (as opposed to
the file count).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileInput/chips.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileInput/chips.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileInput/chips.vue

Counter
^^^^^^^

When using the ``show_size`` property along with ``counter``, the total number of
files and size will be displayed under the input.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileInput/counter.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileInput/counter.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileInput/counter.vue

Dense
^^^^^

You can reduces the file input height with ``dense`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileInput/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileInput/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileInput/dense.vue

Multiple
^^^^^^^^

The :py:class:`FileInput <ipyvuetify.FileInput>` can contain multiple files at the
same time when using the ``multiple`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileInput/multiple.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileInput/multiple.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileInput/multiple.vue

Prepend icon
^^^^^^^^^^^^

The :py:class:`FileInput <ipyvuetify.FileInput>` has a default ``prepend_icon``
that can be set on the component or adjusted globally. More information on
changing global components can be found on the
`customizing icons page <https://v2.vuetifyjs.com/en/features/icon-fonts/>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileInput/prepend_icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileInput/prepend_icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileInput/prepend_icon.vue

Show size
^^^^^^^^^

The displayed size of the selected file(s) can be configured with the ``show_size``
property. Display sizes can be either 1024 (the default used when providing
``True``) or 1000.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileInput/show_size.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileInput/show_size.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileInput/show_size.vue

Validation
^^^^^^^^^^

Similar to other inputs, you can use the ``rules`` prop to create your own
custom validation parameters.

.. todo::

    I'm not sure it's possible to make this work in ipyvuetify since it rely on javascript
    functions. Maybe a genius from the community can figure it out :fas:`face-smile-wink`

Selection slot
^^^^^^^^^^^^^^

Using the ``selection`` slot, you can customize the appearance of your input selections.
This is typically done with :py:class:`Chip <ipyvuetify.Chip>` components, however
any component or markup can be used.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: FileInput/selection_slot.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: FileInput/selection_slot.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: FileInput/selection_slot.vue

Complex selection slot
^^^^^^^^^^^^^^^^^^^^^^

The flexibility of the selection slot allows you accommodate complex use-cases. In this example we show the first 2 selections as chips while adding a number indicator for the remaining amount.

.. todo::

    I'm not sure it's possible to make this work in ipyvuetify since it rely on javascript
    functions. Maybe a genius from the community can figure it out :fas:`face-smile-wink`
