from datetime import datetime as dt

import ipyvuetify as v

icons = ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-linkedin"]

v.Footer(
    dark=True,
    padless=True,
    children=[
        v.Card(
            flat=True,
            tile=True,
            class_="indigo lighten-1 white--text text-center",
            children=[
                v.CardText(
                    children=[
                        v.Btn(
                            icon=True,
                            class_="mx-4 white--text",
                            children=[v.Icon(size="24px", children=[i])],
                        )
                        for i in icons
                    ],
                ),
                v.CardText(
                    class_="white--text pt-0",
                    children=[
                        "Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. "
                        "Mauris cursus commodo interdum. Praesent ut risus eget metus luctus "
                        "accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim "
                        "a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula "
                        "lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus "
                        "iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor "
                        "vel ut orci. Orci varius natoque penatibus et magnis dis parturient "
                        "montes, nascetur ridiculus mus."
                    ],
                ),
                v.Divider(),
                v.CardText(
                    class_="white--text",
                    children=[f"{dt.now().year} — ", v.Html(tag="strong", children=["Vuetify"])],
                ),
            ],
        ),
    ],
)
