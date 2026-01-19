import ipyvuetify as v

items = [
    {
        "id": 1,
        "name": "Applications :",
        "locked": True,
        "children": [
            {"id": 2, "name": "Calendar : app", "locked": True},
            {"id": 3, "name": "Chrome : app", "locked": True},
            {"id": 4, "name": "Webstorm : app", "locked": True},
        ],
    },
    {
        "id": 5,
        "name": "Documents :",
        "locked": False,
        "children": [
            {
                "id": 6,
                "name": "vuetify :",
                "locked": False,
                "children": [
                    {
                        "id": 7,
                        "name": "src :",
                        "locked": False,
                        "children": [
                            {
                                "id": 8,
                                "name": "index : ts",
                                "locked": False,
                            },
                            {"id": 9, "name": "bootstrap : ts", "locked": False},
                        ],
                    },
                ],
            },
            {
                "id": 10,
                "name": "material2 :",
                "locked": False,
                "children": [
                    {
                        "id": 11,
                        "name": "src :",
                        "locked": False,
                        "children": [
                            {"id": 12, "name": "v-btn : ts", "locked": True},
                            {"id": 13, "name": "v-card : ts", "locked": True},
                            {"id": 14, "name": "v-window : ts", "locked": False},
                        ],
                    },
                ],
            },
        ],
    },
    {
        "id": 15,
        "name": "Downloads :",
        "locked": False,
        "children": [
            {"id": 16, "name": "October : pdf", "locked": False},
            {"id": 17, "name": "November : pdf", "locked": True},
            {"id": 18, "name": "Tutorial : html", "locked": False},
        ],
    },
    {
        "id": 19,
        "name": "Videos :",
        "locked": False,
        "children": [
            {
                "id": 20,
                "name": "Tutorials :",
                "locked": False,
                "children": [
                    {"id": 21, "name": "Basic layouts : mp4", "locked": False},
                    {"id": 22, "name": "Advanced techniques : mp4", "locked": False},
                    {"id": 23, "name": "All about app : dir", "locked": False},
                ],
            },
            {"id": 24, "name": "Intro : mov", "locked": False},
            {"id": 25, "name": "Conference introduction : avi", "locked": False},
        ],
    },
]

v.Treeview(items=items, dense=True, hoverable=True, item_disabled="locked")
