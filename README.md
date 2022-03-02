# Algorithm Study

알고리즘을 정리하고 [프로그래머스](https://programmers.co.kr) 연습문제를 풀어봅니다.

<br></br>

## 목차

-   [Depth-First Search, 깊이 우선 탐색](#depth-first-search-깊이-우선-탐색)
-   [Breadth-First Search, 너비 우선 탐색](#breadth-first-search-너비-우선-탐색)
-   [Dynamic Programming, 동적계획법](#dynamic-programming-동적계획법)

<br></br>

# Depth-First Search, 깊이 우선 탐색

-   임의의 노드에서 시작하여 다른 루트로 가기 전에 해당 루트를 모두 탐색
-   경로 존재 판별 등에 사용
-   노드 방문 여부 검증 필요
-   그래프, 재귀호출 사용

<br></br>

# Breadth-First Search, 너비 우선 탐색

-   임의의 노드에서 시작하여 인접한 노드를 먼저 탐색
-   두 노드 사이의 최단 경로 또는 임의의 경로를 찾고 싶을 때 사용
-   노드 방문 여부 검증 필요
-   그래프, 큐(Queue) 사용 - 선입선출(FIFO) 방식

![dfs_bfs](https://www.hackerearth.com/blog/wp-content/uploads/2015/05/dfsbfs_animation_final.gif)  
(출처) https://www.hackerearth.com/blog/

<br></br>

# Dynamic Programming, 동적계획법

-   큰 문제를 작은 문제로 나누어서 해결
-   이전에 계산한 값을 저장(Memoization)하여 중복 계산을 줄인다는 점이 분할정복과 다름
-   모든 방법을 일일이 검토하여 최적의 해를 찾아내는 방식
-   피보나치 수열, 배낭 문제 등에서 사용
