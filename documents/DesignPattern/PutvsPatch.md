# [RESTful API] Put vs Patch

### 멱등성 (idempotent)

---

`f(x) = f(f(x))` 과 같이, **여러번 수행해도 값이 변하지 않는 성질**

사용자가 서버로 어떤 요청을 보냈는데, 그 요청이 타임아웃 되었다.
이때, 사용자는 요청이 전달 됐는지 아닌지 그 여부를 알 수 없다.
하지만 이러한 상황에서 멱등성이 보장된다면 사용자는 요청을 다시 보내면 된다.

참고로 `post` 는 멱등성을 보장하지 않는다. 요청시 새로운 리소스를 생성하기 때문이다.

## 차이점 3가지

---

### 1. 범위

---

- put : 리소스의 모든 속성을 수정 (일부만 전달 시, 미전달 속성은 null 혹은 default값으로 처리됨)
- patch : 리소스의 일부 속성을 수정

### 2. 서버에서의 처리방법 📎[참고사이트](https://rapidapi.com/blog/put-vs-patch/)

---

서버가 요청된 URI로 얻은 자원을 update하기 위해 엔티티를 처리하는 과정에서 가장 큰 차이점을 보여준다.

- put : 엔티티를 서버에 **저장된 원본데이터의 수정본**으로 간주함. 클라이언트는 `replace`를 요청
- patch : 엔티티는 **새로운 버전을 만들기 위해서** 서버에 저장된 원본데이터를 어떻게 **부분적으로 수정해야 할지** 설명하고 있는 `instructions`임.

- 썩은 패티가 있는 햄버거를 받았을 때 [참고링크](https://stackoverflow.com/a/66663648)

  1. put : 새로운 햄버거를 만들어서 줍니다
  2. patch : 주방의 어떤 직원이 새로운 패티를 가져옵니다. 내가 가지고 있던 햄버거에서 빵, 야채등은 그대로 두고 썩은 패티만 바꿔갑니다.

  ⇒ 이 경우엔 put이 훨씬 쉽다.
  ⇒ 하지만 엄청 큰 기계에서 부품 하나가 고장났을 경우엔 부품 교체가 더 쉬운 방법일 것이다

### 3. Patch는 "항상" 멱등성을 보장하지 않는다

---

- put : 항상 idempotent 하다.
- patch : 기본적으로 non-idempotent하며 상황에 따라 idempotent 할 수 있다.

### + 지원 브라우저? (애매)

---

일단 put보다 patch가 더 늦게 나옴.

[이분 말씀](https://velog.io/@insutance/REST-API-HTTP-Method-PUT-vs-PATCH) 에 따르면 톰캣에서도 지원이 안된다고 하는데
찾아보니 따로 프로토콜 설정같은 걸 해주면 사용은 가능한 것 같음.

'기본적'으로 제공을 해주는 게 아닌 것 같다.([톰캣에서 쓰려면](https://stackoverflow.com/questions/13994833/how-do-i-stop-apache-httpd-from-rejecting-http-patch-requests/15621131#15621131?newreg=8eb1205cba8c4e20be16e1fe18afc799))

### +a

---

> 그리고 고민되면 그냥 POST 쓰면 됩니다. POST로 리소스를 업데이트하는건 오히려 REST 스타일을 잘 지키는 겁니다.
> 원래 POST가 그런 애매한 메서드입니다. 정의자체도 "리소스를 생성하거나 기존 리소스에 추가하거나 혹은 의미에 맞게 잘 쓰세요" 같은 식으로 애매한 부분들이 있습니다. 이건 HTTP가 GET 과 POST 두개만 있어서 'GET은 읽기 나머지는 다 POST!' 이런 시절이 있었기 때문입니다.

[참고사이트](https://repo.yona.io/doortts/blog/issue/12)

[애매할땐 post..?](https://www.inflearn.com/questions/186539)
