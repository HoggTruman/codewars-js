// https://www.codewars.com/kata/586538146b56991861000293

const NATO = {
  'A': 'Alfa',
  'B': 'Bravo',
  'C': 'Charlie',
  'D': 'Delta',
  'E': 'Echo',
  'F': 'Foxtrot',
  'G': 'Golf',
  'H': 'Hotel',
  'I': 'India',
  'J': 'Juliett',
  'K': 'Kilo',
  'L': 'Lima',
  'M': 'Mike',
  'N': 'November',
  'O': 'Oscar',
  'P': 'Papa',
  'Q': 'Quebec',
  'R': 'Romeo',
  'S': 'Sierra',
  'T': 'Tango',
  'U': 'Uniform',
  'V': 'Victor',
  'W': 'Whiskey',
  'X': 'Xray',
  'Y': 'Yankee',
  'Z': 'Zulu',
}

function toNato(words) {
    const result = [];
    for (const c of words) {
        if (/[A-Za-z]/.test(c)) {
            result.push(NATO[c.toUpperCase()]);
        }
        else if (",.!?".includes(c)) {
            result.push(c);
        }
    }

    return result.join(" ");
}