---
title: JSON 
layout: null
---
{ 
    "created": "{{ site.time }}", 
    "devices": 
    [

    {% for device in site.zigbee %}
        {
        {% if device.model != nil %}"model":     {{ device.model | jsonify }},{% endif %}
        {% if device.title != nil %}"name":     {{ device.title | jsonify }},{% endif %}
        {% if device.vendor != nil %}"vendor":     {{ device.vendor | jsonify }},{% endif %}
        {% if device.category != nil %}"category": "{{ device.category }}",{% endif %}
        {% if device.zigbeemodel != nil %}"zigbeemodel": [{% assign zbmodel = device.zigbeemodel %}{% for item in zbmodel %}"{{ item }}"{% unless forloop.last %},{% endunless %}{% endfor %}],{% endif %}
        {% if device.compatible != nil %}"compatible": {{ device.compatible | jsonify }},{% endif %}
        "image":    "{{ device.url | remove: ".html" | prepend: 'https://zigbee/blakadder.com/assets/images/devices' | append: '.jpg' }}",
        "link":     "{{ device.url }}"
        }{% unless forloop.last %},{% endunless %}
    {% endfor %}
    ]
}
