import ipyvuetify as v

seasons = ["Winter", "Spring", "Summer", "Fall"]
icons = ["mdi-snowflake", "mdi-flower", "mdi-weather-sunny", "mdi-leaf"]


v.RangeSlider(
    class_="mx-3 mt-10",
    tick_labels=seasons,
    v_model=[0, 1],
    min=0,
    max=3,
    ticks="always",
    tick_size=4,
    thumb_label="always",
    v_slots=[
        {
            "name": "thumb_label",
            "variables": "props",
            "children": [
                v.Icon(
                    dark=True,
                    children=["{{{{ season(props.value) }}}}"],
                )
            ],
        }
    ],
)
