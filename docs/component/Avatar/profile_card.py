import pyvuetify as v

v.Card(
    class_="mx-auto",
    max_width="434",
    rounded="0",
    children=[
        v.Img(
            height="100%",
            src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg",
            cover=True,
            children=[
                v.Avatar(
                    color="grey",
                    rounded="0",
                    size="150",
                    children=[
                        v.Img(
                            src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
                            cover=True,
                        ),
                    ],
                ),
                v.ListItem(
                    class_="text-white",
                    subtitle="Network Engineer",
                    title="Marcus Obrien",
                ),
            ],
        ),
    ],
)
