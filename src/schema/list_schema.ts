import BaseSchema from "./base_schema";

export default class ListSchema extends BaseSchema<string[]>{

    constructor(name: string, defaultValue: string[] = undefined) {
        super(name,"list",defaultValue);
    }

    gernerateValue(value: string): string[] {
        return value.split(",");
    }

}
