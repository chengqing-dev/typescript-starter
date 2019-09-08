import BooleanSchema from "../src/boolean_schema";
import Arguments from "../src/arguments";

test("return true when parse args given a Boolean schema 'f' and the args '-f'",() => {
   let schema = new BooleanSchema("f");

   let result = new Arguments([schema],"-f").parse();

   expect(result).toEqual([{"name":"f","type":"Boolean","value":true}]);
});

test("return false when parse args given a Boolean schema 'f' and the empty args ''",() => {
   const schema = new BooleanSchema("f");

   const result = new Arguments([schema],"").parse();

   expect(result).toEqual([{"name":"f","type":"Boolean","value":false}]);
});

test("raise an error 'invalid arguments' when parse args given a Boolean schema 'f' and the args '-p'",() => {
   const schema = new BooleanSchema("f");
   expect(() => {new Arguments([schema],"-p").parse()}).toThrowError(Error("invalid arguments"));
});

test("raise an error 'invalid arguments' when parse args given a Boolean schema 'f' and the args '-f test'",() => {
   const schema = new BooleanSchema("f");
   expect(() => {new Arguments([schema],"-f test").parse()}).toThrowError(Error("invalid value: test for f"));
});

test("return a true and a false result when parse args given 2 Boolean schema 'f' and 'd' and the args '-f'",() => {
   let fSchema = new BooleanSchema("f");
   let dSchema = new BooleanSchema("d");

   let result = new Arguments([fSchema,dSchema],"-f").parse();

   expect(result).toEqual([{"name":"f","type":"Boolean","value":true},{"name":"d","type":"Boolean","value":false}]);
});
