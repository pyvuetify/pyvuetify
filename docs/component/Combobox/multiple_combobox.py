from ipywidgets import jslink

import ipyvuetify as v

options = ["Hiking", "Swimming", "Reading", "Cooking", "Traveling", "Gaming"]

combobox1 = v.Combobox(
    v_model=[],
    items=options,
    label="Select a favorite activity or create a new one",
    multiple=True,
)

combobox2 = v.Combobox(
    v_model=[],
    items=options,
    label="I use chips",
    multiple=True,
    chips=True,
)

# combobox3 = v.Combobox(
#    v_model=[],
#    items=options,
#    label='I use a scoped slot',
#    multiple=True,
#    chips=True,
#    v_slots=[{
#        'name': 'selection',
#        'variable': 'data',
#        'children': v.Chip(
#            key='JSON.stringify(data.item)',
#            v_bind='data.attrs',
#            input_value='data.selected',
#            disabled='data.disabled',
#            children=[
#                v.Avatar(
#                    class_='accent white--text',
#                    left=True,
#                    children=['{{ data.item.slice(0, 1).toUpperCase() }}'],
#                ),
#                '{{ data.item }}',
#            ],
#        ),
#    }],
# )

combobox4 = v.Combobox(
    v_model=[],
    label="I'm readonly",
    multiple=True,
    chips=True,
    readonly=True,
)

jslink((combobox1, "v_model"), (combobox2, "v_model"))
# jslink((combobox1, 'v_model'), (combobox3, 'v_model'))
jslink((combobox1, "v_model"), (combobox4, "v_model"))

combobox1.v_model = ["Reading", "Gaming"]

v.Container(
    children=[
        combobox1,
        combobox2,
        # combobox3,
        combobox4,
    ]
)
