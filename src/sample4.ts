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

