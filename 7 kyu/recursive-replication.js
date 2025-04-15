function replicate(times, number) {
    if (times < 1) {
        return [];
    }

    return replicate(times - 1, number).concat(number);    
}