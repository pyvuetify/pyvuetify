import ipyvuetify as v

autocomplete = v.Autocomplete(
    items=["Alabama", "Alaska", "Arizona", "Arkansas", "California"],
    label="States",
    dense=False,
    filled=False,
    clearable=True,
)

v.Container(children=[autocomplete])
