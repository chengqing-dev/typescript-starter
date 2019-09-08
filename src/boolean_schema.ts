import Schema from "./schema";

export default class BooleanSchema extends Schema<boolean>{

    constructor(name: string, defaultValue = false) {
        super(name,"boolean",defaultValue);
    }

    gernerateValue(value: string): boolean {
        if(value === ""){
            return true
        }
        throw Error("invalid value: " + value +" for " + this.name);
    }

}
