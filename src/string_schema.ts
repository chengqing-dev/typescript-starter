import Schema from "./schema";

export default class StringSchema extends Schema<string>{

    constructor(name: string, defaultValue: string = undefined) {
        super(name,"string",defaultValue);
    }

    gernerateValue(value: string): string {
        if(value === ""){
            throw Error("invalid empty value for " + this.name)
        }
        return value;
    }

}
