import ipyvuetify as v

v.Container(
    children=[
        v.Alert(
            color="#2A3B4D",
            dark=True,
            icon="mdi-firework",
            dense=True,
            children=[
                "Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. "
                "Vivamus quis mi. Quisque ut nisi. Maecenas malesuada."
            ],
        ),
        v.Alert(
            color="#C51162",
            dark=True,
            icon="mdi-material-design",
            border="right",
            children=[
                "Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. Donec orci "
                "lectus, aliquam ut, faucibus non, euismod id, nulla. In ut quam vitae odio "
                "lacinia tincidunt."
            ],
        ),
        v.Alert(
            color="primary",
            dark=True,
            icon="mdi-vuetify",
            border="left",
            prominent=True,
            children=[
                "Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus "
                "in, viverra quis, feugiat a, tellus. Proin viverra, ligula sit amet ultrices "
                "semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. "
                "Curabitur at lacus ac velit ornare lobortis."
            ],
        ),
    ]
)
