import firebase from "~/plugins/firebase";
import { firestoreAction } from "vuexfire";

const db = firebase.firestore();
const todoRefs = db.collection("todos");

export const state = {
  todos: []
};

export const actions = {
  init: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef("todos", todoRefs);
  }),
  add: firestoreAction((context, name) => {
    if (name.trim()) {
      todoRefs.add({
        name,
        done: false,
        created: firebase.firestore.FieldValue.serverTimestamp()
      });
    }
  }),
  remove: firestoreAction((context, id) => {
    todoRefs.doc(id).delete();
  }),
  toggle: firestoreAction((context, todo) => {
    todoRefs.doc(todo.id).update({
      done: !todo.done
    });
  })
};
export const getters = {
  orderedTodos: state => {
    return _.sortBy(state.todos, "created");
  }
};
