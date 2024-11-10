const { createApp, ref } = Vue;

const app = createApp({
    // template: `
    //     <div>
    //         <h1>{{ message }}</h1>
    //         <p>{{ author }}</p>
    //     </div>
    // `,
    setup(){
        const message = ref('Hello Vue 3');
        const author = ref('Bruce Wayne');

        const changeMessage = () => {
            message.value = 'Hello Vue 3 from Batman';
            author.value = 'Batman';
        }

        return {
            message,
            author,
            changeMessage
        }
    }
});

app.mount('#myApp')