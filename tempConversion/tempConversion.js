const ftoc = function(inputF) {
        return Math.round((5 / 9) * (inputF - 32) * 10) / 10;
};

const ctof = function(inputC) {
        return Math.round(((9 / 5) * inputC + 32) * 10) / 10;
};

module.exports = {
        ftoc,
        ctof,
};
