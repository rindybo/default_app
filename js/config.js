module.exports = {
    "menu": {
        "tabs": [
          {
              "name": "控制台",
              "active": false,
              "action": "#/home",
          },
          {
              "name": "设置",
              "active": true,
              "action": "#/setting"
          },
          {
              "name": "报表",
              "action": "#/report"
          },
          {
              "name": "注销",
              "action": "#/logout"
          }
        ],
        "side": [
          {
              "name": "菜单一",
              "subs": [
                { "name": "子菜单一" },
                { "name": "子菜单二" }
              ]
          },
          {
              "name": "菜单二"
          }
        ]
    }
};