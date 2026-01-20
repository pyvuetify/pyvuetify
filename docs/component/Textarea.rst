Textarea
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Textarea
    documentation <https://v2.vuetifyjs.com/en/components/textareas/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Textarea <ipyvuetify.Textarea>` component is used for collecting
large amounts of textual data.

.. api::

    - :py:class:`ipyvuetify.Textarea`

Usage
-----

:py:class:`Textarea <ipyvuetify.Textarea>` in its simplest form is a multi-line
text-field, useful for larger amounts of text.

.. jupyter-execute:: Textarea/usage.py
    :raises:

Examples
--------

Auto grow
^^^^^^^^^

When using the ``auto_grow`` prop, textarea's will automatically increase in size
when the contained text exceeds its size.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Textarea/auto_grow.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Textarea/auto_grow.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Textarea/auto_grow.vue

Background color
^^^^^^^^^^^^^^^^

The ``background_color`` and ``color`` props give you more control over styling
:py:class:`Textarea <ipyvuetify.Textarea>`'s.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Textarea/background_color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Textarea/background_color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Textarea/background_color.vue

Clearable
^^^^^^^^^

You can clear the text from a :py:class:`Textarea <ipyvuetify.Textarea>` by using
the ``clearable`` prop, and customize the icon used with the ``clearable_icon``
prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Textarea/clearable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Textarea/clearable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Textarea/clearable.vue

Counter
^^^^^^^

The ``counter`` prop informs the user of a character limit for the
:py:class:`Textarea <ipyvuetify.Textarea>`.

.. todo::

    We don't yet support validation rules, so the example below is missing that
    functionality.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Textarea/counter.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Textarea/counter.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Textarea/counter.vue

Icons
^^^^^

The ``append_icon`` and ``prepend_icon`` props help add context to
:py:class:`Textarea <ipyvuetify.Textarea>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Textarea/icons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Textarea/icons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Textarea/icons.vue

No resize
^^^^^^^^^

:py:class:`Textarea <ipyvuetify.Textarea>`'s have the option to remain the same
size regardless of their content's size, using the ``no_resize`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Textarea/no_resize.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Textarea/no_resize.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Textarea/no_resize.vue

Rows
^^^^

The ``rows`` prop allows you to define how many rows the textarea has, when
combined with the ``row_height`` prop you can further customize your rows by
defining their height.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Textarea/rows.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Textarea/rows.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Textarea/rows.vue

Signup form
^^^^^^^^^^^

Utilizing alternative input styles, you can create amazing interfaces that are
easy to build and easy to use.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Textarea/signup_form.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Textarea/signup_form.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Textarea/signup_form.vue

