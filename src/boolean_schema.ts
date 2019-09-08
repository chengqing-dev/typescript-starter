import Schema from "./schema";

export default class BooleanSchema extends Schema<boolean>{

    constructor(name: string, defaultValue = false) {
        super(name,"Boolean",defaultValue);
    }

    gernerateValue(value: any): boolean {
        if(value === ""){
            return true
        }
        throw Error("invalid value: " + value +" for " + this.name);
    }

}
