# Disk Controller

### Problem

[programmers src](https://programmers.co.kr/learn/courses/30/lessons/42627)

### Solution

1. Time initialized to current time(`time = 0`)

2. Job update time, filtering it.

3. When job reach staring time, popped & pushed in queue.

4. Find min time disk process in queue, pop it, add time, If pq is empty, time +=1;

5. Loop 2 ~ 4 job & queue empty.