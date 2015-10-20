var tmpl = [
    '<ul>',
        '<template v-repeat="list in model">',
            '<li class="side-mneu-item" v-on="click: toggle(list.subs)"><span>{{list.name}}</span><i v-if="list.subs" v-class="font-icon:true,icon-dbldown:down"></i></li>',
            '<li class="side-menu-subs" v-if="list.subs" v-class="show: show">',
            '    <ol>',
            '        <li v-repeat="subs in list.subs" class="side-mneu-list"><a href="#" target="mainFrame">{{subs.name}}</a></li>',
            '    </ol>',
            '</li>',
        '<template>',
    '</ul>'
];

Vue.component('side-menu', {
    props: ['model'],
    data: function () {
        return {
            down:false,
            show:false
        }
    },
    replace: true,
    template: tmpl.join(''),
    methods: {
        toggle: function (hasSubs) {
            if (hasSubs) {
                this.show = this.down = !this.show;
            }
        }
    }
});