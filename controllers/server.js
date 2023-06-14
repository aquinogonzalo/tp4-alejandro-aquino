function get(_req, res) {
    res.send('Peticion GET exitosa')
};

function post(_req, res) {
    res.send('Peticion POST exitosa')
};

function put(_req, res) {
    res.send('Peticon PUT exitosa')
};

function deletee(_req, res) {
    res.send('Peticion DELETE exitosa')
}

module.exports = {
    get,
    post,
    put,
    deletee
};