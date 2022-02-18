const jwt = require('jsonwebtoken')

function TokenGenerator(secretOrPrivateKey, secretOrPublicKey, options) {
    this.secretOrPrivateKey = "Test";
    this.secretOrPublicKey = "Test";
    this.options = options; //algorithm + keyid + noTimestamp + expiresIn + notBefore
}

TokenGenerator.prototype.sign = function (payload, signOptions) {
    const jwtSignOptions = Object.assign({}, signOptions, this.options);
    return jwt.sign(payload, this.secretOrPrivateKey, jwtSignOptions);
};


module.exports = TokenGenerator;
