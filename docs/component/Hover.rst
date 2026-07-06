Hover
=====


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/hover/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Hover` component provides a simple interface for handling hover states for any component.

.. api::

    :py:class:`pyvuetify.Hover`

Disabled
--------

Use the **disabled** prop to pause hover tracking. When re-enabled, the value updates to reflect the cursor's current position.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Hover/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Hover/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Hover/disabled.vue


Open and close delay
--------------------

Delay :py:class:`pyvuetify.Hover` events by using **open-delay** and **close-delay** props in combination or separately.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Hover/open_and_close_delay.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Hover/open_and_close_delay.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Hover/open_and_close_delay.vue


Hover list
----------

:py:class:`pyvuetify.Hover` can be used in combination with :py:class:`pyvuetify.For` to make a single item stand out when the user interacts with the list.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Hover/hover_list.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Hover/hover_list.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Hover/hover_list.vue


Transition
----------

Create highly customized components that respond to user interaction.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Hover/transition.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Hover/transition.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Hover/transition.vue

