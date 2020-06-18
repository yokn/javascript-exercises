const ftoc = function(inputF) {
        return Math.floor((5 / 9) * (inputF - 32));
};

const ctof = function(inputC) {
        return Math.floor((9 / 5) * inputC + 32);
};

module.exports = {
        ftoc,
        ctof,
};
