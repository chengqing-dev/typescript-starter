## number 类型

1. 给定一个number的schema，其名称为f, 当输入参数为`-f 15`,解析结果为 { "name": "f","type":"number","value":15}]
```
Given 一个number的schema，其名称为f, 当输入参数为`-f 15`

When parse

Then [{ "name": "f","type":"number","value":15}]
```

2. 给定一个number的schema，其名称为f, 当输入参数为`-f -15`,解析结果为 { "name": "f","type":"number","value":-15}]
```
Given 一个number的schema，其名称为f, 当输入参数为`-f 15`

When parse

Then [{ "name": "f","type":"number","value":-15}]
```

3. 给定一个number的schema，其名称为f, 其默认值为0 当输入参数为``,解析结果为 [{ "name": "f","type":"number","value":0}]
```
Given 一个number的schema，其名称为f, 当输入参数为``

When parse

Then  [{ "name": "f","type":"number","value":0}]
```

4. 给定一个number的schema，其名称为f, 其没有默认值 当输入参数为``,解析结果为 []
```
Given 一个number的schema，其名称为f, 当输入参数为``

When parse

Then  []
```

5. 给定一个number的schema，其名称为f, 当输入参数为`-p 20`,抛出异常 "invalid arguments"
```
Given 一个number的schema，其名称为f, 当输入参数为`-p 20`

When parse

Then throw error "invalid arguments"
```

6. 给定一个number的schema，其名称为f, 当输入参数为`-f test`,抛出异常 "invalid value test for f"
```
Given 一个number的schema，其名称为f, 当输入参数为`-f test`

When parse

Then throw error "invalid value： test for f"
```

7. 给定两个number的schema，其名称分别为f和d,当输入参数是`-f 25 -d -25`,解析结果为 [{ "name": "f","type":"number","value":25},{ "name": "d","type":"number","value":-25}]
```
Given 两个number的schema，其名称分别为f和d,当输入参数是`-f`

When parse

Then [{ "name": "f","type":"number","value":25},{ "name": "d","type":"number","value":-25}]
```

8. 给定一个number的schema，其名称为f, 当输入参数为`-f 15.023`,解析结果为 { "name": "f","type":"number","value":15.023}]
```
Given 一个number的schema，其名称为f, 当输入参数为`-f 15.023`

When parse

Then [{ "name": "f","type":"number","value":15.023}]
```

9. 给定一个number的schema，其名称为f, 当输入参数为`-f -15.023`,解析结果为 { "name": "f","type":"number","value":-15.023}]
```
Given 一个number的schema，其名称为f, 当输入参数为`-f -15.023`

When parse

Then [{ "name": "f","type":"number","value":-15.023}]
```
