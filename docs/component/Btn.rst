Btn
===

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Btn documentation
    <https://v2.vuetifyjs.com/en/components/buttons/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`Btn <ipyvuetify.Btn>` component replaces the standard html button with a material
design theme and many configurable options. Any color helper class can be used to alter background
or text color.

.. api::

    -   :py:class:`ipyvuetify.Btn`
    -   :py:class:`ipyvuetify.BtnToggle`

.. seealso::

    :doc:`BtnToggle`

Usage
-----

Buttons in their simplest form contain uppercase text, a slight elevation, hover effect, and a
ripple effect on click.

.. jupyter-execute:: Btn/usage.py
    :raises:

Block
-----

``block`` buttons extend the full available width.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Btn/block.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Btn/block.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Btn/block.vue

Depressed
---------

``depressed`` buttons maintain their background color but have no box shadow.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Btn/depressed.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Btn/depressed.py

    .. tab-item:: :fab:`vuejs` Vue templates

        .. literalinclude:: Btn/depressed.vue

Floating / FAB
--------------

Floating action buttons (FAB) are circular and typically contain an icon. Use ``fab`` and size props.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Btn/floating_fab.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Btn/floating_fab.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Btn/floating_fab.vue

Icon
----

Buttons can be used as icon-only controls. This makes the button rounded and applies text styles.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Btn/icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Btn/icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Btn/icon.vue

Loaders
-------

Using the loading prop, you can notify a user that there is processing taking place. The default
behavior is to use a :py:class:`ProgressBar <ipyvuetify.ProgressBar>` component but this can be
customized.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Btn/loaders.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Btn/loaders.py

    .. tab-item:: :fab:`css3` css

        .. code-block:: css

            @keyframes spin {
                to { transform: rotate(360deg); }
            }

            .custom-loader {
                display: flex;
                animation: spin 1s linear infinite;
            }

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Btn/loaders.vue

Outlined
--------

``outlined`` buttons inherit their borders from the current color applied.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Btn/outlined.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Btn/outlined.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Btn/outlined.vue

Plain
-----

**plain** buttons have a lower baseline opacity that reacts to **hover** and **focus**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Btn/plain.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Btn/plain.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Btn/plain.vue

Rounded
-------

``rounded`` buttons behave the same as regular buttons but have rounded edges.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Btn/rounded.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Btn/rounded.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Btn/rounded.vue

sizing
------

Buttons can be given different sizing options to fit a multitude of scenarios.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Btn/sizing.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Btn/sizing.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Btn/sizing.vue

Text
----

Text buttons have no box shadow and no background. Only on hover is the container for the button shown.
When used with the color prop, the supplied color is applied to the button text instead of the background.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Btn/text.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Btn/text.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Btn/text.vue

Tile
----

**tile** buttons behave the same as regular buttons but have no border radius.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Btn/tile.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Btn/tile.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Btn/tile.vue

Raised
------

**raised** buttons have a box shadow that increases when clicked. This is the default style.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Btn/raised.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Btn/raised.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Btn/raised.vue

