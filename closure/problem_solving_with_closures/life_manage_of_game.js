function createLifeManager(initialLife) {
    let life = initialLife; // স্টেট: লাইফ পয়েন্ট
    
    return {
        loseLife: function(points) {
            life -= points;
            if (life < 0) {
                life = 0;
                console.log("Game Over!");
            }
            return life;
        },
        gainLife: function(points) {
            life += points;
            return life;
        },
        getLife: function() {
            return life;
        },
        resetLife: function() {
            life = initialLife;
            return life;
        }
    };
}

// গেম লাইফ ম্যানেজার তৈরি
const lifeManager = createLifeManager(5);

console.log(lifeManager.getLife()); // ৫
console.log(lifeManager.loseLife(2)); // ৩
console.log(lifeManager.loseLife(4)); // "Game Over!", ০
console.log(lifeManager.gainLife(3)); // ৩
console.log(lifeManager.resetLife()); // ৫
