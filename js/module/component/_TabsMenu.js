﻿var tmpl = [
    '<div class="head-menu">',
    '    <ul>',
    '        <li v-repeat="list in model"><a href="{{list.link}}" target="_self" v-on="click: navgation(list)" v-class="active: list.active">{{list.name}}</a></li>',
    '    </ul>',
    '</div>'
];

Vue.component('tabs-menu', {
    props: ['model'],
    replace: true,
    template: tmpl.join(''),
    methods: {
        navgation: function (curr) {
            
            this.model.forEach(function (list) {
                list.active = false;
            });

           curr.active = true
        }
    }
});