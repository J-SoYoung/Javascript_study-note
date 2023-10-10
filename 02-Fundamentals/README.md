# \*️⃣02-Fundamentals-Part-2

## Function
입력을 받아 출력을 내보내는 수학의 과정과 같이, 하나로 이어지는 계산과 작업을 수행하는 코드블록을 함수라고 한다. <br>
함수의 입력값은 인수, 출력값은 반환값으로 부르며 함수를 사용하는 이유는 중복 코드를 줄이고 재사용하기 위함이다.
- 함수 선언문
- 함수 표현식
- function 생성자함수
- 화살표함수

## Array
여러개의 값을 순차적으로 나열한 자료구조이다. 배열의 각 요소는 인덱스를 가지고 있으며 이를 통해 값을 출력할 수 있다.

## Object
이름과 값을 하나의 쌍으로 모아 만든 자료형으로 객체 안에는 다양한 형태의 데이터를 넣을 수 있다. <br>
하나의 데이터는 프로퍼티라고 부르며, 프로퍼티 중에서도 함수는 메서드라 칭한다. 
- 객체 리터럴 표기법
- Object 생성자함수
- 객체 프로퍼티값을 생성하거나 참조할 때 마침표( . )나 대괄호( [ ] )를 사용한다. 
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
