/*
implement Parameters<T>

For function type T, Parameters<T> returns a tuple type from the types of its parameters.

Please implement MyParameters<T> by yourself.

type Foo = (a: string, b: number, c: boolean) => string

type A = MyParameters<Foo> // [a:string, b: number, c:boolean]
type B = A[0] // string
type C = MyParameters<{a: string}> // Error
*/

type MyParameters<T extends Function> = T extends (...args: infer Arg) => any ? Arg : never;
