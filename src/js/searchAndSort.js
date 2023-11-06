module.exports = {
    search: function (value, arr) {
        const searchValue = value.toLowerCase();
        const filtered = arr.filter((item) => {
            const title = item.title.toLowerCase();
            return title.includes(searchValue);
        });
        return filtered;
    }
}