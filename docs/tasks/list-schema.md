## list 类型

1. 给定一个list的schema，其名称为f, 当输入参数为`-f abc,def,ghi`,解析结果为 [{ "name": "f","type":"list","value":["abc","def","ghi"]}]
```
Given 一个list的schema，其名称为f, 当输入参数为`-f abc,def,ghi`

When parse

Then [{ "name": "f","type":"list","value":["abc","def","ghi"]}]
```

2. 给定一个list的schema，其名称为f, 其默认值为["test"] 当输入参数为``,解析结果为 [{ "name": "f","type":"list","value":["test"]}]
```
Given 一个list的schema，其名称为f, 当输入参数为``

When parse

Then  [{ "name": "f","type":"list","value":["test"]}]
```

3. 给定一个list的schema，其名称为f, 其没有默认值 当输入参数为``,解析结果为 []
```
Given 一个list的schema，其名称为f, 当输入参数为``

When parse

Then  []
```

4. 给定一个list的schema，其名称为f, 当输入参数为`-f abc,-5,-config,true`,解析结果为 [{ "name": "f","type":"list","value":["abc","-5","-config","true"]}]
```
Given 一个list的schema，其名称为f, 当输入参数为`-f abc,-5,-config,true`

When parse

Then [{ "name": "f","type":"list","value":["abc","-5","-config","true"]}]
```
