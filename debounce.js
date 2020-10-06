function debounce(e, n, t) {
    var o, r, i = 0;
    return a => {
        t ? ((o = Date.now()) > i && e(a), i = o + n) : (clearTimeout(r), r = setTimeout(function() {
            (n => {
                e(n)
            })(a)
        }, n))
    }
}
