Sparkline
=========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Sparkline
    documentation <https://v2.vuetifyjs.com/en/components/sparklines/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Sparkline <ipyvuetify.Sparkline>` component can be used to
create simple graphs, like GitHub's contribution chart. The sparkline
component comes in 2 variations, trend (default) and bar.

.. api::

    - :py:class:`ipyvuetify.Sparkline`

Usage
-----

A sparkline is a tiny chart that provides a visual representation of data.
The sparkline component comes in 2 variations, trend (default) and bar. Each
supports a multitude of options for customizing the look and feel of the
sparkline.

.. jupyter-execute:: Sparkline/usage.py
    :raises:

Examples
--------

Fill
^^^^

You can create a :py:class:`Sparkline <ipyvuetify.Sparkline>` with fill using
the ``fill`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/fill.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/fill.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/fill.vue

Width
^^^^^

You can customize the line width of a :py:class:`Sparkline
<ipyvuetify.Sparkline>` using the ``line_width`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/width.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/width.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/width.vue

smooth
^^^^^^

You can customize the smoothness of a :py:class:`Sparkline
<ipyvuetify.Sparkline>` using the ``smooth`` property.


.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/smooth.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/smooth.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/smooth.vue

padding
^^^^^^^

You can customize the padding of a :py:class:`Sparkline
<ipyvuetify.Sparkline>` using the ``padding`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/padding.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/padding.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/padding.vue

Misc
----

Custom labels
^^^^^^^^^^^^^

By providing a ``label`` slot, we are able to modify the displayed content by
adding a dollar sign ($). This slot is exclusively for text content. For more
information on the svg ``<text>`` element, navigate to the
`MDN documentation <https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text>`__.

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
^^^^^^^^^^^^^^

The :py:class:`Sparkline <ipyvuetify.Sparkline>` component pairs nicely with
:py:class:`Card <ipyvuetify.Card>` and :py:class:`Sheet <ipyvuetify.Sheet>`
to create customized information cards, perfect for admin dashboards. Here we
use custom labels to provide additional context for the sparkline.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/dashboard_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/dashboard_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/dashboard_card.vue

Heart rate
^^^^^^^^^^

For concise information, a complete chart might be overkill. Using a trend
line with gradient provides enough detail for the user without showing too
much information.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Sparkline/heart_rate.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Sparkline/heart_rate.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Sparkline/heart_rate.vue

