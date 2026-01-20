import ipyvuetify as v

headers = [
    {"text": "Dessert (100g serving)", "align": "start", "value": "name", "groupable": False},
    {"text": "Category", "value": "category", "align": "right"},
    {"text": "Dairy", "value": "dairy", "align": "right"},
]

desserts = [
    {"name": "Frozen Yogurt", "category": "Ice cream", "dairy": "Yes"},
    {"name": "Ice cream sandwich", "category": "Ice cream", "dairy": "Yes"},
    {"name": "Eclair", "category": "Cookie", "dairy": "Yes"},
    {"name": "Cupcake", "category": "Pastry", "dairy": "Yes"},
    {"name": "Gingerbread", "category": "Cookie", "dairy": "No"},
    {"name": "Jelly bean", "category": "Candy", "dairy": "No"},
    {"name": "Lollipop", "category": "Candy", "dairy": "No"},
    {"name": "Honeycomb", "category": "Toffee", "dairy": "No"},
    {"name": "Donut", "category": "Pastry", "dairy": "Yes"},
    {"name": "KitKat", "category": "Candy", "dairy": "Yes"},
]

v.DataTable(
    headers=headers,
    items=desserts,
    item_key="name",
    sort_by="name",
    group_by="category",
    show_group_by=True,
)
