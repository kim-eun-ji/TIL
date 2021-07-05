# [탐욕법(Greedy)][Lv1]  - 체육복 자바스크립트 js

## 프로그래머스 문제

[https://programmers.co.kr/learn/courses/30/lessons/42862](https://programmers.co.kr/learn/courses/30/lessons/42862)

## 시도 1.

`_lost` 순수 함수를 만들기 위해 원본 복사

`students` 여분 체육복 있는 학생번호를 키로 저장하기 위함. [학생번호, 1(체육복개수)] 

```jsx
function solution(n, lost, reserve) {
    let answer = n - lost.length;
    let _lost = lost.slice();
    const students = new Map();
    
    // 여분 체육복 있는 학생번호 저장
    reserve.map(v => {
        let targetIdx = _lost.indexOf(v);
        
        if(targetIdx === -1){
            students.set(v, 1);
        } else { // 도난당했는데 여분 있는 학생일 경우 수업 가능 but 대여는 불가
            answer++;
            _lost.splice(targetIdx, 1);
        }
    });
    
    // 체육복 있는지 체크
    _lost.map(v => {
        if(students.get(v-1) === 1){
            students.set(v-1, 0);
            answer++;
        } else if(students.get(v+1) === 1){
            students.set(v+1, 0);
            answer++;
        }
    })
    
    return answer;
}
```

```jsx
채점을 시작합니다.
정확성  테스트
테스트 1 〉	통과 (0.13ms, 30.1MB)
테스트 2 〉	통과 (0.10ms, 30MB)
테스트 3 〉	통과 (0.14ms, 30.1MB)
테스트 4 〉	통과 (0.15ms, 30MB)
테스트 5 〉	통과 (0.13ms, 29.9MB)
테스트 6 〉	통과 (0.12ms, 30.1MB)
테스트 7 〉	통과 (0.14ms, 29.9MB)
테스트 8 〉	통과 (0.12ms, 29.9MB)
테스트 9 〉	통과 (0.10ms, 30.3MB)
테스트 10 〉	통과 (0.14ms, 30.1MB)
테스트 11 〉	통과 (0.12ms, 30.2MB)
테스트 12 〉	통과 (0.12ms, 30.2MB)
채점 결과
정확성: 100.0
합계: 100.0 / 100.0
```