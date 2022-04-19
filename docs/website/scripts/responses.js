function getBotResponse(input) {
    //rock paper scissors
    if (input == "cyber") {
        return "Life!";
    } else if (input == "need") {
        return "peace, food, water";
    } else if (input == "life") {
        return "will become better and better";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}