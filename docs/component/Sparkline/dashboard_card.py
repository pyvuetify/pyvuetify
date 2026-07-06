import pyvuetify as v

v.Card(
    class_="mt-8 mx-auto overflow-visible",
    max_width="400",
    children=[
        v.Sheet(
            class_="v-sheet--offset mx-auto",
            color="cyan",
            elevation="4",
            max_width="calc(100% - 32px)",
            rounded="lg",
            children=[
                v.Sparkline(
                    # JS expression, needs manual conversion
                    labels="labels",
                    # JS expression, needs manual conversion
                    model_value="value",
                    color="white",
                    line_width="2",
                    padding="16",
                ),
            ],
        ),
        v.CardText(
            class_="pt-0",
            children=[
                v.Html(
                    tag="div",
                    class_="text-title-large font-weight-light mb-2",
                    children=["User Registrations"],
                ),
                v.Html(
                    tag="div",
                    class_="subheading font-weight-light text-grey",
                    children=["Last Campaign Performance"],
                ),
                v.Divider(class_="my-2"),
                v.Icon(
                    class_="me-2",
                    size="small",
                    children=["mdi-clock"],
                ),
                v.Html(
                    tag="span",
                    class_="text-body-small text-grey font-weight-light",
                    children=["last registration 26 minutes ago"],
                ),
            ],
        ),
    ],
)
