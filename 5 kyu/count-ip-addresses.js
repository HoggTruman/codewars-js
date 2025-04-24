function ipsBetween(start, end) {
    return convertIP(end) - convertIP(start);
}

function convertIP(ip) {
    const parts = ip.split(".");
    let sum = 0;

    for (let i = 0; i < parts.length; ++i) {
        sum += Number(parts[i]) * Math.pow(256, parts.length - i - 1);
    }

    return sum;
}