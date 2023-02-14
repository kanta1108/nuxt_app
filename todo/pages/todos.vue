<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span v-if="todo.created">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />
          <span :class="{ done: todo.done }"
            >{{ todo.name }} {{ todo.created.toDate() | dateFilter }}</span
          >
          <button @click="remove(todo.id)">remove</button>
        </span>
      </li>
    </ul>
    <div class="form">
      <form @submit.prevent="add">
        <input type="text" v-model="name" />
        <button>add</button>
      </form>
    </div>
    <!-- /.form -->
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      name: "",
      done: false
    };
  },
  created() {
    this.$store.dispatch("todos/init");
  },
  methods: {
    add() {
      this.$store.dispatch("todos/add", this.name);
      this.name = "";
    },
    remove(id) {
      this.$store.dispatch("todos/remove", id);
    },
    toggle(todo) {
      this.$store.dispatch("todos/toggle", todo);
    }
  },
  computed: {
    todos() {
      //   return this.$store.state.todos.todos;
      return this.$store.getters["todos/orderedTodos"];
    }
  },
  filters: {
    dateFilter(date) {
      return moment(date).format("YYYY/MM/DD HH:mm:ss");
    }
  }
};
</script>
<style>
li > span span.done {
  text-decoration: line-through;
}
</style>
