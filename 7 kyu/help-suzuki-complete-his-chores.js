function choreAssignment(chores) {
    chores.sort((a, b) => a - b);
    const workloads = [];
    for (let i = 0; i < chores.length / 2; ++i)
    {
        workloads.push(chores[i] + chores[chores.length - 1 - i]);
    }

    workloads.sort((a, b) => a - b);
    return workloads;
}