function log(...data) {
    if (!process.env.APP_DEBUG) return;

    console.log(...data);
}

module.exports = {
    log
};
