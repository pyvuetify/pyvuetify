Divider
=======


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/dividers/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Divider` component is used to separate sections of lists or layouts.

.. api::

    :py:class:`pyvuetify.Divider`

Inset
-----

Inset dividers are moved 72px to the right. This will cause them to line up with list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Divider/inset.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Divider/inset.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Divider/inset.vue


Gradient
--------

Easily enable fading effect with **gradient** prop for a modern look.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Divider/gradient.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Divider/gradient.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Divider/gradient.vue


Vertical
--------

Vertical dividers give you more tools for unique layouts.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Divider/vertical.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Divider/vertical.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Divider/vertical.vue


Default
-------

When you pass any content to be placed in between dividers simply by utilizing the default slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Divider/default.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Divider/default.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Divider/default.vue


Portrait View
-------------

Create custom cards to fit any use-case.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Divider/portrait_view.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Divider/portrait_view.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Divider/portrait_view.vue


Subheaders
----------

Dividers and subheaders can help break up content and can optionally line up with one another by using the same ``inset`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Divider/subheaders.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Divider/subheaders.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Divider/subheaders.vue

