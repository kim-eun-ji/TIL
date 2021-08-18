# [DFS/BFS][Lv3] 네트워크 - 자바스크립트 js

## 프로그래머스 문제

[https://programmers.co.kr/learn/courses/30/lessons/43162](https://programmers.co.kr/learn/courses/30/lessons/43162)

## 시도 1.

나는 아직도 dfs를 이해하지 못한것같다... 🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃🙃

* answer은 `네트워크 최대 개수 n`으로 초기화
* 방문여부 체크할 배열 `visit`

각 배열의 요소를 순회하며 방문 체크를 하고, 연결되어있다면 네트워크 개수를 **빼준다.**

```tsx
function solution(n, computers) {
    let answer = n;
    let visit = Array.from(Array(n).fill(false));

    const dfs = function(computer, idx){
        // 방문체크
        visit[idx] = true;
        
        for(let i=0; i<n; i++){
            // 나 자신이 아님 + 연결되어있음(1임) + 방문하지 않은 노드일 경우 깊게 탐색
            if(i !== idx && computer[i] === 1 && !visit[i]){
                answer--;
                dfs(computers[i], i);
            }
        }
    }
    
    dfs(computers[0], 0);
        
    return answer;
}
```

1, 2, 4, 7번을 틀리고 console.log로 visit를 찍어보니 false가 남아있다. 
생각해보니 연결되지않은 배열은 방문할 수 없기때문에 **방문하지 않은 네트워크는 별도로 탐색**해야한다.

```tsx
채점을 시작합니다.
정확성  테스트
테스트 1 〉	실패 (0.13ms, 30.1MB) // 실패
테스트 2 〉	실패 (0.14ms, 30.4MB) // 실패
테스트 3 〉	통과 (0.15ms, 30.1MB)
테스트 4 〉	실패 (0.40ms, 30.1MB) // 실패
테스트 5 〉	통과 (0.13ms, 30.2MB)
테스트 6 〉	통과 (0.21ms, 30.5MB)
테스트 7 〉	실패 (0.37ms, 30MB) // 실패
테스트 8 〉	통과 (0.24ms, 30.1MB)
테스트 9 〉	통과 (0.15ms, 30.1MB)
테스트 10 〉	통과 (0.19ms, 30.2MB)
테스트 11 〉	통과 (0.69ms, 29.7MB)
테스트 12 〉	통과 (0.39ms, 30.2MB)
테스트 13 〉	통과 (0.27ms, 30.3MB)
채점 결과
정확성: 69.2
합계: 69.2 / 100.0
```

### 시도2.

일단 `visit`를 수정했다. 아예 네트워크 idx를 넣어주고 순회시 매번 idx를 빼줬음.

false인게 하나라도 남아있는지 검사한 다음 false인 idx를 찾고 그 idx를 넣는 게 비효율적일 것 같아서 이렇게 했는데, 지금와서 생각해보니 이 방법은 indexOf로 계속 탐색하고 자르고...  그게 그거인것같다..^^ㅠㅠ

```tsx
function solution(n, computers) {
    let answer = n;
    let visit = Array.from({length: n}, (v,i) => i);

    const dfs = function(computer, idx){
        // 방문체크
        visit.splice(visit.indexOf(idx),1);
        
        for(let i=0; i<n; i++){
            // 나 자신이 아님 + 연결되어있음(1임) + 방문하지 않은 노드일 경우 깊게 탐색
            if(i !== idx && computer[i] === 1 && visit.indexOf(i) !== -1){
                answer--;
                dfs(computers[i], i);
            }
        }
    }
    
	// 수정한 부분 - 모두 탐색한다.
    while(visit.length !== 0){
        let targetIdx = visit[0];
        dfs(computers[targetIdx], targetIdx);
    }
        
    return answer;
}
```

```tsx
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.14ms, 30.4MB)
테스트 2 〉	통과 (0.17ms, 30.5MB)
테스트 3 〉	통과 (0.16ms, 30.2MB)
테스트 4 〉	통과 (0.34ms, 30.4MB)
테스트 5 〉	통과 (0.13ms, 30.3MB)
테스트 6 〉	통과 (0.28ms, 30.4MB)
테스트 7 〉	통과 (0.16ms, 30.3MB)
테스트 8 〉	통과 (0.34ms, 30.3MB)
테스트 9 〉	통과 (0.39ms, 30.5MB)
테스트 10 〉	통과 (0.20ms, 30.5MB)
테스트 11 〉	통과 (0.45ms, 30.4MB)
테스트 12 〉	통과 (0.48ms, 30.1MB)
테스트 13 〉	통과 (0.25ms, 30.4MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
```

3단계치고 생각보다 쉽게 통과'는' 했다.

다만.. 아직 dfs를 잘 이해하지 못해서..   
짜면서도 그냥 될대로 돼라식으로 했는데 잘돌아가서 당황했다ㅠㅠ  
다른 분들의 풀이를 보니 answer을 0으로 두고 시작하시는데, 0으로 두고 경로를 찾을때마다 ++ 해주는 방법으로는 어떻게 예외사항을 처리해야할지 단번에 생각이 나지 않는다...흑흑 

고민이 많아질수록 더 어렵게 생각하게 되는 것 같음... ㅠ 이론 정리 필요.....   

નરત્રશ