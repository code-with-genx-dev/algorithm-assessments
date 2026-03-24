function maxProfit(n) {
    let maxEarning = 0;
    let best = { T: 0, P: 0, C: 0 };

    for (let t = 0; t <= Math.floor(n / 5); t++) {
        for (let p = 0; p <= Math.floor(n / 4); p++) {
            for (let c = 0; c <= Math.floor(n / 10); c++) {

                let totalTime = (t * 5) + (p * 4) + (c * 10);

                if (totalTime > n) continue;

                let remainingTime = n - totalTime;

                let earning = (t * 1500 + p * 1000 + c * 2000) * remainingTime;

                if (earning > maxEarning) {
                    maxEarning = earning;
                    best = { T: t, P: p, C: c };
                }
            }
        }
    }

    return { maxEarning, best };
}

console.log(maxProfit(8))