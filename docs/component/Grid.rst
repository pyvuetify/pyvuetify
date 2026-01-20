Grid
====

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation
    <https://v2.vuetifyjs.com/en/components/grids/>`_. All examples have been
    converted to ipyvuetify syntax.

Vuetify comes with a 12 point grid system built using flexbox. The grid is used to
create specific layouts within an application's content. It contains 5 types of
media breakpoints that are used for targeting specific screen sizes or orientations:
``xs``, ``sm``, ``md``, ``lg`` and ``xl``. These resolutions are defined below in
the Viewport Breakpoints table.

.. jupyter-execute:: Grid/grid.py
    :raises:
    :hide-code:

.. api::

    - :py:class:`ipyvuetify.Container`
    - :py:class:`ipyvuetify.Row`
    - :py:class:`ipyvuetify.Col`
    - :py:class:`ipyvuetify.Spacer`

Sub-components
--------------

Container
~~~~~~~~~

:py:class:`Container <ipyvuetify.Container>` provides the ability to center and
horizontally pad your site's contents. You can also use the ``fluid`` prop to
fully extend the container across all viewport and device sizes. Maintains previous
1.x functionality in which props are passed through as classes on
:py:class:`Container <ipyvuetify.Container>` allowing for the application of helper
classes (such as ``ma-#``/``pa-#``/``fill-height``) to easily be applied.

Col
~~~

:py:class:`Col <ipyvuetify.Col>` is a content holder that must be a direct child
of :py:class:`Row <ipyvuetify.Row>`. This is the 2.x replacement for v-flex in 1.x.

Row
~~~

:py:class:`Row <ipyvuetify.Row>` is a wrapper component for
:py:class:`Col <ipyvuetify.Col>`. It utilizes flex properties to control the
layout and flow of its inner columns. It uses a standard gutter of 24px. This
can be reduced with the ``dense`` prop or removed completely with ``no-gutters``.
This is the 2.x replacement for v-layout in 1.x.

Spacer
~~~~~~

:py:class:`Spacer <ipyvuetify.Spacer>` is a basic yet versatile spacing component
used to distribute remaining width in-between a parent's child components. When
placing a single :py:class:`Spacer <ipyvuetify.Spacer>` before or after the child
components, the components will push to the right and left of its container. When
more than one :py:class:`Spacer <ipyvuetify.Spacer>` are used between multiple
components, the remaining width is evenly distributed between each spacer.

Usage
-----

The Vuetify grid is heavily inspired by the `Bootstrap grid
<https://getbootstrap.com/docs/4.0/layout/grid/>`__. It is integrated by using a
series of containers, rows, and columns to layout and align content.If you are **new to flexbox**,
`Read the CSS Tricks flexbox guide for background <https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background>`__,
terminology, guidelines, and code snippets.

.. jupyter-execute:: Grid/usage.py
    :raises:
    :hide-code:

.. note::

    ``fill-height`` applies ``height: 100%`` to an element. When applied to
    :py:class:`Container <ipyvuetify.Container>` it will also ``align-items: center``.

.. note::

    Breakpoints based props on grid components work in an ``andUp`` fashion. With this
    in mind the ``xs`` breakpoint is assumed and has been removed from the props context.
    This applies to ``offset``, ``justify``, ``align``, and single breakpoint props on
    :py:class:`Col <ipyvuetify.Col>`.

    Props like ``justify-sm`` and ``justify-md`` exist, but ``justify-xs`` does not, it is
    simply ``justify``. The ``xs`` prop does not exist on :py:class:`Col <ipyvuetify.Col>`.
    The equivalent to this is  the ``cols`` prop

Align
-----

Change the vertical alignment of flex items and their parents using the ``align`` and ``align-self`` properties.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/align.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/align.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/align.vue

Breakpoint sizing
-----------------

Columns will automatically take up an equal amount of space within their parent container. This can be modified using the ``cols`` prop. You can also utilize the ``sm``, ``md``, ``lg``, and ``xl`` props to further define how the column will be sized in different viewport sizes.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/breakpoint_sizing.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/breakpoint_sizing.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/breakpoint_sizing.vue

Justify
-------

Change the horizontal alignment of flex items using the ``justify`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/justify.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/justify.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/justify.vue

No gutters
----------

You can remove the negative margins from :py:class:`Row <ipyvuetify.Row>` and the
padding from its direct :py:class:`Col <ipyvuetify.Col>` children using the
``no-gutters`` property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/no_gutters.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/no_gutters.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/no_gutters.vue

Offset
------

Offsets are useful for compensating for elements that may not be visible yet, or
to control the position of content. Just as with breakpoints, you can set an offset
for any available sizes. This allows you to fine tune your application layout
precisely to your needs.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/offset.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/offset.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/offset.vue

Offset breakpoint
-----------------

Offset can also be applied on a per breakpoint basis.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/offset_breakpoint.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/offset_breakpoint.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/offset_breakpoint.vue

Order
-----

You can control the ordering of grid items. As with offsets, you can set different
orders for different sizes. Design specialized screen layouts that accommodate
to any application.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/order.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/order.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/order.vue

Order first and last
--------------------

You can also designate explicitly ``first`` or ``last`` which will assign ``-1``
or ``13`` values respectively to the ``order`` CSS property.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/order_first_and_last.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/order_first_and_last.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/order_first_and_last.vue

Column wrapping
---------------

When more than 12 columns are placed within a given row (that is not using the
``.flex-nowrap`` utility class), each group of extra columns will wrap onto a new
line.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/column_wrapping.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/column_wrapping.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/column_wrapping.vue

Equal width columns
-------------------

You can break equal width columns into multiple lines.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/equal_width_columns.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/equal_width_columns.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/equal_width_columns.vue

Grow and Shrink
---------------

By default, flex components will automatically fill the available space in a row
or column. They will also shrink relative to the rest of the flex items in the flex
container when a specific size is not designated. You can define the column width
of the :py:class:`Col <ipyvuetify.Col>` by using the ``cols`` prop and providing
a value from 1 to 12.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/grow_and_shrink.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/grow_and_shrink.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/grow_and_shrink.vue

Margin helpers
--------------

Using the `auto margin helper utilities <https://v2.vuetifyjs.com/en/styles/flex/#auto-margins>`__
you can force sibling columns away from each other.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/margin_helpers.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/margin_helpers.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/margin_helpers.vue

Nested grid
-----------

Grids can be nested, similar to other frameworks, in order to achieve very custom
layouts.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/nested_grid.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/nested_grid.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/nested_grid.vue

One column width
----------------

When using the auto-layout, you can define the width of only one column and still
have its siblings to automatically resize around it.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/one_column_width.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/one_column_width.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/one_column_width.vue

Spacers
-------

The :py:class:`Spacer <ipyvuetify.Spacer>` component is useful when you want to fill available space or make space between two components.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/spacers.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/spacers.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/spacers.vue

Unique layouts
--------------

The power and flexibility of the Vuetify grid system allows you to create amazing
user interfaces.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/unique_layouts.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/unique_layouts.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/unique_layouts.vue

Variable content width
----------------------

Assigning breakpoint width for columns can be configured to resize based upon the
nature width of their content.

.. tab-set::

    .. tab-item:: :fas:`eye` Rendered

        .. jupyter-execute:: Grid/variable_content_width.py
            :raises:
            :hide-code:

    .. tab-item:: :fab:`python` Python

        .. literalinclude:: Grid/variable_content_width.py

    .. tab-item:: :fab:`vuejs` Vue template

        .. literalinclude:: Grid/variable_content_width.vue

