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




