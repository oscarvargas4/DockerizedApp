const logger = (req, res, next) => {
    console.log('Logging...');
    req.logger = 'Logged';
    next();
}

module.exports = logger;