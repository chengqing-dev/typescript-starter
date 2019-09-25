import BaseSchema from "./base";

export default class ListSchema extends BaseSchema<string[]>{

    constructor(name: string, defaultValue: string[] = undefined) {
        super(name,"list",defaultValue);
    }

    generateValue(value: string): string[] {
        return value.split(",");
    }

}
