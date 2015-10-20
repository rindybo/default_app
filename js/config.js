module.exports = {
    "menu": {
        "tabs": [
          {
              "name": "控制台",
              "active": true,
              "action": "#/home",
          },
          {
              "name": "设置",
              "active": false,
              "action": "#/setting"
          },
          {
              "name": "报表",
              "active": false,
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