import Schema from "./schema";
type SchemaTypes = boolean | number | string

export default class Arguments {
    schemas: {[name: string]: Schema<SchemaTypes>} = {};
    args: string;
    unparsedSchemaNames: string[] = [];

    constructor(schemas: Schema<SchemaTypes>[],args: string) {
        for (const schema of schemas){
           this.schemas[schema.name] = schema;
           this.unparsedSchemaNames.push(schema.name);
        }
        this.args = args.trim();
    }

    public parse(): object{
        const parsedResult: object[] = [];

        const regex = new RegExp(/(?<!\w)-[a-zA-Z]\w*/g);
        const values = this.args.split(regex).slice(1);
        const params = this.args.match(regex);

        for(const paramIndex in params){
            const param = params[paramIndex].match(/[a-zA-Z]\w*/g)[0];
            const schema = this.schemas[param];
            if(schema === undefined){
                throw Error("invalid arguments")
            }
            this.removeParsedSchemaName(schema.name);
            parsedResult.push({ "name": schema.name,"type":schema.type,"value":schema.gernerateValue(values[paramIndex].trim())})
        }

        for(const unparsedSchemaName of this.unparsedSchemaNames){
            const schema = this.schemas[unparsedSchemaName];
            if(schema.defaultValue !== undefined) {
                parsedResult.push({"name": schema.name, "type": schema.type, "value": schema.defaultValue})
            }
        }

        return parsedResult;
    }

    private removeParsedSchemaName(schemaName: string): void{
        const index = this.unparsedSchemaNames.indexOf(schemaName, 0);
        if (index > -1) {
            this.unparsedSchemaNames.splice(index, 1);
        }
    }
}
