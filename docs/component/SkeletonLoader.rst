SkeletonLoader
==============

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Skeleton loaders
    documentation <https://v2.vuetifyjs.com/en/components/skeleton-loaders/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`SkeletonLoader <ipyvuetify.SkeletonLoader>` component is a
versatile tool that can fill many roles within a project. At its heart, the
component provides an indication to the user that something is coming but not
yet available. There are over 30 pre-defined options available that can be
combined to make custom examples.

.. api::

    - :py:class:`ipyvuetify.SkeletonLoader`

Usage
-----

The :py:class:`SkeletonLoader <ipyvuetify.SkeletonLoader>` component provides
a user with a visual indicator that content is coming / loading. This is better
received than traditional full-screen loaders.

.. jupyter-execute:: SkeletonLoader/usage.py
    :raises:

Examples
--------

Boilerplate component
^^^^^^^^^^^^^^^^^^^^^

The :py:class:`SkeletonLoader <ipyvuetify.SkeletonLoader>` can be used as
boilerplate designs when creating mockups. Mix and match various pre-defined
options or create your own unique implementations. In this example, we use a
custom data property to apply the same props to multiple
:py:class:`SkeletonLoader <ipyvuetify.SkeletonLoader>`'s at once.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SkeletonLoader/boilerplate_component.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SkeletonLoader/boilerplate_component.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SkeletonLoader/boilerplate_component.vue

Accessibility
-------------

By default, the :py:class:`SkeletonLoader <ipyvuetify.SkeletonLoader>`
component is assigned a `WAI-ARIA
<https://www.w3.org/WAI/standards-guidelines/aria/>`__ role of `alert
<https://www.w3.org/TR/wai-aria/#alert>`__. We augment this role with two aria
properties. An `aria-busy
<https://www.w3.org/TR/wai-aria-1.0/states_and_properties#aria-busy>`__ value
of true denotes that a widget is missing required owned elements. An
`aria-live <https://www.w3.org/TR/wai-aria-1.1/#aria-live>`__ value of polite
sets the screen reader's priority of live regions.
