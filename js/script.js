const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [
        { text: "Fare la spesa", done: false },
        { text: "Portare il cane a spasso", done: true },
        { text: "Andare a lavare la macchina", done: false },
      ],
      newTodoText: "",
    };
  },
  methods: {
    toggleDone(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    addTodo() {
      if (this.newTodoText.trim() !== "") {
        this.todos.push({ text: this.newTodoText, done: false });
        this.newTodoText = "";
      }
    },
  },
}).mount("#app");
