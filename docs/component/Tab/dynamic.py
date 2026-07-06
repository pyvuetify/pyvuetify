import pyvuetify as v

v.Card(
    children=[
        v.Tabs(
            v_model="tab",
            bg_color="red-lighten-2",
            children=[
                v.Tab(
                    # JS expression, needs manual conversion
                    key="n",
                    # JS expression, needs manual conversion
                    text="`Item ${n}`",
                    # JS expression, needs manual conversion
                    value="n",
                ),
            ],
        ),
        v.CardText(
            class_="text-center",
            children=[
                v.Btn(
                    # JS expression, needs manual conversion
                    disabled="!length",
                    text="Remove Tab",
                    variant="text",
                ),
                v.Divider(
                    class_="mx-4",
                    vertical=True,
                ),
                v.Btn(
                    text="Add Tab",
                    variant="text",
                ),
            ],
        ),
    ],
)
