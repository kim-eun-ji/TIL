# express에서 post form-data 받기   


## 설정 방법
1. express 4 이상은 `body-parser` 를 별도로 설치할 필요가 없기 때문에 다음과 같이 설정한다.
그럼 `req.body` 값을 콘솔로 찍어봤을 때  `undefined` 가 뜨지 않음!

    ```tsx
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    ```

2. __postman을 통해 body에 form-data를 담아 보낼 때 `form-data` 항목이 아니라 `x-www-form-urlencoded` 항목을 선택한다.__   
다른 프로젝트 연습할 때 form-data 체크해서 테스트 했던 건 잘됐었는데...   
이번엔 계속 `{}` 값만 나와서(req.header는 제대로 받아왔음) 구글링을 열심히 한 결과 [포스팅](https://seunggabi.tistory.com/entry/JS-express-postman-Post-reqbody-empty)을 발견했고 드디어 고쳤다ㅠㅠ   



### 그래서 x-www-form-urlencoded가 뭐길래..

---

> Form Data와 x-www-form-urlencoded는 매우 유사합니다. 둘 다 거의 동일한 목적으로 사용되지만 차이점은 URL이 x-www-form-urlencoded를 통해 전송 될 때 인코딩된다는 것입니다. 인코딩 된다는 뜻은 전송되는 데이터가 다른 문자로 인코딩되어 공격을 받고 있어도 인식할 수 없음을 의미합니다.

[출처](https://testmanager.tistory.com/342)   


### 곧죽어도 form-data 형식으로 보내고 싶다면..

---

`form data` 로 설정하고 전송하면 header에 content-type이  `multipart/form-data` 로 되어있는 것을 확인 할 수 있다. 해당 형식의 데이터의 경우 `Multer` 라는 미들웨어를 사용해서 처리하는 것 같다.

[https://github.com/expressjs/multer](https://github.com/expressjs/multer)

끝!