import pyvuetify as v

v.Card(
    height="200",
    children=[
        v.Toolbar(
            class_="text-white",
            image="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg",
            children=[
                v.Btn(icon="mdi-menu"),
                v.ToolbarTitle(text="Toolbar"),
                v.Btn(icon="mdi-export"),
            ],
        ),
    ],
)
