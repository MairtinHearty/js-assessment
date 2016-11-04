exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    argsAsArray: function(fn, arr) {
        return fn(arr[0], arr[1], arr[2])
    },
    speak: function(fn, obj) {
        return fn.call(obj)
    },

    functionFunction: function(str) {
        return str
    },

    makeClosures: function(arr, fn) {

    },

    partial: function(fn, str1, str2) {
        return fn(str1, str2, '!!!!')
    },

    useArguments: function() {

    },

    callIt: function(fn) {

    },

    partialUsingArguments: function(fn) {

    },

    curryIt: function(fn) {

    }
};
