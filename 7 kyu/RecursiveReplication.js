function replicate(times, number) {
    if (times < 1) {
        return [];
    }
    
    if (times === 1) {
        return [number];
    }

    return replicate(times - 1, number).concat(number);    
  }