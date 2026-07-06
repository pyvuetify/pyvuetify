import pyvuetify as v

v.Html(
    tag="div",
    children=[
        v.Alert(
            color="#2A3B4D",
            density="compact",
            icon="mdi-firework",
            theme="dark",
            children=[
                (
                    "Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Vivamus quis mi. "
                    "Quisque ut nisi. Maecenas malesuada."
                ),
            ],
        ),
        v.Alert(
            color="#C51162",
            icon="mdi-material-design",
            theme="dark",
            border=True,
            children=[
                (
                    "Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit. Donec orci "
                    "lectus, aliquam ut, faucibus non, euismod id, nulla. In ut quam vitae odio "
                    "lacinia tincidunt."
                ),
            ],
        ),
        v.Alert(
            color="primary",
            icon="$vuetify",
            theme="dark",
            prominent=True,
            children=[
                (
                    "Praesent congue erat at massa. Nullam vel sem. Aliquam lorem ante, dapibus in, viverra "
                    "quis, feugiat a, tellus. Proin viverra, ligula sit amet ultrices semper, ligula arcu "
                    "tristique sapien, a accumsan nisi mauris ac eros. Curabitur at lacus ac velit ornare "
                    "lobortis."
                ),
            ],
        ),
    ],
)
