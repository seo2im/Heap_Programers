# Scoville

### Problem Explain

[programers src](https://programmers.co.kr/learn/courses/30/lessons/42626)

### Solution

Make **PriorityQueue** getting low scoville food.

1. Get two low soville foods until queue size 1 or scoville over K.

2. Mix them & count up & push it to queue.

3. Loop 1 ~ 2 when get over K, or queue size 1

4. If scoville is over K, return count, if not return -1;