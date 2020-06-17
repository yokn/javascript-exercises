const leapYears = function(year) {
        if (year % 100) {
                if (year % 400) {
                        return true;
                }
                return false;
        }
        if (year % 4) {
                return true;
        }
        return false;
};

module.exports = leapYears;
