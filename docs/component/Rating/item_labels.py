import pyvuetify as v

v.Html(
    tag="div",
    class_="d-flex align-center justify-center flex-column",
    children=[
        v.Rating(
            v_model="rating",
            item_labels=["sad", "", "", "", "happy"],
            class_="ma-2",
            item_label_position="top",
        ),
        v.Rating(
            v_model="rating",
            item_labels=["sad", "", "", "", "happy"],
            class_="ma-2",
            item_label_position="bottom",
        ),
    ],
)
