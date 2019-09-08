import Schema from "./schema";

export default class Boolean_schema extends Schema<Boolean>{

    constructor(name: string, defaultValue: Boolean = false) {
        super(name,"Boolean",defaultValue);
    }

    gernerateValue(value: any): Boolean {
        if(value === ""){
            return true
        }
        throw Error("invalid value: " + value +" for " + this.name);
    }

}
