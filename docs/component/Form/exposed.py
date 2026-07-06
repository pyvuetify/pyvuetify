import pyvuetify as v

v.Sheet(
    class_="mx-auto",
    width="300",
    children=[
        v.Form(
            ref="form",
            children=[
                v.TextField(
                    v_model="name",
                    counter=10,
                    # JS expression, needs manual conversion
                    rules="nameRules",
                    label="Name",
                    required=True,
                ),
                v.Select(
                    v_model="select",
                    # JS expression, needs manual conversion
                    items="items",
                    # JS expression, needs manual conversion
                    rules="[v => !!v || 'Item is required']",
                    label="Item",
                    required=True,
                ),
                v.Checkbox(
                    v_model="checkbox",
                    # JS expression, needs manual conversion
                    rules="[v => !!v || 'You must agree to continue!']",
                    label="Do you agree?",
                    indent_details=True,
                    required=True,
                ),
                v.Html(
                    tag="div",
                    class_="d-flex flex-column",
                    children=[
                        v.Btn(
                            class_="mt-4",
                            color="success",
                            block=True,
                            children=["Validate"],
                        ),
                        v.Btn(
                            class_="mt-4",
                            color="error",
                            block=True,
                            children=["Reset Form"],
                        ),
                        v.Btn(
                            class_="mt-4",
                            color="warning",
                            block=True,
                            children=["Reset Validation"],
                        ),
                    ],
                ),
            ],
        ),
    ],
)
