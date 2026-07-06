import pyvuetify as v

v.Container(
    fluid=True,
    children=[
        v.Autocomplete(
            filter_keys=["title", "raw.abbr"],
            # JS expression, needs manual conversion
            items="states",
            item_title="name",
            label="State",
        ),
    ],
)
