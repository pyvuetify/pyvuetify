SnackbarQueue
=============

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/snackbar-queue/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.SnackbarQueue` component is used to display a sequence of messages to the user.

.. api::

    :py:class:`pyvuetify.SnackbarQueue`

Total visible
-------------

The **total-visible** prop controls how many snackbars are shown simultaneously, stacked vertically with automatic offset. The **display-strategy** prop determines what happens when the queue exceeds this limit: ``"hold"`` (default) pauses the queue until a visible slot opens, while ``"overflow"`` immediately shows new messages and dismisses the oldest ones. Enable the **collapsed** prop to visually compress the stack into a single snackbar with a counter badge.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SnackbarQueue/total_visible.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SnackbarQueue/total_visible.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SnackbarQueue/total_visible.vue


Transition
----------

Use the **transition** prop to change the enter/leave animation. If you pass CSS-based animation with suffix ``*-auto`` (e.g. ``"slide-auto"``, ``"scroll-auto"``) the effective transition will be location-aware. To present it more clearly, the example below uses custom "bouncy-slide" transition.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SnackbarQueue/transition.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SnackbarQueue/transition.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SnackbarQueue/transition.vue


Promise
-------

Messages can include a **promise** property along with **success** and **error** callbacks. The snackbar shows a loading state until the promise resolves or rejects, then updates accordingly.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: SnackbarQueue/promise.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: SnackbarQueue/promise.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: SnackbarQueue/promise.vue


Additional props
----------------

Snackbar props can be set either on the queue to apply to all messages:

```html

```

Or individual messages as objects:

```js
queue.push({
  text: text.value,
  timeout: 2000,
  color: 'error',
})
```


Global state
------------

You can use pinia or vuex to display messages from any component:

```js { resource="stores/messages.js" }
export const useMessagesStore = defineStore('messages', () => {
  const queue = ref([])
  function add (message) {
    queue.push(message)
  }

  return { queue, add }
})
```

```html { resource="App.vue" }

  
    

    
  



  const messages = useMessagesStore()

```

```html { resource="pages/error.vue" }

  const messages = useMessagesStore()

  function onError (err) {
    messages.add({ text: err.message, color: 'error' })
  }

```

