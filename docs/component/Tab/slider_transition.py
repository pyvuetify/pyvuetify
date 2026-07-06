import pyvuetify as v

v.DefaultsProvider(
    # JS expression, needs manual conversion
    defaults="{ VTab: { ripple: false } }",
    children=[
        v.Card(
            class_="pa-3",
            children=[
                v.Html(
                    tag="h5",
                    class_="my-0",
                    children=["slider-transition: fade, duration 900ms"],
                ),
                v.Tabs(
                    slider_transition="fade",
                    slider_transition_duration="900",
                    fixed_tabs=True,
                    children=[
                        v.Tab(children=["Tab 1"]),
                        v.Tab(children=["Tab 2"]),
                        v.Tab(children=["Tab 3"]),
                    ],
                ),
            ],
        ),
        v.Card(
            class_="pa-3 mt-3",
            children=[
                v.Html(
                    tag="h5",
                    class_="my-0",
                    children=["slider-transition: grow"],
                ),
                v.Tabs(
                    slider_transition="grow",
                    fixed_tabs=True,
                    children=[
                        v.Tab(children=["Tab 1"]),
                        v.Tab(children=["Tab 2"]),
                        v.Tab(children=["Tab 3"]),
                    ],
                ),
            ],
        ),
    ],
)
