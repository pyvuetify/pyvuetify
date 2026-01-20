Alert
=====


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/alerts/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Alert <ipyvuetify.Alert>` component is used to convey important information to the user
through the use of contextual types, icons, and colors. These default types come in 4 variations:
``success``, ``info``, ``warning``, and ``error``. Default icons are assigned which help represent
different actions each type portrays. Many parts of an alert such as ``border``, ``icon``, and ``color``
can also be customized to fit almost any situation.

.. api::

    :py:class:`ipyvuetify.Alert`

Usage
-----

Alerts in their simplest form are flat sheets of paper that display a message.

.. jupyter-execute:: Alert/usage.py
    :raises:

Border
------

The ``border`` prop adds a simple border to one of the 4 sides of the alert. This can be combined with
props like ``color``, ``dark``, and ``type`` to provide unique accents to the alert.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/border.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/border.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/border.vue

Colored Border
--------------

The ``colored-border`` prop removes the alert background in order to accent the ``border`` prop.
If a ``type`` is set, it will use the type's default color. If no color or type is set, the color
will default to the inverted color of the applied theme (black for light and white/gray for dark).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/colored_border.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/colored_border.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/colored_border.vue

Dense
-----

The ``dense`` prop decreases the height of the alert to create a simple and compact style.
When combined with the ``border`` prop, the border thickness will be decreased to stay consistent
with the style.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/dense.vue

Dismissible
-----------

The ``dismissible`` prop adds a close button to the end of the alert component. Clicking this
button will set its value to false and effectively hide the alert. You can restore the alert by
binding ``v_model`` and setting it to true. The close icon automatically has an ``aria-label``
applied that can be changed by modifying the ``close_label`` prop or changing close value in your
locale.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/dismissible.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/dismissible.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/dismissible.vue

Icon
----

The ``icon`` prop allows you to add an icon to the beginning of the alert component. If a ``type`` is
provided, this will override the default type icon. Additionally, setting the ``icon`` prop to false
will remove the icon altogether.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/icon.vue

Outlined
--------

The ``outlined`` prop inverts the style of an alert, inheriting the currently applied color, applying
it to the text and border, and making its background transparent.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/outlined.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/outlined.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/outlined.vue

Prominent
---------

The ``prominent`` prop provides a more pronounced alert by increasing the height and applying a halo
to the icon. When applying both ``prominent`` and ``dense`` together, the alert will take on the
appearance of a normal alert but with the prominent icon effects.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/prominent.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/prominent.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/prominent.vue

Text
----

The ``text`` prop is a simple alert variant that applies a reduced opacity background of the provided
color. Similar to other styled props, ``text`` can be combined with other props like ``dense``,
``prominent``, ``outlined``, and ``shaped`` to create a unique and customized component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/text.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/text.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/text.vue

Transition
----------

The ``transition`` prop allows you to apply a transition to the alert which is viewable when the
component hides and shows.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/transition.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/transition.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/transition.vue

Type
----

The ``type`` prop provides 4 default :py:class:`Alert <ipyvuetify.Alert>` styles: success, info, warning, and error. Each of
these styles provides a default icon and color. The default colors can be configured globally by
customizing Vuetify's theme.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/type.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/type.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/type.vue

Twitter Example
---------------

By combining ``color``, ``dismissible``, ``border``, ``elevation``, ``icon``, and ``colored_border``
props, you can create stylish custom alerts such as this Twitter notification.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/twitter_example.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/twitter_example.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/twitter_example.vue

Accessibility
-------------

By default, :py:class:`Alert <ipyvuetify.Alert>` components are assigned the WAI-ARIA role of alert
which denotes that the alert "is a live region with important and usually time-sensitive information."
When using the ``dismissible`` prop, the close icon will receive a corresponding ``aria-label``.
This value can be modified by changing either the ``close-label`` prop or globally through customizing
the Internationalization's default value for the close property.
