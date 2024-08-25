import {MockMethod} from 'vite-plugin-mock'

export default [
	{
		url: "/components/scroll", 
		method: "get", 
		timeout: 500, 
		statusCode: 200, 
		response: { 
			code: 200,
			message: "登录成功",
			data: [
                ['组件1', 'dev-1', "<span  class='colorGrass'>↑75%</span>"],
                ['组件2', 'dev-2', "<span  class='colorRed'>↓33%</span>"],
                ['组件3', 'dev-3', "<span  class='colorGrass'>↑100%</span>"],
                ['组件4', 'rea-1', "<span  class='colorGrass'>↑94%</span>"],
                ['组件5', 'rea-2', "<span  class='colorGrass'>↑95%</span>"],
                ['组件6', 'fix-2', "<span  class='colorGrass'>↑63%</span>"],
                ['组件7', 'fix-4', "<span  class='colorGrass'>↑84%</span>"],
                ['组件8', 'fix-7', "<span  class='colorRed'>↓46%</span>"],
                ['组件9', 'dev-2', "<span  class='colorRed'>↓13%</span>"],
                ['组件10', 'dev-9', "<span  class='colorGrass'>↑76%</span>"]
            ]
		},
	},
    {
		url: "/components/ranking", 
		method: "get", 
		timeout: 500, 
		statusCode: 200, 
		response: { 
			code: 200,
			message: "登录成功",
			data: [
                {
                  name: '周口',
                  value: 55
                },
                {
                  name: '南阳',
                  value: 120
                },
                {
                  name: '西峡',
                  value: 78
                },
                {
                  name: '驻马店',
                  value: 66
                },
                {
                  name: '新乡',
                  value: 80
                },
                {
                  name: '信阳',
                  value: 45
                },
                {
                  name: '漯河',
                  value: 29
                }
              ]
		},
	},
] as MockMethod[]
