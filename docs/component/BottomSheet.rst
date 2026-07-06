BottomSheet
===========

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/bottom-sheets/>`__.
    All examples have been converted to pyvuetify syntax.

The bottom sheet is a modified :py:class:`pyvuetify.Dialog` that slides from the bottom of the screen, similar to a :py:class:`pyvuetify.BottomNavigation`.

.. api::

    :py:class:`pyvuetify.BottomSheet`

Props
-----

The :py:class:`pyvuetify.BottomSheet` component has access to all of the props available in :py:class:`pyvuetify.Dialog`.


Model
-----

The **v-model** (or **model-value**) controls the visibility of the bottom sheet:



This also works in tandem with the :py:class:`pyvuetify.BottomSheet` slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomSheet/model.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomSheet/model.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomSheet/model.vue


Inset
-----

With the **inset** prop, reduce the maximum width of the content area on desktop to 70%. This can be further reduced manually using the **width** prop.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomSheet/inset.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomSheet/inset.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomSheet/inset.vue


Slots
-----

The :py:class:`pyvuetify.BottomSheet` component has access to all of the slots available in :py:class:`pyvuetify.Dialog`.

!:doc:`VBottomSheet <VBottomSheet>`

| Slot         | Description                                         |
|--------------|-----------------------------------------------------|
| 1. Default   | The default slot                                    |
| 2. Activator | The activator slot is used to open the bottom sheet |


Examples
--------

The following are a collection of examples that demonstrate more advanced and real world use of the :py:class:`pyvuetify.BottomSheet` component.


Music Player
------------

Using a inset bottom sheet, you can make practical components such as this simple music player.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: BottomSheet/player.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: BottomSheet/player.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: BottomSheet/player.vue


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

