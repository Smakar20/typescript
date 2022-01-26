/*
implement FirstChar<T>

Please implement FirstChar<T> to get the first character of a string.

type A = FirstChar<'BFE'> // 'B'
type B = FirstChar<'dev'> // 'd'
type C = FirstChar<''> // never
*/

type FirstChar<T extends string> = T extends `${infer F}${any}` ? F : never;
