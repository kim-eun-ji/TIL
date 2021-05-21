# sequelize - ORM 개념 잡기

## ORM (Object-Relational Mapping)



객체지향 패러다임을 활용하여 관계형 데이터베이스(RDB)의 데이터를 조작하게 하는 기술.

쿼리를 작성하지 않고도 객체의 메서드를 활용하는 것처럼 쿼리 로직을 작성할 수 있다.

나는 현재 사용하고있는 프레임워크의 액티브 레코드로 orm을 경험해봤다.

* 장점
  * 쿼리 추상화 가능 ⇒ 기능 구현 로직 집중
  * 재사용, 유지보수 편리성 증가
  * db 마이그레이션 쉬움

* 단점
  * raw Query를 사용하는 것 보다 성능 떨어짐
  * (개인적으로) 쿼리짠다음 다시 함수로 바꿔서 옮기는게 귀찮았음...

## sequelize



`nodejs` 에서 `mysql` 을 쉽게 다룰 수 있도록 도와주는 라이브러리.

시퀄라이즈는 `orm` 으로 분류가 되며, `javascript` 로 `mysql` 을 제어할 수 있다.

또한 **Promise** 기반으로 구현되었기 때문에 비동기 로직을 편리하게 작성가능하다.

### Sequelize CLI (The Sequelize command line interface)

---

명령어를 사용해 db 작업을 할 수 있는 툴. Sequelize과 같이 설치하자.

### 기존 DB에서 모델 추출하기

---

orm 사용전 만든 테이블들의 모델을 만들기 위해, [sequelize-auto](https://github.com/sequelize/sequelize-auto) 을 사용한다. (Sequelize 자체에선 해당 기능을 제공하지 않음)

```bash
sequelize-auto -o "./models" -d instagram -h localhost -u root -p 3306 -x root -e mysql
```

- `-o` 결과물 경로
- `-d` DB 명
- `-h` host 명
- `-u` user 명
- `-p` 포트 번호
- `-x` 비밀번호
- `-e` db 종류


❓ **더 찾아볼것**

---

각각 조인을 3~4번씩 한 쿼리를 유니온까지 하는 쿼리를 orm으로 구현이 가능한지.. 궁금하다,,    
왜냐면 지금 ㅅ ㅏ용하고 있는 프레임워크의 액티브레코드로는 도저히 구현이 안되서 그냥 쌩 raw query로 작성해서 사용했었기때문! + 시퀄라이즈의 이스케이프 지원 여부(아마되겠지?/...설마)

### 참고

---

[https://velog.io/@alskt0419/ORM에-대해서...-iek4f0o3fg](https://velog.io/@alskt0419/ORM에-대해서...-iek4f0o3fg)

[https://baeharam.netlify.app/posts/Node.js/Node.js-Sequelize-다루기](https://baeharam.netlify.app/posts/Node.js/Node.js-Sequelize-%EB%8B%A4%EB%A3%A8%EA%B8%B0)

[https://velog.io/@jeff0720/Sequelize-CLI를-사용하여-간단한-User-API-만들기-vdjpb8nl0k](https://velog.io/@jeff0720/Sequelize-CLI%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%97%AC-%EA%B0%84%EB%8B%A8%ED%95%9C-User-API-%EB%A7%8C%EB%93%A4%EA%B8%B0-vdjpb8nl0k)
