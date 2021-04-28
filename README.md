
## 使用 interface

```javascript
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

```javascript
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