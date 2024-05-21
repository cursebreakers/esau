// hello.js

function hello(message) {
    // This function takes a "message" string 
    // Posts it as the page heading, and then logs it to the console. 
    // Try it: hello("It works!")
    const helloWorld = document.getElementById('blogTitle')
    helloWorld.innerHTML = message;
    console.log(message);
}

hello("Hello, World!");
