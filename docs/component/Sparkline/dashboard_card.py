import ipyvuetify as v

values = [200, 675, 410, 390, 310, 460, 250, 240]
labels = ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"]

v.Card(
    class_="mt-8 mb-2 mx-auto",
    width=600,
    children=[
        v.Sheet(
            class_="mx-auto",
            color="cyan",
            elevation=12,
            max_width="calc(100% - 32px)",
            children=[
                v.Sparkline(labels=labels, value=values, color="white", line_width=2, padding=16)
            ],
            style_="top: -24px; position: relative;",
        ),
        v.CardText(
            class_="pt-0",
            children=[
                v.Html(
                    tag="h5", class_="font-weight-light mb-2 mt-0", children=["User Registrations"]
                ),
                v.Html(
                    tag="h6",
                    class_="font-weight-light grey--text mt-1",
                    children=["Last Campaign Performance"],
                ),
                v.Divider(class_="my-2"),
                v.Icon(class_="mr-2", small=True, children=["mdi-clock"]),
                v.Html(
                    tag="span",
                    class_="text-caption grey--text font-weight-light",
                    children=["last registration 26 minutes ago"],
                ),
            ],
        ),
    ],
)
