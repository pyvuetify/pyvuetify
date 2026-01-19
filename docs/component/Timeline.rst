Timeline
========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Timelines
    documentation <https://v2.vuetifyjs.com/en/components/timelines/>`__. All
    examples have been converted to ipyvuetify syntax.

The :py:class:`Timeline <ipyvuetify.Timeline>` is useful for stylistically
displaying chronological information.

.. api::

    - :py:class:`ipyvuetify.Timeline`
    - :py:class:`ipyvuetify.TimelineItem`

Usage
-----

:py:class:`Timeline <ipyvuetify.Timeline>`'s in their simplest form display a
vertical timeline that should contain at least one
:py:class:`TimelineItem <ipyvuetify.TimelineItem>`.

.. jupyter-execute:: Timeline/usage.py
    :raises:
    :hide-code:

Examples
--------

Color
^^^^^

Colored dots create visual breakpoints that make your timelines easier to read.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="mx-auto"
                max-width="400"
            >
                <v-card
                dark
                flat
                >
                <v-btn
                    absolute
                    bottom
                    color="pink"
                    right
                    fab
                >
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-card-title class="pa-2 purple lighten-3">
                    <v-btn icon>
                    <v-icon>mdi-menu</v-icon>
                    </v-btn>
                    <h3 class="text-h6 font-weight-light text-center grow">
                    Timeline
                    </h3>
                    <v-avatar>
                    <v-img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"></v-img>
                    </v-avatar>
                </v-card-title>
                <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/forest.jpg"
                    gradient="to top, rgba(0,0,0,.44), rgba(0,0,0,.44)"
                >
                    <v-container class="fill-height">
                    <v-row align="center">
                        <strong class="text-h1 font-weight-regular mr-6">8</strong>
                        <v-row justify="end">
                        <div class="text-h5 font-weight-light">
                            Monday
                        </div>
                        <div class="text-uppercase font-weight-light">
                            February 2015
                        </div>
                        </v-row>
                    </v-row>
                    </v-container>
                </v-img>
                </v-card>
                <v-card-text class="py-0">
                <v-timeline
                    align-top
                    dense
                >
                    <v-timeline-item
                    color="pink"
                    small
                    >
                    <v-row class="pt-1">
                        <v-col cols="3">
                        <strong>5pm</strong>
                        </v-col>
                        <v-col>
                        <strong>New Icon</strong>
                        <div class="text-caption">
                            Mobile App
                        </div>
                        </v-col>
                    </v-row>
                    </v-timeline-item>

                    <v-timeline-item
                    color="teal lighten-3"
                    small
                    >
                    <v-row class="pt-1">
                        <v-col cols="3">
                        <strong>3-4pm</strong>
                        </v-col>
                        <v-col>
                        <strong>Design Stand Up</strong>
                        <div class="text-caption mb-2">
                            Hangouts
                        </div>
                        <v-avatar>
                            <v-img
                            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                            ></v-img>
                        </v-avatar>
                        <v-avatar>
                            <v-img
                            src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                            ></v-img>
                        </v-avatar>
                        <v-avatar>
                            <v-img
                            src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                            ></v-img>
                        </v-avatar>
                        </v-col>
                    </v-row>
                    </v-timeline-item>

                    <v-timeline-item
                    color="pink"
                    small
                    >
                    <v-row class="pt-1">
                        <v-col cols="3">
                        <strong>12pm</strong>
                        </v-col>
                        <v-col>
                        <strong>Lunch break</strong>
                        </v-col>
                    </v-row>
                    </v-timeline-item>

                    <v-timeline-item
                    color="teal lighten-3"
                    small
                    >
                    <v-row class="pt-1">
                        <v-col cols="3">
                        <strong>9-11am</strong>
                        </v-col>
                        <v-col>
                        <strong>Finish Home Screen</strong>
                        <div class="text-caption">
                            Web App
                        </div>
                        </v-col>
                    </v-row>
                    </v-timeline-item>
                </v-timeline>
                </v-card-text>
            </v-card>
            </template>

Dense
^^^^^

**Dense** timelines position all content to the right. In this example,
:py:class:`Alert <ipyvuetify.Alert>` replaces the card to provide a different
design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/dense.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/dense.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/dense.vue

Icon dots
^^^^^^^^^

Conditionally use icons within the :py:class:`TimelineItem <ipyvuetify.TimelineItem>`'s
dot to provide additional context.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/icon_dots.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/icon_dots.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/icon_dots.vue

Reverse
^^^^^^^

You can reverse the direction of the timeline items by using the ``reverse`` prop.
This works both in default and dense mode.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/reverse.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/reverse.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/reverse.vue

Small
^^^^^

The ``small`` prop allows alternate styles to provide a unique design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/small.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/small.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/small.vue

Icon
^^^^

Insert avatars into dots with use of the ``icon`` slot and
:py:class:`Avatar <ipyvuetify.Avatar>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/icon.vue

Opposite
^^^^^^^^

The ``opposite`` slot provides an additional layer of customization within your
timelines.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/opposite.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/opposite.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/opposite.vue

Timeline item default
^^^^^^^^^^^^^^^^^^^^^

If you place a :py:class:`Card <ipyvuetify.Card>` inside of a
:py:class:`TimelineItem <ipyvuetify.TimelineItem>`, a caret will appear on the side
of the card.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Timeline/timeline_item_default.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Timeline/timeline_item_default.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Timeline/timeline_item_default.vue

Advanced
^^^^^^^^

Modular components allow you to create highly customized solutions that just work.

.. todo::

    This example requires an active kernel to run.
