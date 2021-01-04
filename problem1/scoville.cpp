#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> scoville, int K) {
    int answer = 0;
    
    priority_queue<int, vector<int>, greater<int>> heap(scoville.begin(), scoville.end());
    
    while (heap.size() > 1 && heap.top() < K) {
        int a = heap.top();heap.pop();
        int b = heap.top();heap.pop();
        heap.push(a + b * 2);
        answer ++;
    }
    
    if (heap.top() < K)
        return -1;
    
    return answer;
}