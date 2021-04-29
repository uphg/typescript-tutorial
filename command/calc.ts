#!/usr/bin/env ts-node
enum type {
  add = 'add',
  multiply = 'multiply',
  subtract = 'subtract',
  divide = 'divide'
}

const mark: string = process.argv[2]
const number1: number = parseInt(process.argv[3])
const number2: number = parseInt(process.argv[4])

if(
    mark !== type.add
    && mark !== type.multiply
    && mark !== type.subtract
    && mark !== type.divide
  ) {
  console.log('请传入运算规则！')
  process.exit(1)
}

if (Number.isNaN(number1) || Number.isNaN(number2)) {
  console.log('请传入数字运算！')
  process.exit(2)
}

if (mark === type.add) {
  console.log(number1 + number2)
} else if(mark === type.multiply) {
  console.log(number1 * number2)
} else if(mark === type.subtract) {
  console.log(number1 - number2)
} else if(mark === type.divide) {
  console.log(number1 / number2)
}

process.exit(0) // 程序约定：正常退出传入 0，错误退出都传入其他数字