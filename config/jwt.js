
const jwt = require('jsonwebtoken');

const TokenGenerator = require('./token-generator');

const sign = function (payload) {
    const tokenGenerator = new TokenGenerator('a', 'a', { algorithm: 'HS256', keyid: '1', noTimestamp: false })
    return tokenGenerator.sign({ data: payload }, { audience: payload, issuer: payload, jwtid: '1', subject: 'user' })
}

const verify = function (token, callback) {
    jwt.verify(token, 'Test', callback);
}

module.exports = { sign, verify }




