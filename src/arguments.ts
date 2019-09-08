import Schema from "./schema";

export default class Arguments {
    schemas: {[name: string]: Schema<any>} = {};
    args: string;
    unparsedSchemaNames: string[] = [];

    constructor(schemas: Schema<any>[],args: string) {
        for (const schema of schemas){
           this.schemas[schema.name] = schema;
           this.unparsedSchemaNames.push(schema.name);
        }
        this.args = args;
    }

    public parse(): object{
        const parsedResult: object[] = [];

        const regex = new RegExp(/-[a-zA-Z]\w*/g);
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
            parsedResult.push({ "name": schema.name,"type":schema.type,"value":schema.defaultValue})
        }

        return parsedResult;
    }

    private removeParsedSchemaName(schemaName: string){
        const index = this.unparsedSchemaNames.indexOf(schemaName, 0);
        if (index > -1) {
            this.unparsedSchemaNames.splice(index, 1);
        }
    }
}
