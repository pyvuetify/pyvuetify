import ipyvuetify as v

items = [
    {"text": "Dashboard", "disabled": False, "href": "breadcrumbs_dashboard"},
    {"text": "Link 1", "disabled": False, "href": "breadcrumbs_link_1"},
    {"text": "Link 2", "disabled": True, "href": "breadcrumbs_link_2"},
]

v.Breadcrumbs(
    items=items, v_slots=[{"name": "divider", "children": v.Icon(children=["mdi-forward"])}]
)
