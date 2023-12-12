// (1) core 자바스크립트 역할, 컴포넌트를 생성해주는 역할
// (2) 라우터
// (3) 컴포넌트끼리 데이터 통신 => 스토어 개념


/**
 * component
 * 컴포넌트를 생성하는 클래스
 * 컴포넌트 생성시 => tagName에 따라 div를 추가해놓고 
 * 컴포넌트가 사용될 때 정의된 함수를 실행하도록 한다.
 */
export class Component{
  constructor( payload={} ){
    const { 
      tagName='div',
      state = {}
    } = payload;
    console.log(state)
    
    this.el = document.createElement(tagName);
    this.state = state;
    this.render();
  }
  render(){
    //
  }
} 