// https://www.codewars.com/kata/5a353a478f27f244a1000076

async function sayJoke(apiUrl, jokeId) {
    const res = await fetch(apiUrl);
    const data = await res.json();
    
    if (data.jokes === undefined) {
        throw new Error(`No jokes at url: ${apiUrl}`)
    }

    const joke = data.jokes.find(x => x.id === jokeId);

    if (joke === undefined) {
        throw new Error(`No jokes found id: ${jokeId}`); 
    }

    return {
        saySetup() { return joke.setup; },
        sayPunchLine() { return joke.punchLine; }
    };
}