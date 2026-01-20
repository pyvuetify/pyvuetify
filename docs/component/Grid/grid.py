import ipyvuetify as v

items = [
    {
        "icon": "mdi-cellphone",
        "device": "Extra small",
        "code": "xs",
        "type": "Small to large phone",
        "range": "<600px",
    },
    {
        "icon": "mdi-tablet",
        "device": "Small",
        "code": "sm",
        "type": "Small to medium tablet",
        "range": "600px - 960px",
    },
    {
        "icon": "mdi-laptop",
        "device": "Medium",
        "code": "md",
        "type": "Large tablet to laptop",
        "range": "960px - 1264px",
    },
    {
        "icon": "mdi-monitor",
        "device": "Large",
        "code": "lg",
        "type": "Desktop",
        "range": "1264px - 1904px",
    },
    {
        "icon": "mdi-television",
        "device": "Extra large",
        "code": "xl",
        "type": "4k and ultra-wide",
        "range": "> 1904px",
    },
]

v.SimpleTable(
    children=[
        v.Html(
            tag="thead",
            children=[
                v.Html(
                    tag="tr",
                    children=[
                        v.Html(tag="th", class_="text-left", children=["Device"]),
                        v.Html(tag="th", class_="text-left", children=["Breakpoint"]),
                        v.Html(tag="th", class_="text-left", children=["Type"]),
                        v.Html(tag="th", class_="text-left", children=["Range"]),
                    ],
                )
            ],
        ),
        v.Html(
            tag="tbody",
            children=[
                v.Html(
                    tag="tr",
                    children=[
                        v.Html(
                            tag="td",
                            children=[v.Icon(children=[item["icon"]]), " ", item["device"]],
                        ),
                        v.Html(tag="td", children=[item["code"]]),
                        v.Html(tag="td", children=[item["type"]]),
                        v.Html(tag="td", children=[item["range"]]),
                    ],
                )
                for item in items
            ],
        ),
    ]
)
