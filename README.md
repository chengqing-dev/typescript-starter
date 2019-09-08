# typescript-starter

字符串参数列表

## boolean 类型

1. 给定一个boolean的schema，其名称为f, 当输入参数为`-f`,解析结果为 [{ "name": "f","type":"boolean","value":true}]
```
Given 一个boolean的schema，其名称为f, 当输入参数为`-f`

When parse

Then [{ "name": "f","type":"boolean","value":true}]
```

2. 给定一个boolean的schema，其名称为f, 当输入参数为``,解析结果为 [{ "name": "f","type":"boolean","value":false}]
```
Given 一个boolean的schema，其名称为f, 当输入参数为``

When parse

Then  [{ "name": "f","type":"boolean","value":false}]
```

3. 给定一个boolean的schema，其名称为f, 当输入参数为`-p`,抛出异常 "invalid arguments"
```
Given 一个boolean的schema，其名称为f, 当输入参数为`-p`

When parse

Then throw error "invalid arguments"
```

4. 给定一个boolean的schema，其名称为f, 当输入参数为`-f test`,抛出异常 "invalid value：test for f"
```
Given 一个boolean的schema，其名称为f, 当输入参数为`-f test`

When parse

Then throw error "invalid value：test for f"
```

5. 给定两个boolean的schema，其名称分别为f和d,当输入参数是`-f`,解析结果为 [{ "name": "f","type":"boolean","value":true},{ "name": "d","type":"boolean","value":false},]
```
Given 两个boolean的schema，其名称分别为f和d,当输入参数是`-f`

When parse

Then [{ "name": "f","type":"boolean","value":true},{ "name": "d","type":"boolean","value":false}]
```
