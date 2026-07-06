import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="400",
    children=[
        v.Toolbar(
            color="deep-purple-accent-4",
            children=[
                v.Btn(icon="mdi-close"),
                v.ToolbarTitle(children=["Filter results"]),
            ],
        ),
        v.CardText(
            children=[
                v.Html(
                    tag="h2",
                    class_="text-title-large mt-0 mb-2",
                    children=["Choose amenities"],
                ),
                v.ChipGroup(
                    v_model="amenities",
                    column=True,
                    multiple=True,
                    children=[
                        v.Chip(
                            text="Elevator",
                            variant="outlined",
                            filter=True,
                        ),
                        v.Chip(
                            text="Washer / Dryer",
                            variant="outlined",
                            filter=True,
                        ),
                        v.Chip(
                            text="Fireplace",
                            variant="outlined",
                            filter=True,
                        ),
                        v.Chip(
                            text="Wheelchair access",
                            variant="outlined",
                            filter=True,
                        ),
                        v.Chip(
                            text="Dogs ok",
                            variant="outlined",
                            filter=True,
                        ),
                        v.Chip(
                            text="Cats ok",
                            variant="outlined",
                            filter=True,
                        ),
                    ],
                ),
            ],
        ),
        v.CardText(
            children=[
                v.Html(
                    tag="h2",
                    class_="text-title-large mt-0 mb-2",
                    children=["Choose neighborhoods"],
                ),
                v.ChipGroup(
                    v_model="neighborhoods",
                    column=True,
                    multiple=True,
                    children=[
                        v.Chip(
                            text="Snowy Rock Place",
                            variant="outlined",
                            filter=True,
                        ),
                        v.Chip(
                            text="Honeylane Circle",
                            variant="outlined",
                            filter=True,
                        ),
                        v.Chip(
                            text="Donna Drive",
                            variant="outlined",
                            filter=True,
                        ),
                        v.Chip(
                            text="Elaine Street",
                            variant="outlined",
                            filter=True,
                        ),
                        v.Chip(
                            text="Court Street",
                            variant="outlined",
                            filter=True,
                        ),
                        v.Chip(
                            text="Kennedy Park",
                            variant="outlined",
                            filter=True,
                        ),
                    ],
                ),
            ],
        ),
    ],
)
