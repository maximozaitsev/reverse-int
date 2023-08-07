module.exports = function reverse(number) {
   
        var reversedNumber = 0;
        var isNegative = number < 0;
    
        if (isNegative) {
            number = -number; 
        }
    
        while (number > 0) {
            var digit = number % 10;
            reversedNumber = reversedNumber * 10 + digit;
            number = Math.floor(number / 10);
        }
    
        return isNegative ? -reversedNumber : reversedNumber;
    
    
};
