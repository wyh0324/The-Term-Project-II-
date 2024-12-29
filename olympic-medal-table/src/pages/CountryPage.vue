<template>
    <div class="country-page">
      <h2>{{ country.name }} - Medal Details</h2>
      <div>
        <h3>Country Info</h3>
        <p><strong>Gold Medals:</strong> {{ country.gold }}</p>
        <p><strong>Silver Medals:</strong> {{ country.silver }}</p>
        <p><strong>Bronze Medals:</strong> {{ country.bronze }}</p>
      </div>
      <div>
        <h3>Sports</h3>
        <ul>
          <li v-for="sport in country.sports" :key="sport.id">
            {{ sport.name }} - Medals: {{ sport.medals }}
          </li>
        </ul>
      </div>
      <comment-section :comments="country.comments" />
    </div>
  </template>
  
  <script>
  import CommentSection from '../components/CommentSection.vue';
  
  export default {
    components: {
      CommentSection,
    },
    data() {
      return {
        country: {
          id: this.$route.params.id,
          name: 'Country 1',
          gold: 5,
          silver: 3,
          bronze: 2,
          sports: [
            { id: 1, name: 'Football', medals: 2 },
            { id: 2, name: 'Swimming', medals: 3 },
          ],
          comments: [
            { id: 1, username: 'User1', avatar: 'https://randomuser.me/api/portraits/men/1.jpg', text: 'Great performance!' },
            { id: 2, username: 'User2', avatar: 'https://randomuser.me/api/portraits/women/2.jpg', text: 'Well done!' },
          ],
        },
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for country details */
  .avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  </style>
  