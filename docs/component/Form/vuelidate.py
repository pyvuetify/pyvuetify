import pyvuetify as v

v.Html(
    tag="form",
    children=[
        v.TextField(
            v_model="state.name",
            counter=10,
            # JS expression, needs manual conversion
            error_messages="v$.name.$errors.map(e => e.$message)",
            label="Name",
            required=True,
        ),
        v.TextField(
            v_model="state.email",
            # JS expression, needs manual conversion
            error_messages="v$.email.$errors.map(e => e.$message)",
            label="E-mail",
            required=True,
        ),
        v.Select(
            v_model="state.select",
            # JS expression, needs manual conversion
            error_messages="v$.select.$errors.map(e => e.$message)",
            # JS expression, needs manual conversion
            items="items",
            label="Item",
            required=True,
        ),
        v.Checkbox(
            v_model="state.checkbox",
            # JS expression, needs manual conversion
            error_messages="v$.checkbox.$errors.map(e => e.$message)",
            label="Do you agree?",
            indent_details=True,
            required=True,
        ),
        v.Btn(
            class_="me-4",
            children=["submit"],
        ),
        v.Btn(children=["clear"]),
    ],
)
