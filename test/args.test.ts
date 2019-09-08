import Boolean_schema from "../src/boolean_schema";
import Arguments from "../src/arguments";

test("return true when parse args given a Boolean schema 'f' and the args '-f'",() => {
   let schema = new Boolean_schema("f");

   let result = new Arguments([schema],"-f").parse();

   expect(result).toEqual([{"name":"f","type":"Boolean","value":true}]);
});

test("return false when parse args given a Boolean schema 'f' and the empty args ''",() => {
   let schema = new Boolean_schema("f");

   let result = new Arguments([schema],"").parse();

   expect(result).toEqual([{"name":"f","type":"Boolean","value":false}]);
});

test("raise an error 'invalid arguments' when parse args given a Boolean schema 'f' and the args '-p'",() => {
   let schema = new Boolean_schema("f");
   expect(() => {new Arguments([schema],"-p").parse()}).toThrowError(Error("invalid arguments"));
});

test("raise an error 'invalid arguments' when parse args given a Boolean schema 'f' and the args '-f test'",() => {
   let schema = new Boolean_schema("f");
   expect(() => {new Arguments([schema],"-f test").parse()}).toThrowError(Error("invalid value: test for f"));
});

test("return a true and a false result when parse args given 2 Boolean schema 'f' and 'd' and the args '-f'",() => {
   let fSchema = new Boolean_schema("f");
   let dSchema = new Boolean_schema("d");

   let result = new Arguments([fSchema,dSchema],"-f").parse();

   expect(result).toEqual([{"name":"f","type":"Boolean","value":true},{"name":"d","type":"Boolean","value":false}]);
});
