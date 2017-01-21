// const dir = "../ejs/";
const template = require('../ejs/template.ejs');
const header = require('../ejs/header.ejs'); // 页头的模板
const footer = require('../ejs/footer.ejs'); // 页脚的模板

// const template = require('ejs!../ejs/template.ejs');
// const header = require('ejs!../ejs/header.ejs'); // 页头的模板
// const footer = require('ejs!../ejs/footer.ejs'); // 页脚的模板//todo loader?

module.exports = {
    run: function () {
        return template({
            header: header(),
            footer: footer()
        });
    }
};
