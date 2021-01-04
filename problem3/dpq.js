class DPQ {
    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }
    
    len() {
        return this.arr.length;
    }
    
    max() {
        if (this.arr.length === 0)
            return 0;
        return this.arr.reduce((a, b)  => a > b ? a : b);
    }
    
    min () {
        if (this.arr.length === 0)
            return 0;
        return this.arr.reduce( (a, b)  => a > b ? b : a);
    }
    
    popMax() {
        if (this.arr.length === 0)
            return 0;
        const idx = this.arr.reduce((max, x, i, arr) => x > arr[max] ? i : max, 0);
        return (this.arr.splice(idx ,1));
    }
    
    popMin() {
        if (this.arr.length === 0)
            return 0;
        const idx = this.arr.reduce((min, x, i, arr) => x < arr[min] ? i : min, 0);
        return (this.arr.splice(idx ,1));
    }
}

function solution(operations) {
    var answer = [];
    
    const dpq = new DPQ();
    
    operations.forEach(order => {
        if (order === "D -1") {
            dpq.popMin();
        }
        else if (order === "D 1") {
            dpq.popMax();
        }
        else {
            dpq.push(Number(order.slice(2)));
        }
        
        console.log(dpq.arr);
    })
    
    return [dpq.max(), dpq.min()]
}