import ipyvuetify as v

v.Container(
    children=[
        v.Alert(
            outlined=True,
            color="purple",
            children=[
                v.Html(tag="h5", class_="mt-1", children=["Lorem Ipsum"]),
                (
                    "Maecenas ullamcorper, dui et placerat feugiat, eros pede varius nisi, "
                    "condimentum viverra felis nunc et lorem. Duis vel nibh at velit scelerisque "
                    "suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus "
                    "feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. "
                    "Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet sapien, "
                    "quis venenatis ante odio sit amet eros."
                ),
            ],
        ),
        v.Alert(
            outlined=True,
            type="success",
            text=True,
            children=[
                "Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget "
                "dolor. Praesent ac massa at ligula laoreet iaculis. Vestibulum ullamcorper mauris "
                "at ligula."
            ],
        ),
        v.Alert(
            outlined=True,
            type="warning",
            prominent=True,
            border="left",
            children=[
                "Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. "
                "Suspendisse non nisl sit amet velit hendrerit rutrum. Nullam vel sem. "
                "Pellentesque dapibus hendrerit tortor."
            ],
        ),
    ]
)
