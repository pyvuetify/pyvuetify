Card
====


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/cards/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Card` component is a versatile and enhanced version of :doc:`Sheet <Sheet>` that provides a simple interface for headings, text, images, icons, and more.

.. api::

    :py:class:`pyvuetify.Card`

Basics
------

There are three ways you can populate a :py:class:`pyvuetify.Card` with content. The first one is by using props, the second one is by slots, and the third one is by manually using the ``v-card-*`` components.



Props give you an easy interface to display text-only content. They can also be used to easily render images and icons. Use slots if you need to render more complex content. If you need full control over the content, use markup.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/basics_content.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/basics_content.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/basics_content.vue


Combined
--------

In some cases it is possible to combine the different options, like the example below where props, slots and markup have all been used.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/basics_combine.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/basics_combine.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/basics_combine.vue


Props
-----

The :py:class:`pyvuetify.Card` component has a variety of props that allow you to customize its appearance and behavior.


Variants
--------

The **variant** prop gives you easy access to several different card styles. Available variants are: **elevated**(default), **flat**, **tonal**, **outlined**, **text**, and **plain**.

| Value        | Description                                                 |
|--------------|-------------------------------------------------------------|
| **elevated** | Elevates the card with a shadow                             |
| **flat**     | Removes card shadow and border                              |
| **tonal**    | Background color is a lowered opacity of the color          |
| **outlined** | Applies a thin border and card has zero elevation           |
| **text**     | Removes the background and removes shadow                   |
| **plain**    | Removes the background and lowers the opacity until hovered |





.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/variant.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/variant.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/variant.vue


Color
-----

Cards can be colored by using any of the builtin colors and contextual names using the **color** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/color.vue


Elevation
---------

The **elevation** property provides up to 24 levels of shadow depth. By default, cards rest at 2dp.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/elevation.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/elevation.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/elevation.vue


Hover
-----

When using the **hover** prop, the cards will increase its elevation when the mouse is hovered over them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/hover.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/hover.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/hover.vue


Href
----

The card becomes an anchor with the **href** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/href.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/href.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/href.vue


Link
----

Add the **link** prop for the same style without adding an anchor.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/link.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/link.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/link.vue


Disabled
--------

The **disabled** prop can be added in order to prevent a user from interacting with the card.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/disabled.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/disabled.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/disabled.vue


Image
-----

Apply a specific background image to the Card.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/image.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/image.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/image.vue


Slots
-----

The :py:class:`pyvuetify.Card` component provides slots that enable you to customize content created by its props or to add additional content.

Slots give you greater control to customize the content of the :py:class:`pyvuetify.Card` component while still taking advantage of the easy-to-use props.


Avatar and icon
---------------

You can use the **prepend-avatar**, **append-avatar**, **prepend-icon** and **append-icon** props or the **prepend** and **append** slots to place a :doc:`Icon <Icon>` that automatically injects the designated icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/prepend_append.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/prepend_append.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/prepend_append.vue


Card Reveal
-----------

Using :py:class:`pyvuetify.ExpandTransition` and a ``@click`` event you can have a card that reveals more information once the button is clicked, activating the hidden card to be revealed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/card_reveal.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/card_reveal.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/card_reveal.vue


Content wrapping
----------------

The :py:class:`pyvuetify.Card` component is useful for wrapping content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/content_wrapping.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/content_wrapping.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/content_wrapping.vue


Custom actions
--------------

With a simple conditional, you can easily add supplementary text that is hidden until opened.





.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/custom_actions.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/custom_actions.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/custom_actions.vue


Grids
-----

Using :doc:`Grid <Grid>`, you can create beautiful layouts.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/grids.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/grids.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/grids.vue


Horizontal cards
----------------

You can also play with the card layout using `layout flex <https://vuetifyjs.com/styles/flex/>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/horizontal_cards.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/horizontal_cards.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/horizontal_cards.vue


Information card
----------------

Cards are entry points to more detailed information. To keep things concise, ensure to limit the number of actions the user can take.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/information_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/information_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/information_card.vue


Media with text
---------------

Using the layout system, we can add custom text anywhere within the background.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/media_with_text.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/media_with_text.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/media_with_text.vue


Twitter card
------------

The :py:class:`pyvuetify.Card` component has multiple children components that help you build complex examples without having to worry about spacing. This example is comprised of the :py:class:`pyvuetify.CardTitle`, :py:class:`pyvuetify.CardText` and :py:class:`pyvuetify.CardActions` components.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/twitter_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/twitter_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/twitter_card.vue


Weather card
------------

Using :doc:`List <List>` and a :doc:`Slider <Slider>`, we are able to create a unique weather card. The list components ensure that we have consistent spacing and functionality while the slider component allows us to provide a useful interface of selection to the user.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/weather_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/weather_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/weather_card.vue


Loading
-------

Use an indeterminate :doc:`ProgressLinear <ProgressLinear>` to indicate a loading state.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/loading.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/loading.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/loading.vue


Earnings goal
-------------

This example utilizes slots to customize the appearance of the different content areas.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/earnings_goal.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/earnings_goal.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/earnings_goal.vue


Funding card
------------

Utilize a combination of Card properties and utility classes to create a unique funding card.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/shopify_funding.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/shopify_funding.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/shopify_funding.vue

