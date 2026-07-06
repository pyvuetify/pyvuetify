import pyvuetify as v

v.Select(
    v_model="value",
    # JS expression, needs manual conversion
    items="items",
    label="Select Item",
    multiple=True,
    children=[
        v.Html(
            tag="template",
            children=[
                # JS expression, needs manual conversion
                v.Chip(text="item"),
                v.Html(
                    tag="span",
                    class_="text-grey text-body-small align-self-center",
                    children=["(+{{ value.length - 2 }} others)"],
                ),
            ],
        ),
    ],
)
