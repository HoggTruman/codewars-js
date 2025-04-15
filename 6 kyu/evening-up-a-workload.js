// https://www.codewars.com/kata/56431c04ed1454a35d00003b

function splitWorkload(workload) {
    if (workload.length === 0) {
        return [null, null];
    }

    const total = workload.reduce((sum, a) => sum + a, 0);
    let left = 0;    
    let minDiff = Math.abs(total);
    let minIndex = 0;

    for (let i = 0; i < workload.length; ++i)
    {
        left += workload[i];
        let diff = Math.abs(2 * left - total);

        if (diff < minDiff)
        {
            minDiff = diff;
            minIndex = i + 1;
        }
    }

    return [minIndex, minDiff];
}