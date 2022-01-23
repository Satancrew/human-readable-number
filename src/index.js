module.exports = function toReadable (number) {
        let answer;
        let Simple = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let Tens = [null, null, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
        if (number >= 0 && number <= 19) {
           answer = Simple[number];
        } else if (number >= 20 && number <= 99) {
            if (number % 10 === 0) {
            answer = Tens[Math.floor(number / 10)];  
            } else {
            answer = Tens[Math.floor(number / 10)] + ' ' + Simple[number % 10];
        }
        } else if (number >= 100 && number < 1000) {
            if (number % 100 / 10 === 0 && number % 100 % 10 === 0) {
            answer = Simple[Math.floor(number/100)] + ' hundred'; 
            } else if (Math.floor(number % 100 < 20)){
            answer = Simple[Math.floor(number/100)] + ' hundred ' + Simple[number%100];
            } else if ((number % 100 /10) >= 2 && number % 100 % 10 === 0) {
            answer = Simple[Math.floor(number/100)] + ' hundred ' + Tens[Math.floor((number % 100) / 10)];
            } else if ((number % 100 / 10) >= 2) {
            answer = Simple[Math.floor(number / 100)] + ' hundred ' + Tens[Math.floor((number % 100) / 10)] + ' ' + Simple[number  %100 % 10];
            }
        }
        return answer;
}

