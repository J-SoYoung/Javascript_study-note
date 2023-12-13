// 메인페이지 컴포넌트
import { Component } from "../core/heropy";

export default class Home extends Component {
  render(){
    this.el.innerHTML = /* html */`
      <h1>homepage</h1>
    `
  }
}