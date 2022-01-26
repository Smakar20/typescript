/*
implement Readonly<T>

Readonly<T> returns a type that sets all properties of T to readonly.

Pleaes implement MyReadonly<T> by yourself.

type Foo = {
  a: string
}

const a:Foo = {
  a: 'BFE.dev',
}
a.a = 'bigfrontend.dev'
// OK

const b:MyReadonly<Foo> = {
  a: 'BFE.dev'
}
b.a = 'bigfrontend.dev'
// Error
*/

type MyReadonly<T> = {readonly [K in keyof T]: T[K]};
