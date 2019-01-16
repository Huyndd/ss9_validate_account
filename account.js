var regexp = /^[_a-z0-9]{6,}$/;
function invalid_Account(str) {
    regexp = /^[_a-z0-9]{6,}$/;
    if (regexp.test(str)) {
        return true;
    }
    return false;
}