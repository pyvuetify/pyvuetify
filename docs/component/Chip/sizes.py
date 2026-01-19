import ipyvuetify as v

sizes = ["x-small", "small", "default", "large", "x-large"]

kwargs = [
    {"class_": "ma-2", size.replace("-", "_"): True, "children": [(f"{size} chip").capitalize()]}
    for size in sizes
]

v.Container(children=[v.Chip(**kw) for kw in kwargs])
