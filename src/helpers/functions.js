
import moment from "moment";
const regNumber = /^\d+$/;

var formatDate = function (value, format) {
    if (!value) return '';
    value = new Date(regNumber.test(value) ? parseFloat(value) : value);
    return moment(value).format(format)
};


export const functions = {
    ext_RandomCount() {
        return Math.floor(Math.random() * (100 + 1));
    },
    ext_BgImage(image) {
        if (!image)
            return '';

        return { backgroundImage: "url('" + image + "')" };
    },
    formatShortDate: function(value) {
        return formatDate(value, 'MMM DD YYYY');
    },
    formatDate
}