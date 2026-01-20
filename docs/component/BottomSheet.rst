BottomSheet
===========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/bottom-sheets/>`_.
    All examples have been converted to ipyvuetify syntax.

The bottom sheet is a modified :py:class:`Dialog <ipyvuetify.Dialog>` that slides from the bottom of the screen, similar to a :py:class:`BottomNavigation <ipyvuetify.BottomNavigation>`. Whereas a bottom navigation component is for buttons and specific application level actions, a bottom sheet can contain anything.

.. api::

    :py:class:`ipyvuetify.BottomSheet`

Usage
-----

Here we display an example list of actions that could be present in an application.

.. jupyter-execute:: BottomSheet/usage.py
    :raises:

Inset
-----

Bottom sheets can be inset, reducing their maximum width on desktop to 70%. This can be further reduced manually using the ``width`` prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomSheet/inset.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomSheet/inset.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomSheet/inset.vue

Model
-----

Bottom sheets can be controlled using ``v_model``. You can use it to close them or if you can't use ``activator`` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomSheet/model.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomSheet/model.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomSheet/model.vue

Persistent
----------

Persistent bottom sheets can't be closed by clicking outside them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomSheet/persistent.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomSheet/persistent.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomSheet/persistent.vue

Music Player
------------

Using a inset bottom sheet, you can make practical components such as this simple music player.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomSheet/music_player.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomSheet/music_player.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomSheet/music_player.vue

Open In List
------------

By combining a functional list into a bottom sheet, you can create a simple 'open in' component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomSheet/open_in_list.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomSheet/open_in_list.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomSheet/open_in_list.vue

