#!/usr/bin/env ts-node
console.log(process.argv)

const a: number = parseInt(process.argv[2])
const b: number = parseInt(process.argv[3])


console.log(a + b)
process.exit(0) // 程序约定：正常退出传入 0，错误退出都传入其他数字