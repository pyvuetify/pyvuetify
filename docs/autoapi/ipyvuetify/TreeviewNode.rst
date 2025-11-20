ipyvuetify.TreeviewNode
=======================

.. py:class:: ipyvuetify.TreeviewNode

   Bases: :py:obj:`ipyvuetify.generated.VuetifyWidget.VuetifyWidget`


   A single node within a v-treeview component.


   .. py:attribute:: activatable

      Allows user to mark a node as active by clicking on it



   .. py:attribute:: active_class

      The class applied to the node when active



   .. py:attribute:: color

      Applies specified color to the control - it can be the name of material color (for example `success` or `purple`) or css color (`#033` or `rgba(255, 0, 0, 0.5)`). You can find a list of built-in classes on the [colors page](/styles/colors#material-colors).



   .. py:attribute:: expand_icon

      Icon used to indicate that a node can be expanded



   .. py:attribute:: indeterminate_icon

      Icon used when node is in an indeterminate state. Only visible when `selectable` is `true`.



   .. py:attribute:: item

      Item object used to build the node



   .. py:attribute:: item_children

      Property on supplied `items` that contains its children



   .. py:attribute:: item_disabled

      Property on supplied `items` that contains the disabled state of the item



   .. py:attribute:: item_key

      Property on supplied `items` used to keep track of node state. The value of this property has to be unique among all items.



   .. py:attribute:: item_text

      Property on supplied `items` that contains its label text



   .. py:attribute:: level

      Property designating how deep the node is from the root of the treeview



   .. py:attribute:: loading_icon

      Icon used when node is in a loading state



   .. py:attribute:: off_icon

      Icon used when node is not selected. Only visible when `selectable` is `true`.



   .. py:attribute:: on_icon

      Icon used when leaf node is selected or when a branch node is fully selected. Only visible when `selectable` is `true`.



   .. py:attribute:: open_on_click

      When `true` will cause nodes to be opened by clicking anywhere on it, instead of only opening by clicking on expand icon. When using this prop with `activatable` you will be unable to mark nodes with children as active.



   .. py:attribute:: rounded

      Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `shaped` prop.



   .. py:attribute:: selectable

      Will render a checkbox next to each node allowing them to be selected



   .. py:attribute:: selected_color

      The color of the selection checkbox



   .. py:attribute:: shaped

      Provides an alternative active style for `v-treeview` node. Only visible when `activatable` is `true` and should not be used in conjunction with the `rounded` prop.



   .. py:attribute:: transition

      Applies a transition when nodes are opened and closed


