import pyvuetify as v

v.Html(
    tag="form",
    children=[
        v.TextField(
            v_model="name.value.value",
            counter=10,
            # JS expression, needs manual conversion
            error_messages="name.errorMessage.value",
            label="Name",
        ),
        v.TextField(
            v_model="phone.value.value",
            counter=7,
            # JS expression, needs manual conversion
            error_messages="phone.errorMessage.value",
            label="Phone Number",
        ),
        v.TextField(
            v_model="email.value.value",
            # JS expression, needs manual conversion
            error_messages="email.errorMessage.value",
            label="E-mail",
        ),
        v.Select(
            v_model="select.value.value",
            # JS expression, needs manual conversion
            error_messages="select.errorMessage.value",
            # JS expression, needs manual conversion
            items="items",
            label="Select",
        ),
        v.Checkbox(
            v_model="checkbox.value.value",
            # JS expression, needs manual conversion
            error_messages="checkbox.errorMessage.value",
            label="Option",
            type="checkbox",
            value="1",
            indent_details=True,
        ),
        v.Btn(
            class_="me-4",
            type="submit",
            children=["submit"],
        ),
        v.Btn(children=["clear"]),
    ],
)
