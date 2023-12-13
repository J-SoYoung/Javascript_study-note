// 라우터 = 페이지 
import {createRouter} from '../core/heropy.js'
import Home from "./Home";
import About from "./About";

export default createRouter([
  // 객체는 페이지 정보
  { path: '#/', component: Home },
  { path: '#/about', component: About },
])