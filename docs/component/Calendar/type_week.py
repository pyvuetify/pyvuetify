import ipyvuetify as v

events = [
    {"name": "Weekly Meeting", "start": "2025-11-07 09:00", "end": "2025-11-07 10:00"},
    {"name": "Lunch", "start": "2025-11-08 12:30", "end": "2025-11-08 13:30"},
    {"name": "Thomas Birthday", "start": "2025-11-10", "color": "green"},
]

v.Calendar(type="week", value="2025-11-07", events=events)
