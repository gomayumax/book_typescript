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

