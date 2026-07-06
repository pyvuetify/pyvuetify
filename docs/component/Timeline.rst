Timeline
========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/timelines/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Timeline` is useful for stylistically displaying chronological information.



<!--

.. api::

    :py:class:`pyvuetify.Timeline`

Direction
---------

Switch between a horizontal and vertical timeline in real-time using the **direction** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/direction.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/direction.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/direction.vue


Side
----

Use the **side** property to force all items to one side of the timeline.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/single_side.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/single_side.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/single_side.vue


Alignment
---------

By default, :py:class:`pyvuetify.TimelineItem` content is vertically aligned ``center``. The **align** prop also supports ``top`` alignment.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/align.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/align.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/align.vue


Dot color
---------

Colored dots create visual breakpoints that make your timelines easier for users to read.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/color.vue


Icon dots
---------

Use icons within the :py:class:`pyvuetify.TimelineItem` dot to provide additional context.





.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/icon_dots.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/icon_dots.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/icon_dots.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/mirror.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/mirror.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/mirror.vue


Size
----

The **size** prop allows you to customize the size of each dot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/size.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/size.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/size.vue


Truncated line
--------------

Truncate the start, end or both ends of the timeline center line by using the **truncate-line** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/truncate_line.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/truncate_line.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/truncate_line.vue


Line inset
----------

Modify the inset of dividing lines by specifying a custom amount using the **line-inset** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/line_inset.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/line_inset.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/line_inset.vue


Icon
----

Insert avatars into dots with use of the ``icon`` slot and :py:class:`pyvuetify.Avatar`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/icon.vue


Opposite
--------

The **opposite** slot provides an additional layer of customization within your timelines.



<!--

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/opposite.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/opposite.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/opposite.vue


Timeline item default
---------------------

If you place a :py:class:`pyvuetify.Card` inside of a :py:class:`pyvuetify.TimelineItem`, a caret will appear on the side of the card.


-->


Advanced
--------

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/advanced.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/advanced.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/advanced.vue

