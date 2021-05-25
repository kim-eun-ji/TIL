# push permission 403 error

### Organization access

---

다른 분이 만드신 repo에 브랜치를 새로 만들고 push 하려는데 자꾸 다음 에러가 났음

```bash
PS D:\typescript\BorryJJong> git push origin kej
remote: Permission to BorryJJong/Playground.git denied to kim-eun-ji.
fatal: unable to access 'https://github.com/BorryJJong/Playground.git/': The requested URL returned error: 403
```

구글링 해보니 해결 방법은 다양했다.

- 자격증명관리자 관련 수정 → 나는 이걸로 해결 못함
- ssh 키 발급 받고 remote도 ssh로 연결하기 → 나는 이걸로 해결 못함

다들 해결했다고 감사합니다 하는데 나만 안되는 상황..^^...ㅠ

### 원인 궁예...

---

<!-- ![../.vuepress/public/images/Git/push-permission-403-error/Untitled.png](/img/Git/push-permission-403-error/Untitled.png) -->

`Verified` 얻어보겠다고 gpg 키 생성하고.. 인증을 했었다.

*사실 마크보단 깃 크라켄에서 내가 커밋했는데도 불구하고 2명이 커밋한 것 처럼 떠서 해결방법을 찾다 인증한 거였다.*

<!-- ![push%20permission%20403%20error%208ffb66868a4f49f597615136feb503b7/Untitled%201.png](push%20permission%20403%20error%208ffb66868a4f49f597615136feb503b7/Untitled%201.png) -->

뭔가 이거 관련한거 아니고선 의심되는 부분이 전혀 없었음.. 이미 구글에서 제시하는 대부분의 해결책을 해봤었기 때문..

### 해결...?...

---

결국 나도 owner 권한을 받고 나서야 정상적으로 push가 됐다.

이게 궁극적인 해결책인진 모르겠음.....

나중에 더 찾아보기 위해 기록!

```bash
You have been granted admin access to BorryJJong. 
Admins have full rights to the organization and 
have complete access to all repositories and teams.
```

### 나중에 볼 링크

---

[https://docs.github.com/en/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions](https://docs.github.com/en/organizations/restricting-access-to-your-organizations-data/about-oauth-app-access-restrictions)