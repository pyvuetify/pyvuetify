import pyvuetify as v

v.DataIterator(
    # JS expression, needs manual conversion
    items="mice",
    # JS expression, needs manual conversion
    items_per_page="itemsPerPage",
    children=[
        v.Html(
            tag="template",
            children=[
                v.Html(
                    tag="h1",
                    class_=("text-headline-large font-weight-bold d-flex justify-space-between mt-0 mb-4 align-center"),
                    children=[
                        v.Html(
                            tag="div",
                            class_="text-truncate",
                            children=["Most popular mice"],
                        ),
                        v.Html(
                            tag="div",
                            class_="d-flex align-center",
                            children=[
                                v.Btn(
                                    class_="me-8",
                                    variant="text",
                                    children=[
                                        v.Html(
                                            tag="span",
                                            class_="text-decoration-underline text-none",
                                            children=["See all"],
                                        ),
                                    ],
                                ),
                                v.Html(
                                    tag="div",
                                    class_="d-inline-flex",
                                    children=[
                                        v.Btn(
                                            # JS expression, needs manual conversion
                                            disabled="page === 1",
                                            class_="me-2",
                                            icon="mdi-arrow-left",
                                            size="small",
                                            variant="tonal",
                                        ),
                                        v.Btn(
                                            # JS expression, needs manual conversion
                                            disabled="page === pageCount",
                                            icon="mdi-arrow-right",
                                            size="small",
                                            variant="tonal",
                                        ),
                                    ],
                                ),
                            ],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
