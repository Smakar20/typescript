/*
implement LastChar<T>

Similar to FirstChar<T>, please implment LastChar<T> to get the last character.

type A = LastChar<'BFE'> // 'E'
type B = LastChar<'dev'> // 'v'
type C = LastChar<''> // never
*/

// Infering L will always take the first character
// So we have to trim the string from the left one-char-by-one-char
// At the last char, the char is inferred to L, so R will be '', and we can return L

type LastChar<T extends string> = T extends `${infer L}${infer R}`
  ? R extends ''
    ? L
    : LastChar<R>
  : never
  
  
