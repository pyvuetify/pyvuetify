Alert
=====


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/alerts/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Alert` component is used to convey important information to the user through the use of contextual types, icons, and colors.

.. api::

    - :py:class:`pyvuetify.Alert`: Primary Component
    - :py:class:`pyvuetify.AlertTitle`: Sub-component used to display the ``v-alert`` title. Wraps the ``#title`` slot

Anatomy
-------

The recommended placement of elements inside of :py:class:`pyvuetify.Alert` is:

* Place a :py:class:`pyvuetify.Icon` on the far left
* Place :py:class:`pyvuetify.AlertTitle` to the right of the contextual icon
* Place textual content below the title
* Place closing actions to the far right



.. list-table::
   :header-rows: 1

   * - Element / Area
     - Description
   * - 1. Container
     - The Alert container holds all :py:class:`pyvuetify.Alert` components
   * - 2. Icon
     - An icon that correlates to the contextual state of the alert; **success, info, warning, error**
   * - 3. Title
     - A heading with increased font-size
   * - 4. Text
     - A content area for displaying text and other inline elements
   * - 5. Close Icon (optional)
     - Used to hide the :py:class:`pyvuetify.Alert` component



Guide
-----

The :py:class:`pyvuetify.Alert` component is a callout element designed to attract the attention of a user. Unlike :doc:`Banner`, the :py:class:`pyvuetify.Alert` component is intended to be used and re-used throughout your application. An alert's color is derived from its **type** property which corresponds to your application's contextual `theme colors <https://vuetifyjs.com/features/theme/#custom-theme-colors>`__ and `iconfont aliases <https://vuetifyjs.com/features/icon-fonts/#creating-a-custom-icon-set>`__.


Props
~~~~~

In addition to the standard :doc:`Sheet` properties such as elevation, dimension, and border-radius, the :py:class:`pyvuetify.Alert` component supports **v-model**, **variants**, and **density**.


Content
^^^^^^^

The :py:class:`pyvuetify.Alert` component supports simple content using the **title** and **text** props. This approach is best for strings that do not need custom styling.

The following code snippet is an example of a basic :py:class:`pyvuetify.Alert` component only containing text:


.. code-block:: html

   <v-alert text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus..."></v-alert>


Adding a title is as easy as defining its value. The next example adds a string title to accompany the content text:



Notice how the alert does not have a color or icon. This is defined using the **type** property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/content.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/content.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/content.vue


Type
^^^^

Alerts have 4 contextual states: **success**, **info**, **warning**, and **error**. Each state has a default *color* and *icon* associated with it. When a **type** is not provided, the :py:class:`pyvuetify.Alert` component defaults to a greyish background.

With a basic alert rendered, add your choice of contextual type. The following example puts the :py:class:`pyvuetify.Alert` component in a success state:



##### Type reference

.. list-table::
   :header-rows: 1

   * - Type
     - Color
     - Icon alias
     - Icon
   * - Success
     - **success** { .text-success }
     - $success
     - 
   * - Info
     - **info** { .text-info }
     - $info
     - 
   * - Warning
     - **warning** { .text-warning }
     - $warning
     - 
   * - Error
     - **error** { .text-error }
     - $error
     - 


.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/type.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/type.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/type.vue


Color and icon
^^^^^^^^^^^^^^

The **type** property acts as a shorthand for a **color** and **icon** combination, you can use both props individually to achieve the same effect. The following example produces the same result as using **type="success"** by defining a custom color and using the icon lookup table to get the globally defined success icon:


.. code-block:: html

   <v-alert
     color="success"
     icon="$success"
     title="Alert title"
     text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus..."
   ></v-alert>



Density
^^^^^^^

The :py:class:`pyvuetify.Alert` component has the ability to reduce its height in intervals using the density prop. This is useful when you need to reduce the vertical space a component needs. The following example reduces the vertical space by using **density="compact"**:



The **density** prop supports 3 levels of component height; **default**, **comfortable**, and **compact**.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/density.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/density.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/density.vue


Variants
^^^^^^^^

The :py:class:`pyvuetify.Alert` has 6 style variants, **elevated**, **flat**, **tonal**, **outlined**, **text**, and **plain**. By default, the :py:class:`pyvuetify.Alert` component is **flat**; which means that it has a solid background and no box-shadow (elevation). The following example modifies the overall styling of the alert with a custom variant:

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/variant.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/variant.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/variant.vue


Closable
^^^^^^^^

The **closable** prop adds a :doc:`Icon` on the far right, after the main content. This control hides the :py:class:`pyvuetify.Alert` when clicked, setting it's internal model to **false**. Manually control the visibility of the alert by binding **v-model** or using **model-value**. The following example uses a dynamic model that shows and hides the :py:class:`pyvuetify.Alert` component:



The close icon automatically applies a default ``aria-label`` and is configurable by using the **close-label** prop or changing **close** value in your locale.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/closable.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/closable.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/closable.vue


Additional Examples
-------------------

The following is a collection of :py:class:`pyvuetify.Alert` examples that demonstrate how different the properties work in an application.


Border color
~~~~~~~~~~~~

The **border-color** prop removes the alert background in order to accent the **border** prop. If a **type** is set, it will use the type's default color. If no **color** or **type** is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/border_color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/border_color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/border_color.vue


Icon
~~~~

The **icon** prop allows you to add an icon to the beginning of the alert component. If a **type** is provided, this will override the default type icon. Additionally, setting the **icon** prop to *false* will remove the icon altogether.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/icon.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/icon.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/icon.vue


Outlined
~~~~~~~~

The **outlined** prop inverts the style of an alert, inheriting the currently applied **color**, applying it to the text and border, and making its background transparent.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Alert/outlined.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Alert/outlined.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Alert/outlined.vue

