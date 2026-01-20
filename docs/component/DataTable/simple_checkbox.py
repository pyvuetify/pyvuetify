import ipyvuetify as v

headers = [
    {"text": "Dessert (100g serving)", "value": "name"},
    {"text": "Calories", "value": "calories"},
    {"text": "Fat (g)", "value": "fat"},
    {"text": "Carbs (g)", "value": "carbs"},
    {"text": "Protein (g)", "value": "protein"},
    {"text": "Iron (%)", "value": "iron"},
]

desserts = [
    {
        "name": "Frozen Yogurt",
        "calories": 159,
        "fat": 6.0,
        "carbs": 24,
        "protein": 4.0,
        "iron": 1,
        "glutenfree": True,
    },
    {
        "name": "Ice cream sandwich",
        "calories": 237,
        "fat": 9.0,
        "carbs": 37,
        "protein": 4.3,
        "iron": 1,
        "glutenfree": False,
    },
    {
        "name": "Eclair",
        "calories": 262,
        "fat": 16.0,
        "carbs": 23,
        "protein": 6.0,
        "iron": 7,
        "glutenfree": False,
    },
    {
        "name": "Cupcake",
        "calories": 305,
        "fat": 3.7,
        "carbs": 67,
        "protein": 4.3,
        "iron": 8,
        "glutenfree": False,
    },
    {
        "name": "Gingerbread",
        "calories": 356,
        "fat": 16.0,
        "carbs": 49,
        "protein": 3.9,
        "iron": 16,
        "glutenfree": True,
    },
    {
        "name": "Jelly bean",
        "calories": 375,
        "fat": 0.0,
        "carbs": 94,
        "protein": 0.0,
        "iron": 0,
        "glutenfree": True,
    },
    {
        "name": "Lollipop",
        "calories": 392,
        "fat": 0.2,
        "carbs": 98,
        "protein": 0.0,
        "iron": 2,
        "glutenfree": True,
    },
    {
        "name": "Honeycomb",
        "calories": 408,
        "fat": 3.2,
        "carbs": 87,
        "protein": 6.5,
        "iron": 45,
        "glutenfree": True,
    },
    {
        "name": "Donut",
        "calories": 452,
        "fat": 25.0,
        "carbs": 51,
        "protein": 4.9,
        "iron": 22,
        "glutenfree": False,
    },
    {
        "name": "KitKat",
        "calories": 518,
        "fat": 26.0,
        "carbs": 65,
        "protein": 7.0,
        "iron": 6,
        "glutenfree": False,
    },
]

v.DataTable(
    headers=headers,
    items=desserts,
    v_slots=[
        {
            "name": "item.glutenfree",
            "variable": "item",
            "children": v.SimpleCheckbox(
                v_model="item.item.glutenfree",
                disabled=True,
            ),
        }
    ],
)
