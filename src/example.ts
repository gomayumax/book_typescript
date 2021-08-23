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




