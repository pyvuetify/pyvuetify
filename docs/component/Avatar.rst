Avatar
======

.. warning::

   This page has been AI-generated. Manual review and editing are recommended to ensure complete accuracy and verify all code examples and API references.

.. alert::
   :title: Acknowledgement

   This documentation has been adapted from the official Vuetify 2 documentation available at https://v2.vuetifyjs.com/en/components/avatars/

The :py:class:`Avatar <ipyvuetify.Avatar>` component is typically used to display circular user profile pictures. This component will allow you to dynamically size and add a border radius of responsive images, icons, and text. A ``tile`` variation is available for displaying an avatar without border radius.

.. autoapi-nested:: ipyvuetify.Avatar

Usage
-----

Avatars in their simplest form display content within a circular container.

.. tab-set::

   .. tab-item:: Rendered

      .. jupyter-execute::
         :hide-code:

         import ipyvuetify as v

         v.Avatar(
             color='primary',
             size=56,
             children=['VJ']
         )

   .. tab-item:: Python

      .. code-block:: python

         import ipyvuetify as v

         v.Avatar(
             color='primary',
             size=56,
             children=['VJ']
         )

   .. tab-item:: Vue template

      .. code-block:: vue

         <v-avatar
           color="primary"
           size="56"
         >
           <span class="white--text">VJ</span>
         </v-avatar>

Size
----

The ``size`` prop allows you to define the height and width of :py:class:`Avatar <ipyvuetify.Avatar>`. This prop scales both evenly with an aspect ratio of 1. ``height`` and ``width`` props will override this prop.

.. tab-set::

   .. tab-item:: Rendered

      .. jupyter-execute::
         :hide-code:

         import ipyvuetify as v

         v.Row(
             justify='space-around',
             children=[
                 v.Avatar(
                     color='indigo',
                     size=36,
                     children=[v.Html(tag='span', class_='white--text text-h5', children=['36'])]
                 ),
                 v.Avatar(
                     color='teal',
                     size=48,
                     children=[v.Html(tag='span', class_='white--text text-h5', children=['48'])]
                 ),
                 v.Avatar(
                     color='orange',
                     size=62,
                     children=[v.Html(tag='span', class_='white--text text-h5', children=['62'])]
                 ),
             ]
         )

   .. tab-item:: Python

      .. code-block:: python

         import ipyvuetify as v

         v.Row(
             justify='space-around',
             children=[
                 v.Avatar(
                     color='indigo',
                     size=36,
                     children=[v.Html(tag='span', class_='white--text text-h5', children=['36'])]
                 ),
                 v.Avatar(
                     color='teal',
                     size=48,
                     children=[v.Html(tag='span', class_='white--text text-h5', children=['48'])]
                 ),
                 v.Avatar(
                     color='orange',
                     size=62,
                     children=[v.Html(tag='span', class_='white--text text-h5', children=['62'])]
                 ),
             ]
         )

   .. tab-item:: Vue template

      .. code-block:: vue

         <template>
           <v-row justify="space-around">
             <v-avatar
               color="indigo"
               size="36"
             >
               <span class="white--text text-h5">36</span>
             </v-avatar>

             <v-avatar
               color="teal"
               size="48"
             >
               <span class="white--text text-h5">48</span>
             </v-avatar>

             <v-avatar
               color="orange"
               size="62"
             >
               <span class="white--text text-h5">62</span>
             </v-avatar>
           </v-row>
         </template>

Tile
----

The ``tile`` prop removes the border radius from :py:class:`Avatar <ipyvuetify.Avatar>` leaving you with a simple square avatar.

.. tab-set::

   .. tab-item:: Rendered

      .. jupyter-execute::
         :hide-code:

         import ipyvuetify as v

         v.Avatar(
             tile=True,
             color='blue',
             children=[v.Icon(dark=True, children=['mdi-alarm'])]
         )

   .. tab-item:: Python

      .. code-block:: python

         import ipyvuetify as v

         v.Avatar(
             tile=True,
             color='blue',
             children=[v.Icon(dark=True, children=['mdi-alarm'])]
         )

   .. tab-item:: Vue template

      .. code-block:: vue

         <template>
           <div class="text-center">
             <v-avatar
               tile
               color="blue"
             >
               <v-icon dark>
                 mdi-alarm
               </v-icon>
             </v-avatar>
           </div>
         </template>

Default slot
------------

The :py:class:`Avatar <ipyvuetify.Avatar>` default slot will accept the :py:class:`Icon <ipyvuetify.Icon>` component, an image, or text. Mix and match these with other props to create something unique.

.. tab-set::

   .. tab-item:: Rendered

      .. jupyter-execute::
         :hide-code:

         import ipyvuetify as v

         v.Row(
             justify='space-around',
             children=[
                 v.Avatar(
                     color='indigo',
                     children=[v.Icon(dark=True, children=['mdi-account-circle'])]
                 ),
                 v.Avatar(
                     children=[
                         v.Html(
                             tag='img',
                             attributes={
                                 'src': 'https://cdn.vuetifyjs.com/images/john.jpg',
                                 'alt': 'John'
                             }
                         )
                     ]
                 ),
                 v.Avatar(
                     color='red',
                     children=[v.Html(tag='span', class_='white--text text-h5', children=['CJ'])]
                 ),
             ]
         )

   .. tab-item:: Python

      .. code-block:: python

         import ipyvuetify as v

         v.Row(
             justify='space-around',
             children=[
                 v.Avatar(
                     color='indigo',
                     children=[v.Icon(dark=True, children=['mdi-account-circle'])]
                 ),
                 v.Avatar(
                     children=[
                         v.Html(
                             tag='img',
                             attributes={
                                 'src': 'https://cdn.vuetifyjs.com/images/john.jpg',
                                 'alt': 'John'
                             }
                         )
                     ]
                 ),
                 v.Avatar(
                     color='red',
                     children=[v.Html(tag='span', class_='white--text text-h5', children=['CJ'])]
                 ),
             ]
         )

   .. tab-item:: Vue template

      .. code-block:: vue

         <template>
           <v-row justify="space-around">
             <v-avatar color="indigo">
               <v-icon dark>
                 mdi-account-circle
               </v-icon>
             </v-avatar>

             <v-avatar>
               <img
                 src="https://cdn.vuetifyjs.com/images/john.jpg"
                 alt="John"
               >
             </v-avatar>

             <v-avatar color="red">
               <span class="white--text text-h5">CJ</span>
             </v-avatar>
           </v-row>
         </template>
