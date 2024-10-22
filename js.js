if (id || code || name) {
    var filtered = result.filter(function (record) {
        if (record.id === id || record.code === code ||  record.name === name) {
            return true;
        } else {
            return false;
        }
    });

    return filtered.shift();
}