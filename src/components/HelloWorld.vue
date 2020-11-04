<template>
  <div class="hello">
    <h1>{{ test }}</h1>
    <h2>{{ran}}</h2>
    <ul v-if="posts && posts.length">
      <li v-for="post of posts" v-bind:key="post">
        <p><strong>{{post.title}}</strong></p>
        <p>{{post.body}}</p>
      </li>
    </ul>
    <ul v-if="errors && errors.length">
      <li v-for="error of errors" v-bind:key="error">
        {{error.message}}
      </li>
    </ul>
    <h1>{{ todo.userId }}</h1>
    <h1>{{ todo.id }}</h1>
    <h1>{{ todo.title }}</h1>
    <h1>{{ todo.completed }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',

  data () {
    return {
      posts: [],
      errors: [],
      todo: {},
      test: null,
      ran: false
    }
  },

  created() {
    axios.get(`http://jsonplaceholder.typicode.com/posts`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
        console.log('hey')
      })
      .catch(e => {
        this.errors.push(e)
      })
      axios.get(`http://jsonplaceholder.typicode.com/todos/1`)
      .then(response => {
        // JSON responses are automatically parsed.
        this.todo = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
      axios.get(`http://127.0.0.1:8000`)
      .then(response => {
        // JSON responses are automatically parsed.
        console.log(response.data)
        this.test = response.data
        this.ran = true
      })
      .catch(e => {
        console.log(e)
      })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
