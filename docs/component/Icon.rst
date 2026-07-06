Icon
====

.. jupyter-kernel:: python3
    :id: pyvuetify-docs


.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://vuetifyjs.com/en/components/icons/>`__.
    All examples have been converted to pyvuetify syntax.

The :py:class:`pyvuetify.Icon` component provides a large set of glyphs to provide context to various aspects of your application. For a list of all available icons, visit the official `Material Design Icons <https://pictogrammers.com/library/mdi/>`__ page. To use any of these icons simply use the ``mdi-`` prefix followed by the icon name.

.. api::

    :py:class:`pyvuetify.Icon`

Color
-----

Using color helpers you can change the color of an icon from the standard dark and light themes.



<!-- ### Events

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Icon/color.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Icon/color.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Icon/color.vue


Click
-----

Binding any click event to :py:class:`pyvuetify.Icon` will automatically change the cursor to a pointer.

 -->

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Icon/click.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Icon/click.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Icon/click.vue


Buttons
-------

Icons can be used inside of buttons to add emphasis to the action.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Icon/buttons.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Icon/buttons.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Icon/buttons.vue


Font Awesome
------------

`Font Awesome <https://fontawesome.com/icons/>`__ is also supported. Simply use the ``fa-`` prefixed icon name. Please note that you still need to include the Font Awesome icons in your project. For more information on how to install it, please navigate to the `installation page <https://vuetifyjs.com/features/icon-fonts#install-font-awesome-5-icons>`__

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Icon/font_awesome.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Icon/font_awesome.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Icon/font_awesome.vue


Material Design
---------------

`Material Design <https://fonts.google.com/icons>`__ is also supported. For more information on how to install it please `navigate here <https://vuetifyjs.com/features/icon-fonts#install-material-icons>`__

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Icon/md.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Icon/md.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Icon/md.vue


MDI SVG
-------

You can manually import only the icons you use when using the `@mdi/js <https://www.npmjs.com/package/@mdi/js>`__ package. Read more about using them `here <https://vuetifyjs.com/features/icon-fonts#material-design-icons-js-svg>`__.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Icon/mdi_svg.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Icon/mdi_svg.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Icon/mdi_svg.vue

