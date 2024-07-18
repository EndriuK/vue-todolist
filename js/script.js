const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        { text: "Fare la spesa", done: false },
        { text: "Portare il cane a spasso", done: true },
        { text: "Andare a lavare la macchina", done: false },
      ],
    };
  },
}).mount("#app");
