function getFormattedValue(value: number| null) {
    if (value === null) return '-- pt'
    return `${value.toFixed(1)} pt`
}

console.log(getFormattedValue(0.1))
console.log(getFormattedValue(0))
console.log(getFormattedValue(null))

function greet(name?: string) {
    if (name === undefined) return 'Hello' // 早期returnをガード節っていう
    return `Hello ${name}`
}

console.log(greet())
console.log(greet('Mai'))

function getFormattedValue2(value: number, unit: string | null = null): string {
    const _value = value.toFixed(1)
    if (unit === null) return `${_value}`
    retrun `${_value} ${unit.toUpperCase()}`
}

console.log(getFormattedValue2(100, 'pt'))
console.log(getFormattedValue2(10 , 0))

type User ={ // すべてのプロパティはオプショナルであるが引数は必要
    age?: number
    name?: string
}
const maybeUser = {
    age: 2,
    name: 'Mai',
    gender: 'female'
}
const noUer = {
    gender: 'male',
    graduate: 'Tokyo'
}
function register(user: User) {}

register(maybeUser)
// register(noUer)// error
register({})

type State = {
    id: number
    name: string
}
const state: Readonly<State> = { // 読み込み専用の変数になる。ただしランタイム上だと書き換えられる
    id: 1,
    name: 'Mai'
}
// state.name = 2 // error

const state2: State = {
    id: 1,
    name: 'Taro'
}

const frozenObj = Object.freeze(state2)
// frozenObj.id = 2 // error

