import emailVerification from "./svelte/emailVerification.svelte";


const __emailVerification__ = new emailVerification({
    target: document.body
});


export default __emailVerification__;