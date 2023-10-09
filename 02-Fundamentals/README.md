# \*️⃣02-Fundamentals-Part-2

## Function

## Array

## Object

```
  const soyoung = {
    firstName: "Jung",
    lastName: "soyoung",
    birthYear: 1992,
    job: "software developer",
    friends: ["tjsal", "thfl", "dPqls"],
    hasDriversLisence: true,

    // 객체 안의 내용을 참조하려면 this를 사용해야 한다
    clacAge: function () {
      this.age = 2023 - this.birthYear;
      return this.age;
    },
  };
```
