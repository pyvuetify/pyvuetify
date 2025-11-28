CarouselItem
============

.. warning::
    This page is AI-generated and requires human review. The content may contain errors or inaccuracies.

.. aknowledgement::
    This page is a Python adaptation of the `official Vuetify documentation <https://v2.vuetifyjs.com/en/components/carousels/>`_.
    All examples have been converted to ipyvuetify syntax.

The :py:class:`CarouselItem <ipyvuetify.CarouselItem>` component is used to display individual slides within a :py:class:`Carousel <ipyvuetify.Carousel>`. Each item can contain any content including images, text, or other components.

.. api::

    :py:class:`ipyvuetify.CarouselItem`

Usage
-----

:py:class:`CarouselItem <ipyvuetify.CarouselItem>` is a child component of :py:class:`Carousel <ipyvuetify.Carousel>`. For complete usage examples and demonstrations, please refer to the :doc:`Carousel documentation <Carousel>`.

The basic structure is:

.. code-block:: python

    import ipyvuetify as v

    v.Carousel(
        children=[
            v.CarouselItem(
                children=[
                    # Your content here
                ]
            ),
            v.CarouselItem(
                children=[
                    # More content
                ]
            )
        ]
    )

See the :doc:`Carousel documentation <Carousel>` for detailed examples including:

- Basic carousel usage
- Automatic cycling
- Hide controls
- Manual model control
