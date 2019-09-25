## string 类型

1. 给定一个string的schema，其名称为f, 当输入参数为`-f abc`,解析结果为 { "name": "f","type":"string","value":"abc"}]
```
Given 一个string的schema，其名称为f, 当输入参数为`-f`

When parse

Then [{ "name": "f","type":"string","value":"abc"}]
```

2. 给定一个string的schema，其名称为f, 其默认值为"test" 当输入参数为``,解析结果为 [{ "name": "f","type":"string","value":"test"}]
```
Given 一个string的schema，其名称为f, 当输入参数为``

When parse

Then  [{ "name": "f","type":"string","value":"test"}]
```

3. 给定一个string的schema，其名称为f, 其没有默认值 当输入参数为``,解析结果为 []
```
Given 一个string的schema，其名称为f, 当输入参数为``

When parse

Then  []
```

4. 给定一个number的schema，其名称为f, 当输入参数为`-f`,抛出异常 "invalid empty value for f"
```
Given 一个number的schema，其名称为f, 当输入参数为`-f`

When parse

Then throw error "invalid empty value for f"
```

5. 给定两个string的schema，其名称分别为f和d,当输入参数是`-f abc -d -def`,解析结果为 [{ "name": "f","type":"string","value":"abc"},{ "name": "d","type":"string","value":"def"}]
```
Given 两个string的schema，其名称分别为f和d,当输入参数是`-f`

When parse

Then [{ "name": "f","type":"string","value":"abc"},{ "name": "d","type":"string","value":"def"}]
```
