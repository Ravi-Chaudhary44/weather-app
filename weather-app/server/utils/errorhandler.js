const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
        error: 'Something went wrong!',
        message: err.message
    });
};

const notFoundHandler = (req, res) => {
    res.status(404).json({
        error: 'Endpoint not found'
    });
};

module.exports = {
    errorHandler,
    notFoundHandler
};
