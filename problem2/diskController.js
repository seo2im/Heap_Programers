const solution = (jobs) => {
	let length = jobs.length;
	let answer = 0;
	let time = 0;
	let pq = [];

	while (true) {
		jobs = jobs.filter(job => {
			if (job[0] > time) {
				return true;
			} else {
				pq.push(job);
			}
		})

		if (pq.length === 0) {
			if (jobs.length === 0) {
				break;
			} else {
				time += 1;
			}
		} else {
			let minIndex = 0;
			for (let i = 1; i < pq.length; i++) {
				if (pq[minIndex][1] > pq[i][1]) minIndex = i;
			}
			time += pq[minIndex][1];
			answer += time - pq[minIndex][0];
			pq.splice(minIndex, 1);
		}
		return Math.floor(answer / length);
	}
}