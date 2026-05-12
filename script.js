// A simple chatbot that responds with some predefined answers
function chatbot() {
    let output = "";
    input = input.toLoweCase();
    if (input.includes("hello" || input.icludes("hi"))) {
        output = "Hello, nice to meet you";
    } else if (input.icludes("how are you")) {
        output = "I'm doing fine, thank you for asking";
    } else if (input.includes("what is your name")) {
        output = "My name is Jarvis, I'm a Chatbot"
    } else if (input.includes("what can you do")) {
        output = "I can chat with you  and answer some simple questions"
    } else if (input.includes("tell me a joke")) {
        output = "Wh did the chicken go to the seance?  to get to the other side."
    } else {
        output = "Sorry, I don't understand that. Please try again";
    }

}
// Display the user's message
function displayUserMessage(message) {
let chat = document.getElementById("chat")
let userMessage= document.createElement("div")
}