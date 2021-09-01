interface Box<T> {
    value: T
}
const box0: Box = {value:'text'}
const box1: Box<string> = {value: 'text'}
const box2: Box<number> = {value: 2}

interface Box2<T = string> {
    value: T
}
const box02: Box2 = {value:'text'}
const box12: Box2<string> = {value: 'text'}
const box22: Box2<number> = {value: 2}

interface Box3<T extends string | number> {
    value: T
}

const box13: Box3<string> = {value: 'text'}
const box23: Box3<number> = {value: 2}
const box33: Box3<boolean> = {value: true} // error

function boxed<T>(props: T) {
    return {value: props}
}
const box00 = boxed('text') // Genericsの省略
const box01 = boxed(false as boolean | null)
const box001 = boxed<string | null >(null) // アサーションによる型の付与
interface Props {
    amount: number
}
function boxed2<T extends Props>(props: T) {
    return {value: props.amount.toFixed(1)}
}
const c022 = boxed2({amount: 2})
const c023 = boxed2({value: 0}) // error
const c024 = boxed2({amount: 'test'}) // error

function pick<T, K extends keyof T>(props: T, key: K) {
    return props[key]
}

const obj = {
    name: 'Taro',
    amount: 0,
    flag: false
}
const value1 = pick(obj, 'name');
const value2 = pick(obj, 'amount')

class Person<T extends string> {
    name: T
    constructor(name: T) {
        this.name = name
    }

}
const person = new Person('Taro')
const personName = person.name

type IsString<T> = T extends string ? true : false
type X = IsString<'test'> // true
type Y = IsString<0> // false

// Mapped types
interface Properties {
    name: string
    age: number
    flag: boolean
}
type IsType<T, U>={
    [K in keyof T]: T[K] extends U? true : false
}
type IsString2 = IsType<Properties, string>
type IsNumber = IsType<Properties, number>
type IsBoolean = IsType<Properties, boolean>
