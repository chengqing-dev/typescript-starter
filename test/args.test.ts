import BooleanSchema from "../src/boolean_schema";
import Arguments from "../src/arguments";
import NumberSchema from "../src/number_schema";
import StringSchema from "../src/string_schema";

test("return true when parse args given a Boolean schema 'f' and the args '-f'",() => {
   const schema = new BooleanSchema("f");

   const result = new Arguments([schema],"-f").parse();

   expect(result).toEqual([{"name":"f","type":"boolean","value":true}]);
});

test("return false when parse args given a Boolean schema 'f' and the empty args ''",() => {
   const schema = new BooleanSchema("f");

   const result = new Arguments([schema],"").parse();

   expect(result).toEqual([{"name":"f","type":"boolean","value":false}]);
});

test("raise an error 'invalid arguments' when parse args given a Boolean schema 'f' and the args '-p'",() => {
   const schema = new BooleanSchema("f");
   expect(() => {new Arguments([schema],"-p").parse()}).toThrowError(Error("invalid arguments"));
});

test("raise an error 'invalid value: test for f' when parse args given a Boolean schema 'f' and the args '-f test'",() => {
   const schema = new BooleanSchema("f");
   expect(() => {new Arguments([schema],"-f test").parse()}).toThrowError(Error("invalid value: test for f"));
});

test("return a true and a false result when parse args given 2 Boolean schema 'f' and 'd' and the args '-f'",() => {
   const fSchema = new BooleanSchema("f");
   const dSchema = new BooleanSchema("d");

   const result = new Arguments([fSchema,dSchema],"-f").parse();

   expect(result).toEqual([{"name":"f","type":"boolean","value":true},{"name":"d","type":"boolean","value":false}]);
});

test("return 15 when parse args given a number schema 'f' and the args '-f 15'",() => {
   const schema = new NumberSchema("f");

   const result = new Arguments([schema],"-f 15").parse();

   expect(result).toEqual([{"name":"f","type":"number","value":15}]);
});

test("return -15 when parse args given a number schema 'f' and the args '-f -15'",() => {
   const schema = new NumberSchema("f");

   const result = new Arguments([schema],"-f -15").parse();

   expect(result).toEqual([{"name":"f","type":"number","value":-15}]);
});

test("return 15.023 when parse args given a number schema 'f' and the args '-f 15.023'",() => {
   const schema = new NumberSchema("f");

   const result = new Arguments([schema],"-f 15.023").parse();

   expect(result).toEqual([{"name":"f","type":"number","value":15.023}]);
});

test("return -15.023 when parse args given a number schema 'f' and the args '-f -15.023'",() => {
   const schema = new NumberSchema("f");

   const result = new Arguments([schema],"-f -15.023").parse();

   expect(result).toEqual([{"name":"f","type":"number","value":-15.023}]);
});

test("return 0 when parse args given a number schema 'f' with defaultValue 0 and the args '-f'",() => {
   const schema = new NumberSchema("f",0);

   const result = new Arguments([schema],"").parse();

   expect(result).toEqual([{ "name": "f","type":"number","value":0}]);
});

test("return [] when parse args given a number schema 'f' and the args '-f'",() => {
   const schema = new NumberSchema("f");

   const result = new Arguments([schema],"").parse();

   expect(result).toEqual([]);
});

test("raise error 'invalid arguments' when parse args given a number schema 'f' and the args '-p 20'",() => {
   const schema = new NumberSchema("f");

   expect(() => {new Arguments([schema],"-p 20").parse()}).toThrowError(Error("invalid arguments"));
});

test("raise an error 'invalid value: test for f' when parse args given a number schema 'f' and the args '-f test'",() => {
   const schema = new NumberSchema("f");
   expect(() => {new Arguments([schema],"-f test").parse()}).toThrowError(Error("invalid value: test for f"));
});

test("return 25 and -25 result when parse args given 2 number schema 'f' and 'd' and the args '-f 25 -d -25'",() => {
   const fSchema = new NumberSchema("f");
   const dSchema = new NumberSchema("d");

   const result = new Arguments([fSchema,dSchema],"-f 25 -d -25").parse();

   expect(result).toEqual([{"name":"f","type":"number","value":25},{"name":"d","type":"number","value":-25}]);
});

test("return 'abc' when parse args given a string schema 'f' and the args '-f abc'",() => {
   const schema = new StringSchema("f");

   const result = new Arguments([schema],"-f abc").parse();

   expect(result).toEqual([{"name":"f","type":"string","value":"abc"}]);
});

test("return 'test' when parse args given a string schema 'f' with default value 'test'",() => {
   const schema = new StringSchema("f","test");

   const result = new Arguments([schema],"").parse();

   expect(result).toEqual([{"name":"f","type":"string","value":"test"}]);
});

test("return [] when parse args given a string schema 'f'",() => {
   const schema = new StringSchema("f");

   const result = new Arguments([schema],"").parse();

   expect(result).toEqual([]);
});

test("raise an error 'invalid empty value for f' when parse args given a string schema 'f' and the args '-f'",() => {
   const schema = new StringSchema("f");

   expect(() => {new Arguments([schema],"-f").parse()}).toThrowError(Error("invalid empty value for f"));
});

test("return 'abc' and 'def' result when parse args given 2 number schema 'f' and 'd' and the args '-f abc -d def'",() => {
   const fSchema = new StringSchema("f");
   const dSchema = new StringSchema("d");

   const result = new Arguments([fSchema,dSchema],"-f abc -d def").parse();

   expect(result).toEqual([{"name":"f","type":"string","value":"abc"},{"name":"d","type":"string","value":"def"}]);
});

test("return 'abc-def' when parse args given a string schema 'f' and the args '-f abc-def'",() => {
   const schema = new StringSchema("f");

   const result = new Arguments([schema],"-f abc-def").parse();

   expect(result).toEqual([{"name":"f","type":"string","value":"abc-def"}]);
});
