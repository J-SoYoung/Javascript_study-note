// 메인페이지 컴포넌트
import { Component } from "../core/heropy";

export default class About extends Component {
  render(){
    const {a,b,c}= history.state
    this.el.innerHTML = /* html */`
      <h1>Aboutpage</h1>
      <h2>${a}</h2>
      <h2>${b}</h2>
      <h2>${c}</h2>
    `
  }
}