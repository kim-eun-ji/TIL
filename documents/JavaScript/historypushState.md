# history.pushState

### 누구세요?

---

실제 url 이동 없이 현재 url만 바꿔치기 하고 싶을때 사용함.  
**url은 바꾸고싶고 서버에 요청은 보내지 말아야 할 때.(갱신x)**

나는 ajax로 리스트 데이터를 가지고오는데 url도 바꿔줘야했어서 썼다

쓸때마다 까먹어서 이번기회에 정리

### 어떻게?

---

```jsx
history.pushState(state, title [, url])
```

- state : 저장할 데이터. {data: \_data}. 미사용시 `null`
- title : 변경할 브라우저 title. 미변경시 `null`
- url(Optional) : new history entry's URL

### 유의사항

---

1. **IE10이상 지원!!!!!**

따라서 사용 시 지원 여부를 고려하여 사용하기

```jsx
if (typeof history.pushState == "function") {
  // 지원 o
  history.pushState(null, null, url);
} else {
  // 지원 x
}
```

2. **뒤로가기시 url은 바뀌지만 이벤트는 발생하지 않음!**

예를들어,

1. 필터에서 year 2021, month 7 선택 후 검색을 하면 ajax로 데이터를 가지고오고  
   파라미터에 year month도 붙음.
2. 그 다음 year 2020, month 6 선택후 검색하면 ajax로 데이터를 가져오고 파라미터도 붙음!
3. 이 상태에서 뒤로가기 누르면 리스트 데이터는 `2021-07` 에 대한 것임.  
   하지만 파라미터는 `2020-06` 인 상태임!

난 뒤로갔을때 바뀐 url에 담긴 필터 데이터에 해당하는 list 데이터를 가져와야 했으므로  
뒤로가기 이벤트도 따로 처리해주었다.

```jsx
$(window).on('popstate', function(event) {
            var data = event.originalEvent.state; // pushState에서 저장한 state data
						// 뒤로가기시 처리할 이벤트
}
```

### api 문서

---

[https://developer.mozilla.org/en-US/docs/Web/API/History/pushState](https://developer.mozilla.org/en-US/docs/Web/API/History/pushState)
