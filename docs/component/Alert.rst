Alert
=====

The :py:class:`Alert <ipyvuetify.Alert>` component is used to convey important information to the user through the use of contextual types, icons, and colors. These default types come in 4 variations: success, info, warning, and error. Default icons are assigned which help represent different actions each type portrays. Many parts of an alert such as ``border``, ``icon``, and ``color`` can also be customized to fit almost any situation.

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

    .. tab-item:: :fas:`code` Code

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

Colored Border
--------------

The ``colored-border`` prop removes the alert background in order to accent the ``border`` prop. If a ``type`` is set, it will use the type's default color. If no color or type is set, the color will default to the inverted color of the applied theme (black for light and white/gray for dark).

.. code-block:: python

    # Example code will be adapted here

Dense
-----

The ``dense`` prop decreases the height of the alert to create a simple and compact style. When combined with the ``border`` prop, the border thickness will be decreased to stay consistent with the style.

.. code-block:: python

    # Example code will be adapted here

Dismissible
-----------

The ``dismissible`` prop adds a close button to the end of the alert component. Clicking this button will set its value to false and effectively hide the alert. You can restore the alert by binding ``v-model`` and setting it to true. The close icon automatically has an ``aria-label`` applied that can be changed by modifying the ``close-label`` prop or changing close value in your locale.

.. code-block:: python

    # Example code will be adapted here

Icon
----

The ``icon`` prop allows you to add an icon to the beginning of the alert component. If a ``type`` is provided, this will override the default type icon. Additionally, setting the ``icon`` prop to false will remove the icon altogether.

.. code-block:: python

    # Example code will be adapted here

Outlined
--------

The ``outlined`` prop inverts the style of an alert, inheriting the currently applied color, applying it to the text and border, and making its background transparent.

.. code-block:: python

    # Example code will be adapted here

Prominent
---------

The ``prominent`` prop provides a more pronounced alert by increasing the height and applying a halo to the icon. When applying both ``prominent`` and ``dense`` together, the alert will take on the appearance of a normal alert but with the prominent icon effects.

.. code-block:: python

    # Example code will be adapted here

Text
----

The ``text`` prop is a simple alert variant that applies a reduced opacity background of the provided color. Similar to other styled props, ``text`` can be combined with other props like ``dense``, ``prominent``, ``outlined``, and ``shaped`` to create a unique and customized component.

.. code-block:: python

    # Example code will be adapted here

Shaped
------

The ``shaped`` prop will add border-radius at the top-left and bottom-right of the alert. Similar to other styled props, ``shaped`` can be combined with other props like ``dense``, ``prominent``, ``outlined`` and ``text`` to create a unique and customized component.

.. code-block:: python

    # Example code will be adapted here

Transition
----------

The ``transition`` prop allows you to apply a transition to the alert which is viewable when the component hides and shows.

.. code-block:: python

    # Example code will be adapted here

Type
----

The ``type`` prop provides 4 default ``v-alert`` styles: success, info, warning, and error. Each of these styles provides a default icon and color. The default colors can be configured globally by customizing Vuetify's theme.

.. code-block:: python

    # Example code will be adapted here

Twitter Example
---------------

By combining ``color``, ``dismissible``, ``border``, ``elevation``, ``icon``, and ``colored-border`` props, you can create stylish custom alerts such as this Twitter notification.

.. code-block:: python

    # Example code will be adapted here

Accessibility
-------------

By default, ``v-alert`` components are assigned the WAI-ARIA role of alert which denotes that the alert "is a live region with important and usually time-sensitive information." When using the ``dismissible`` prop, the close icon will receive a corresponding ``aria-label``. This value can be modified by changing either the ``close-label`` prop or globally through customizing the Internationalization's default value for the close property.
