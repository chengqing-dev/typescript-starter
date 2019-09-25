import BaseSchema from "./base";

export default class BooleanSchema extends BaseSchema<boolean>{

    constructor(name: string, defaultValue = false) {
        super(name,"boolean",defaultValue);
    }

    generateValue(value: string): boolean {
        if(value === ""){
            return true
        }
        throw Error("invalid value: " + value +" for " + this.name);
    }

}
