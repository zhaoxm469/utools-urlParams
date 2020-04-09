const { clipboard } = require('electron');
// console.log(require('electron'));

const $el = {
    copy(text=''){
        clipboard.writeText(text)
    }
};

window.$el = $el;