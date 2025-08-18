const validateCityParam = (req, res, next) => {
    if (!req.query.city) {
        return res.status(400).json({ error: 'City parameter is required' });
    }
    next();
};

module.exports = {
    validateCityParam
};
