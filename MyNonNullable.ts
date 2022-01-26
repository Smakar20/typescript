/*
implement NonNullable<T>

NonNullable<T> returns a type by excluding null and undefined from T.

Please implement MyNonNullable<T> by yourself.

type Foo = 'a' | 'b' | null | undefined

type A = MyNonNullable<Foo> // 'a' | 'b'
*/

type MyNonNullable<T> = T extends null | undefined ? never : T;
