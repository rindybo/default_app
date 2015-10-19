/// <reference path="../../node_modules/vue/dist/vue.js" />

var tmpl = [
    '<div class="head-menu">',
    '    <ul>',
    '        <li v-repeat="list in model"><a href="{{list.action}}" target="_self" v-class="active: list.active">{{list.name}}</a></li>',
    '    </ul>',
    '</div>'
];

Vue.component('tabs-menu', {
    props: ['model'],
    replace: true,
    template: tmpl.join('')
});