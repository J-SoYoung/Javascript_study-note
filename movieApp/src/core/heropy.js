// (1) core 자바스크립트 역할, 컴포넌트를 생성해주는 역할
// (2) 라우터
// (3) 컴포넌트끼리 데이터 통신 => 스토어 개념


/*////////////////////////////////////////////////////
  component
    컴포넌트를 생성하는 클래스
    컴포넌트 생성시 => tagName에 따라 div를 추가해놓고 
    컴포넌트가 사용될 때 정의된 함수를 실행하도록 한다.
 */
export class Component{
  constructor( payload={} ){
    const { 
      tagName='div',
      state = {},
      props= {}
    } = payload;
    console.log(state)
    
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }
  render(){
    //
  }
} 


/*////////////////////////////////////////////////////
  라우터 
  어디에서 동작할지 모르기 때문에, 반환값 자체를 함수로 반환하고
  원하는 곳에서 실행할 수 있도록 함
*/
function routerRender(routes){

  // 접속할 때 해시 모드가 아니면(해시가 없으면) /#/로 리다이렉트!
  if (!location.hash) {
    history.replaceState(null, '', '/#/') // (상태, 제목, 주소)
  }

  const routerView = document.querySelector('router-view')
  // http://localhost:8080/#/about?name=heropy
  const [ hash, queryString='' ] = location.hash.split('?')

  // 2) 현재 라우트 정보를 찾아서 렌더링!
  const currentRoute = routes.find(route => new RegExp(`${route.path}/?$`).test(hash))
  routerView.innerHTML = ''
  routerView.append(new currentRoute.component().el)  

}


export function createRouter(routes){
  return function(){
    window.addEventListener('popstate', ()=>{
      routerRender(routes)
    })
    // popstate가 실행하려면 기본routerRender가 먼저 동작해야함
    routerRender(routes)
  }

}






