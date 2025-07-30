// https://www.codewars.com/kata/58223370aef9fc03fd000071

function dashatize(num) {
    let sections = [];
    for (const c of num.toString()) {
        if ("13579".includes(c)) {
            sections.push(c);
        }
        else if ("02468".includes(c)) {
            if (sections.length === 0 || "13579".includes(sections[sections.length - 1])) {
                sections.push(c);
            }
            else {
                sections[sections.length - 1] += c;
            }            
        }
    }

    return sections.join("-");
}