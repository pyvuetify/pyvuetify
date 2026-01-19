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

Color
^^^^^

Colored dots create visual breakpoints that make your timelines easier to read.

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

Dense
^^^^^

**Dense** timelines position all content to the right. In this example,
:py:class:`Alert <ipyvuetify.Alert>` replaces the card to provide a different
design.

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

Icon dots
^^^^^^^^^

Conditionally use icons within the :py:class:`TimelineItem <ipyvuetify.TimelineItem>`'s
dot to provide additional context.

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

Reverse
^^^^^^^

You can reverse the direction of the timeline items by using the ``reverse`` prop.
This works both in default and dense mode.

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

Small
^^^^^

The ``small`` prop allows alternate styles to provide a unique design.

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

Icon
^^^^

Insert avatars into dots with use of the ``icon`` slot and
:py:class:`Avatar <ipyvuetify.Avatar>`.

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

Opposite
^^^^^^^^

The ``opposite`` slot provides an additional layer of customization within your
timelines.

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

Timeline item default
^^^^^^^^^^^^^^^^^^^^^

If you place a :py:class:`Card <ipyvuetify.Card>` inside of a
:py:class:`TimelineItem <ipyvuetify.TimelineItem>`, a caret will appear on the side
of the card.

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

Advanced
^^^^^^^^

Modular components allow you to create highly customized solutions that just work.

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
