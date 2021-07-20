# [DFS/BFS][Lv3] 단어 변환 - 자바스크립트 js

## 프로그래머스 문제

[https://programmers.co.kr/learn/courses/30/lessons/43163](https://programmers.co.kr/learn/courses/30/lessons/43163#)

## 시도 1. 뜻밖의 dfs😫

'**가장 짧은 변환 과정**' 을 찾아야 하니 **bfs**를 적용해보려고 했다.

`words` 에 `target`이 존재하지 않으면 0을 리턴하고, 존재하면 탐색을 한다.

이때.. 한번에 한 개의 알파벳만 바꿀 수 있으므로 **결국 알파벳 하나만 다른 단어를 찾아서 이동**해야 한다. 이동가능한 단어를 찾는 함수를 `findNext` 로 따로 정의해줬다.

```tsx
// 다음으로 접근 가능한 단어 찾기
function findNext(now, _words){
    let _nextWords = []; // 이동 가능한 word 배열
		
    for(let i=0; i<_words.length; i++){
        let target = _words[i];
        let matches = 0;

        for(let j=0; j<now.length; j++){
            if(target[j] !== now[j]) matches++;
            if(matches === 2) break;
        }
				
        // 다른 알파벳이 1개일때만 이동 가능하므로 push
        if(matches === 1) _nextWords.push(target);
    }

    return _nextWords;
}
```

그리고 `findNext` 를 호출하는 `visit` 함수를 만들었다.    
여기서 약간 문제가 생김.. 생각은 bfs였는데 구현하고나니 dfs가 되었다..


```tsx
function visit(begin, words, answer){
    let nextWords = [];
		
    // target과 현재 단어가 같다면 answerList에 횟수 push 
    if(begin === target) return answerList.push(answer);

    nextWords = findNext(begin, words);
		
    // 이동가능한 다음 단어 방문
    // words에서 현재 단어를 제외하여 방문하지 않은 단어만 방문하도록 한다.
    for(let i=0; i<nextWords.length; i++){
        let _words = words.slice();
        let idx = _words.indexOf(nextWords[i]);
        _words.splice(idx, 1);
        
        visit(nextWords[i], _words, answer+1);
    }
}
```

사실 진짜 손가는대로 코딩한거라.. 일단 한번 돌려보고 정리좀 해야지 했는데 통과했다... 어리둥절ㅠㅠ 

```tsx
function solution(begin, target, words) {
    let answerList = [];
    
    // 존재하지 않는 경우
    if(words.indexOf(target)=== -1) return 0;
    
    // 존재하는 경우
    function visit(begin, words, answer){
        let nextWords = [];

        if(begin === target) return answerList.push(answer);

        nextWords = findNext(begin, words);

        for(let i=0; i<nextWords.length; i++){
            let _words = words.slice();
            let idx = _words.indexOf(nextWords[i]);
            _words.splice(idx, 1);
            
            visit(nextWords[i], _words, answer+1);
        }
    }
    
    // 다음으로 접근 가능한 단어 찾기
    function findNext(now, _words){
        let _nextWords = [];

        for(let i=0; i<_words.length; i++){
            let target = _words[i];
            let matches = 0;

            for(let j=0; j<now.length; j++){
                if(target[j] !== now[j]) matches++;
                if(matches === 2) break;
            }

            if(matches === 1) _nextWords.push(target);
        }

        return _nextWords;
    }
    
    visit(begin, words, 0);
		
    // target이 words에 존재하지만 도달하지 못할수도 있으므로 예외처리
    if(answerList.length === 0) return 0;
    else return answerList.sort((a,b) => a-b)[0];
}
```

```tsx
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.16ms, 30MB)
테스트 2 〉	통과 (0.21ms, 30.1MB)
테스트 3 〉	통과 (0.33ms, 29.9MB)
테스트 4 〉	통과 (0.12ms, 30.2MB)
테스트 5 〉	통과 (0.07ms, 29.9MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
```

### 시도2. 진짜 bfs

```
depth 1 = beign 과 알파벳 1개를 제외하고 모든 알파벳이 같은 단어(들)   
depth 2 = depth 1과 알파벳 1개를 제외하고 모든 알파벳이 같은 단어(들)..
...
```

이런식으로 반복해서 탐색하며 target이랑 같을 때를 찾는다.

이때 각 depth에 n개의 단어가 존재할 수도 있으므로, `queueLeng === 0` 일때 `answer++`를 해준다.

한 depth마다 `answer++` 를 해주는 것이다.

```tsx
// 알파벳 하나만 다른지 체크
function checkNext(w1, w2){
    let matches = 0;
    
    for(let i=0; i<w1.length; i++){
        if(w1[i] !== w2[i]) matches++;
        if(matches > 1) return false;
    }

    return true;
}

function solution(begin, target, words) {
    const queue = [begin]; 
    const visted = new Array(words.length).fill(false);
		let answer = 1;
    let queueLeng = 1;
    
    // 존재하지 않는 경우
    if(words.indexOf(target) === -1) return 0;
    
    // 존재하는 경우
    while(queue.length > 0){
        let now = queue.shift();
        queueLeng--;
        
        for(let i=0; i<words.length; i++){
            if(checkNext(words[i], now)){
                if(words[i] === target){
                    return answer;
                }
                
                if(!visted[i]){
                    visted[i] = true;
                    queue.push(words[i]);
                }
            }
        }
        
        // 아래로 파고 들어가는 게 아니라 옆으로(너비) 탐색을 하기 때문에 
        if(queueLeng === 0) {
            answer++;
            queueLeng = queue.length;
        }
    }

    return answer;
}
```

끝! bfs는 다른분들의 답변을 참고하며 작성했다.