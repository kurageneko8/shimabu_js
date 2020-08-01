// function isTweetable(text) {
    
// }

function unfollow() {
    console.log("unfollowed")
}

// function cancelTweet(fn) {
//     console.log("cancelled the tweet")
// }

const cancelTweet = function() {
    console.log("cancelled the tweet")
}

// function confirmed(fn) {
//     if(window.confirm("are you sure?")) {
//         fn();
//     }
// }

function confirmed(fn) {
    const input = window.prompt("u wanna execute?")
    // if(input === "y") {
        fn(input);
    // }
}

confirmed(function (input) {
    if(input === "y") {
        console.log("remove repository");
    }
    
})

const btn = document.getElementById("button");
btn.addEventListener("click", function () {
    console.log("unfollow");
})

const foods = ["carrot","potato","onion"];

foods.forEach(function (food) {
    console.log(food);
})