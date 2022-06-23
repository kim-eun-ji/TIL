# [카카오 블라인드 채용][Lv2] 오픈채팅방 - 자바스크립트 js

## 프로그래머스 문제

[https://programmers.co.kr/learn/courses/30/lessons/42888](https://programmers.co.kr/learn/courses/30/lessons/42888)

거의 1년간 문제를 안풀다가.. 회사에서 채용 절차에 프로그래머스 코딩테스트를 도입한다는 소식을 듣고 오랜만에 그냥 하나 풀어봤다.

### 아이디어

문제 설명 중 다음 문구에서 힌트를 얻었다.

```jsx
닉네임을 변경할 때는 기존에 채팅방에 출력되어 있던 메시지의 닉네임도 **전부 변경**된다.
```

1. record를 **역순**으로 순회하며
2. `enter`, `leave` 일 때 uid와 닉네임을 따로 저장한다. 이때, 역순 조회기때문에 이미 저장된 닉네임은 저장하지 않도록 한다.
3. 다시 record를 순차적으로 돌며 출력하는데, 이때 **닉네임은 2번에서 저장해둔 배열에서 uid로** 가져온다.

## 시도 1. - object

효율성 고려를 안했다. 

처음에 아이디어 떠올리고 2번에서 사용될 저장 변수를 map으로 하려다가 object로도 될 것 같아서 일단 익숙한 object로 갔다…...ㅎㅎ; 역시나… **시간초과~**

```jsx
function solution(record) {
    const ENTER_CODE = 'Enter';
    const LEAVE_CODE = 'Leave';
    const CHANGE_CODE = 'Change';
    let _record = record.slice();
    let visit = [];
    let answer = [];
    
    // 1. 역순으로 visit 배열에 uid, 닉네임 저장
    _record.reverse().map(r => {
        let _r = r.split(' ');
        if(_r[0] !== LEAVE_CODE && !Object.keys(visit).includes(_r[1]) ){
           visit[_r[1]] = _r[2];
        }
    });
		
    // 2. 1번에서 저장한 visit배열을 이용하여 채팅방 기록 출력
    record.map(r => {
        let _r = r.split(' ');
        switch(_r[0]){
            case CHANGE_CODE:
                break;
            case ENTER_CODE:
                answer.push(`${visit[_r[1]]}님이 들어왔습니다.`);
                break;
            case LEAVE_CODE:
                answer.push(`${visit[_r[1]]}님이 나갔습니다.`);
                break;
        }
    })
    
    return answer;
}
```

```jsx
테스트 1 〉	통과 (0.29ms, 30.1MB)
테스트 2 〉	통과 (0.35ms, 30.1MB)
테스트 3 〉	통과 (0.37ms, 30.1MB)
테스트 4 〉	통과 (0.41ms, 30.3MB)
테스트 5 〉	통과 (1.31ms, 30.3MB)
테스트 6 〉	통과 (5.46ms, 30.9MB)
테스트 7 〉	통과 (1.68ms, 30.1MB)
테스트 8 〉	통과 (3.81ms, 31MB)
테스트 9 〉	통과 (21.28ms, 32.2MB)
테스트 10 〉	통과 (4.17ms, 30.9MB)
테스트 11 〉	통과 (5.17ms, 30.9MB)
테스트 12 〉	통과 (5.29ms, 30.6MB)
테스트 13 〉	통과 (3.75ms, 31MB)
테스트 14 〉	통과 (22.01ms, 32.2MB)
테스트 15 〉	통과 (0.34ms, 30.1MB)
테스트 16 〉	통과 (0.34ms, 30.1MB)
테스트 17 〉	통과 (0.39ms, 29.8MB)
테스트 18 〉	통과 (0.48ms, 30.1MB)
테스트 19 〉	통과 (2.59ms, 30.2MB)
테스트 20 〉	통과 (3.49ms, 30.4MB)
테스트 21 〉	통과 (2.67ms, 30.7MB)
테스트 22 〉	통과 (3.19ms, 30.5MB)
테스트 23 〉	통과 (2.40ms, 30.2MB)
테스트 24 〉	통과 (2.71ms, 30.2MB)
테스트 25 〉	실패 (시간 초과)
테스트 26 〉	실패 (시간 초과)
테스트 27 〉	실패 (시간 초과)
테스트 28 〉	실패 (시간 초과)
테스트 29 〉	실패 (시간 초과)
테스트 30 〉	실패 (시간 초과
테스트 31 〉	실패 (시간 초과)
테스트 32 〉	실패 (시간 초과)
```

## 시도2. object만 map으로 바꿈.

```jsx
function solution(record) {
    const ENTER_CODE = 'Enter';
    const LEAVE_CODE = 'Leave';
    const CHANGE_CODE = 'Change';
    let _record = record.slice();
    let visit = **new Map();**
    let answer = [];
    
    // 1. 역순으로 visit 배열에 uid, 닉네임 저장
    _record.reverse().map(r => {
        let _r = r.split(' ');
        if( _r[0] !== LEAVE_CODE && !visit.has(_r[1]) ){
            visit.set(_r[1], _r[2]);
        }
    });

    // 2. 1번에서 저장한 visit배열을 이용하여 채팅방 기록 출력
    record.map(r => {
        let _r = r.split(' ');
        let name = visit.get(_r[1]);
        switch(_r[0]){
            case CHANGE_CODE:
                break;
            case ENTER_CODE:
                answer.push(`${name}님이 들어왔습니다.`);
                break;
            case LEAVE_CODE:
                answer.push(`${name}님이 나갔습니다.`);
                break;
        }
    })

    return answer;
}
```

```jsx
테스트 1 〉	통과 (0.20ms, 30.1MB)
테스트 2 〉	통과 (0.13ms, 30.1MB)
테스트 3 〉	통과 (0.25ms, 30.3MB)
테스트 4 〉	통과 (0.22ms, 30.2MB)
테스트 5 〉	통과 (1.62ms, 30.1MB)
테스트 6 〉	통과 (1.76ms, 30.2MB)
테스트 7 〉	통과 (1.35ms, 30MB)
테스트 8 〉	통과 (1.77ms, 30.3MB)
테스트 9 〉	통과 (1.83ms, 29.9MB)
테스트 10 〉	통과 (1.75ms, 30.3MB)
테스트 11 〉	통과 (0.99ms, 30.1MB)
테스트 12 〉	통과 (1.02ms, 30.2MB)
테스트 13 〉	통과 (1.85ms, 30.1MB)
테스트 14 〉	통과 (1.99ms, 30.4MB)
테스트 15 〉	통과 (0.15ms, 30MB)
테스트 16 〉	통과 (0.17ms, 30.1MB)
테스트 17 〉	통과 (0.21ms, 30.1MB)
테스트 18 〉	통과 (0.24ms, 30.2MB)
테스트 19 〉	통과 (1.69ms, 30MB)
테스트 20 〉	통과 (1.76ms, 30.4MB)
테스트 21 〉	통과 (1.59ms, 30.1MB)
테스트 22 〉	통과 (1.63ms, 30.3MB)
테스트 23 〉	통과 (1.67ms, 30.3MB)
테스트 24 〉	통과 (1.57ms, 30.1MB)
테스트 25 〉	통과 (209.13ms, 75.1MB)
테스트 26 〉	통과 (213.10ms, 87.9MB)
테스트 27 〉	통과 (277.82ms, 94MB)
테스트 28 〉	통과 (251.95ms, 96.4MB)
테스트 29 〉	통과 (265.87ms, 96.2MB)
테스트 30 〉	통과 (203.58ms, 75.8MB)
테스트 31 〉	통과 (235.89ms, 101MB)
테스트 32 〉	통과 (174.32ms, 92.1MB)
```

어려운 문제가 아니라서 푸는 데 오래 걸리진 않았다… 레벨 1같은 느낌..?

다른 사람들의 풀이를 보니 로직 자체는 다 비슷하게 짜여있었다.

+나도 이렇게 선언할걸 싶었던 부분.  알면서도 늘 실전에선 까먹는 것 같다.

```jsx
const [action, id, name] = history.split(' ');
```

*[2019 KAKAO BLIND RECRUITMENT][Lv2] 오픈채팅방 - 자바스크립트 js 문제 풀이*