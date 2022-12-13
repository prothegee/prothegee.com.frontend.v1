import about from "./svelte/about.svelte";


const __about__ = new about({
    target: document.getElementById("content")
});


export default __about__;