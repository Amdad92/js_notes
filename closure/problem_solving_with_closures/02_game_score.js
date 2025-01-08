/*
    ##চ্যালেঞ্জ: একটি গেম স্কোর সিস্টেম তৈরি করা। আপনার কাজ হলো এমন একটি স্কোর সিস্টেম তৈরি করা, 
    যেখানে আপনি একটি গেমের স্কোর রাখতে পারবেন। এই সিস্টেমে স্কোর বাড়ানো, কমানো, বর্তমান স্কোর দেখা এবং 
    স্কোর রিসেট করার সুযোগ থাকবে।


    ফাংশন তৈরি করুন:

    createScoreSystem() নামক একটি ফাংশন লিখুন যা নিচের ফাংশনগুলো রিটার্ন করবে:

    increaseScore(points) → স্কোর নির্দিষ্ট পয়েন্ট বাড়াবে।
    decreaseScore(points) → স্কোর নির্দিষ্ট পয়েন্ট কমাবে।
    getScore() → বর্তমান স্কোর দেখাবে।
    resetScore() → স্কোরকে ০ তে রিসেট করবে।
*/

function createScoreSystem(initialScore){
    let score=initialScore;
    return {
        increaseScore:function(points){
            score+=points;
            return score;
        },
        decreaseScore:function(points){
            score-=points;
            return score;
        },
        getScore:function(){
            return score;
        },
        resetScore:function(){
           score=initialScore;
           return score;
        },
    };
}
const scoreSystem=createScoreSystem(0);

scoreSystem.increaseScore(10);
console.log(scoreSystem.getScore());

scoreSystem.decreaseScore(3);
console.log(scoreSystem.getScore());

scoreSystem.resetScore();
console.log(scoreSystem.getScore());


//alternative solution with arrow function
/*

function createScoreSystem(initialScore) {
    let score = initialScore;
    return {
        increaseScore: (points) => (score += points),
        decreaseScore: (points) => (score -= points),
        getScore: () => score,
        resetScore: () => (score = initialScore),
    };
}
const scoreSystem = createScoreSystem(0);

console.log(scoreSystem.increaseScore(10)); // 10
console.log(scoreSystem.getScore()); // 10

console.log(scoreSystem.decreaseScore(3)); // 7
console.log(scoreSystem.getScore()); // 7

console.log(scoreSystem.resetScore()); // 0
console.log(scoreSystem.getScore()); // 0

*/