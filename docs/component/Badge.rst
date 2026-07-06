Badge
=====

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/badges/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Badge` component superscripts or subscripts an avatar-like icon or text onto content to highlight information to a user or to just draw attention to a specific element. Content within the badge usually contains numbers or icons.

.. api::

    :py:class:`pyvuetify.Badge`

Dot
---

The **dot** property removes badge's content and reduces its overall size. This is useful when you need to draw a user's attention subtly.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Badge/dot.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Badge/dot.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Badge/dot.vue


Inline
------

Inline badges can be placed anywhere with content and can render without a *default* slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Badge/inline.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Badge/inline.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Badge/inline.vue


Content
-------

For simple text, use the **content** property to display a *value* on the badge.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Badge/content.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Badge/content.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Badge/content.vue

