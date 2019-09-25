import BaseSchema from "./base";

export default class StringSchema extends BaseSchema<string>{

    constructor(name: string, defaultValue: string = undefined) {
        super(name,"string",defaultValue);
    }

    generateValue(value: string): string {
        if(value === ""){
            throw Error("invalid empty value for " + this.name)
        }
        return value;
    }

}
