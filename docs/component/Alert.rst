Alert
=====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/alerts/>`_. All examples have been converted to ipyvuetify syntax.

The :py:class:`Alert <ipyvuetify.Alert>` component is used to convey important information to the user through the use of contextual types, icons, and colors. These default types come in 4 variations: success, info, warning, and error. Default icons are assigned which help represent different actions each type portrays. Many parts of an alert such as ``border``, ``icon``, and ``color`` can also be customized to fit almost any situation.

.. api::

    :py:class:`ipyvuetify.Alert`

Usage
-----

Alerts in their simplest form are flat sheets of paper that display a message.

.. jupyter-execute::

    import ipyvuetify as v

    alert = v.Alert(
        children=["I'm an Alert Usage Example"],
        type="success",
    )

    v.Container(children=[alert])

Border
------

The ``border`` prop adds a simple border to one of the 4 sides of the alert. This can be combined with props like ``color``, ``dark``, and ``type`` to provide unique accents to the alert.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    border="top",
                    color="red lighten-2",
                    dark=True,
                    children=["I'm an alert with a top border and red color"]
                ),
                v.Alert(
                    border="right",
                    color="blue-grey",
                    dark=True,
                    children=["I'm an alert with a right border and blue-grey color"]
                ),
                v.Alert(
                    border="bottom",
                    color="pink darken-1",
                    dark=True,
                    children=["I'm an alert with a bottom border and pink color"]
                ),
                v.Alert(
                    border="left",
                    color="indigo",
                    dark=True,
                    children=["I'm an alert with a border left type info"]
                ),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    border="top",
                    color="red lighten-2",
                    dark=True,
                    children=["I'm an alert with a top border and red color"]
                ),
                v.Alert(
                    border="right",
                    color="blue-grey",
                    dark=True,
                    children=["I'm an alert with a right border and blue-grey color"]
                ),
                v.Alert(
                    border="bottom",
                    color="pink darken-1",
                    dark=True,
                    children=["I'm an alert with a bottom border and pink color"]
                ),
                v.Alert(
                    border="left",
                    color="indigo",
                    dark=True,
                    children=["I'm an alert with a border left type info"]
                ),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-alert
                        border="top"
                        color="red lighten-2"
                        dark
                    >
                        I'm an alert with a top border and red color
                    </v-alert>
                    <v-alert
                        border="right"
                        color="blue-grey"
                        dark
                    >
                        I'm an alert with a right border and blue-grey color
                    </v-alert>
                    <v-alert
                        border="bottom"
                        color="pink darken-1"
                        dark
                    >
                    I'm an alert with a bottom border and pink color
                    </v-alert>
                    <v-alert
                        border="left"
                        color="indigo"
                        dark
                    >
                        I'm an alert with a border left type info
                    </v-alert>
                </div>
            </template>

Colored Border
--------------

The ``colored-border`` prop removes the alert background in order to accent the ``border`` prop. If a ``type`` is set, it will use the type's default color. If no color or type is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    border="left",
                    colored_border=True,
                    color="deep-purple accent-4",
                    elevation=2,
                    children=["Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi. Morbi mollis tellus ac sapien."]
                ),
                v.Alert(
                    border="top",
                    colored_border=True,
                    type="info",
                    elevation=2,
                    children=["Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero."]
                ),
                v.Alert(
                    border="bottom",
                    colored_border=True,
                    type="warning",
                    elevation=2,
                    children=["Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi."]
                ),
                v.Alert(
                    border="right",
                    colored_border=True,
                    type="error",
                    elevation=2,
                    children=["Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus."]
                ),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    border="left",
                    colored_border=True,
                    color="deep-purple accent-4",
                    elevation=2,
                    children=["Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi. Morbi mollis tellus ac sapien."]
                ),
                v.Alert(
                    border="top",
                    colored_border=True,
                    type="info",
                    elevation=2,
                    children=["Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero."]
                ),
                v.Alert(
                    border="bottom",
                    colored_border=True,
                    type="warning",
                    elevation=2,
                    children=["Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi."]
                ),
                v.Alert(
                    border="right",
                    colored_border=True,
                    type="error",
                    elevation=2,
                    children=["Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus."]
                ),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-alert
                        border="left"
                        colored-border
                        color="deep-purple accent-4"
                        elevation="2"
                    >
                        Aliquam eu nunc. Fusce commodo aliquam arcu...
                    </v-alert>
                    <v-alert
                        border="top"
                        colored-border
                        type="info"
                        elevation="2"
                    >
                        Vestibulum ullamcorper mauris at ligula...
                    </v-alert>
                    <v-alert
                        border="bottom"
                        colored-border
                        type="warning"
                        elevation="2"
                    >
                        Sed in libero ut nibh placerat accumsan...
                    </v-alert>
                    <v-alert
                        border="right"
                        colored-border
                        type="error"
                        elevation="2"
                    >
                        Fusce commodo aliquam arcu...
                    </v-alert>
                </div>
            </template>

Dense
-----

The ``dense`` prop decreases the height of the alert to create a simple and compact style. When combined with the ``border`` prop, the border thickness will be decreased to stay consistent with the style.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    dense=True,
                    type="info",
                    children=["I'm a dense alert with a type of info"]
                ),
                v.Alert(
                    dense=True,
                    text=True,
                    type="success",
                    children=["I'm a dense alert with the text prop and a type of success"]
                ),
                v.Alert(
                    dense=True,
                    border="left",
                    type="warning",
                    children=["I'm a dense alert with the border prop and a type of warning"]
                ),
                v.Alert(
                    dense=True,
                    outlined=True,
                    type="error",
                    children=["I'm a dense alert with the outlined prop and a type of error"]
                ),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    dense=True,
                    type="info",
                    children=["I'm a dense alert with a type of info"]
                ),
                v.Alert(
                    dense=True,
                    text=True,
                    type="success",
                    children=["I'm a dense alert with the text prop and a type of success"]
                ),
                v.Alert(
                    dense=True,
                    border="left",
                    type="warning",
                    children=["I'm a dense alert with the border prop and a type of warning"]
                ),
                v.Alert(
                    dense=True,
                    outlined=True,
                    type="error",
                    children=["I'm a dense alert with the outlined prop and a type of error"]
                ),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-alert dense type="info">
                        I'm a dense alert with a type of info
                    </v-alert>
                    <v-alert dense text type="success">
                        I'm a dense alert with the text prop and a type of success
                    </v-alert>
                    <v-alert dense border="left" type="warning">
                        I'm a dense alert with the border prop and a type of warning
                    </v-alert>
                    <v-alert dense outlined type="error">
                        I'm a dense alert with the outlined prop and a type of error
                    </v-alert>
                </div>
            </template>

Dismissible
-----------

The ``dismissible`` prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert. You can restore the alert by binding ``v_model`` and setting it to true. The close icon automatically has an ``aria-label`` applied that can be changed by modifying the ``close_label`` prop or changing close value in your locale.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            alert = v.Alert(
                v_model=True,
                border="left",
                close_text="Close Alert",
                color="deep-purple accent-4",
                dark=True,
                dismissible=True,
                children=["Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero."]
            )

            v.Container(children=[alert])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            alert = v.Alert(
                v_model=True,
                border="left",
                close_text="Close Alert",
                color="deep-purple accent-4",
                dark=True,
                dismissible=True,
                children=["Aenean imperdiet. Quisque id odio. Cras dapibus..."]
            )

            v.Container(children=[alert])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-alert
                        v-model="alert"
                        border="left"
                        close-text="Close Alert"
                        color="deep-purple accent-4"
                        dark
                        dismissible
                    >
                        Aenean imperdiet. Quisque id odio...
                    </v-alert>
                </div>
            </template>

Icon
----

The ``icon`` prop allows you to add an icon to the beginning of the alert component. If a ``type`` is provided, this will override the default type icon. Additionally, setting the ``icon`` prop to false will remove the icon altogether.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    color="#2A3B4D",
                    dark=True,
                    icon="mdi-firework",
                    dense=True,
                    children=["Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi."]
                ),
                v.Alert(
                    color="#C51162",
                    dark=True,
                    icon="mdi-material-design",
                    border="right",
                    children=["Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit."]
                ),
                v.Alert(
                    color="primary",
                    dark=True,
                    icon="mdi-vuetify",
                    border="left",
                    prominent=True,
                    children=["Praesent congue erat at massa. Nullam vel sem."]
                ),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    color="#2A3B4D",
                    dark=True,
                    icon="mdi-firework",
                    dense=True,
                    children=["Suspendisse enim turpis, dictum sed..."]
                ),
                v.Alert(
                    color="#C51162",
                    dark=True,
                    icon="mdi-material-design",
                    border="right",
                    children=["Phasellus blandit leo ut odio..."]
                ),
                v.Alert(
                    color="primary",
                    dark=True,
                    icon="mdi-vuetify",
                    border="left",
                    prominent=True,
                    children=["Praesent congue erat at massa..."]
                ),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-alert
                        color="#2A3B4D"
                        dark
                        icon="mdi-firework"
                        dense
                    >
                        Suspendisse enim turpis...
                    </v-alert>
                    <v-alert
                        color="#C51162"
                        dark
                        icon="mdi-material-design"
                        border="right"
                    >
                        Phasellus blandit leo ut odio...
                    </v-alert>
                </div>
            </template>

Outlined
--------

The ``outlined`` prop inverts the style of an alert, inheriting the currently applied color, applying it to the text and border, and making its background transparent.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    outlined=True,
                    color="purple",
                    children=[v.Html(tag="div", class_="text-h6", children=["Lorem Ipsum"]), "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi."]
                ),
                v.Alert(
                    outlined=True,
                    type="success",
                    text=True,
                    children=["Praesent venenatis metus at tortor pulvinar varius."]
                ),
                v.Alert(
                    outlined=True,
                    type="warning",
                    prominent=True,
                    border="left",
                    children=["Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum."]
                ),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    outlined=True,
                    color="purple",
                    children=[v.Html(tag="div", class_="text-h6", children=["Lorem Ipsum"]), "Maecenas ullamcorper..."]
                ),
                v.Alert(
                    outlined=True,
                    type="success",
                    text=True,
                    children=["Praesent venenatis metus..."]
                ),
                v.Alert(
                    outlined=True,
                    type="warning",
                    prominent=True,
                    border="left",
                    children=["Duis arcu tortor..."]
                ),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-alert outlined color="purple">
                        <div class="text-h6">Lorem Ipsum</div>
                        <div>Maecenas ullamcorper...</div>
                    </v-alert>
                    <v-alert outlined type="success" text>
                        Praesent venenatis metus...
                    </v-alert>
                </div>
            </template>

Prominent
---------

The ``prominent`` prop provides a more pronounced alert by increasing the height and applying a halo to the icon. When applying both ``prominent`` and ``dense`` together, the alert will take on the appearance of a normal alert but with the prominent icon effects.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    prominent=True,
                    type="error",
                    children=[v.Row(align="center", children=[
                        v.Col(class_="grow", children=["Nunc nonummy metus. Nunc interdum lacus sit amet orci."]),
                        v.Col(class_="shrink", children=[v.Btn(children=["Take action"])])
                    ])]
                ),
                v.Alert(
                    color="blue-grey",
                    dark=True,
                    dense=True,
                    icon="mdi-school",
                    prominent=True,
                    children=["Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui."]
                ),
                v.Alert(
                    icon="mdi-shield-lock-outline",
                    prominent=True,
                    text=True,
                    type="info",
                    children=["Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem."]
                ),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    prominent=True,
                    type="error",
                    children=[v.Row(align="center", children=[
                        v.Col(class_="grow", children=["Nunc nonummy metus..."]),
                        v.Col(class_="shrink", children=[v.Btn(children=["Take action"])])
                    ])]
                ),
                v.Alert(
                    color="blue-grey",
                    dark=True,
                    dense=True,
                    icon="mdi-school",
                    prominent=True,
                    children=["Sed augue ipsum..."]
                ),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-alert prominent type="error">
                        <v-row align="center">
                            <v-col class="grow">
                                Nunc nonummy metus...
                            </v-col>
                            <v-col class="shrink">
                                <v-btn>Take action</v-btn>
                            </v-col>
                        </v-row>
                    </v-alert>
                </div>
            </template>

Text
----

The ``text`` prop is a simple alert variant that applies a reduced opacity background of the provided color. Similar to other styled props, ``text`` can be combined with other props like ``dense``, ``prominent``, ``outlined``, and ``shaped`` to create a unique and customized component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    text=True,
                    outlined=True,
                    color="deep-orange",
                    icon="mdi-fire",
                    children=["Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit."]
                ),
                v.Alert(
                    text=True,
                    dense=True,
                    color="teal",
                    icon="mdi-clock-fast",
                    border="left",
                    children=["Vestibulum ullamcorper mauris at ligula. Nulla porta dolor."]
                ),
                v.Alert(
                    text=True,
                    prominent=True,
                    type="error",
                    icon="mdi-cloud-alert",
                    children=["Praesent blandit laoreet nibh. Praesent nonummy mi in odio."]
                ),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    text=True,
                    outlined=True,
                    color="deep-orange",
                    icon="mdi-fire",
                    children=["Nullam tincidunt adipiscing enim..."]
                ),
                v.Alert(
                    text=True,
                    dense=True,
                    color="teal",
                    icon="mdi-clock-fast",
                    border="left",
                    children=["Vestibulum ullamcorper mauris..."]
                ),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-alert text outlined color="deep-orange" icon="mdi-fire">
                        Nullam tincidunt adipiscing enim...
                    </v-alert>
                    <v-alert text dense color="teal" icon="mdi-clock-fast" border="left">
                        Vestibulum ullamcorper mauris...
                    </v-alert>
                </div>
            </template>

Shaped
------

The ``shaped`` prop will add border-radius at the top-left and bottom-right of the alert. Similar to other styled props, ``shaped`` can be combined with other props like ``dense``, ``prominent``, ``outlined`` and ``text`` to create a unique and customized component.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    shaped=True,
                    dark=True,
                    color="info",
                    children=["I'm a shaped alert with a border-radius at top-left, bottom-right"]
                ),
                v.Alert(
                    shaped=True,
                    outlined=True,
                    type="success",
                    children=["I'm a shaped alert with a outline option"]
                ),
                v.Alert(
                    shaped=True,
                    dense=True,
                    dark=True,
                    type="warning",
                    children=["I'm a shaped alert with a dense option"]
                ),
                v.Alert(
                    shaped=True,
                    prominent=True,
                    type="error",
                    children=["I'm a shaped alert with a prominent option"]
                ),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    shaped=True,
                    dark=True,
                    color="info",
                    children=["I'm a shaped alert with a border-radius at top-left, bottom-right"]
                ),
                v.Alert(
                    shaped=True,
                    outlined=True,
                    type="success",
                    children=["I'm a shaped alert with a outline option"]
                ),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-alert shaped dark color="info">
                        I'm a shaped alert with a border-radius at top-left, bottom-right
                    </v-alert>
                    <v-alert shaped outlined type="success">
                        I'm a shaped alert with a outline option
                    </v-alert>
                </div>
            </template>

Transition
----------

The ``transition`` prop allows you to apply a transition to the alert which is viewable when the component hides and shows.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            alert = v.Alert(
                value=True,
                color="pink",
                dark=True,
                border="top",
                icon="mdi-home",
                transition="scale-transition",
                children=["Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum."]
            )

            btn = v.Btn(
                color="primary",
                children=["Toggle"]
            )

            def toggle_alert(widget, event, data):
                alert.value = not alert.value

            btn.on_event("click", toggle_alert)

            v.Container(children=[
                v.Html(tag="div", class_="text-center mb-4", children=[btn]),
                alert
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            alert = v.Alert(
                value=True,
                color="pink",
                dark=True,
                border="top",
                icon="mdi-home",
                transition="scale-transition",
                children=["Phasellus tempus. Fusce ac felis..."]
            )

            btn = v.Btn(color="primary", children=["Toggle"])
            btn.on_event("click", lambda w, e, d: setattr(alert, 'value', not alert.value))

            v.Container(children=[btn, alert])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-btn color="primary" @click="alert = !alert">
                        Toggle
                    </v-btn>
                    <v-alert
                        :value="alert"
                        color="pink"
                        dark
                        border="top"
                        icon="mdi-home"
                        transition="scale-transition"
                    >
                        Phasellus tempus...
                    </v-alert>
                </div>
            </template>

Type
----

The ``type`` prop provides 4 default ``v-alert`` styles: success, info, warning, and error. Each of these styles provides a default icon and color. The default colors can be configured globally by customizing Vuetify's theme.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(type="success", children=["I'm a success alert."]),
                v.Alert(type="info", children=["I'm an info alert."]),
                v.Alert(type="warning", children=["I'm a warning alert."]),
                v.Alert(type="error", children=["I'm an error alert."]),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(type="success", children=["I'm a success alert."]),
                v.Alert(type="info", children=["I'm an info alert."]),
                v.Alert(type="warning", children=["I'm a warning alert."]),
                v.Alert(type="error", children=["I'm an error alert."]),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-alert type="success">I'm a success alert.</v-alert>
                    <v-alert type="info">I'm an info alert.</v-alert>
                    <v-alert type="warning">I'm a warning alert.</v-alert>
                    <v-alert type="error">I'm an error alert.</v-alert>
                </div>
            </template>

Twitter Example
---------------

By combining ``color``, ``dismissible``, ``border``, ``elevation``, ``icon``, and ``colored_border`` props, you can create stylish custom alerts such as this Twitter notification.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :hide-code:

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    color="#26c6da",
                    border="left",
                    elevation=2,
                    colored_border=True,
                    icon="mdi-twitter",
                    children=["You've got 5 new updates on your timeline!"]
                ),
            ])

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Container(children=[
                v.Alert(
                    color="#26c6da",
                    border="left",
                    elevation=2,
                    colored_border=True,
                    icon="mdi-twitter",
                    children=["You've got 5 new updates on your timeline!"]
                ),
            ])

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
                <div>
                    <v-alert
                        color="#26c6da"
                        border="left"
                        elevation="2"
                        colored-border
                        icon="mdi-twitter"
                    >
                        You've got 5 new updates on your timeline!
                    </v-alert>
                </div>
            </template>

Accessibility
-------------

By default, :py:class:`Alert <ipyvuetify.Alert>` components are assigned the WAI-ARIA role of alert which denotes that the alert "is a live region with important and usually time-sensitive information." When using the ``dismissible`` prop, the close icon will receive a corresponding ``aria-label``. This value can be modified by changing either the ``close-label`` prop or globally through customizing the Internationalization's default value for the close property.
