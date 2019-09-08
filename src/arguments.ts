import BaseSchema from "./schema/base_schema";
type SchemaTypes = boolean | number | string | string[]

export default class Arguments {
    schemas: {[name: string]: BaseSchema<SchemaTypes>} = {};
    args: string;
    schemaNames: string[] = [];

    constructor(schemas: BaseSchema<SchemaTypes>[], args: string) {
        for (const schema of schemas){
           this.schemas[schema.name] = schema;
           this.schemaNames.push(schema.name);
        }
        this.args = args.trim();
    }

    public parse(): object{
        const result: object[] = [];

        const regex = new RegExp(/(?<!\w|,)-[a-zA-Z]\w*/g);
        const values = this.args.split(regex).slice(1);
        const schemaNamesInArgs = this.args.match(regex);

        this.parseSchemaInArgs(result,schemaNamesInArgs,values);

        this.parseSchemaNotInArgs(result, this.notInArgsSchemaNames(schemaNamesInArgs));

        return result;
    }

    private parseSchemaInArgs(result, schemaNamesInArgs,values): void{
        for(const schemaNamesInArgsIndex in schemaNamesInArgs){
            const schema = this.schemas[Arguments.parseSchemaName(schemaNamesInArgs[schemaNamesInArgsIndex])];
            if(schema === undefined){
                throw Error("invalid arguments")
            }
            result.push({ "name": schema.name,"type":schema.type,"value":schema.gernerateValue(values[schemaNamesInArgsIndex].trim())})
        }
    }

    private notInArgsSchemaNames(schemaNamesInArgs): string[]{
        let result = this.schemaNames;
        for(const schemaNamesInArgsIndex in schemaNamesInArgs){
            const schema = this.schemas[Arguments.parseSchemaName(schemaNamesInArgs[schemaNamesInArgsIndex])];
            result = this.removeParsedSchemaName(result,schema.name);
        }
        return result;
    }

    private parseSchemaNotInArgs(result, notInArgsSchemaNames): void{
        for(const unparsedSchemaName of notInArgsSchemaNames){
            const schema = this.schemas[unparsedSchemaName];
            if(schema.defaultValue !== undefined) {
                result.push({"name": schema.name, "type": schema.type, "value": schema.defaultValue})
            }
        }
    }

    private static parseSchemaName(schemaNameFromArgs): string{
        return schemaNameFromArgs.match(/[a-zA-Z]\w*/g)[0];
    }

    private removeParsedSchemaName(schemaNames,schemaName: string): string[]{
        const index = schemaNames.indexOf(schemaName, 0);
        if (index > -1) {
            schemaNames.splice(index, 1);
        }
        return schemaNames;
    }
}
