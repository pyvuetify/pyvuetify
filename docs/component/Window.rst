Window
======

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/windows/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Window` component provides the baseline functionality for transitioning content from one pane to another. Other components such as :py:class:`pyvuetify.Tabs`, :py:class:`pyvuetify.Carousel` and :py:class:`pyvuetify.Stepper` utilize this component at their core.

.. api::

    :py:class:`pyvuetify.Window`

Show arrows
-----------

By default no arrows are displayed. You can change this by adding the **show-arrows** prop. If you set the prop value to ``"hover"``, they will only show when you mouse over the window.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Window/show_arrows.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Window/show_arrows.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Window/show_arrows.vue


Reverse
-------

The **reverse** prop will reverse the transitions

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Window/reverse.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Window/reverse.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Window/reverse.vue


Direction
---------

You can change the transition to vertical using the **direction** prop

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Window/direction.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Window/direction.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Window/direction.vue


Customized arrows
-----------------

Arrows can be customized by using **prev** and **next** slots.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Window/slots_next_prev.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Window/slots_next_prev.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Window/slots_next_prev.vue


Account creation
----------------

Create rich forms with smooth animations. :py:class:`pyvuetify.Window` automatically tracks the current selection index to change the transition direction.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Window/account_creation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Window/account_creation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Window/account_creation.vue


Onboarding
----------

:py:class:`pyvuetify.Window` makes it easy to create custom components such as a differently styled stepper.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Window/onboarding.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Window/onboarding.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Window/onboarding.vue

