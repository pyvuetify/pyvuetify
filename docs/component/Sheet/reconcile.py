import pyvuetify as v

v.Sheet(
    class_="pa-4 text-center mx-auto",
    elevation="4",
    max_width="600",
    rounded="lg",
    width="100%",
    children=[
        v.Icon(
            class_="mb-5",
            color="success",
            icon="mdi-check-circle",
            size="112",
        ),
        v.Html(
            tag="h2",
            class_="text-headline-small mt-0 mb-6",
            children=["You reconciled this account"],
        ),
        v.Html(
            tag="p",
            class_="mb-4 text-medium-emphasis text-body-medium",
            children=[
                "To see a report on this reconciliation, click",
                v.Html(
                    tag="a",
                    class_="text-decoration-none text-info",
                    href="#",
                    children=["View reconciliation report."],
                ),
                "Otherwise, you're done!",
            ],
        ),
        v.Divider(class_="mb-4"),
        v.Html(
            tag="div",
            class_="text-end",
            children=[
                v.Btn(
                    class_="text-none",
                    color="success",
                    variant="flat",
                    width="90",
                    rounded=True,
                    children=["Done"],
                ),
            ],
        ),
    ],
)
