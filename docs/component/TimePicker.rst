TimePicker
==========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Time Pickers
    documentation <https://v2.vuetifyjs.com/en/components/time-pickers/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`TimePicker <ipyvuetify.TimePicker>` is a stand-alone component that
can be utilized in many existing Vuetify components. It offers the user a visual
representation for selecting the time.

.. api::

    - :py:class:`ipyvuetify.TimePicker`
    - :py:class:`ipyvuetify.TimePickerTitle`
    - :py:class:`ipyvuetify.TimePickerClock`

Usage
-----

Time pickers have the light theme enabled by default.

.. jupyter-execute:: TimePicker/usage.py
    :raises:

Examples
--------

Allowed times
^^^^^^^^^^^^^

You can specify allowed times using arrays, objects, and functions. You can also
specify time step/precision/interval - e.g. **10 minutes**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/allowed_times.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/allowed_times.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/allowed_times.vue

AMPM in title
^^^^^^^^^^^^^

You can move AM/PM switch to picker's title.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/ampm_in_title.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/ampm_in_title.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/ampm_in_title.vue

Colors
^^^^^^

Time picker colors can be set using the ``color`` and ``header_color`` props. If
``header_color`` prop is not provided header will use the ``color`` prop value.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/colors.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/colors.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/colors.vue

Disabled
^^^^^^^^

You can't interact with **disabled** picker.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/disabled.vue

Format
^^^^^^

A time picker can be switched to **24hr** format. Note that the ``format`` prop
defines only the way the picker is displayed, picker's value (model) is always in
**24hr** format.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/format.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/format.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/format.vue

No title
^^^^^^^^

You can remove picker's title.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/no_title.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/no_title.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/no_title.vue

Range
^^^^^

This is an example of joining pickers together using ``min`` and ``max`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/range.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/range.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/range.vue

Read-only
^^^^^^^^^

**Read-only** picker behaves same as disabled one, but looks like default one.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/read_only.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/read_only.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/read_only.vue

Scrollable
^^^^^^^^^^

You can edit time picker's value using mouse wheel.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/scrollable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/scrollable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/scrollable.vue

Use seconds
^^^^^^^^^^^

Time picker can have seconds input.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/use_seconds.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/use_seconds.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/use_seconds.vue

Width
^^^^^

You can specify the picker's width or make it full width.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/width.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/width.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/width.vue

Dialog and menu
^^^^^^^^^^^^^^^

Due to the flexibility of pickers, you can really dial in the experience exactly
how you want it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/dialog_and_menu.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/dialog_and_menu.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/dialog_and_menu.vue

