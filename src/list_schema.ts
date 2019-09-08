import Schema from "./schema";

export default class ListSchema extends Schema<string[]>{

    constructor(name: string, defaultValue: string[] = undefined) {
        super(name,"list",defaultValue);
    }

    gernerateValue(value: string): string[] {
        return value.split(",");
    }

}
