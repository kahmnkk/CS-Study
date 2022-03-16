# Algorithm Study

알고리즘과 [프로그래머스](https://programmers.co.kr) 연습문제 풀이 정리

<br></br>

## 목차

-   [Graph, 그래프](#graph-그래프)
    -   [Depth-First Search, 깊이 우선 탐색](#depth-first-search-깊이-우선-탐색)
    -   [Breadth-First Search, 너비 우선 탐색](#breadth-first-search-너비-우선-탐색)
    -   [Dijkstra, 다익스트라](#dijkstra-다익스트라)
    -   [Minimum Spanning Tree, 최소 신장 트리](#minimum-spanning-tree-최소-신장-트리)
-   [Dynamic Programming, 동적계획법](#dynamic-programming-동적계획법)
-   [Linked List, 연결 리스트](#linked-list-연결-리스트)
-   [Greedy Algorithm, 그리디 알고리즘](#greedy-algorithm-그리디-알고리즘)
-   [Prefix Sum, 누적합](#prefix-sum-누적합)

<br></br>

# Graph, 그래프

<br></br>

## Depth-First Search, 깊이 우선 탐색

-   임의의 노드에서 시작하여 다른 루트로 가기 전에 해당 루트를 모두 탐색
-   경로 존재 판별 등에 사용
-   노드 방문 여부 검증 필요
-   그래프, 재귀호출 사용

<br></br>

## Breadth-First Search, 너비 우선 탐색

-   임의의 노드에서 시작하여 인접한 노드를 먼저 탐색
-   두 노드 사이의 최단 경로를 찾고 싶을 때 사용 - 그래프 가중치가 없을 경우
-   노드 방문 여부 검증 필요
-   그래프, 큐(Queue) 사용 - 선입선출(FIFO) 방식

![dfs_bfs](https://www.hackerearth.com/blog/wp-content/uploads/2015/05/dfsbfs_animation_final.gif)  
(출처) https://www.hackerearth.com/blog/

<br></br>

## Dijkstra, 다익스트라

-   그래프 가중치가 있을 경우 두 노드 사이의 최단 경로를 찾고 싶을 때 사용
-   출발 노드에서 다른 노드로 가는 최단 경로를 모두 구함
-   음의 간선이 있을 경우 사용 불가
-   그리디 알고리즘 + 동적계획법

<br></br>

## Minimum Spanning Tree, 최소 신장 트리

-   Spanning Tree
    -   그래프 내의 모든 정점을 최소 간선의 개수로 연결한 트리
    -   사이클이 존재하면 안됨
    -   N개의 정점일 경우 N-1개의 간선이 존재
-   Spanning Tree에 사용된 간선들의 가중치 합이 최소인 트리
-   도로 건설, 전기 회로, 통신망, 배관 등의 문제에서 사용
-   Kruskal Algorithm, 크루스칼 알고리즘
    -   Greedy Algorithm을 이용하여 간선 위주로 MST를 구현
    -   각 단계에서 사이클을 이루지 않는 최소 비용 간선을 선택
    -   간선의 개수가 적은 경우 사용 - 간선 정렬 + 매번 사이클을 이루는지 확인 필요
-   Prim Algorithm, 프림 알고리즘
    -   Greedy Algorithm을 이용하여 정점 위주로 MST를 구현
    -   시작 정점에서부터 가장 낮은 가중치를 갖는 정점 선택
    -   모든 정점이 선택될 때까지 반복
    -   간선의 개수가 많은 경우 사용

<br></br>

# Dynamic Programming, 동적계획법

-   큰 문제를 작은 문제로 나누어서 해결
-   이전에 계산한 값을 저장(Memoization)하여 중복 계산을 줄인다는 점이 분할정복과 다름
-   모든 방법을 일일이 검토하여 최적의 해를 찾아내는 방식
-   피보나치 수열, 배낭 문제 등에서 사용

<br></br>

# Linked List, 연결 리스트

-   데이터와 다음 데이터를 가리키는 주소로 이루어진 노드들의 리스트
-   JS, Python 등에서는 기본 리스트가 연결 리스트의 모든 기능을 지원
-   장점: 유동적인 데이터 추가 및 삭제 가능, 수정 시 항상 일정한 속도
-   단점: 저장공간의 효율이 좋지 못함, 접근 속도가 느림

<br></br>

# Greedy Algorithm, 그리디 알고리즘

-   현재 상황에서 가장 좋은 것을 선택하는 알고리즘
-   최적해를 보장해주지 않음
-   동전 거스름돈 문제, 회의실 시간 분배, 작업 스케줄러 등에서 사용

<br></br>

# Prefix Sum, 누적합

-   수열에서 특정 구간의 값을 구할 때 사용
-   매번 계산시: O(n^2), 누적합 사용시: O(n)
-   N번째 수열까지의 합을 prefix_sum[N]에 저장
-   i ~ j의 합 = prefix_sum[j] - prefix_sum[i - 1]
-   변화량의 누적합으로 응용 가능
-   변화량의 누적합 - i번째 수열의 값은 sum[0] + ... + sum[i]
-   변화량의 누적합 - i부터 j까지 +2 -> sum[i] += 2, sum[j + 1] -= 2
