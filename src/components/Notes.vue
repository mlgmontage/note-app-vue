<template>
  <div>
    <h1>Notes</h1>
    <figure>
      <blockquote class="blockquote" v-for="note in notes" :key="note.NoteId">
        <div>{{ note.Note }}</div>
        <div class="blockquote-footer text-muted">date</div>
      </blockquote>
    </figure>
  </div>
</template>

<script>
import getNotes from "@/axios/getNotes"
import router from "@/router/"

export default {
  data() {
    return {
      notes: []
    }
  },
  methods: {
  },
  async mounted() {
    
      const notes = await getNotes()
      if(notes.status === 200) {
        this.notes = notes.data
      } else {
        localStorage.clear()
        router.push({ name: "Login" })
      }
  }
}
</script>