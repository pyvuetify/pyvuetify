import ipyvuetify as v

v.Container(
    class_="mx-auto my-2",
    children=[
        v.Combobox(
            multiple=True,
            label="Select or create an item",
            items=["Apple", "Banana", "Orange"],
            clearable=True,
            chips=True,
        )
    ],
)
