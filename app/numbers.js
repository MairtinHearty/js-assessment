exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
    valueAtBit: function(num, bit) {
        var bin = (num >>> 0).toString(2).split('')
        var ind = bin.length - bit
        return Number(bin[ind])
    },

    base10: function(str) {
        return parseInt(str, 2)

    },

    convertToBinary: function(num) {
        return num.toString(2)
    },

    multiply: function(a, b) {
        var prec = Math.pow(10, b)
        return Number((b * a).toPrecision(prec))
    }
};
