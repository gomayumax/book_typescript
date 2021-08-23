// 引数を型注釈で制約する
/*
function expo2(amount) {
  return amount ** 2
}

const value = expo2('1000')
const withTax = value * 1.1 //NaN
 */

function expo2(amount: number) {
    return  amount ** 2
}

console.log(expo2(1000))
// console.log(expo2('1000')) // error

// 戻り値を型注釈で制約する
/*
function taxed(amount) {
    return amount * 1.1
}

function fee(amount) {
    return `{amount * 1.4}`
}

function price(amount) {
    return `${fee(amount)}`
}

const demand = `/` + taxed(price(1000)) // \NaN

 */

function taxed(amount): number {
    return amount * 1.1
}

function fee(amount): number {
    return amount * 1.4
}

function price(amount): number {
    return `${fee(amount)}` // error
}

// 基本の型
let flag: boolean = true

let decimal: number = 256
let hex: number = 0x444
let binary: number = 0b0000
let octal: number = 0o123

let color: string = "white"
color = 'black'
let myColor: string = `my color is ${color}`

let list: number[] = [1,2,3]
let list2: Array<number> = [1,2,3]

let x: [string,number]
x = ["hello",2]
x = [10, "hello"] // error
console.log(x[1].substr(1)) //error
x[3] ="world" // error

let whatever: any = 0
whatever = "something"
whatever = flase

const certainlyNumbers: number[] = ['0'] // error
const maybeNumber: any[] = ['0']
const probablyNumber: unknown[] = ['0']

certainlyNumbers[0].toFixed(1)
maybeNumber[0].toFixed(1)
probablyNumber.toFixed(1) // error

function logger(message: string): void {
    console.log(message)
}
let number: void = undefined

let u: undefined = undefined
let n: null = null

// 発生し得ない値の型
function error(message: string): never {
    throw new Error(message)
}
function infiniteLoop(): never {
    while (true) {}
}

let objectBrace: {}
let objectType: object

objectBrace = true
objectBrace = 0
objectType = false // error
objectType = 1 //error


// 高度な型
type Dog = {
    tail: Tail
    bark: () => void
}
type Bird = {
    wing: Wing
    fly: () => void
}
type Kimera = Dog & Bird

function returnNever(): never {
    throw new Error()
}
let unexistenceType: string & number & boolean = returnNever()

let value: boolean | number | string
value = true
value = 1
value = 'one'
let numberOrStrings: (number|string)[]
numberOrStrings = [1,'hoge']
numberOrStrings = [1,'fuga', true] // error
let nullableString: null | string
nullableString = null
nullableString = 'null'
let nullableStrings: (null|string)[] = []
nullableStrings.push('1')
nullableStrings.push(null)
nullableStrings.push(true) // error

let myName: 'Taro'
myName = 'Taro'
myName = 'Jiro' // error
myName.toLowerCase() // OK

let zero: 0
zero = 0
zero = 1 // error
zero.toFixed(1)
let truth: true
truth = true
truth = false // error

let asString: string = ''
let value: typeof asString
value = 'value'
value = 0 // error
let myObject = {foo: 'foo'}
let anotherObject: typeof myObject = {foo: ''}
anotherObject['foo'] = 'value'
anotherObject['foo'] = 2 // error

const myObject = {
    foo: 'FOO',
    bar: 'BAR',
    baz: 'BAZ',
}
let myObjectKey: keyof typeof myObject
myObjectKey = 'bar'
myObjectKey = 'qux' // error

let someValue: any = "this is a string"
let strLength: number = (<string>someValue).length
let someValue: any = "this is as string"
let strLength: number = (someValue as string).length

class Creature {
    numberOfHands: number
    numberOfFeet: number
    constructor(numberOfHands: number, numberOfFeet: number) {
        this.numberOfHands = numberOfHands
        this.numberOfFeet = numberOfFeet
    }
}
const creature = new Creature(0,4)
class Dog extends Creature {
    bark: string
    constructor(bark: string) {
        super(0,4);
        this.bark = bark
    }
    barking() {
        return `${this.bark}!${this.bark}!`
    }
    shakeTail() {
        console.log(this.barking())
    }
}

class Human extends Creature {
    protected name: string
    constructor(name: string) {
        super(2,2);
        this.name = name
    }
    protected greet() {
        return `Hello I'm ${this.name}`
    }
    public shakeHands() {
        console.log(this.greet())
    }
}
const dog = new Dog('Bow-Bow')
const human = new Human('Hanako')

class Taro extends Human {
    constructor() {
        super('Taro');
    }
    public greeting() {
        console.log(this.greet())
    }
}

const Taro = new Taro()
taro.greeting()
taro.greet()
taro.shakeHands()

enum Direction {
    UP,
    DOWN,
    LEFT,
    Right,
}
const left = Direction.LEFT

enum Ports {
    USER_SERVICE = "8080",
    REGISTER_SERVICE = "8081",
    MEDIA_SERVICE = "8888"
}
