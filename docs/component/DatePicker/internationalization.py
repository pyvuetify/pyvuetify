import ipyvuetify as v

v.Container(
    class_="my-2",
    children=[
        v.DatePicker(
            class_="mx-2",
            v_model="2022-06-15",
            first_day_of_week=0,
            locale="zh-cn",
        ),
        v.DatePicker(
            class_="mx-2",
            v_model="2022-06-15",
            first_day_of_week=1,
            locale="sv-se",
        ),
    ],
)
