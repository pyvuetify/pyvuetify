import ipyvuetify as v

v.Container(
    children=[
        v.Alert(
            border="left",
            colored_border=True,
            color="deep-purple accent-4",
            elevation=2,
            children=[
                "Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. "
                "Nulla facilisi.. Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula "
                "non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim "
                "turpis, dictum sed, iaculis a, condimentum nec, nisi."
            ],
        ),
        v.Alert(
            border="top",
            colored_border=True,
            type="info",
            elevation=2,
            children=[
                "Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius "
                "tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere "
                "imperdiet, leo. Morbi nec metus."
            ],
        ),
        v.Alert(
            border="bottom",
            colored_border=True,
            type="warning",
            elevation=2,
            children=[
                "Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor "
                "et, hendrerit quis, nisi. Phasellus leo dolor, tempus non, auctor et, hendrerit "
                "quis, nisi. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, "
                "quis gravida magna mi a libero. Donec elit libero, sodales nec, volutpat a, "
                "suscipit non, turpis."
            ],
        ),
        v.Alert(
            border="right",
            colored_border=True,
            type="error",
            elevation=2,
            children=[
                "Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec "
                "posuere vulputate arcu."
            ],
        ),
    ]
)
