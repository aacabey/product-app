if (!String.prototype.format) {
    String.prototype.format = function (...args) {
        if (typeof args != "object") {
            args = Array.prototype.slice.call(args, 1);
        }
        return !!this ? this.replace(/{([^}.]+)}/g, (match, param) => !!args[param] ? args[param] : match) : null
    }
}