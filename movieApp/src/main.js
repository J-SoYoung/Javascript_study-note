import App from './App.js'
// 가져오기 이름은 router, 원래 함수이름은 createRouter
import router from './routes/index.js';

const root = document.querySelector('#root')
// 클래스 객체 생성 -> 
root.append(new App().el);

// 라우터 실행
router()

