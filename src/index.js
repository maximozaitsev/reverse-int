module.exports = function reverse(n) {
    let a = String(Math.abs(n));
    let result = "";
    for (let i = a.length - 1; i >= 0; i--) {
        result += a[i];
    }

    return result;
};
