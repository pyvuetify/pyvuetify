Lazy
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Lazy documentation
    <https://v2.vuetifyjs.com/en/components/lazy/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Lazy <ipyvuetify.Lazy>` component is used to dynamically load
components based upon an elements visibility.

.. api::

    :py:class:`ipyvuetify.Lazy`

Usage
-----

The :py:class:`Lazy <ipyvuetify.Lazy>` component by default will not render its
contents until it has been intersected. Scroll down and watch the element render
as you go past it.

.. todo::

    very complex implementation that cannot be rendered in a static documetnation.

Caveats
-------

The :py:class:`Lazy <ipyvuetify.Lazy>` component uses the `v-intersect
<https://v2.vuetifyjs.com/en/directives/intersect/>`__ directive which requires
a `Polyfill <https://v2.vuetifyjs.com/en/directives/intersect/#polyfill>`__ in
order to work on IE11 / Safari. It's possible on some iOS versions will also
require the use of this polyfill.
