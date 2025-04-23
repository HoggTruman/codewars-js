function roastLegacy(workloads) {
    const lowerWorkloads = workloads.toLowerCase();
    const legacyValues = {
        "cobol": 1000,
        "nonobject": 500,
        "monolithic": 500,
        "fax": 100,
        "modem": 100,
        "thickclient": 50,
        "tape": 50,
        "floppy": 50,
        "oldschoolit": 50
    };

    const complaints = ["slow!", "expensive!", "manual!", "down!", "hostage!", "security!"];

    let resolvedCount = 0;
    let points = 0;

    for (let i = 0; i < lowerWorkloads.length; ++i)
    {
        for (const complaint of complaints) {
            if (lowerWorkloads.startsWith(complaint, i)) {
                ++resolvedCount;
                break;
            }
        }

        for (const [legacy, legacyValue] of Object.entries(legacyValues)) {
            if (lowerWorkloads.startsWith(legacy, i)) {
                points += legacyValue;
                break;
            }
        }
    }

    return resolvedCount === 0 && points === 0? 
        'These guys are already DevOps and in the Cloud and the business is happy!':
        `Burn baby burn disco inferno ${points} points earned in this roasting and ${resolvedCount} complaints resolved!`;        
}