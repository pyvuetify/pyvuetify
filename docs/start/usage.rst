Usage
=====

This page shows how to use ipyvuetify and explains how it is different from other widget libraries you
may know such as ipywidgets. It also explains how to use the Vuetify documentation. Most examples
display real widgets which have animations and behavior.

Create an ipyvuetify widget
---------------------------

Below you see how to create an ipyvuetify widget.

.. jupyter-execute::

    import ipyvuetify as v

    my_select = v.Select(
        label='Fruits',
        items=['Apple', 'Pear', 'Cherry'])
    v.Container(children=[my_select])

Attributes are traits and thus can be changed at any time in the code e.g. to add an item:

.. jupyter-execute::

    import ipyvuetify as v

    my_select = v.Select(
        label='Fruits',
        items=['Apple', 'Pear', 'Cherry'])

    my_select.items = [*my_select.items, 'Banana']

    v.Container(children=[my_select])

.. note::
    A new List is created to change the items. In-place mutations of List and Dict, e.g.
    ``my_select.append('Banana')``, are not detected by ipywidgets.

What widgets are available and how they look can be found in the
`Vuetify documentation <https://v2.vuetifyjs.com/components/selects/>`_. Browse the side bar on the left hand side and
select a widget, then click <> on the right hand side on an example to see the source code for it. The HTML code may
seem unfamiliar at first, but this documentation will guide you through it. For starters to translate the Vuetify widget
names, which are starting with ``v-``, to ipyvuetify, remove the ``v-`` prefix and CamelCase the remaining
name. E.g ``v-select`` becomes ``Select`` and ``v-list-item`` becomes ``ListItem``.

These 2 syntax are perfectly equivalent:

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Select(label='Fruits', items=['Apple', 'Pear', 'Cherry'])

    .. tab-item:: :fab:`vuejs` vuetify

        .. code-block:: vue

            <v-select label="Fruits" :items="['Apple', 'Pear', 'Cherry']" />

Setting Attributes
------------------

When translating from Vuetify HTML to Python, some attributes have to be treated different.

Python uses snake_case to separate words in attributes, while Vuetify uses kebab-case. For example the attribute
``append-icon`` becomes ``append_icon``:

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Select(append_icon='mdi-gamepad-down', label='Fruits')

    .. tab-item:: :fab:`vuejs` vuetify

        .. code-block:: vue

            <v-select append-icon="mdi-gamepad-down" label="Fruits" />

    .. tab-item:: :fas:`eye` Redendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Select(append_icon='mdi-gamepad-down', label='Fruits')


In HTML attributes don't have to have values, just defining the attribute is enough to use it as a boolean. In Python we
have to set the value to ``True``. For example ``clearable`` becomes ``clearable=True``:

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Select(clearable=True, label='Fruits', items=['Apple', 'Pear', 'Cherry'], value='Apple')

    .. tab-item:: :fab:`vuejs` vuetify

        .. code-block:: vue

            <v-select clearable label="Fruits" :items="['Apple', 'Pear', 'Cherry']" value="Apple" />

    .. tab-item:: :fas:`eye` Redendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Select(clearable=True, label='Fruits', items=['Apple', 'Pear', 'Cherry'], value='Apple')

Some attribute have naming conflicts with Python or ipywidgets. These are ``for``, ``open``, ``class`` and
``style`` and must be suffixed with an underscore (`_`). For example ``style`` becomes ``style_``.

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Select(style_='width: 75px', label='Fruits')

    .. tab-item:: :fab:`vuejs` vuetify

        .. code-block:: vue

            <v-select style="width: 75px" label="Fruits" />

    .. tab-item:: :fas:`eye` Redendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Select(style_='width: 75px', label='Fruits')

In the Vuetify HTML examples you'll see attributes prefixed with a colon ``:``. This means the attribute is bound to
a variable or it is evaluated as an expression. If it is bound to a variable you'll see that variable being used in
other parts of the example. In ipyvuetify we use ``jslink()`` to link these attributes. In the next section you'll
see an example of this. To look at how that variable is initialized you select the 'script' tab on a Vuetify example.

If it's an expression it's mostly used to set a ``List`` or a ``Dict``, as is done with ``items`` in the examples above.
This can be the same in ipyvuetify.

for non-vuetify related attributes, the ones from the HTML tag, can be accessed through the ``attributes`` trait.

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Btn(
                class_="ma-2",
                outlined=True,
                href="file.pdf",
                attributes={"download": True},
                children=["Download PDF"]
            )

    .. tab-item:: :fab:`vuejs` vuetify

        .. code-block:: vue

            <v-btn class="ma-2" outlined href="file.pdf" download>
                Download PDF
            </v-btn>

    .. tab-item:: :fas:`eye` Redendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Btn(
                class_="ma-2",
                outlined=True,
                href="file.pdf",
                attributes={"download": True},
                children=["Download PDF"]
            )


Reading the value
-----------------

Now we want to be able to read out the selected value. In ipywidgets this would be done by reading
the ``value`` attribute. In Vue this is done with the ``v-model`` directive, which is translated
to Python as ``v_model`` (note the '_' instead of '-'). The ``v_model`` attribute has to be
explicitly set when creating the widget.

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            from ipywidgets import jslink

            color_select = v.Select(
                v_model='green',
                label='Colors',
                items=['red', 'green', 'blue'])
            color_display = v.Chip()

            # the client side link between the two widgets
            jslink((color_select, 'v_model'), (color_display, 'color'))

            v.Container(children=[color_select, color_display])

    .. tab-item:: :fab:`vuejs` vuetify

        .. code-block:: vue

            <v-container>
                <v-select
                    v-model="colorVariable"
                    label="Colors"
                    :items="['red', 'green', 'blue']" />
            </v-container>

    .. tab-item:: :fas:`eye` Redendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v
            from ipywidgets import jslink

            color_select = v.Select(
                v_model='green',
                label='Colors',
                items=['red', 'green', 'blue'])
            color_display = v.Chip()

            # the client side link between the two widgets
            jslink((color_select, 'v_model'), (color_display, 'color'))

            v.Container(children=[color_select, color_display])

.. note::
    ipyvuetify widgets have a ``value`` attribute, but that's only used for setting the value,
    it will not change on interactions with the widget.

The children attribute
----------------------

Because ipyvuetify is based on HTML, which represents a GUI as a tree of elements, all widgets have an
attribute ``children`` which is a list of widgets or strings. This way the same tree can be represented
in Python. Sometimes something you would expect to be specified as an attribute, must be specified as
an item in ``children``, e.g. in ipywidgets the text of a button is set with the attribute
``description`` while in ipyvuetify the text is set with setting an item in the ``children`` list:

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Btn(color='primary', children=['Click me'])

    .. tab-item:: :fab:`vuejs` vuetify

        .. code-block:: vue

            <v-btn color="primary">Click me</v-btn>

    .. tab-item:: :fas:`eye` Redendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Btn(color="primary", children=['Click me'])

This has the benefit of composability, e.g. the button can, in addition to text, also contain an icon:

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Btn(color='primary', children=[
                v.Icon(left=True, children=[
                    'mdi-email-edit-outline'
                ]),
                'Click me'
            ])

    .. tab-item:: :fab:`vuejs` vuetify

        .. code-block:: vue

            <v-btn color="primary">
                <v-icon left>
                    mdi-email-edit-outline
                </v-icon>
                Click me
            </v-btn>

    .. tab-item:: :fas:`eye` Redendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Btn(color='primary', children=[
                v.Icon(left=True, children=[
                    'mdi-email-edit-outline'
                ]),
                'Click me'
            ])

Events
------

Events are specified with ``.on_event(event_name, callback_fn)`` instead of setting an attribute
like in ipywidgets.

.. code-block:: python

    import ipyvuetify as v

    # define a global counter (bad practice but ok for this simple example)
    count = 0

    # define a button to interact with the said counter
    btn = v.Btn(color='primary', children=['Click me'])

    def on_click(widget, event, data):
        global count
        btn.children=[f'Click me {count}']
        count += 1

    btn.on_event('click', on_click)

    v.Container(children=[btn])

    # The output of this example is intentionally left out, because
    # it will not work without an active kernel.

The three arguments in the callback function are:

-   ``widget``: the widget the event originates from. This is useful when using the same callback for
    multiple widgets.
-   ``event``: the event name. This is useful when using the same callback for multiple events.
-   ``data``: data for the event. For e.g. ``click`` of ``Btn`` this contains which modifier keys are
    pressed and some information on the position of the mouse.

All `HTML events <https://www.w3schools.com/tags/ref_eventattributes.asp>`_ can be used. The ``on``
prefix must be omitted.

Widgets can have custom events, to find out which, the `Vuetify API explorer <https://v2.vuetifyjs.com/components/api-explorer/>`_
can be used. Search for a component and on the left-hand side of list of attributes you will find a
tab for the events.

In Vuetify events are defined as attributes with an ``@`` prefix. The 2 construction here are
perfectly equivalent:

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            count = 0

            btn = v.Btn(color='primary', children=['Click me'])

            def on_click(widget, event, data):
                global count
                btn.children=[f'Click me {count}']
                count += 1

            btn.on_event('click', on_click)

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <v-container>
                <v-btn color="primary" @click="on_click">
                    Click me {{ count }}
                </v-btn>
            </v-container>

.. note::
    The ``on_click`` method would be in the 'script' tab of an app example and is not shown here.

Regular HTML tags
-----------------

Sometimes some regular HTML tags are needed. For this the Html widget can be used.
The attributes of the HTML tag can be accessed through the ``attributes`` trait.

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Container(children=[
                v.Html(
                    tag='h1',
                    attributes={'title': 'a title'},
                    children=['My heading']
                )
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <v-container>
                <h1 title="a title">My heading</h1>
            </v-container>

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Html(
                    tag='h1',
                    attributes={'title': 'a title'},
                    children=['My heading']
                )
            ])

Styling
-------

To visually customize widgets, the underlying CSS facilities of Vuetify are exposed. With the ``style_``
attribute `CSS properties <https://www.tutorialrepublic.com/css-reference/css3-properties.php>`_ can
be set. Multiple CSS properties can be set by separating them with a semicolon ``;``.

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Select(label='Fruit', style_='width: 75px; opacity: 0.7')

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Select(label='Fruit', style_='width: 75px; opacity: 0.7')

With the ``class_`` attribute predefined Vuetify styles can be set. Predefined styles of note are
`spacing <https://v2.vuetifyjs.com/styles/spacing/>`__ and `colors <https://v2.vuetifyjs.com/styles/colors/>`__. More can be
found in the section 'Styles and animations' of the Vuetify documentation. Multiple classes can be applied by separating
them with a space.

Buttons without spacing:

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(children=[f'Button {i}']) for i in range(3)
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Container(children=[
                v.Btn(children=[f'Button {i}']) for i in range(3)
            ])



With 2 units of margin in the x direction:

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(class_='mx-2', children=[f'Button {i}']) for i in range(3)
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Container(children=[
                v.Btn(class_='mx-2', children=[f'Button {i}']) for i in range(3)
            ])

And colors:

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Btn(class_=f'mx-2 indigo lighten-{i+1}', children=[f'Button {i}']) for i in range(3)
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Container(children=[
                v.Btn(class_=f'mx-2 indigo lighten-{i+1}', children=[f'Button {i}']) for i in range(3)
            ])

ClassList attribute
^^^^^^^^^^^^^^^^^^^

The ``class`` attribute of a Vuetify DOM elements give access to the built-in styles of the lib. See the `vuetify site <https://v2.vuetifyjs.com/en/styles/colors/>`__ to know more about available styling class. As mentioned in the previous section this can be set using the ``class_`` member of the widget. In addition, ipyvuetify provides a ``class_list`` member that works the same way as the `MDN classList property <https://developer.mozilla.org/en-US/docs/Web/API/Element/classList>`__. It embeds the following methods:

-   ``add(*args)``: add class elements to the class\_ trait of the widget

    .. tab-set::

        .. tab-item:: :fab:`python` Python

            .. code-block:: python

                w = v.Btn(children=["click"])
                w.class_list.add("red", "white--text")

        .. tab-item:: :fas:`eye` Rendered

            .. jupyter-execute::
                :hide-code:

                import ipyvuetify as v

                w = v.Btn(children=["click"])
                w.class_list.add("red", "white--text")
                w

-   ``remove(*args)``: remove class elements from the class\_ trait of the widget

    .. tab-set::

        .. tab-item:: :fab:`python` Python

            .. code-block:: python

                w = v.Btn(children=["click"], class_="red white--text")
                w.class_list.remove("white--text")

        .. tab-item:: :fas:`eye` Rendered

            .. jupyter-execute::
                :hide-code:

                import ipyvuetify as v

                w = v.Btn(children=["click"], class_="red white--text")
                w.class_list.remove("white--text")
                w

-   ``replace(src, dst)``: replace class elements in the class\_ trait of the widget

    .. tab-set::

        .. tab-item:: :fab:`python` Python

            .. code-block:: python

                w = v.Btn(children=["click"], class_="red white--text")
                w.class_list.replace("red", "orange")

        .. tab-item:: :fas:`eye` Rendered

            .. jupyter-execute::
                :hide-code:

                import ipyvuetify as v

                w = v.Btn(children=["click"], class_="red white--text")
                w.class_list.replace("red", "orange")
                w

-   ``toggle(arg)``: toggle class elements from the class\_ trait of the widget

    .. tab-set::

        .. tab-item:: :fab:`python` Python

            .. code-block:: python

                w = v.Btn(children=["click"], class_="red white--text")
                w.class_list.toggle("blue", "red")

        .. tab-item:: :fas:`eye` Rendered

            .. jupyter-execute::
                :hide-code:

                import ipyvuetify as v

                w = v.Btn(children=["click"], class_="red white--text")
                w.class_list.toggle("blue", "red")
                w

Visibility
^^^^^^^^^^

ipyvuetify widgets visibility can be changed using the built-in methods ``hide()`` and ``show()``.
Using ``hide`` will add the ``d-none`` class to the widget and ``show`` will remove it, hiding and showing the widget to the end user without removing it from the notebook.


.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            w = v.Icon(children=['mdi-eye-off'])
            w.hide()

    .. tab-item:: :fas:`eye` Not rendered after call to ``hide()``

            .. jupyter-execute::
                :hide-code:

                import ipyvuetify as v

                w = v.Icon(children=['mdi-eye-off'])
                w.hide()
                w

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            w = v.Icon(children=['mdi-eye'], class_="d-none")
            w.show()

    .. tab-item:: :fas:`eye` Rendered after call to ``show()``

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            w = v.Icon(children=['mdi-eye'], class_="d-none")
            w.show()
            w

Layout (HBox/VBox alternative)
------------------------------

In ipywidgets you would layout a grid of widgets with HBox and VBox.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipywidgets as widgets

            widgets.HBox([
                widgets.VBox([
                    widgets.Button(description="top left"),
                    widgets.Button(description="bottom left"),
                ]),
                widgets.VBox([
                    widgets.Button(description="top right"),
                    widgets.Button(description="bottom right"),
                ]),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipywidgets as widgets

            widgets.HBox([
                widgets.VBox([
                    widgets.Button(description="top left"),
                    widgets.Button(description="bottom left"),
                ]),
                widgets.VBox([
                    widgets.Button(description="top right"),
                    widgets.Button(description="bottom right"),
                ]),
            ])

This can be done in ipyvuetify with the help of some classes described in
`flex helpers <https://v2.vuetifyjs.com/styles/flex/>`_.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Html(tag='div', class_='d-flex flex-row', children=[
                v.Html(tag='div', class_='d-flex flex-column', children=[
                    v.Btn(class_='ma-2', children=['top left']),
                    v.Btn(class_='ma-2', children=['bottom left'])
                ]),
                v.Html(tag='div', class_='d-flex flex-column', children=[
                    v.Btn(class_='ma-2', children=['top right']),
                    v.Btn(class_='ma-2', children=['bottom right'])
                ]),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(tag='div', class_='d-flex flex-row', children=[
                v.Html(tag='div', class_='d-flex flex-column', children=[
                    v.Btn(class_='ma-2', children=['top left']),
                    v.Btn(class_='ma-2', children=['bottom left'])
                ]),
                v.Html(tag='div', class_='d-flex flex-column', children=[
                    v.Btn(class_='ma-2', children=['top right']),
                    v.Btn(class_='ma-2', children=['bottom right'])
                ]),
            ])

Icons
-----

Icons can be displayed with the Icon widget:

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Icon(children=['mdi-thumb-up'])

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Icon(children=['mdi-thumb-up'])

In some widgets icons are specified by setting an attribute:

.. tab-set::

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            v.Select(prepend_icon='mdi-thumb-up')

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Select(prepend_icon='mdi-thumb-up')

See `@mdi/font/4.9.95/ <https://pictogrammers.github.io/@mdi/font/4.9.95/>`_ for a list of available icons.

Themes
------

To enable the dark theme:

.. code-block:: python

    v.theme.dark = True

To customize the themes:

.. code-block:: python

    v.theme.themes.light.primary = '#b71c1c'

    v.theme.themes.dark.primary = '#a71c1c'


Also, the `pre-defined material colors <https://v2.vuetifyjs.com/en/styles/colors/#sass-color-pack>`_  are supported:

.. code-block:: python

    v.theme.themes.light.primary = 'colors.teal'

    v.theme.themes.light.secondary = 'colors.teal.lighten4'

Available theme properties:

- primary
- secondary
- accent
- error
- info
- success
- warning
- anchor

If ``dark`` is set to None (the default), we use the setting from Jupyter Lab, VS Code or Google Colab.
In Jupyter notebook classic, or other unrecognized systems we always use the light theme.
When running in `Solara server <https://github.com/widgetti/solara/>`_, dark mode is
determined by how the `Solara server <https://solara.dev/docs/understanding/solara-server>`_ is configured.

In all cases, the `dark_effective` attribute can be used to know if the dark theme is used.

.. code-block:: python

    if v.theme.dark_effective:
        ...

Summary
-------

Below you will find a summary of all concepts of Vuetify and how they translate to ipyvuetify to help with the
translation from Vuetify examples to ipyvuetify.

- Component names convert to CamelCase and the v- prefix is stripped

  +------------+------------------------+
  | Vuetify    | ``<v-list-tile .../>`` |
  +------------+------------------------+
  | ipyvuetify | ``ListTitle(...)``     |
  +------------+------------------------+

- Attributes

  - convert to snake_case

    +------------+----------------------------+
    | Vuetify    | ``<v-menu offset-y ...``   |
    +------------+----------------------------+
    | ipyvuetify | ``Menu(offset_y=True ...`` |
    +------------+----------------------------+

  - must have a value

    +------------+------------------------+
    | Vuetify    | ``<v-btn round ...``   |
    +------------+------------------------+
    | ipyvuetify | ``Btn(round=True ...`` |
    +------------+------------------------+

  - with naming conflicts, ``style``, ``class``, ``open`` and ``for``, are suffixed with an ``_``

    +------------+---------------------------------------+
    | Vuetify    | ``<v-btn class="mr-3" style="..." >`` |
    +------------+---------------------------------------+
    | ipyvuetify | ``Btn(class_='mr-3', style_='...')``  |
    +------------+---------------------------------------+

- v-model (value in ipywidgets) contains the value directly

  +------------+-----------------------------------------------+
  | Vuetify    | ``<v-slider v-model="some_property" ...``     |
  +------------+-----------------------------------------------+
  | ipyvuetify | ``myslider = Slider(v_model=25...``           |
  |            |                                               |
  |            | ``jslink((myslider, 'v_model'), (..., ...))`` |
  +------------+-----------------------------------------------+

- Child components and text are defined in the children attribute

  +------------+--------------------------------------------+
  | Vuetify    | ``<v-btn>text <v-icon>...</icon></v-btn>`` |
  +------------+--------------------------------------------+
  | ipyvuetify | ``Btn(children=['text', Icon(...)])``      |
  +------------+--------------------------------------------+

- Event listeners are defined with on_event

  +------------+--------------------------------------------+
  | Vuetify    | ``<v-btn @click='someMethod()' ...``       |
  +------------+--------------------------------------------+
  | ipyvuetify | ``def some_method(widget, event, data):``  |
  |            |                                            |
  |            | ``button.on_event('click', some_method)``  |
  +------------+--------------------------------------------+

- Regular HTML tags can made with the Html widget

  +------------+-------------------------------------+
  | Vuetify    | ``<div>...</div>``                  |
  +------------+-------------------------------------+
  | ipyvuetify | ``Html(tag='div', children=[...])`` |
  +------------+-------------------------------------+
