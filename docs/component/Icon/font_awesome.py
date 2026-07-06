import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex justify-space-around",
    children=[
        v.Icon(icon="fa:fas fa-lock"),
        v.Icon(icon="fa:fas fa-search"),
        v.Icon(icon="fa:fas fa-list"),
        v.Icon(icon="fa:fas fa-edit"),
        v.Icon(icon="fa:fas fa-tachometer-alt"),
        v.Icon(icon="fa:fas fa-circle-notch fa-spin"),
    ],
)
