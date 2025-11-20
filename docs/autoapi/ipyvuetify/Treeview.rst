ipyvuetify.Treeview
===================

.. py:class:: ipyvuetify.Treeview

   Bases: :py:obj:`ipyvuetify.generated.VuetifyWidget.VuetifyWidget`


   The v-treeview component displays hierarchical data in a tree structure with expand/collapse functionality.


   .. py:attribute:: activatable

      Allows user to mark a node as active by clicking on it



   .. py:attribute:: active

      Syncable prop that allows one to control which nodes are active. The array consists of the `item-key` of each active item.



   .. py:attribute:: active_class

      The class applied to the node when active



   .. py:attribute:: color

      Sets the color of the active node



   .. py:attribute:: dark

      Applies the dark theme variant to the component. You can find more information on the Material Design documentation for [dark themes](https://material.io/design/color/dark-theme.html).



   .. py:attribute:: dense

      Decreases the height of the items



   .. py:attribute:: expand_icon

      Icon used to indicate that a node can be expanded



   .. py:attribute:: hoverable

      Applies a hover class when mousing over nodes



   .. py:attribute:: indeterminate_icon

      Icon used when node is in an indeterminate state. Only visible when `selectable` is `true`.



   .. py:attribute:: item_children

      Property on supplied `items` that contains its children



   .. py:attribute:: item_disabled

      Property on supplied `items` that contains the disabled state of the item



   .. py:attribute:: item_key

      Property on supplied `items` used to keep track of node state. The value of this property has to be unique among all items.



   .. py:attribute:: item_text

      Property on supplied `items` that contains its label text



   .. py:attribute:: items

      An array of items used to build the treeview



   .. py:attribute:: light

      Applies the light theme variant to the component.



   .. py:attribute:: loading_icon

      Icon used when node is in a loading state



   .. py:attribute:: multiple_active

      When `true`, allows user to have multiple active nodes at the same time



   .. py:attribute:: off_icon

      Icon used when node is not selected. Only visible when `selectable` is `true`.



   .. py:attribute:: on_icon

      Icon used when leaf node is selected or when a branch node is fully selected. Only visible when `selectable` is `true`.



   .. py:attribute:: open_

      Syncable prop that allows one to control which nodes are open. The array consists of the `item-key` of each open item.



   .. py:attribute:: open_all

      When `true` will cause all branch nodes to be opened when component is mounted



   .. py:attribute:: open_on_click

      When `true` will cause nodes to be opened by clicking anywhere on it, instead of only opening by clicking on expand icon. When using this prop with `activatable` you will be unable to mark nodes with children as active.



   .. py:attribute:: return_object

      When `true` will make `v-model`, `active.sync` and `open.sync` return the complete object instead of just the key



   .. py:attribute:: rounded

      Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `shaped` prop.



   .. py:attribute:: search

      The search model for filtering results



   .. py:attribute:: selectable

      Will render a checkbox next to each node allowing them to be selected



   .. py:attribute:: selected_color

      The color of the selection checkbox



   .. py:attribute:: selection_type

      Controls how the treeview selects nodes. There are two modes available: 'leaf' and 'independent'



   .. py:attribute:: shaped

      Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `rounded` prop.



   .. py:attribute:: transition

      Applies a transition when nodes are opened and closed



   .. py:attribute:: value

      Allows one to control which nodes are selected. The array consists of the `item-key` of each selected item. Is used with `@input` event to allow for `v-model` binding.


