# Unhandled promise rejection

### 에러로그

---

```tsx
(node:12556) UnhandledPromiseRejectionWarning
(node:12556) UnhandledPromiseRejectionWarning: Unhandled promise rejection.
This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch().
To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict`
(see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode).
```

### 원인

---

왕초보 실수.

에러 코드에도 나와있듯 발생시킨 에러가 핸들링되지 않고 종료되었을때 발생함.

try - catch 문 사용 중, catch 문에서 상위 스택에 에러를 던져도 받아줄 try-catch문이 없는데 throw로 에러를 발생시킴.

디버깅하며 흐름을 따라가다가 받아줄 곳이 없는데 catch문 안에서 또 throw로 에러를 발생시키고 있어서 return으로 처리했더니 사라짐
