Divider
=======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Divider documentation
    <https://v2.vuetifyjs.com/en/components/dividers/>`__. All examples have been converted
    to ipyvuetify syntax.

The :py:class:`Divider <ipyvuetify.Divider>` component is used to separate sections of lists or layouts.

.. api::

    :py:class:`ipyvuetify.Divider`

Usage
-----

Dividers in their simplest form display a horizontal line.

.. jupyter-execute:: Divider/usage.py
    :raises:

Examples
--------

Inset
^^^^^

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

Vertical
^^^^^^^^

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

Portrait View
^^^^^^^^^^^^^

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
^^^^^^^^^^

Dividers and :py:class:`Subheader <ipyvuetify.Subheader>` components can help break up content
and can optionally line up with one another by using the same ``inset`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Divider/subheaders.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Divider/subheaders.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Divider/subheaders.vue

Accessibility
-------------

By default, :py:class:`Divider <ipyvuetify.Divider>` components are assigned the
`WAI-ARIA <https://www.w3.org/WAI/standards-guidelines/aria/>`__ role of
`separator <https://www.w3.org/TR/wai-aria/#separator>`__ which denotes that the divider
"separates and distinguishes sections of content or groups of menu items." However, sometimes
a divider is just a way to make an interface look nice. In those cases, the role of
`presentation <https://www.w3.org/TR/wai-aria/#presentation>`__ should be used which denotes
"an element whose implicit native role semantics will not be mapped to the accessibility API."


To override the default separator role in a :py:class:`Divider <ipyvuetify.Divider>`, simply
add a ``role="presentation"`` prop to your component. In addition, :py:class:`Divider <ipyvuetify.Divider>`
components have an ``aria-orientation="horizontal"``. If ``vertical=True``, then
``aria-orientation="vertical"`` will be set automatically as well. If ``role="presentation"``,
``aria-orientation="undefined"``, its default value.
