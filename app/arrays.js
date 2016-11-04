exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function(arr, item) {
        return arr.indexOf(item)
    },

    sum: function(arr) {
        var sum = arr.reduce(function(a, b) {
            return a + b
        }, 0)
        return sum
    },

    remove: function(arr, item) {
        var arrRet = arr.filter(function(element) {
            return element != item
        })
        return arrRet
    },

    removeWithoutCopy: function(arr, item) {
        arr.filter(e => e !== item)
        return arr
    },

    append: function(arr, item) {
        arr.push(item)
        return arr
    },

    truncate: function(arr) {
        arr.splice(-1)
        return arr
    },

    prepend: function(arr, item) {
        arr.unshift(item)
        return arr
    },

    curtail: function(arr) {
        arr.shift()
        return arr
    },

    concat: function(arr1, arr2) {
        return arr1.concat(arr2)
    },

    insert: function(arr, item, index) {
        arr.splice(index, 0, item)
        return arr
    },

    count: function(arr, item) {
        var occ = []
        arr.filter(function(element) {
            if (element === item) {
                occ.push(element)
            }
        })
        return occ.length
    },

    duplicates: function(arr) {
        var sorted_arr = arr.sort();
        var results = [];
        for (var i = 0; i < arr.length; i++) {
            var nxtInd = sorted_arr.indexOf(sorted_arr[i], i + 1)
            if (nxtInd != -1 && i <= sorted_arr.indexOf(sorted_arr[i])) {
                results.push(sorted_arr[i]);
            }
        }
        return results
    },

    square: function(arr) {
        var res = []
        arr.forEach(function(element) {
            res.push(element * element)
        })
        return res
    },

    findAllOccurrences: function(arr, target) {
        var res = []
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                res.push(i)
            }
        }
        return res
    }
};
