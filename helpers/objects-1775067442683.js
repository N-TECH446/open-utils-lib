// Object helper
module.exports.pick = (o, keys) => keys.reduce((a,k) => (k in o && (a[k]=o[k]), a), {});

// Updated: 1775067442683
