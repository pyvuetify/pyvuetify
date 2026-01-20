import ipyvuetify as v

v.Form(
    ref="form",
    children=[
        v.TextField(
            v_model="",
            counter=10,
            # rules will be set in Vue template
            label="Name",
            required=True,
        ),
        v.TextField(
            v_model="",
            # rules will be set in Vue template
            label="E-mail",
            required=True,
        ),
        v.Select(
            v_model=None,
            items=["Item 1", "Item 2", "Item 3"],
            # rules will be set in Vue template
            label="Item",
            required=True,
        ),
        v.Checkbox(
            v_model=False,
            # rules will be set in Vue template
            label="Do you agree?",
            required=True,
        ),
        v.Btn(
            children=["Validate"],
            color="success",
            class_="mr-4",
        ),
        v.Btn(
            children=["Reset Form"],
            color="error",
            class_="mr-4",
        ),
        v.Btn(
            children=["Reset Validation"],
            color="warning",
        ),
    ],
)
