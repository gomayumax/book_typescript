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
    return `${_value} ${unit.toUpperCase()}`
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

// アップキャスト / ダウンキャスト
const defaultTheme ={ // ダウンキャスト: バリバリ固める
    backgroundColor: "orange" as "orange",
    color: "red" as "red"
}
// defaultTheme.backgroundColor = "blue" // error

type User2 = {
    name: string
    [k: string]: any // インデックスシグネチャ: 任意のプロパティを動的に追加
}

const userA: User2 = {
    name: 'Taro',
    age: 26
}

type Answer = 'mighty' | 'lot' | 'few' | 'entirely'
type User3 = {
    name: string
    enquote: {[k: string]: Answer | undefined} // インデックスシグネチャ: 存在しないプロパティについても許容する
}

const userB: User3 = {
    name: 'Taro',
    enquote: {
        exercise: 'entirely',
        time_of_sleep: "few"
    }
}

type Question = 'exercise' | 'time_of_sleep'
type User4 = {
    name: string
    enquote: {[k in Question]?: Answer} // インデックスシグネチャ: プロパティ名について制限する
}

const tuple = [false, 1, '2'] as const // readonly

// 4-3
// typeof でガード節
function reset(value: number | string | boolean) {
    const v0 = value
    if (typeof value === 'number') {
        const v1 = value
        return 0
    }

    if (typeof value === 'string') {
        const v2 = value
        return ''
    }

    const v3 = value
    return false
}
// プロパティのチェック(in)でガード節
type UserGender = {gender: string; [k:string]: any}
type UserA = UserGender & {name: string}
type UserB = UserGender & {age: number; graduate: string}
function judgeUserType(user: UserA | UserB) {
    if ('gender' in user) {
        const u0 = user
        console.log('user type is UserA | UserB')
    }

    if ('name' in user) {
        const u1 = user
        console.log('user type is UserA')
        return
    }

    const u2 = user
    console.log('user type is UserB')
}

// instanceでガード節
class Creature {
    breathe() {}
}
class Animal extends Creature {
    shakeTail() {}
}
class Human extends Creature {
    greet () {}
}
function action(creature: Animal | Human | Creature) {
    const c0 = creature
    c0.breathe()
    if (creature instanceof Animal) {
        const c1 = creature
        return c1.shakeTail()
    }
    if (creature instanceof Human) {
        const c2 = creature
        return c2.greet()
    }

    const c3 =  creature
    return c3.breathe()
}

// ユーザ定義のtypeでガード節
function isUserA(user: UserA | UserB): user is UserA {
    return user.name !== undefined
}
function isUserB(user: UserA | UserB): user is UserB {
    return user.age !== undefined
}
function getUserType(user: any) {
    const u0 = user
    if (isUserA(u0)) {
        const u1 = u0
        return 'A'
    }
    if (isUserB(u0)) {
        return 'B'
    }
    return 'unknown'
}
const x = getUserType({name: 'Taro'})
