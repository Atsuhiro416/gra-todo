<template>
  <div id="app">
    <div class="container">
      <div class="todo-box">
        <div class="top-wrapper">
          <h1>Todo List</h1>
          <!-- <div class="sort-labels">
            <label v-for="(label, index) in options" :key="index">
              <input type="radio"
              v-model="current"
              :value="label.value">
              {{ label.label }}
            </label>
          </div> -->
        </div>
        <div class="create-todo flex between">
          <input type="text" v-model="newTodo" @keyup.enter="addTodo">
          <button @click="addTodo" class="add-btn button">追加</button>
        </div>
        <div class="todo-lists">
          <ul>
            <li v-for="todoItem in todos"
            :key="todoItem.id"
            class="flex between">
              <div class="list-left">
                <!-- <input type="checkbox"> -->
                <input type="text" v-model="todoItem.todo">
              </div>
              <div class="buttons">
                <button @click="updateTodo(todoItem.id, todoItem.todo)" class="update-btn button">更新</button>
                <button @click="deleteTodo(todoItem.id)" class="del-btn button">削除</button>
              </div>
            </li>
          </ul>
        </div>
      </div><!-- /.todo-box -->
    </div><!-- /.container -->
  </div><!-- /#app -->
</template>

<script>
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      newTodo: "",
      todos: [],
      // options: [
      //   { value: 0, label: 'All' },
      //   { value: 1, label: 'Active' },
      //   { value: 2, label: 'Completed' },
      // ],
      // current: 0,
    };
  },
  methods: {
    async getTodo() {
      const resTodo = await axios.get("https://morning-savannah-29228.herokuapp.com/api/todo");
      this.todos = resTodo.data.data;
      console.log(this.todos);
    },
    async addTodo() {
      if(this.newTodo === "") {
        return;
      } else {
        const sendTodo = {
          todo: this.newTodo,
        };
        await axios.post("https://morning-savannah-29228.herokuapp.com/api/todo", sendTodo);
        await this.getTodo();
      }
        this.newTodo = "";
    },
    async updateTodo(id, todo) {
      const changeTodo = {
        todo: todo,
      };
      await axios.put("https://morning-savannah-29228.herokuapp.com/api/todo/" + id, changeTodo);
      await this.getTodo();
    },
    async deleteTodo(id) {
      await axios.delete("https://morning-savannah-29228.herokuapp.com/api/todo/" + id);
      await this.getTodo();
    }
  },
  created() {
    this.getTodo();
  },
  computed: {
    // filteredTodos() {
    //   if(this.current === -1) {
    //     return this.todos;
    //   } else {
    //     let showCompleted = false;
    //     if(this.current === 1) {
    //       showCompleted = true;
    //     }
    //     let filterTodos = {};
    //     for(let key in this.todos) {
    //       let todo = this.todos[key];
    //       if(todo.isCompleted == showCompleted) {
    //         filterTodos[key] = todo;
    //       }
    //     }
    //   }
    //   return filterTodos;
    // }
  }
}
</script>

<style>
/*
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section {
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000;
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}
/* ------------ reset css ----------------- */

/* -------------- User-defined --------------- */
body {
  background-color: #2D197C;
}
.flex {
  display: flex;
}
.between {
  justify-content: space-between;
}
.container {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.todo-box {
  background-color: #fff;
  width: 50vw;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* margin: 0 auto; */
  border-radius: 10px;
}
.todo-box h1 {
  font-size: 24px;
  margin-bottom: 10px;
}
input {
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 14px;
}
input:focus {
  outline: none;
}
.create-todo {
  margin-bottom: 20px;
}
.create-todo input {
  width: 80%;
}
li {
  list-style: none;
  margin-bottom: 5px;
}
.button {
  background-color: #fff;
  border-radius: 5px;
  width: 60px;
  height: 35px;
  font-size: 12px;
  font-weight: bold;
  transition: .5s;
}
.button:hover {
  color: #fff;
}
.add-btn {
  color: #DC70FA;
  border: 2px solid #DC70FA;
}
.add-btn:hover {
  background-color: #DC70FA;
}
.update-btn {
  color: #FA9770;
  border: 2px solid #FA9770;
}
.update-btn:hover {
  background-color: #FA9770;
}
.del-btn {
  color: #71FADC;
  border: 2px solid #71FADC;
  margin-left: 5px;
}
.del-btn:hover {
  background-color: #71FADC;
}
</style>
