Sparkline
=========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/sparklines/>`__.
    All examples have been converted to pyvuetify syntax.

The sparkline component can be used to create simple graphs, like GitHub's contribution chart.

.. api::

    :py:class:`pyvuetify.Sparkline`

Animation
---------

The **animation** prop enables smooth transitions when values change. Combined with **auto-draw** set to **once**, the sparkline draws on mount then smoothly interpolates between datasets. Toggle between weekly, monthly, and quarterly views to see the effect.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/animation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/animation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/animation.vue


Fill
----

You can create a :py:class:`pyvuetify.Sparkline` with fill using the ``fill`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/fill.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/fill.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/fill.vue


Inset
-----

The **inset** prop extends the line beyond the chart boundary for edge-to-edge rendering. It is useful when combined with **interactive**, so that edge points are not clipped by SVG boundaries.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/inset.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/inset.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/inset.vue


Smooth mode
-----------

The **smooth-mode** prop controls the interpolation algorithm. The default mode rounds corners which can cause the line to appear away from the actual values. The **monotone** mode makes the line stick to the exact data points, but also limits the **smooth** to **8**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/smooth_mode.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/smooth_mode.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/smooth_mode.vue


Custom labels
-------------

By providing a **label** slot, we are able to modify the displayed content by adding a dollar sign ($). This slot is **_exclusively_** for text content. For more information on the svg `` element, `navigate here <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/custom_labels.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/custom_labels.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/custom_labels.vue


Dashboard card
--------------

The :py:class:`pyvuetify.Sparkline` component pairs nicely with :py:class:`pyvuetify.Card` and :py:class:`pyvuetify.Sheet` to create customized information cards, perfect for admin dashboards. Here we use custom labels to provide additional context for the sparkline.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/dashboard_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/dashboard_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/dashboard_card.vue


Interactive
-----------

The **interactive** prop enables hover tracking, keyboard navigation, and focus support. Use the ``@update:current-index`` event to react to the active data point. This example fetches weekly npm download data and displays the hovered week's value and date range.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/interactive.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/interactive.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/interactive.vue


Heart rate
----------

For concise information, a complete chart might be overkill. Using a trend line with gradient provides enough detail for the user without showing too much information.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/heart_rate.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/heart_rate.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/heart_rate.vue

