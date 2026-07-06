import pyvuetify as v

v.Tabs(
    bg_color="indigo-darken-2",
    fixed_tabs=True,
    children=[
        v.Tab(text="Option"),
        v.Tab(text="Another Option"),
    ],
)
