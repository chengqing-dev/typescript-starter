export default abstract class Schema<T> {
    readonly name: string;
    readonly defaultValue: T;
    readonly type: string;

    protected constructor(name: string, type: string, defaultValue: T = undefined) {
        this.name = name;
        this.defaultValue = defaultValue;
        this.type = type;
    }

    public abstract gernerateValue(value: string): T;

}
