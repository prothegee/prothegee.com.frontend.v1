import authWebSignIn from "./svelte/authWebSignIn.svelte";


const __authWebSignIn__ = new authWebSignIn({
    target: document.getElementById("content")
});


export default __authWebSignIn__;