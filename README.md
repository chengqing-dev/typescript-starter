# typescript-starter

字符串参数列表

## Boolean 类型

1. 给定一个Boolean的schema，其名称为f, 当输入参数为`-f`,解析结果为 [{ "name": "f","type":"Boolean","value":"true"}]
```
Given 一个Boolean的schema，其名称为f, 当输入参数为`-f`

When parse

Then [{ "name": "f","type":"Boolean","value":"true"}]
```

2. 给定一个Boolean的schema，其名称为f, 当输入参数为``,解析结果为 [{ "name": "f","type":"Boolean","value":"false"}]
```
Given 一个Boolean的schema，其名称为f, 当输入参数为``

When parse

Then  [{ "name": "f","type":"Boolean","value":"false"}]
```

3. 给定一个Boolean的schema，其名称为f, 当输入参数为`-p`,解析结果为 "invalid arguments"
```
Given 一个Boolean的schema，其名称为f, 当输入参数为`-p`

When parse

Then invalid arguments
```

4. 给定一个Boolean的schema，其名称为f, 当输入参数为`-f test`,解析结果为 "invalid arguments"
```
Given 一个Boolean的schema，其名称为f, 当输入参数为`-f test`

When parse

Then invalid arguments
```

5. 给定两个Boolean的schema，其名称分别为f和d,当输入参数是`-f`,解析结果为 [{ "name": "f","type":"Boolean","value":"true"},{ "name": "d","type":"Boolean","value":"false"},]
```
Given 两个Boolean的schema，其名称分别为f和d,当输入参数是`-f`

When parse

Then [{ "name": "f","type":"Boolean","value":"true"},{ "name": "d","type":"Boolean","value":"false"}]
```
