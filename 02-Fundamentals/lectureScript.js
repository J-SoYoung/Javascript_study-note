const soyoung = {
  firstName: "Jung",
  lastName: "soyoung",
  birthYear: 1992,
  job: "software developer",
  friends: ["tjsal", "thfl", "dPqls"],
  hasDriversLisence: true,

  // 객체 안의 내용을 참조하려면 this를 사용해야 한다
  clacAge: function () {
    // console.log(this);
    // 객체를 생성할 수 있다.
    this.age = 2023 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.lastName} is a ${this.clacAge()}-year old, she has ${
      this.hasDriversLisence ? "a" : "not"
    } driver's lisence`;
  },
};

// soyoung객체 안에 있는 calcAge와 아래 calcAge 함수는 다르다.
// 함수라는 형식은 같지만 객체 안에 있는 함수는 객체 속성 중 하나이며 메서드라고 부른다.
// 아래 calcAge는 함수가 변수 안에 들어있는 형태이다
const clacAge = function (birthYear) {
  return 2023 - birthYear;
};

// 함수를 통해 객체를 생성하고 동적으로 생성된 프로퍼티를 출력할 수 있다
// console.log(soyoung.clacAge());
// console.log(soyoung);
console.log(soyoung.getSummary());
