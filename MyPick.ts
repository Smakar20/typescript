/*
implement Pick<T, K>

Pick<T, K>, as the name implies, returns a new type by picking properties in K from T.

Please implement MyPick<T, K> by yourself.

type Foo = {
  a: string
  b: number
  c: boolean
}

type A = MyPick<Foo, 'a' | 'b'> // {a: string, b: number}
type B = MyPick<Foo, 'c'> // {c: boolean}
type C = MyPick<Foo, 'd'> // Error
*/

type MyPick<T, K extends keyof T> = {[k in K]: T[k]};
