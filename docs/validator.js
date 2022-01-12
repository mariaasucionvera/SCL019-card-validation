const validator = {
    isValid(creditCardNumber) {
        let numberArray = creditCardNumber.split('').map(Number);
        numberArray = numberArray.reverse();

        //console.log(numberArray);

        for (let i = 0; i < numberArray.length; i++) {
            if (i % 2 === 1) {
                numberArray[i] = numberArray[i] * 2;
                if (numberArray[i] >= 10) {
                    numberArray[i] = String(numberArray[i]).split("").map(Number).reduce(function (a, b) {
                        return a + b
                    });
                } else {
                    numberArray[i] = numberArray[i] * 1;
                }
            }
        }

        let valid = 0
        for (let i = 0; i < numberArray.length; i++) {
            valid += numberArray[i];
        }

        if (valid % 10 == 0) {

            return true;
        } else {

            return false;
        }
    }

    , //maskify(creditCardNumber) {
        //let hideNum = [];

        //for (let i = 0; i < creditCardNumber.length; i++) {
          //  if (i < creditCardNumber.length - 4) {
            //    hideNum.push("*");
            //} else {
              //  hideNum.push(creditCardNumber[i]);
            //}
        //}
        //return hideNum.join("");


    //}
    
}
export default validator;
