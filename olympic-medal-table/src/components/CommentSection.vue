<template>
    <div class="comment-section">
      <h3>Comments</h3>
      <ul>
        <li v-for="comment in comments" :key="comment.id" class="comment-item">
          <img :src="comment.avatar" alt="avatar" class="avatar" />
          <strong>{{ comment.username }}</strong>: {{ comment.text }}
        </li>
      </ul>
      <div>
        <textarea v-model="newComment" placeholder="Write a comment..." />
        <button @click="postComment">Post Comment</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CommentSection',
    props: {
      comments: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        newComment: '',
      };
    },
    methods: {
      postComment() {
        if (this.newComment.trim()) {
          this.comments.push({
            id: this.comments.length + 1,
            username: 'Current User',
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
            text: this.newComment,
          });
          this.newComment = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .comment-section {
    margin-top: 20px;
  }
  .comment-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .comment-item .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
  textarea {
    width: 100%;
    margin-top: 10px;
    padding: 10px;
  }
  button {
    margin-top: 10px;
    padding: 10px 20px;
  }
  </style>
  