function createCalculator(initialValue){
    /*
        -স্টেট ম্যানেজমেন্টের জন্য একটি ভেরিয়েবল
        -Declare a variable for managing state
    */
    let value=initialValue;

    return {
        add:function(num){
            value +=num; // ভ্যালু আপডেট
            return value; // বর্তমান ভ্যালু দেখায়
        },

        substract:function(num){
            value -=num;    // ভ্যালু আপডেট
            return value;
        },

        multiply:function(num){
            value *=num;    
            return value;
        },
        divide:function(num){
            if(num !==0){
                value /=num; 
            }else{
                console.error("cannot divide by zero");
            }
            return value;
        },
        reset: function(){
            value=initialValue;
            return value;
        },
        getValue:function(){
            return value;
        },
    };
}
    /*
        -ক্যালকুলেটর তৈরি করা হচ্ছে
        -Create a calculator
    */
const calculator=createCalculator(10);  //pass a initial value;
console.log(calculator.add(5));         // update output: 10+5=15 
console.log(calculator.substract(7));   // update output: 15-7=8
console.log(calculator.multiply(5));    // update output: 8*5=40
console.log(calculator.divide(5));      // update output: 40/5=8 
console.log(calculator.getValue());     // present output:8
console.log(calculator.reset());        //reset value to initial value