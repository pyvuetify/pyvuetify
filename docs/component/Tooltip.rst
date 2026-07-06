Tooltip
=======

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/tooltips/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Tooltip` component is useful for conveying information when a user hovers over an element. You can also programmatically control the display of tooltips through a :py:class:`pyvuetify.Model`. When activated, tooltips display a text label identifying an element, such as a description of its function.

.. api::

    :py:class:`pyvuetify.Tooltip`

Interactive
-----------

The **interactive** prop prevents the tooltip from closing during mouse interactions. For example, if the tooltip contains text that users might want to click or copy.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tooltip/interactive.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tooltip/interactive.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tooltip/interactive.vue


Location
--------

Use the **location** prop to specify on which side of the element the tooltip should show. Read more about **location** :doc:`Overlay <Overlay>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tooltip/location.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tooltip/location.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tooltip/location.vue


Color
-----

Tooltip color can be set with the ``color`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tooltip/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tooltip/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tooltip/color.vue


Open on Click
-------------

The **open-on-click** prop allows tooltip to open when the activator is clicked. Useful for touch devices or when manual triggering is preferred.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tooltip/open_on_click.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tooltip/open_on_click.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tooltip/open_on_click.vue


Visibility
----------

Tooltip visibility can be programmatically changed using :py:class:`pyvuetify.Model`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tooltip/visibility.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tooltip/visibility.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tooltip/visibility.vue


Tooltip at cursor
-----------------

Tooltip can appear where the cursor is by setting the **target** prop to ``cursor``. This is currently only available with **open-on-click**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Tooltip/at_cursor.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Tooltip/at_cursor.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Tooltip/at_cursor.vue

