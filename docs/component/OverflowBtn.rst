OverflowBtn
===========

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Overflow buttons
    documentation <https://v2.vuetifyjs.com/en/components/overflow-btns/>`__.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` is used to give the user
the ability to select items from the list. It has 3 variations: ``editable``,
``overflow`` and ``segmented``.

.. api::

    :py:class:`ipyvuetify.OverflowBtn`

Usage
-----

:py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` is used for creating selection
lists.

.. jupyter-execute::
    :raises:

    import ipyvuetify as v

    items = ['Arial', 'Calibri', 'Courier', 'Verdana']

    v.OverflowBtn(
        label='Select font',
        items=items,
        v_model='Arial',
    )

Examples
--------

Counter
^^^^^^^

You can add a counter to :py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` to
control the max char count.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                counter=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                counter=True,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container id="dropdown-example-3">
                <v-overflow-btn
                class="my-2"
                :items="dropdown_edit"
                label="Overflow Btn w/ counter"
                counter
                item-value="text"
                ></v-overflow-btn>
            </v-container>
            </template>

Dense
^^^^^

You can use ``dense`` prop to reduce overflow button height and lower max
height of list items.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                dense=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                counter=True,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container>
                <v-overflow-btn
                class="my-2"
                :items="items"
                label="Overflow Btn - Dense"
                dense
                ></v-overflow-btn>
            </v-container>
            </template>

Disabled
^^^^^^^^

:py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` can be disabled in order to
prevent a user from interacting with it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                disabled=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                disabled=True,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container id="dropdown-example-1">
                <v-overflow-btn
                class="my-2"
                :items="dropdown_font"
                label="Overflow Btn w/ disabled"
                disabled
                target="#dropdown-example-1"
                ></v-overflow-btn>
            </v-container>
            </template>

Editable
^^^^^^^^

``editable`` :py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` can be directly
edited, just as :py:class:`TextField <ipyvuetify.TextField>`.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                editable=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                editable=True,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container id="dropdown-example-3">
                <v-overflow-btn
                class="my-2"
                :items="dropdown_edit"
                label="Overflow Btn w/ editable"
                editable
                item-value="text"
                ></v-overflow-btn>
            </v-container>
            </template>

Filled
^^^^^^

Text fields can be used with an alternative box design.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                filled=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                filled=True,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container id="dropdown-example-1">
                <v-overflow-btn
                class="my-2"
                :items="dropdown_font"
                label="Overflow Btn - filled"
                filled
                target="#dropdown-example-1"
                ></v-overflow-btn>
            </v-container>
            </template>

Hint
^^^^

You can add a hint for the user using the ``hint`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                hint='Select  a real font',
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                hint='Select  a real font',
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container id="dropdown-example-1">
                <v-overflow-btn
                class="my-2"
                :items="dropdown_font"
                menu-props="top"
                label="Overflow Btn w/ hint"
                hint="Select font"
                target="#dropdown-example-1"
                ></v-overflow-btn>
            </v-container>
            </template>

Loading
^^^^^^^

:py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` can have ``loading`` state
with a linear progress bar under them.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                loading=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                loading=True,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container id="dropdown-example-1">
                <v-overflow-btn
                class="my-2"
                :items="dropdown_font"
                label="Overflow Btn w/ loading"
                loading
                target="#dropdown-example-1"
                ></v-overflow-btn>
            </v-container>
            </template>

Menu props
^^^^^^^^^^

You can set underlying :py:class:`Menu <ipyvuetify.Menu>` props using
``menu-props`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                menu_props="top",
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                menu_props="top",
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container id="dropdown-example-1">
                <v-overflow-btn
                class="my-2"
                :items="dropdown_font"
                menu-props="top"
                label="Overflow Btn w/ menu-props"
                target="#dropdown-example-1"
                ></v-overflow-btn>
            </v-container>
            </template>

Readonly
^^^^^^^^

:py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` can be put into ``readonly``
mode, it'll become inactive but won't change the color.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                readonly=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                readonly=True,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container id="dropdown-example-1">
                <v-overflow-btn
                class="my-2"
                :items="dropdown_font"
                label="Overflow Btn w/ readonly"
                readonly
                target="#dropdown-example-1"
                ></v-overflow-btn>
            </v-container>
            </template>

Segmented
^^^^^^^^^

``segmented`` :py:class:`OverflowBtn <ipyvuetify.OverflowBtn>` has an
additional divider between the content and the icon.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                segmented=True,
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            items = ['Arial', 'Calibri', 'Courier', 'Verdana']

            v.OverflowBtn(
                label='Select font',
                items=items,
                v_model='Arial',
                segmented=True,
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-container id="dropdown-example-2">
                <v-overflow-btn
                class="my-2"
                :items="dropdown_icon"
                label="Overflow Btn w/ segmented"
                segmented
                target="#dropdown-example-2"
                ></v-overflow-btn>
            </v-container>
            </template>
