EmptyState
==========


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/empty-states/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.EmptyState` component is used to indicate that a list is empty or that no search results were found.

.. api::

    :py:class:`pyvuetify.EmptyState`

Props
-----

The :py:class:`pyvuetify.EmptyState` component has a multitude of props that allow you to customize its appearance and behavior.


Content
-------

There are three main properties for configuring text content, **title**, **subtitle**, and **text**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: EmptyState/content.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: EmptyState/content.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: EmptyState/content.vue


Media
-----

Add an icon or image to the empty state to help convey its purpose.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: EmptyState/media.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: EmptyState/media.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: EmptyState/media.vue


Actions
-------

Add a button to the empty state to help users take action.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: EmptyState/actions.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: EmptyState/actions.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: EmptyState/actions.vue


Slots
-----

The :py:class:`pyvuetify.EmptyState` component has numerous slots that make it easy to customize the default behavior.

| Slot | Description |
| - | - |
| 1. Default | The default slot |
| 2. Media | The media slot is for images or icons |
| 3. Title | The main title slot |
| 4. Subtitle | The subtitle slot |
| 5. Text | The text slot |
| 6. Actions | The actions slot |


Default
-------

The default slot is positioned between **text** and **actions**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: EmptyState/default.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: EmptyState/default.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: EmptyState/default.vue


Title
-----

It's simple to customize the font-sizing of the title using utility classes.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: EmptyState/title.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: EmptyState/title.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: EmptyState/title.vue


Custom Actions
--------------

By default, only 1 action is displayed through configuration. To add more options, utilize the **actions** slot.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: EmptyState/actions.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: EmptyState/actions.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: EmptyState/actions.vue


Astro dog
---------

This example demonstrates how to use the :py:class:`pyvuetify.EmptyState` component to create a fun and engaging empty state.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: EmptyState/astro_dog.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: EmptyState/astro_dog.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: EmptyState/astro_dog.vue


Astro cat
---------

This example utilizes components such as :doc:`Tab <Tab>` and :doc:`Window <Window>` to create a more complex empty state.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: EmptyState/astro_cat.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: EmptyState/astro_cat.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: EmptyState/astro_cat.vue

