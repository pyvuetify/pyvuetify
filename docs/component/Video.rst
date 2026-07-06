Video
=====


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/videos/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Video` component is useful for background video or as a customizable player for self-hosted content.

.. api::

    :py:class:`pyvuetify.Video`

Props
-----

The :py:class:`pyvuetify.Video` component has several props that allow you to customize its appearance and behavior.


Image
-----

You can display a cover image before the video is loaded.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Video/image.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Video/image.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Video/image.vue


Start at
--------

Video can automatically skip to certain timestamp upon load. It can be useful to let the users continue where they stopped last time.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Video/start_at.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Video/start_at.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Video/start_at.vue


Color
-----

You can control the icon color and background color of the controls.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Video/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Video/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Video/color.vue


Density
-------

Three density modes provide basic control over control bar height and the icon sizes.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Video/density.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Video/density.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Video/density.vue


Rounded
-------

Border radius for the video and controls can be controled separately if you pass an array to the ``rounded`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Video/rounded.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Video/rounded.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Video/rounded.vue


Slots
-----

The :py:class:`pyvuetify.Video` component has several slots that allow you to customize the appearance and behavior of its items.

<!--


Sources
-------

Using the the **sources** slot you can make it possible to select different playback quality.


-->


Error
-----

The ``error`` prop can be used to manually force the error state. This might be useful if an operation fails and you did not obtain the source URL or Blob yet. By default error state shows only an icon, but you can add more details simply using the ``error`` slot and trigger retry using the exposed ``retry`` method.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Video/error.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Video/error.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Video/error.vue


Header
------

Optional **header** slot make it possible to put additional content on top of the video.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Video/header.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Video/header.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Video/header.vue


Append and prepend
------------------

:py:class:`pyvuetify.Video` has ``append`` and ``prepend`` slots. You can place custom controls in them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Video/append_and_prepend.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Video/append_and_prepend.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Video/append_and_prepend.vue


Controls
--------

Whenever provided customizability is not enough, the ``controls`` slot lets you drop all the built-in controls and easily define your own set of actions.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Video/controls.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Video/controls.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Video/controls.vue


Video card
----------

Props like ``floating``, ``detached`` and ``split-time`` can help you seamlesly integrate the video within card layout.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Video/in_card.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Video/in_card.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Video/in_card.vue


YouTube clone
-------------

Easily recreate the most familiar interface to let your users focus on the content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Video/tube.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Video/tube.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Video/tube.vue


Minimalistic players
--------------------

You can override bottom panel to have achieve minimalistic design.



<!--

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Video/mini.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Video/mini.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Video/mini.vue


Progress tracker
----------------

Tap into exposed ``video`` element to achieve more control and precisely track the progress.


-->

