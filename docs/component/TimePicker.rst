TimePicker
==========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/time-pickers/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.TimePicker` is stand-alone component that can be utilized in many existing Vuetify components. It offers the user a visual representation for selecting the time.

.. api::

    :py:class:`pyvuetify.TimePicker`

Allowed times
-------------

You can specify allowed times using arrays, objects, and functions. You can also specify time step/precision/interval - e.g. 10 minutes.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/allowed_times.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/allowed_times.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/allowed_times.vue


Colors
------

Time picker colors can be set using the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/color.vue


Disabled
--------

You can't interact with disabled picker.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/disabled.vue


Elevation
---------

Emphasize the :py:class:`pyvuetify.TimePicker` component by providing an **elevation** from 0 to 5. Elevation modifies the ``box-shadow`` css property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/elevation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/elevation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/elevation.vue


Format
------

A time picker can be switched to 24hr format. Note that the ``format`` prop defines only the way the picker is displayed, picker's value (model) is always in 24hr format.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/format.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/format.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/format.vue


No header
---------

You can remove picker's header.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/hide_header.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/hide_header.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/hide_header.vue


Range
-----

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
---------

Read-only picker behaves same as disabled one, but looks like default one.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/readonly.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/readonly.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/readonly.vue


Scrollable
----------

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
-----------

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


Dialog and menu
---------------

Due to the flexibility of pickers, you can really dial in the experience exactly how you want it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: TimePicker/dialog_and_menu.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: TimePicker/dialog_and_menu.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: TimePicker/dialog_and_menu.vue

