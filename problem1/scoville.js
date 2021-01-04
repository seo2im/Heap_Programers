class priorityQueue {
	constructor (arr, cmp) {
		this.arr = arr;
		this.cmp = cmp;
	}

	length () {{
		return this.arr.length;
	}}

	pop () {
		if (this.arr.length === 0)
			return;

		let entry = 0;
		this.arr.forEach((_, i) => {
			if (this.cmp(this.arr[entry], this.arr[i]))
				entry = i;
		});
		return this.arr.splice(entry, 1);
	}

	top () {
		if (this.arr.length === 0)
			return;

		let entry = 0;
		this.arr.forEach((_, i) => {
			if (this.cmp(this.arr[entry], this.arr[i]))
				entry = i;
		});
		return this.arr[entry];
	}

	push (elem) {
		this.arr.push(elem);
	}
}

const solution = (scoville, K) => {
	let answer = 0;
	let pq = new priorityQueue(scoville, (a, b) => a - b > 0 ? true : false);

	while (pq.length() > 1 && pq.top() < K) {
		const a = pq.pop();
		const b = pq.pop();
		pq.push(a + b * 2);
		answer += 1;
	}

	if (pq.top() < K)
		return -1;
	
	return answer;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));