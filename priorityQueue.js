class PriorityQueue {
	constructor (cmp) {
		this.arr = [];
		this.cmp = cmp;
	}

	push(data) {
		this.arr.push(data);
	}

	pop() {
		let entry = 0;
		this.arr.forEach((_, i) => {
			if (this.cmp(this.arr[entry], this.arr[i]))
				entry = i;
		});

		return this.arr.splice(entry, 1);
	}
}

//For testing
const pQueue = new PriorityQueue((a, b) => b[0] < a[0]);
pQueue.push([5, '5']);
pQueue.push([2, '2']);
pQueue.push([7, '7']);
console.log(pQueue.pop())