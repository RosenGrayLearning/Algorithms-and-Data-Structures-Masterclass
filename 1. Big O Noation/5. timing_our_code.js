// slow

function addUpTo(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;

}


// fast




function addUpTo(n) {
    return n * (n + 1) / 2;
}