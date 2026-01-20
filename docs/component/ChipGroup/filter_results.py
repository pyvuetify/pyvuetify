import ipyvuetify as v

amenities = v.ChipGroup(
    v_model=[],
    column=True,
    multiple=True,
    children=[
        v.Chip(children=["Elevator"], outlined=True, filter=True),
        v.Chip(children=["Washer / Dryer"], outlined=True, filter=True),
        v.Chip(children=["Fireplace"], outlined=True, filter=True),
        v.Chip(children=["Wheelchair access"], outlined=True, filter=True),
        v.Chip(children=["Dogs ok"], outlined=True, filter=True),
        v.Chip(children=["Cats ok"], outlined=True, filter=True),
    ],
)

neighborhoods = v.ChipGroup(
    v_model=[],
    column=True,
    multiple=True,
    children=[
        v.Chip(children=["Snowy Rock Place"], outlined=True, filter=True),
        v.Chip(children=["Honeylane Circle"], outlined=True, filter=True),
        v.Chip(children=["Donna Drive"], outlined=True, filter=True),
        v.Chip(children=["Elaine Street"], outlined=True, filter=True),
        v.Chip(children=["Court Street"], outlined=True, filter=True),
        v.Chip(children=["Kennedy Park"], outlined=True, filter=True),
    ],
)

v.Card(
    class_="mx-auto my-2",
    max_width="400",
    children=[
        v.Toolbar(
            color="deep-purple accent-4 text-white",
            children=[
                v.Btn(icon=True, children=[v.Icon(children=["mdi-close"])]),
                v.ToolbarTitle(children=["Filter results"]),
            ],
        ),
        v.CardText(
            children=[
                v.Html(tag="h5", class_="my-2", children=["Choose amenities"]),
                amenities,
            ]
        ),
        v.CardText(
            children=[
                v.Html(tag="h5", class_="my-2", children=["Choose neighborhoods"]),
                neighborhoods,
            ]
        ),
    ],
)
