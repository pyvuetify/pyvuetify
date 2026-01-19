Window
======

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Windows
    documentation <https://v2.vuetifyjs.com/en/components/windows/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Window <ipyvuetify.Window>` component provides the baseline
functionality for transitioning content from **1** pane to another. Other components
such as :py:class:`Tabs <ipyvuetify.Tabs>`,
:py:class:`Carousel <ipyvuetify.Carousel>` and
:py:class:`Stepper <ipyvuetify.Stepper>` utilize this component at their core.

.. api::

    - :py:class:`ipyvuetify.Window`
    - :py:class:`ipyvuetify.WindowItem`

Usage
-----

Designed to easily cycle through content, :py:class:`Window <ipyvuetify.Window>`
provides a simple interface to create truly custom implementations.

.. todo::

    Like all the window examples below, this one requires an interactive live kernel
    to function as intended. help us improve this by suggesting better ways to
    demonstrate such components in the documentation :fas:`thumbs-up`.

Examples
--------

Reverse
^^^^^^^

**Reverse** :py:class:`Window <ipyvuetify.Window>` always displays reverse
transition.

.. todo::

    Like all the window examples below, this one requires an interactive live kernel
    to function as intended. help us improve this by suggesting better ways to
    demonstrate such components in the documentation :fas:`thumbs-up`.

Vertical
^^^^^^^^

:py:class:`Window <ipyvuetify.Window>` can be vertical. Vertical windows have **Y
axis** transition instead of **X axis** transition.

.. todo::

    Like all the window examples below, this one requires an interactive live kernel
    to function as intended. help us improve this by suggesting better ways to
    demonstrate such components in the documentation :fas:`thumbs-up`.

Customized arrows
^^^^^^^^^^^^^^^^^

Arrows can be customized by using ``prev`` and ``next`` slots.

.. todo::

    Like all the window examples below, this one requires an interactive live kernel
    to function as intended. help us improve this by suggesting better ways to
    demonstrate such components in the documentation :fas:`thumbs-up`.

Misc
----

Account creation
^^^^^^^^^^^^^^^^

Create rich forms with smooth animations. :py:class:`Window <ipyvuetify.Window>`
automatically tracks the current selection index to automatically change the
transition direction. This can be manually controlled with the ``reverse`` prop.

.. todo::

    Like all the window examples below, this one requires an interactive live kernel
    to function as intended. help us improve this by suggesting better ways to
    demonstrate such components in the documentation :fas:`thumbs-up`.

Onboarding
^^^^^^^^^^

:py:class:`Window <ipyvuetify.Window>` makes it easy to create custom components
such as a different styled stepper.

.. todo::

    Like all the window examples below, this one requires an interactive live kernel
    to function as intended. help us improve this by suggesting better ways to
    demonstrate such components in the documentation :fas:`thumbs-up`.
