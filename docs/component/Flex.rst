Flex
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify Flex documentation
    <https://v2.vuetifyjs.com/en/styles/flex/>`__. All examples have been converted
    to ipyvuetify syntax.

Control the layout of flex containers with alignment, justification and more with
responsive flexbox utilities.

.. note::
    Flex is implemented using CSS utility classes that you apply via the ``class_``
    parameter on ipyvuetify components.

.. Warning::

    The ``d-flex`` class sets the CSS of the according element to
    ``display: flex !important``. As a result, it overrides any other settings.



Enabling flexbox
----------------

Using **display** utilities you can turn any element into a flexbox container
transforming direct children elements into flex items. Using additional flex
property utilities, you can customize their interaction even further.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Flex/enabling_flexbox.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Flex/enabling_flexbox.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Flex/enabling_flexbox.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Card(
                class_="d-inline-flex pa-2",
                outlined=True,
                tile=True,
                children=[
                    v.Html(tag="div", children=["I'm an inline flexbox container!"])
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Card(
                class_="d-inline-flex pa-2",
                outlined=True,
                tile=True,
                children=[
                    v.Html(tag="div", children=["I'm an inline flexbox container!"])
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <v-card
                class="d-inline-flex pa-2"
                outlined
                tile
            >
                <div>
                I'm an inline flexbox container!
                </div>
            </v-card>
            </template>

You can also customize flex utilities to apply based upon various breakpoints:

- ``.d-flex``
- ``.d-inline-flex``
- ``.d-sm-flex``
- ``.d-sm-inline-flex``
- ``.d-md-flex``
- ``.d-md-inline-flex``
- ``.d-lg-flex``
- ``.d-lg-inline-flex``
- ``.d-xl-flex``
- ``.d-xl-inline-flex``

Examples
--------

Flex direction
^^^^^^^^^^^^^^

By default, ``d-flex`` applies ``flex-direction: row`` and can generally be omitted.
However, there may be situations where you need to explicitly define it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Flex/flex_direction.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Flex/flex_direction.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Flex/flex_direction.vue

The ``flex-column`` and ``flex-column-reverse`` utility classes can be used to
change the orientation of the flexbox container. Keep in mind that IE11 and Safari
may have issues with the column direction.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-column mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex flex-column-reverse",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 4)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-column mb-6",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 4)
                        ]
                    ),
                    v.Card(
                        class_="d-flex flex-column-reverse",
                        color="grey lighten-4",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 4)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <div class="d-flex flex-column mb-6">
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item {{ n }}
                </v-card>
                </div>
                <div class="d-flex flex-column-reverse">
                <v-card
                    v-for="n in 3"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item {{ n }}
                </v-card>
                </div>
            </div>
            </template>

There are also responsive variations for ``flex-direction``:

- ``.flex-row``
- ``.flex-row-reverse``
- ``.flex-column``
- ``.flex-column-reverse``
- ``.flex-sm-row``
- ``.flex-sm-row-reverse``
- ``.flex-sm-column``
- ``.flex-sm-column-reverse``
- ``.flex-md-row``
- ``.flex-md-row-reverse``
- ``.flex-md-column``
- ``.flex-md-column-reverse``
- ``.flex-lg-row``
- ``.flex-lg-row-reverse``
- ``.flex-lg-column``
- ``.flex-lg-column-reverse``
- ``.flex-xl-row``
- ``.flex-xl-row-reverse``
- ``.flex-xl-column``
- ``.flex-xl-column-reverse``

Flex justify
^^^^^^^^^^^^

The ``justify-content`` flex setting can be changed using the flex justify classes.
This by default will modify the flexbox items on the x-axis but is reversed when
using ``flex-direction: column``, modifying the y-axis. Choose from ``start``
(browser default), ``end``, ``center``, ``space-between``, or ``space-around``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Flex/flex_justify.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Flex/flex_justify.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Flex/flex_justify.vue

There are also responsive variations for ``justify-content``:

- ``.justify-start``
- ``.justify-end``
- ``.justify-center``
- ``.justify-space-between``
- ``.justify-space-around``
- ``.justify-sm-start``
- ``.justify-sm-end``
- ``.justify-sm-center``
- ``.justify-sm-space-between``
- ``.justify-sm-space-around``
- ``.justify-md-start``
- ``.justify-md-end``
- ``.justify-md-center``
- ``.justify-md-space-between``
- ``.justify-md-space-around``
- ``.justify-lg-start``
- ``.justify-lg-end``
- ``.justify-lg-center``
- ``.justify-lg-space-between``
- ``.justify-lg-space-around``
- ``.justify-xl-start``
- ``.justify-xl-end``
- ``.justify-xl-center``
- ``.justify-xl-space-between``
- ``.justify-xl-space-around``

Flex align
^^^^^^^^^^

The ``align-items`` flex setting can be changed using the flex align classes. This by default will modify the flexbox items on the y-axis but is reversed when using ``flex-direction: column``, modifying the x-axis. Choose from ``start``, ``end``, ``center``, ``baseline``, or ``stretch`` (browser default).

.. note::
    When using flex align with IE11 you will need to set an explicit ``height`` as ``min-height`` will not suffice and cause undesired results.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Flex/flex_align.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Flex/flex_align.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Flex/flex_align.vue

There are also responsive variations for ``align-items``:

- ``.align-start``
- ``.align-end``
- ``.align-center``
- ``.align-baseline``
- ``.align-stretch``
- ``.align-sm-start``
- ``.align-sm-end``
- ``.align-sm-center``
- ``.align-sm-baseline``
- ``.align-sm-stretch``
- ``.align-md-start``
- ``.align-md-end``
- ``.align-md-center``
- ``.align-md-baseline``
- ``.align-md-stretch``
- ``.align-lg-start``
- ``.align-lg-end``
- ``.align-lg-center``
- ``.align-lg-baseline``
- ``.align-lg-stretch``
- ``.align-xl-start``
- ``.align-xl-end``
- ``.align-xl-center``
- ``.align-xl-baseline``
- ``.align-xl-stretch``

Flex align self
^^^^^^^^^^^^^^^

The ``align-self`` flex setting can be changed using the flex align-self classes. This by default will modify the flexbox items on the x-axis but is reversed when using ``flex-direction: column``, modifying the y-axis. Choose from ``start``, ``end``, ``center``, ``baseline``, ``auto``, or ``stretch`` (browser default).

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Flex/flex_align_self.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Flex/flex_align_self.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Flex/flex_align_self.vue

There are also responsive variations for ``align-self``:

- ``.align-self-start``
- ``.align-self-end``
- ``.align-self-center``
- ``.align-self-baseline``
- ``.align-self-auto``
- ``.align-self-stretch``
- ``.align-self-sm-start``
- ``.align-self-sm-end``
- ``.align-self-sm-center``
- ``.align-self-sm-baseline``
- ``.align-self-sm-auto``
- ``.align-self-sm-stretch``
- ``.align-self-md-start``
- ``.align-self-md-end``
- ``.align-self-md-center``
- ``.align-self-md-baseline``
- ``.align-self-md-auto``
- ``.align-self-md-stretch``
- ``.align-self-lg-start``
- ``.align-self-lg-end``
- ``.align-self-lg-center``
- ``.align-self-lg-baseline``
- ``.align-self-lg-auto``
- ``.align-self-lg-stretch``
- ``.align-self-xl-start``
- ``.align-self-xl-end``
- ``.align-self-xl-center``
- ``.align-self-xl-baseline``
- ``.align-self-xl-auto``
- ``.align-self-xl-stretch``

Auto margins
^^^^^^^^^^^^

Using the margin helper classes in a flexbox container, you can control the
positioning of flex items on the x-axis or y-axis when using ``flex-row`` or
``flex-column`` respectively.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Flex/auto_margins.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Flex/auto_margins.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Flex/auto_margins.vue

Using align-items
"""""""""""""""""

Mixing ``flex-direction: column`` and ``align-items``, you can utilize ``.mt-auto``
and ``.mb-auto`` helper classes to adjust flex item positioning.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Flex/using_align_items.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Flex/using_align_items.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Flex/using_align_items.vue

Flex wrap
^^^^^^^^^

By default ``.d-flex`` does not provide any wrapping (behaves similarly to
``flex-wrap: nowrap``). This can be modified by applying flex-wrap helper classes
in the format ``flex-{condition}`` where condition can be ``nowrap``, ``wrap``,
or ``wrap-reverse``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Flex/flex_wrap.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Flex/flex_wrap.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Flex/flex_wrap.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 21)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 21)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex flex-wrap"
                color="grey lighten-2"
                flat
                tile
                >
                <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item {{ n }}
                </v-card>
                </v-card>
            </div>
            </template>

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-wrap-reverse",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 21)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex flex-wrap-reverse",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=[f"Flex item {n}"]
                            ) for n in range(1, 21)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex flex-wrap-reverse"
                color="grey lighten-2"
                flat
                tile
                >
                <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item {{ n }}
                </v-card>
                </v-card>
            </div>
            </template>

These helper classes can also be applied in the format ``flex-{breakpoint}-{condition}``
to create more responsive variations based on breakpoints:

- ``.flex-nowrap``
- ``.flex-wrap``
- ``.flex-wrap-reverse``
- ``.flex-sm-nowrap``
- ``.flex-sm-wrap``
- ``.flex-sm-wrap-reverse``
- ``.flex-md-nowrap``
- ``.flex-md-wrap``
- ``.flex-md-wrap-reverse``
- ``.flex-lg-nowrap``
- ``.flex-lg-wrap``
- ``.flex-lg-wrap-reverse``
- ``.flex-xl-nowrap``
- ``.flex-xl-wrap``
- ``.flex-xl-wrap-reverse``

Flex order
^^^^^^^^^^

You can change the visual order of flex items with the ``order`` utilities.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Flex/flex_order.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Flex/flex_order.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Flex/flex_order.vue

There are also responsive variations for ``order``:

- ``.order-first``
- ``.order-0`` through ``.order-12``
- ``.order-last``
- ``.order-sm-first``
- ``.order-sm-0`` through ``.order-sm-12``
- ``.order-sm-last``
- ``.order-md-first``
- ``.order-md-0`` through ``.order-md-12``
- ``.order-md-last``
- ``.order-lg-first``
- ``.order-lg-0`` through ``.order-lg-12``
- ``.order-lg-last``
- ``.order-xl-first``
- ``.order-xl-0`` through ``.order-xl-12``
- ``.order-xl-last``

Flex align content
^^^^^^^^^^^^^^^^^^

The ``align-content`` flex setting can be changed using the flex align-content classes. This by default will modify the flexbox items on the x-axis but is reversed when using ``flex-direction: column``, modifying the y-axis. Choose from ``start`` (browser default), ``end``, ``center``, ``between``, ``around`` or ``stretch``.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Flex/flex_align_content.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Flex/flex_align_content.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Flex/flex_align_content.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-end flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-end flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex align-content-end flex-wrap"
                color="grey lighten-2"
                flat
                tile
                min-height="200"
                >
                <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item
                </v-card>
                </v-card>
            </div>
            </template>

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-center flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-center flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex align-content-center flex-wrap"
                color="grey lighten-2"
                flat
                tile
                min-height="200"
                >
                <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item
                </v-card>
                </v-card>
            </div>
            </template>

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Flex/flex_align_content_2.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Flex/flex_align_content_2.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Flex/flex_align_content_2.vue

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute::
            :raises:
            :hide-code:

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-space-around flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`python` Python

        .. code-block:: python

            import ipyvuetify as v

            v.Html(
                tag="div",
                children=[
                    v.Card(
                        class_="d-flex align-content-space-around flex-wrap",
                        color="grey lighten-2",
                        flat=True,
                        tile=True,
                        min_height="200",
                        children=[
                            v.Card(
                                class_="pa-2",
                                outlined=True,
                                tile=True,
                                children=["Flex item"]
                            ) for _ in range(20)
                        ]
                    )
                ]
            )

    .. tab-item:: :fab:`vuejs` Vue template

        .. code-block:: vue

            <template>
            <div>
                <v-card
                class="d-flex align-content-space-around flex-wrap"
                color="grey lighten-2"
                flat
                tile
                min-height="200"
                >
                <v-card
                    v-for="n in 20"
                    :key="n"
                    class="pa-2"
                    outlined
                    tile
                >
                    Flex item
                </v-card>
                </v-card>
            </div>
            </template>

There are also responsive variations for ``align-content``:

- ``.align-content-start``
- ``.align-content-end``
- ``.align-content-center``
- ``.align-content-space-between``
- ``.align-content-space-around``
- ``.align-content-stretch``
- ``.align-sm-content-start``
- ``.align-sm-content-end``
- ``.align-sm-content-center``
- ``.align-sm-content-space-between``
- ``.align-sm-content-space-around``
- ``.align-sm-content-stretch``
- ``.align-md-content-start``
- ``.align-md-content-end``
- ``.align-md-content-center``
- ``.align-md-content-space-between``
- ``.align-md-content-space-around``
- ``.align-md-content-stretch``
- ``.align-lg-content-start``
- ``.align-lg-content-end``
- ``.align-lg-content-center``
- ``.align-lg-content-space-between``
- ``.align-lg-content-space-around``
- ``.align-lg-content-stretch``
- ``.align-xl-content-start``
- ``.align-xl-content-end``
- ``.align-xl-content-center``
- ``.align-xl-content-space-between``
- ``.align-xl-content-space-around``
- ``.align-xl-content-stretch``

Flex grow and shrink
^^^^^^^^^^^^^^^^^^^^

Vuetify has helper classes for applying grow and shrink manually. These can be applied
by adding the helper class in the format ``flex-{condition}-{value}``, where condition
can be either ``grow`` or ``shrink`` and value can be either ``0`` or ``1``. The
condition ``grow`` will permit an element to grow to fill available space, whereas
``shrink`` will permit an element to shrink down to only the space needs for its
contents. However, this will only happen if the element must shrink to fit their
container such as a container resize or being effected by a ``flex-grow-1``. The
value ``0`` will prevent the condition from occurring whereas ``1`` will permit
the condition.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Flex/flex_grow_and_shrink.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Flex/flex_grow_and_shrink.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Flex/flex_grow_and_shrink.vue

The following classes are available:

- ``.flex-grow-0``
- ``.flex-grow-1``
- ``.flex-shrink-0``
- ``.flex-shrink-1``

These helper classes can also be applied in the format ``flex-{breakpoint}-{condition}-{state}`` to create more responsive variations based on breakpoints:

- ``.flex-sm-grow-0``
- ``.flex-md-grow-0``
- ``.flex-lg-grow-0``
- ``.flex-xl-grow-0``
- ``.flex-sm-grow-1``
- ``.flex-md-grow-1``
- ``.flex-lg-grow-1``
- ``.flex-xl-grow-1``
- ``.flex-sm-shrink-0``
- ``.flex-md-shrink-0``
- ``.flex-lg-shrink-0``
- ``.flex-xl-shrink-0``
- ``.flex-sm-shrink-1``
- ``.flex-md-shrink-1``
- ``.flex-lg-shrink-1``
- ``.flex-xl-shrink-1``
