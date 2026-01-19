import ipyvuetify as v

v.Banner(
    v_slots=[
        {
            "name": "actions",
            "children": [
                v.Btn(text=True, color="primary", children=["Dismiss"]),
                v.Btn(text=True, color="primary", children=["Retry"]),
            ],
        }
    ],
    children=[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus nec sem "
        "id malesuada. Curabitur lacinia sem et turpis euismod, eget elementum ex pretium."
    ],
)
