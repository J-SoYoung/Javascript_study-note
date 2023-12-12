import App from './App.js'

const root = document.querySelector('#root')
// 클래스 객체 생성 -> 
root.append(new App().el);

console.log('시작')