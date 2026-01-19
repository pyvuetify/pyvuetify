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

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>

Examples
--------

Reverse
^^^^^^^

**Reverse** :py:class:`Window <ipyvuetify.Window>` always displays reverse
transition.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>

Vertical
^^^^^^^^

:py:class:`Window <ipyvuetify.Window>` can be vertical. Vertical windows have **Y
axis** transition instead of **X axis** transition.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>

Customized arrows
^^^^^^^^^^^^^^^^^

Arrows can be customized by using ``prev`` and ``next`` slots.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>

Misc
----

Account creation
^^^^^^^^^^^^^^^^

Create rich forms with smooth animations. :py:class:`Window <ipyvuetify.Window>`
automatically tracks the current selection index to automatically change the
transition direction. This can be manually controlled with the ``reverse`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>

Onboarding
^^^^^^^^^^

:py:class:`Window <ipyvuetify.Window>` makes it easy to create custom components
such as a different styled stepper.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            </template>
