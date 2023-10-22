# JavsScript study

<img src='/images/_main_logo.svg' width='100%' height='300px'>
Jonas Schmedtmann강의, deepdive, 모던 자바스크립트 등의 책과 강의를 들으며 Javascript를 공부하였습니다.<br>
Javascript의 동작 원리와 기능에 대해 정리하였습니다. <br>
<br>

# Table of Contents
- <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#javascript%EC%9D%98-%EA%B8%B0%EC%B4%88'>What is Javascript?</a>
  - <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#javascript%EB%9E%80'>What is Javascript?<br></a>
  - <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#variable'>variable (변수)</a>
  - <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#data-type'>data type (데이터 타입)</a>
  - <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#operator'>operator (연산자)</a>
  - <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#object'>Object</a>
  - <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#function'> Function</a>
  - <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#array'>Array</a>
- <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#%How Javascript works?'>How Javascript works? </a>
  - <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#javascript-engine--v8-'> Javascript Engine ( V8 )</a>
  - <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#execution-context-and-call-stack'> Execution context and call stack</a>
  - <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#hoisting'>hoisting,TDZ</a>
  - <a href='https://github.com/thdud2262/Javascript_study/blob/main/README.md#this'>This keyword</a>

<br>

## 😍What is Javascript?
### What is Javascript?
### variable
### data type 
### operator
### Object
### Function
### Array
<br>

## 😎How Javascript works?
### Javascript Engine ( V8 )
### Execution context and call stack
### hoisting
### this
https://www.notion.so/fun-blog/This-1220d588586243229ce37b1b6632b558<br>
this란 함수 호출 방식에 따라 값이 동적으로 결정되는 키워드다. <br>
함수가 호출될 때 this는 함수가 속해있는 객체를 참조하고, 동시에 그 객체는 실행컨텍스트의 this바인딩 컴포넌트가 참조하는 객체가 된다.

- this를 사용하는 이유<br>
  this는 호출된 함수 내부의 객체를 참조할 수 있어서 해당 객체의 메서드나 속성에 접근할 수 있다. <br>
  - this를 사용해 함수를 생성하면 함수를 여러 객체에서 메서드로 활용하여 재사용 할 수 있다.
    ```jsx
    function greet() {
        console.log(`Hello, ${this.name}!`);
    }
    const person1 = {
        name: 'Alice',
        greet: greet //여러 객체에서 메서드로 활용하여 재사용
    };
    const person2 = {
        name: 'Bob',
        greet: greet //여러 객체에서 메서드로 활용하여 재사용
    };
    person1.greet(); // 출력: Hello, Alice!
    person2.greet(); // 출력: Hello, Bob!
    ```
  - 메서드의 this는 메서드가 속한 객체의 속성을 참조할 수 있다
    ```jsx
    function greet() {
        console.log(`Hello, ${this.name}!`);
    }
    const person1 = {
        name: 'Alice',
        greet: greet //여러 객체에서 메서드로 활용하여 재사용
    };
    const person2 = {
        name: 'Bob',
        greet: greet //여러 객체에서 메서드로 활용하여 재사용
    };
    person1.greet(); // 출력: Hello, Alice!
    person2.greet(); // 출력: Hello, Bob!
    ```
  - 생성자 함수의 this는 새로 생성된 인스턴스를 정의할 수 있다
    ```jsx
    function Person(name, age) {
    this.name = name;
    this.age = age;
    }

    //새로 생성된 인스턴스를 정의할 수 있다
    const person = new Person('Alice', 30);
    console.log(person.name); // 출력: Alice, 
    console.log(person.age);  // 출력: 30
    ```
  - 이벤트 핸들러에서 this는 이벤트 발생 요소를 참조할 수 있다
    ```jsx
    const button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        console.log(this); 
        // 출력: 클릭된 버튼 요소, <button id='myButton'>버튼</button>  
        // 이벤트 발생 요소를 참조
    });
    ```
