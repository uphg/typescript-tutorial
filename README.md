
## 使用 interface

```typescript
interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person : Person) {
  return "Hello, " + person.firstName + person.lastName;
}

console.log(greeter({ firstName: '小', lastName: '明' })) // Hello, 小明
```


## 使用 class

```typescript
class Student {
  姓名: string;
  constructor(public 姓, public 名) {
    this.姓名 = 姓 + 名;
  }
}

let user = new Student("小", "红");

console.log('# user')
console.log(user) // {姓: '小', 名: '红', 姓名: '小红'}
```

## 声明函数返回值类型

```typescript
function min(a:number, b:number): number {
  return a > b ? b : a
}

const result = min(1, 2)

console.log(result)
```