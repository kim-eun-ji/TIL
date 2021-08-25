# [카카오인턴][Lv3] 보석 쇼핑 - 자바스크립트 js

## 프로그래머스 문제

[https://programmers.co.kr/learn/courses/30/lessons/67258](https://programmers.co.kr/learn/courses/30/lessons/67258#)

## 시도 1.

효율성 8.9점..zzzzㅠㅠㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ하..

```tsx
function solution(gems) {
    let answer = [0,0];
    let answerLen = gems.length+1;
    const gemTypes = [... new Set(gems).keys()];
    const gemTypesLen = gemTypes.length;
    const gemsIdxMap = new Map();
    
    // 종류,위치 초기화
    gemTypes.map(g => gemsIdxMap.set(g, 0));
    
    // 순회하지 않아도 되는 예외 처리
    if(gemTypes.length===1) return [1, 1];
    else if(gemTypes.length === gems.length) return [1, gems.length];
    
    // 순회
    for(let i=0; i<gems.length; i++){
        gemsIdxMap.set(gems[i], i+1);
        
        // 체크
        let idxs = [...gemsIdxMap.values()];
        if(idxs.indexOf(0) === -1){
            idxs.sort((a,b) => a-b);
            let tempAnswer = [idxs.shift(), idxs.pop()];
            let tempAnswerLen = tempAnswer[1]-tempAnswer[0];
            
            // 기존 값보다 짧다면 answer에 값 넣음, 단 길이가 종류배열의 길이와 같다면 return하고 종료
            if(tempAnswerLen === gemTypesLen-){
                return tempAnswer;
            } else if(answerLen > tempAnswerLen){
                answer = tempAnswer.slice();
                answerLen = tempAnswerLen;
            }
        }
        
    }
    
    // console.log([...gemsIdxMap.entries()]);
    
    return answer;
}
```

```tsx
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.17ms, 30.4MB)
테스트 2 〉	통과 (0.25ms, 30.3MB)
테스트 3 〉	통과 (0.50ms, 30.4MB)
테스트 4 〉	통과 (0.18ms, 30.4MB)
테스트 5 〉	통과 (0.10ms, 30.3MB)
테스트 6 〉	통과 (0.16ms, 30.4MB)
테스트 7 〉	통과 (0.16ms, 30.4MB)
테스트 8 〉	통과 (6.94ms, 32.8MB)
테스트 9 〉	통과 (5.66ms, 32.6MB)
테스트 10 〉	통과 (3.89ms, 32.6MB)
테스트 11 〉	통과 (7.91ms, 34MB)
테스트 12 〉	통과 (9.49ms, 33.3MB)
테스트 13 〉	통과 (12.43ms, 33.7MB)
테스트 14 〉	통과 (29.74ms, 34.1MB)
테스트 15 〉	통과 (28.23ms, 34.7MB)
효율성  테스트
테스트 1 〉	통과 (64.49ms, 34.2MB)
테스트 2 〉	실패 (시간 초과)
테스트 3 〉	실패 (시간 초과)
테스트 4 〉	실패 (시간 초과)
테스트 5 〉	실패 (시간 초과)
테스트 6 〉	통과 (173.05ms, 34.7MB)
테스트 7 〉	실패 (시간 초과)
테스트 8 〉	실패 (시간 초과)
테스트 9 〉	실패 (시간 초과)
테스트 10 〉	실패 (시간 초과)
테스트 11 〉	실패 (시간 초과)
테스트 12 〉	실패 (시간 초과)
테스트 13 〉	실패 (시간 초과)
테스트 14 〉	실패 (시간 초과)
테스트 15 〉	실패 (시간 초과)
채점 결과
정확성: 33.3
효율성: 8.9
합계: 42.2 / 100.0
```

### 시도2.

코드를 하나씩 지워가며 돌려봤는데 일단 `idxs.sort((a,b) => a-b);` 이거 지우니까 몇개는 시간초과가 사라짐.. 정렬하지않고 최소값과 최대값을 구해 풀 수 있도록 수정했다.

내가 사용한 map은 데이터를 넣은 순서대로 저장한다. 
따라서 기존 값은 삭제하고 다시 set하여 최소값 구하는 것을 쉽게 한다.

추가로 slice, pop, shift등 불필요한 연산 또한 없애거나 간단하게 변경했다.

```tsx
function solution(gems) {
    let answer = [0,0];
    let answerLen = gems.length;
    const gemTypesLen = new Set(gems).size;
    const gemsIdxMap = new Map();
    
    // 순회
    for(let i=0; i<gems.length; i++){
        gemsIdxMap.delete(gems[i]);
        gemsIdxMap.set(gems[i], i+1);
        
        // 모든 보석을 1번 이상 훑었는지 체크
        if(gemsIdxMap.size === gemTypesLen){
            // 최대값(현재) : i+1
            // 최소값 : gemsIdxMap.values().next().value
            let tempAnswer = [gemsIdxMap.values().next().value, i+1];
            let tempAnswerLen = tempAnswer[1]-tempAnswer[0];
            
            // 기존 값보다 짧다면 answer에 값 넣음, 단 길이가 종류배열의 길이와 같다면 return하고 종료
            if(tempAnswerLen === gemTypesLen-1){
                return tempAnswer;
            } else if(answerLen > tempAnswerLen){
                answer = tempAnswer;
                answerLen = tempAnswerLen;
            }
        }
        
    }
    
    return answer;
}
```

```tsx
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.11ms, 30.1MB)
테스트 2 〉	통과 (0.14ms, 30.1MB)
테스트 3 〉	통과 (0.21ms, 30.3MB)
테스트 4 〉	통과 (0.23ms, 30.2MB)
테스트 5 〉	통과 (0.12ms, 30.1MB)
테스트 6 〉	통과 (0.10ms, 30.1MB)
테스트 7 〉	통과 (0.13ms, 30.2MB)
테스트 8 〉	통과 (0.35ms, 30.2MB)
테스트 9 〉	통과 (0.42ms, 30.3MB)
테스트 10 〉	통과 (0.47ms, 30MB)
테스트 11 〉	통과 (0.65ms, 30.4MB)
테스트 12 〉	통과 (0.69ms, 30.2MB)
테스트 13 〉	통과 (1.02ms, 30.2MB)
테스트 14 〉	통과 (0.79ms, 30.2MB)
테스트 15 〉	통과 (4.07ms, 33.1MB)
효율성  테스트
테스트 1 〉	통과 (4.00ms, 32.9MB)
테스트 2 〉	통과 (4.16ms, 32.6MB)
테스트 3 〉	통과 (6.14ms, 34MB)
테스트 4 〉	통과 (4.70ms, 34.4MB)
테스트 5 〉	통과 (8.42ms, 34.4MB)
테스트 6 〉	통과 (7.53ms, 35.1MB)
테스트 7 〉	통과 (10.06ms, 35.5MB)
테스트 8 〉	통과 (10.36ms, 35.7MB)
테스트 9 〉	통과 (10.55ms, 35.9MB)
테스트 10 〉	통과 (10.88ms, 36.1MB)
테스트 11 〉	통과 (12.26ms, 36.5MB)
테스트 12 〉	통과 (17.65ms, 37.5MB)
테스트 13 〉	통과 (21.36ms, 38.6MB)
테스트 14 〉	통과 (20.29ms, 37.3MB)
테스트 15 〉	통과 (19.91ms, 40.8MB)
채점 결과
정확성: 33.3
효율성: 66.7
합계: 100.0 / 100.0
```

이 문제를 풀면서 느낀건 난 역시 알고리즘 공부나 코테 준비 안해본 티가 난다는거..?🙃🙃🙃 심심풀이로 풀다보니.. 늘 통과하기에만 급급했던 것 같다.   

풀기전에 다른 풀이나 해설보면 그 흐름을 따라가서 힌트를 제외하고 절대 안찾아보는데,

풀고나서 찾아보니 일단 주어진 gems배열의 크기가 최대 100000 이기때문에 시간 복잡도가 `O(n^2)` 이상이라면 시간 초과가 발생한다고 한다.   

또한, map도 가능하지만 대부분 `O(n)`의 시간복잡도를 가진 **투포인터**를 사용한다고 하는데, 이게 뭔지 찾아보고 이 방법으로도 구현해봐야겠다!