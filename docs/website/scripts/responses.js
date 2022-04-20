function getBotResponse(input) {
    //rock paper scissors
    if (input == "cyber") {
        return "Life!";
    } else if (input == "need") {
        return "peace, food, water, and love";
    } else if (input == "life") {
        return "will become better and better";
    } 

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "how are you") {
        return "I'm good and you";
    }else {
        return "Try asking something else! BTW thank you for asking";
    }
}
