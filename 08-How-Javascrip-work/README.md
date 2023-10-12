# How Javascript Works behind the Scenes

### Overview of Javascript
제목|설명|
|-----|-----|
|**high level language**|Javascript는 high level언어로 인간친화적인 언어입니다.<br>Javascript 엔진이 가비지 컬렉터로 메모리를 관리해 주기 때문에 메모리를 관리하는 코드를 작성하지 않아도 된다.|
|**가비지 컬렉터**|가비지 컬렉터는 메모리를 관리해주는 프로세스이다. <br> 사용하지 않는 코드를 식별하고 삭제하므로써 메모리 누수를 막을 수 있다.|
|**인터프리터와 컴파일러**|Javascript는 원래 인터프리터 언어였으나, 웹 브라우저 사용량이 늘어남에 따라 V8은 JIT의 컴파일 방식으로 업그레이드를 시켰다. JIT(just-in-time compilation)는 인터프리터와 컴파일 두 방식을 사용하여 코드를 실행시키는 것으로, 파싱된 Javascript코드를 받아와서 AST(Abstact syntax tree 추상구문트리)으로 변환시킨 후 인터프리터로 읽어 코드를 실행시킨다. 이후 TurboFan(compiler)방식으로 AST를 최적화 하여 컴파일 한 뒤 코드를 실행시키는 방식이다. 인터프리터는 코드 실행이 빠르고 메모리가 적게 드는 곳에 사용할 수 있고, TurboFan(compiler)은 최적화된 코드를 통해 성능을 향상시킬 수 있다는 장점이 있다.|
|**동적언어**|Javascript는 런타임 이후 타입이 정해지는 동적언어의 특징을 가지고 있다.|
|**프로토타입 객체 기반 프로그래밍**|프로토타입은 객체를 기반으로 객체를 생성하는 방법을 말한다.|
|**멀티 패러다임 언어**|Javascript는 멀티 패러다임 언어로 함수형, 명령형, 선언형 등의 패러다임을 사용하여 Javascript 코드를 다양하게 활용할 수 있다.|
|**일급 객체**|Javascript는 함수를 변수에 담아서 사용할 수 있는 일급객체 언어의 특징을 가지고 있다.|
|**싱글 스레드**|Javascript engine은 싱글 스레드로 동작하여 한번에 하나의 작업만 실행할 수 있다. 하지만 이벤트 루프를 통해 non-blocking 프로그래밍을 실현할 수 있다.|
|**이벤트루프와 비동기**|Javascript engine의 구성으로는 콜스택, 콜백 큐, 메모리힙, 가비지컬렉터, web API, 이벤트 루프가 있다. 이때 콜스택와 콜백큐를 돌면서 작업을 넘겨주는 역할을 하는 것이 이벤트 루프이다. 이벤트 루프가 있기 때문에 비동기 작업을 하고 난 작업들이 콜백 큐에서 콜 스택으로 넘어가 실행이 될 수 있다.|


### Javascript Engine ( V8 )
- Javascript 엔진에서 메인 스레드는 코드 컴파일이다. 컴파일 과정은 parser(해석) -> ignition(AST->bytecode변환) -> compiler(컴파일러-turbofan) -> runtime(실행 excution)의 순서로 이루어진다. V8(js-engine)이 parser에서 AST(Abstrict Syntax Tree -추상구문트리)를 생성하여 Javascript코드의 구조를 나타내면 ignition에서 AST를 bytecode로 변환시켜 코드를 실행시킨다. 이후 turbofan이 bytecode를 최적화 한뒤 compile(기계어 변환)하여 코드를 변환하고 마지막 런타임에 실행 코드를 넘겨준다.
- javascript engine은 멀티스레드로 동작한다. 컴파일 작업 외에도 최적화나 가비지 컬렉터가 사용하는 스레드가 따로 있다. 다만 우리가 알고 있는 "Javascript는 싱글스레드다"라는 문장은 V8엔진이 사용하는 메인 스레드를 말하는 것이다. 즉, 우리가 생각해야 하는 부분은 코드의 실행과 관련한 컴파일 과정의 메인, 싱글 스레드를 생각하면 된다.
- Javascript의 코드가 실행하는 부분인 런타임을 또 추가적으로 정리해 볼 수 있다.<br>
  런타임은 콜 스택, 메모리 힙, 콜백 큐, 이벤트루프, web API, 가비지 컬렉터로 이루어져 있다. 
  
### Execution context and call stack
