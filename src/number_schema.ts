import Schema from "./schema";

export default class NumberSchema extends Schema<number>{

    constructor(name: string, defaultValue: number = undefined) {
        super(name,"number",defaultValue);
    }

    gernerateValue(value: string): number {
        let result;
        if(value.indexOf(".") > -1){
            result = parseFloat(value)
        }else{
            result = parseInt(value);
        }
        if(isNaN(result)){
            throw Error("invalid value: " + value +" for " + this.name);
        }
        return result;
    }

}
