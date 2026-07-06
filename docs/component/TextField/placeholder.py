import pyvuetify as v

v.Responsive(
    class_="mx-auto",
    max_width="344",
    children=[
        v.TextField(
            hide_details="auto",
            label="Email address",
            placeholder="johndoe@gmail.com",
            type="email",
        ),
    ],
)
