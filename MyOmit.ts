/*
implement Omit<T, K>

Omit<T, K> returns a new type by picking the properties in T but not in K.

Please implement MyOmit<T, K> by yourself.

type Foo = {
  a: string
  b: number
  c: boolean
}

type A = MyOmit<Foo, 'a' | 'b'> // {c: boolean}
type B = MyOmit<Foo, 'c'> // {a: string, b: number}
type C = MyOmit<Foo, 'c' | 'd'>  // {a: string, b: number}
*/

type MyOmit<T, K extends keyof any> = {[k in keyof T as k extends K ? never : k]: T[k]};
