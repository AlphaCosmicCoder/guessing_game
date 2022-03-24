const random = Math.floor(Math.random() * 100);
console.log(random);
let counter = 0;
let bre = 0;
function display() {
    ++counter;
    console.log(random);
    const main_value = document.getElementById('text_box').value;
    // console.log(main_value);

    // console.log("Random no. is : " + random);

    if (main_value == random) {
        document.getElementById('correct').style.display = "block";
        document.getElementById('correct').innerText = "\tCorrect  ....   Answer !! " + "\n" + " You Guessed It In " + counter + " Attempts";
        document.getElementById('incorrect').style.display = "none";
        counter = 0;
        bre = 1;
    } else if (main_value > random) {
        document.getElementById('correct').style.display = "none";
        document.getElementById('incorrect').style.display = "block";
        document.getElementById('incorrect').innerText = "Incorrect...... " + "\n" + " Please Guess lower No....!!";
    } else if (main_value < random) {
        document.getElementById('correct').style.display = "none";
        document.getElementById('incorrect').style.display = "block";
        document.getElementById('incorrect').innerText = "Incorrect...... " + "\n" + " Please Guess Higher No....!!";
    }// else {
    //     document.getElementById('correct').style.display = "none";
    //     document.getElementById('incorrect').style.display = "block";
    // }

    setTimeout(function () {
        document.getElementById('correct').style.display = "none";
        document.getElementById('incorrect').style.display = "none";
        console.clear();
        document.getElementById('text_box').value = null;
    }, 2000);
}