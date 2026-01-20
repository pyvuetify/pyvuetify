import ipyvuetify as v

colors = ["primary", "secondary", "success", "info", "warning", "error"]

v.Container(
    children=[
        v.Chip(class_="ma-2", color=color, text_color="white", children=[color.capitalize()])
        for color in colors
    ]
)
