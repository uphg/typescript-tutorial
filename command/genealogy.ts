#!/usr/bin/env ts-node

function createPrefix(count: number): string {
  return '--'.repeat(count)
}

class Person {
  public children: Person[] = []
  constructor(public name: string) {}
  addChild(child: Person): void {
    this.children.push(child)
  }
  log(count: number = 0): void {

    console.log(`${createPrefix(count)}${this.name}`)
    this.children.forEach(item => {
      item.log(count + 1)
    })
  }
}

const grandfather = new Person('爷爷')
const parent_1 = new Person('爸爸1号')
const parent_2 = new Person('爸爸2号')
const child_11 = new Person('儿子1.1')
const child_12 = new Person('儿子1.2')
const child_21 = new Person('儿子2.1')
const child_22 = new Person('儿子2.2')

grandfather.addChild(parent_1)
grandfather.addChild(parent_2)
parent_1.addChild(child_11)
parent_1.addChild(child_12)
parent_2.addChild(child_21)
parent_2.addChild(child_22)

grandfather.log()
