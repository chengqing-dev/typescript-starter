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
        let parsedResult: object[] = [];

        const regex = new RegExp(/-[a-zA-Z]\w*/g);
        let values = this.args.split(regex).slice(1);
        let params = this.args.match(regex);

        for(let param_index in params){
            const param = params[param_index].match(/[a-zA-Z]\w*/g)[0];
            let schema = this.schemas[param];
            if(schema === undefined){
                throw Error("invalid arguments")
            }
            this.removeParsedSchemaName(schema.name);
            parsedResult.push({ "name": schema.name,"type":schema.type,"value":schema.gernerateValue(values[param_index].trim())})
        }

        for(let unparsedSchemaName of this.unparsedSchemaNames){
            let schema = this.schemas[unparsedSchemaName];
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
