import ipyvuetify as v

icons = ["mdi-home", "mdi-calendar", "mdi-information"]
green_icons = ["mdi-folder-open", "mdi-widgets", "mdi-gavel"]
sizes = ["small", "medium", "large", "x-large"]


v.Container(
    fluid=True,
    children=[
        v.Layout(
            class_="d-flex flex-row justify-space-evenly my-2",
            children=[
                v.Html(
                    tag="div",
                    class_="d-flex flex-grow-1 justify-center py-2",
                    children=[
                        v.Icon(
                            small=(size == "small"),
                            large=(size == "large"),
                            x_large=(size == "x-large"),
                            children=[icon],
                        )
                    ],
                )
                for icon in icons
            ]
            + [
                v.Html(
                    tag="div",
                    class_="teal d-flex flex-grow-1 justify-center py-2",
                    children=[
                        v.Icon(
                            dark=True,
                            small=(size == "small"),
                            large=(size == "large"),
                            x_large=(size == "x-large"),
                            children=[icon],
                        )
                    ],
                )
                for icon in green_icons
            ],
        )
        for size in sizes
    ],
)
