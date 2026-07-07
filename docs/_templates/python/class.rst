{% if obj.display %}
:html_theme.sidebar_secondary.remove:

{{ obj.id.split(".")[-1] }}
{{ "=" * obj.id.split(".")[-1] | length }}

   {% set visible_children = obj.children|selectattr("display")|list %}
   {% set own_page_children = visible_children|selectattr("type", "in", own_page_types)|list %}

.. py:{{ obj.type }}:: {{ obj.id }}{% if obj.args %}({{ obj.args }}){% endif %}


   {% if obj.docstring %}
   {{ obj.docstring|indent(3) }}
   {% endif %}

Props
-----

.. list-table::
   :header-rows: 1
   :widths: 20 10 15 55

   * - Name
     - Type
     - Default
     - Description
      {% for attr in visible_children %}
   * - ``{{ attr.name }}``
     - {{ attr.obj.get("value", "") }}
     - ``—``
     - {{ attr.docstring | striptags | replace("\n", " ") }}
      {% endfor %}

{% endif %}