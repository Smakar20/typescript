/*
 implement Exclude<T, E>
 
 Exclude<T, K> returns a type by removing from T the union members that are assignable to K.

Please implement MyExclude<T, K> by yourself.

type Foo = 'a' | 'b' | 'c'

type A = MyExclude<Foo, 'a'> // 'b' | 'c'
type B = MyExclude<Foo, 'c'> // 'a' | 'b
type C = MyExclude<Foo, 'c' | 'd'>  // 'a' | 'b'
type D = MyExclude<Foo, 'a' | 'b' | 'c'>  // never
*/

type MyExclude<T, E> = T extends E ? never : T;
