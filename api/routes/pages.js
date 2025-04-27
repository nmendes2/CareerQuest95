const express = require("express");
const router = express.Router();
const path = require('path');

router.get("/", (req, res, next) => {
    const indexPagePath = path.join(__dirname, '../../public_html/index.html');
    res.sendFile(indexPagePath, (err) => {
        if (err) {
            next();
        }
    });
});

router.get('/:page', (req, res, next) => {
    const pagePath = path.join(__dirname, '../../public_html', req.params.page + '.html');
    res.sendFile(pagePath, (err) => {
        if (err) {
            next(); // If file not found, move on to 404 or other handlers
        }
    });
});

module.exports = router;