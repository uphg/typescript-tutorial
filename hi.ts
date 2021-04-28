enum Gender {
  Male,
  Female
}

function fallLove(a: Gender, b: Gender): [Gender, Gender] {
  return [a, b]
}

console.log(fallLove(Gender.Male, Gender.Female))