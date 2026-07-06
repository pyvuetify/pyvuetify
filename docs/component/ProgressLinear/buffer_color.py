import pyvuetify as v

v.Sheet(
    class_="d-flex align-center px-4 py-8 mx-auto",
    color="#181a1b",
    max_width="250",
    rounded="lg",
    children=[
        v.ProgressLinear(
            location=None,
            bg_color="#92aed9",
            buffer_color="#6a3e0b",
            buffer_opacity="1",
            buffer_value="3",
            color="#12512a",
            height="12",
            max="9",
            min="0",
            model_value="2",
            rounded=True,
        ),
        v.Html(
            tag="div",
            class_="ms-4 text-title-large",
            children=["3/9"],
        ),
    ],
)
