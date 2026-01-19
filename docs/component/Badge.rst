Badge
=====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/badges/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Badge <ipyvuetify.Badge>` component superscripts or subscripts an avatar-like icon or
text onto content to highlight information to a user or to just draw attention to a specific element.
Content within the badge usually contains numbers or icons.

.. api::

    :py:class:`ipyvuetify.Badge`

Usage
-----

Badges in their simplest form display to the upper right of the content that it wraps and requires the badge slot.

.. jupyter-execute:: Badge/usage.py
    :raises:

Customization options
---------------------

The :py:class:`Badge <ipyvuetify.Badge>` component is flexible and can be used in a variety of use-cases over numerous elements. Options to tweak the location are also available through the ``offset_x`` and ``offset_y`` props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Badge/customization_options.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Badge/customization_options.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Badge/customization_options.vue

Dynamic notifications
---------------------

You can incorporate badges with dynamic content to make things such as a notification system.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Badge/dynamic_notifications.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Badge/dynamic_notifications.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Badge/dynamic_notifications.vue

Show on hover
-------------

You can do many things with visibility control, for example, show badge on hover.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Badge/show_on_hover.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Badge/show_on_hover.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Badge/show_on_hover.vue

Tabs
----

Badges help convey information to the user in a variety of ways.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Badge/tabs.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Badge/tabs.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Badge/tabs.vue

