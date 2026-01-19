Card
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Card documentation
    <https://v2.vuetifyjs.com/en/components/cards/>`__. All examples have been converted
    to ipyvuetify syntax.

The :py:class:`Card <ipyvuetify.Card>` component is a versatile component that can
be used for anything from a panel to a static image. The card component has numerous
helper components to make markup as easy as possible. Components that have no listed
options use Vue's functional component option for faster rendering and serve as markup
sugar to make building easier.

.. api::

    - :py:class:`ipyvuetify.Card`
    - :py:class:`ipyvuetify.CardTitle`
    - :py:class:`ipyvuetify.CardSubtitle`
    - :py:class:`ipyvuetify.CardText`
    - :py:class:`ipyvuetify.CardActions`

Usage
-----

A card has 4 basic components: :py:class:`CardTitle <ipyvuetify.CardTitle>`,
:py:class:`CardSubtitle <ipyvuetify.CardSubtitle>`,
:py:class:`CardText <ipyvuetify.CardText>` and
:py:class:`CardActions <ipyvuetify.CardActions>`.

.. jupyter-execute:: Card/usage.py
    :raises:

Functional Components
---------------------

``CardActions``
^^^^^^^^^^^^^^^

The container used for placing **actions** for a card, such as :py:class:`Btn <ipyvuetify.Btn>`
or :py:class:`Menu <ipyvuetify.Menu>`. Also applies special margin to buttons so that
they properly line up with other card content areas.

``CardSubtitle``
^^^^^^^^^^^^^^^^

Provides a default **font-size** and **padding** for card subtitles. Font-size can be
overwritten with `typography classes <https://v2.vuetifyjs.com/en/styles/text-and-typography/>`__.

``CardText``
^^^^^^^^^^^^

Primarily used for **text content** in a card. Applies padding for text, reduces its
font-size to .875rem.

``CardTitle``
^^^^^^^^^^^^^

Provides a default **font-size** and **padding** for card titles. Font-size can be
overwritten with `typography classes <https://v2.vuetifyjs.com/en/styles/typography/>`__.

Loading
-------

Cards can be set to a loading state when processing a user action. This disables
further actions and provides visual feedback with an indeterminate
:py:class:`ProgressLinear <ipyvuetify.ProgressLinear>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/loading.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/loading.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/loading.vue

Outlined
--------

An ``outlined`` card has 0 elevation and contains a soft border.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/outlined.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/outlined.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/outlined.vue

Card Reveal
-----------

Using :py:class:`ExpandTransition <ipyvuetify.ExpandTransition>` and a ``click``
event you can have a card that reveals more information once the button is clicked,
activating the hidden card to be revealed.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/card_reveal.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/card_reveal.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/card_reveal.vue

Content Wrapping
----------------

The ``v-card`` component is useful for wrapping content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/content_wrapping.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/content_wrapping.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/content_wrapping.vue

Custom Actions
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

Using grids, you can create beautiful layouts.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/grids.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/grids.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/grids.vue

Horizontal Cards
----------------

Using :py:class:`Col <ipyvuetify.Col>`, you can create customized horizontal cards.
Use the ``contain`` property to shrink the :py:class:`Img <ipyvuetify.Img>` to fit inside the container,
instead of covering.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/horizontal_cards.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/horizontal_cards.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/horizontal_cards.vue

Information Card
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

Media with Text
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

Twitter Card
------------

The :py:class:`Card <ipyvuetify.Card>` component has multiple children components
that help you build complex examples without having to worry about spacing. This
example is comprised of the :py:class:`CardTitle <ipyvuetify.CardTitle>`,
:py:class:`CardText <ipyvuetify.CardText>` and
:py:class:`CardActions <ipyvuetify.CardActions>` components.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/twitter_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/twitter_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/twitter_card.vue

Weather Card
------------

Using :py:class:`ListItem <ipyvuetify.ListItem>` and a :py:class:`Slider <ipyvuetify.Slider>`,
we are able to create a unique weather card. The list components ensure that we have
consistent spacing and functionality while the slider component allows us to provide
a useful interface of selection to the user.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Card/weather_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Card/weather_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Card/weather_card.vue

