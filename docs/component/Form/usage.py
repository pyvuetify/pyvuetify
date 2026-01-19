import ipyvuetify as v

v.Form(
    v_model=True,
    children=[
        v.TextField(
            v_model="",
            # rules=[
            #    lambda v: bool(v) or 'Name is required',
            #    lambda v: len(v) <= 10 or 'Name must be less than 10 characters',
            # ],
            counter=10,
            label="Name",
            required=True,
        ),
        v.TextField(
            v_model="",
            # rules=[
            #    lambda v: bool(v) or 'E-mail is required',
            #    lambda v: '@' in v or 'E-mail must be valid',
            # ],
            label="E-mail",
            required=True,
        ),
        v.TextField(
            v_model="",
            # rules=[
            #    lambda v: bool(v) or 'Password is required',
            #    lambda v: len(v) >= 8 or 'Password must be at least 8 characters',
            # ],
            type="password",
            label="Password",
            required=True,
        ),
    ],
)
