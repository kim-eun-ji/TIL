# GitHub Actions 배포 에러

### 에러코드

---

```tsx
$ vuepress build documents
.. 생략 ..
[success] [webpackbar] Server: Compiled with some errors in 13.51s
[success] [webpackbar] Client: Compiled with some errors in 13.57s
(undefined) ./node_modules/@vuepress/theme-default/components/SidebarButton.vue?vue&type=style&index=0&lang=stylus& (./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--13-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--13-oneOf-1-2!./node_modules/stylus-loader??ref--13-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@vuepress/theme-default/components/SidebarButton.vue?vue&type=style&index=0&lang=stylus&)
Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):
ModuleBuildError: Module build failed (from ./node_modules/postcss-loader/src/index.js):
TypeError: Cannot read property 'prefix_exceptions' of undefined
```

잘되던 GitHub Actions 자동배포가 말썽을 부림..

ㅋ.. `vuepress dev documents` 실행하면 로컬에선 잘돌아감..

빌드도 로컬에선 잘됨... 이게 도대체 무슨일..

구글링을 해도 나랑 똑같은 에러가 난 사람은 찾을 수 없었다..

그래서 에러로그에 있는 키워드로 검색하다가 `mini-css-extract-plugin` 이거 문제일수도 있다는 사람의 말을 보고.. 난 애초에 설치를 하지 않았었기때문에 `npm install -D mini-css-extract-plugin` 를 했고, `package.json` 에 다음과 같이 추가됨.

```tsx
.. 생략 ..
"devDependencies": {
    "mini-css-extract-plugin": "^1.6.0",
.. 생략 ..
```

귀신같이 잘 배포된다..

이게 정확한 해결방법인진 모르겠으나 난 이렇게 해결함

-끝-
