import pyvuetify as v

v.Form(
    children=[
        v.Autocomplete(
            v_model="selected",
            # JS expression, needs manual conversion
            items="items",
            label="To",
            chips=True,
            hide_details=True,
            hide_no_data=True,
            hide_selected=True,
            multiple=True,
            single_line=True,
        ),
        v.Divider(),
        v.TextField(
            v_model="subject",
            label="Subject",
            hide_details=True,
            single_line=True,
        ),
        v.Divider(),
        v.Textarea(
            v_model="title",
            label="Message",
            maxlength="120",
            counter=True,
            single_line=True,
        ),
    ],
)
