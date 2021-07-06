# 타입스크립트와 주요문법 살펴보기

## 👻 js와 ts

- **ECMAScript ?**
표준화된 스크립트 프로그래밍 언어. 자바스크립트를 표준화하기 위해 만들어짐. 자바스크립트는 언어이고, ECMA 스크립트는 규격, 표준이다.
- **ES5**
`use strict` 를 제외하고 IE9에서 모두 지원하기때문에 현재 편하게 말하는 js란 es5를 말하는 것이라고 생각해도 된다.
    - `use strict` ?
        - 선언하지 않은 변수, object 사용/수정/삭제 불가능
        - 함수 호이스팅 제한
        - script나 funtion 시작부분에 "use strict"; 를 선언하여 사용.
- **ESNext :** 아직 출시되지 않은 ECMAScript의 준비 버전들. ****트랜스파일러를 거치며 ES5로 변환됨. (트랜스파일러 : 바벨)
- **Typescript :** MS가 개발,유지. ESNext에 타입 기능을 추가한 것. (트랜스파일러 : TSC)

## 👻 ES~TS 주요 문법 살펴보기

- **비구조화 할당** : 객체, 배열에 적용 가능

```jsx
let person = {name:"Jane", age: 22}
let {name, age} = person //  name = "jane", age = 22  비구조화 할당을 통해 person멤버의 name과 age변수를 쉽게 얻었다.

let array = [1, 2, 3, 4]
let [head, ...rest] = array // haed = 1, rest = [2, 3, 4]

let a = 1, b = 2
[a, b] = [b, a] // a = 2, b = 1 // 각변수를 교환하는 예
```

- **클래스** : 캡슐화, 상속, 다형성 지원 가능

```tsx
abstract class Animal{
    constructor(public name?: string, public age?: name){}
    abstract say():string
}

class Cat extends Animal{
    say(){return '야옹'}
}

class Dog extends Animal{
    say(){return '멍멍'}
}

let animals: Animal[] = [new Cat('야옹이', 2), new Dog('멍멍이', 3)]
let sounds = animals.map(a=>a.say()) // ['야옹', '멍멍']
```

- **모듈**
    - 모듈 사용시 코드를 여러개 파일로 분할 작성 가능.
    - 변수/함수/클래스등에 `export`를 사용해 모듈로 만들면, 다른 파일에서 `import`로 사용 가능.

```tsx
import * as fs from 'fs'
export function writeFile(filepath: string, content: any){}
```

- **generator**
    - `yield` : 반복자를 의미하는 `iterator`를 생성시 사용.
    - 반복기는 독립적으로 존재하지 않고 반복기 제공자(iterable)을 통해 얻음
    - 이처럼 yield문을 이용해 반복기를 만들어내는 반복기제공자를 `generator` 라고 부름.
    - 생성기는 function키워드에 `*` 을 결합하여 `function*` 과 `yield` 키워드를 이용해 만듦
    - ts에서 yield는 반드시 function*으로 만들어진 함수 내부에서만 사용 가능.

```tsx
01 function* gen(){ // 생성기
02     yield* [1,2] // 생성기 내부에서만 yield키워드 사용가능.
03 }
04 for(let value of gen())[console.log(value)] //1, 2

4행의 gen() -> 2행에서 1 리턴-> 4행에서 콘솔에 1찍음 -> 다시 gen()-> 2행에서 2리턴-> 4행에서 콘솔에 2찍음. 배열[1,2]모두 순회했으니 종료
```

- **Promise와 async/awiat 구문**
    - Promise : 비동기 콜백 함수를 상대적으로 쉽게 구현할 목적으로 만들어짐. (콜백지옥👋)

```tsx
// async 함수수정자 사용. 이 함수 본문에서 await키워드 사용 가능. await는 promise객체를 해소시켜줌.
async function get(){
    let values = []
    values.push(await Promise.resolve(1))
    values.push(await Promise.resolve(2))
    values.push(await Promise.resolve(3))
    return values
}

// get 함수는 [1,2,3]값을 promise형태로 반환, 이 객체는 then 메서드를 호출해 실제 값 획득 가능
get().then(values => console.log(values)) // [1, 2, 3]
```

## 👻 타입스크립트 고유 문법

- **타입 주석과 타입 추론**
    - 타입주석 : 1행의 변수 n 뒤에 콜론과 타입명이 있다.
    - 타입추론 : 2행과 같이 생략하면 컴파일러가 대입값을 분석해 타입을 결정함.
    - **타입추론 기능은 js소스코드와 호환성을 보장하는 데 큰 역할을 한다.(.js → .ts 확장자만 변경해도 동작이 가능한 이유!)**

```tsx
let n: number = 1
let m = 2
```

- **인터페이스**

```tsx
interface Person {
    name: string
    age?: number
}
```

- **튜플**
    - 물리적으론 배열과 같지만, **배열에 저장되는 아이템의 데이터타입이 모두 같으면 배열, 다르면 튜플이다**.

```tsx
let numberArray: number[] = [1,2,3] // 배열
let tuple: [boolean, number, string] = [true, 1, 'ok'] // 튜플
```

- **제네릭 타입**
    - 다양한 타입을 한꺼번에 취급할 수 있게 해줌.
    - 다음 코드에서 Container클래스는 value속성을 포함함.
    - 이 클래스는 `Container<number>, Container<string>, Container<number[]>`처럼 여러가지 타입 대상으로 동작이 가능한데 이를 제네릭 타입이라고 한다.

```tsx
class Container<T>{
    constructor(public value: T){}
}
let numberContainer: Container<number> = new Container<number>(1)
let StringContainer: Container<string> = new Container<stirng>('Hello')
```

- 대수 타입
    - ADT : 다른 자료형의 값을 가지는 자료형을 의미
    - 대수타입에는 크게 `합집합타입(union, sum type / 기호 |)`과 `교집합 타입(intersection/product type / 기호 &)`이 있다.

```tsx
type NumberOrString = number | string
type AnimalAndPerson = Animal & Person
```

### 출처

[Do it! 타입스크립트 프로그래밍](http://www.yes24.com/Product/Goods/89328106)