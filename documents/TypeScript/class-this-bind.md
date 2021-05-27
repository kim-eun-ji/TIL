# class this 바인딩

### 에러

---

1. router에서 컨트롤러 함수 호출 설정해둠→ 컨트롤러 호출 → 컨트롤러가 베이스컨트롤러에 있는 함수를 사용해서 베이스컨트롤러의 함수 호출
2. 베이스 컨트롤러가 `responseController` 를 멤버변수로 가지고있음

이런 상황에서 자꾸 다음 에러발생.... 

```tsx
TypeError: Cannot read property 'responseController' of undefined
    at BaseController.list (D:\typescript\BorryJJong\todo-list\src\controllers\BaseController.ts:20:17)
    at Layer.handle [as handle_request] (D:\typescript\BorryJJong\todo-list\node_modules\express\lib\router\layer.js:95:5)
    at next (D:\typescript\BorryJJong\todo-list\node_modules\express\lib\router\route.js:137:13)
    at Route.dispatch (D:\typescript\BorryJJong\todo-list\node_modules\express\lib\router\route.js:112:3)
    at Layer.handle [as handle_request] (D:\typescript\BorryJJong\todo-list\node_modules\express\lib\router\layer.js:95:5)
    at D:\typescript\BorryJJong\todo-list\node_modules\express\lib\router\index.js:281:22
    at Function.process_params (D:\typescript\BorryJJong\todo-list\node_modules\express\lib\router\index.js:335:12)
    at next (D:\typescript\BorryJJong\todo-list\node_modules\express\lib\router\index.js:275:10)
    at Function.handle (D:\typescript\BorryJJong\todo-list\node_modules\express\lib\router\index.js:174:3)
    at router (D:\typescript\BorryJJong\todo-list\node_modules\express\lib\router\index.js:47:12)
```

```tsx
export abstract class BaseController {
  protected responseController: ResponseController;
  
	...생략...

  constructor(service) {
    this.responseController = new ResponseController();
    ...생략...
    console.log(this);
  }

  public list = (req: express.Request, res: express.Response) => {
    console.log(this);
    return this.responseController.clientError(res);
  };
```

처음엔 다른 것들이 문제인 줄 알고 (다른 언어에서의 사용을 생각하고😭 this바인딩 문제일거라곤 진짜 생각도 못함) 이상한거 건들다가.. 

디버깅 해보니 `this` 자체가 `undefined` 였다.............

그래서 생성자쪽에서 브레이크포인트찍고 this 입력해봤을땐 또 제대로 뜨는 걸 보고,
바인딩 문제구나 알아차렸고.. 예~~~~~~~~전에 ts 공부 처음할 때 *ts에서 class this 바인딩은 주의해야합니다 어쩌구 저쩌구* 글을 봤던 게 생각났다.. 

역시 사람은 직접 겪어봐야 머리에 남는구나 싶음

### 왜 이런 문제가 생기는 걸까?

---

**ts는 js의 슈퍼셋**이기에 아무리 class를 가다듬었다고 할지라도 **js의 본질적인 문제**에선 벗어날 수 없다. 생각해보면 늘 js에서 `var _this = this;` 이런식으로 바인딩 해서 썼었다..

### 해결방법

---

가장 간단한 수정방법은 함수형태로 된 클래스의 메소드를 `화살표 함수` 로 변경하는 것이다.

왜냐하면, 화살표함수는 `this`를 별도로 바인딩 하지 않기 때문이다.(The this in arrow functions is lexically scoped)

### 참고링크

---

[https://stackoverflow.com/questions/16157839/typescript-this-inside-a-class-method](https://stackoverflow.com/questions/16157839/typescript-this-inside-a-class-method)

[http://norux.me/61](http://norux.me/61)