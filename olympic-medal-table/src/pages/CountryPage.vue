<template>
  <div class="country-page">
    <h2 class="country-title">{{ country.name }} - Medal Details</h2>
    
    <!-- Country Info Section -->
    <div class="section">
      <h3 class="section-title">Country Info</h3>
      <div class="country-info">
        <p><strong>Gold Medals:</strong> {{ country.gold }}</p>
        <p><strong>Silver Medals:</strong> {{ country.silver }}</p>
        <p><strong>Bronze Medals:</strong> {{ country.bronze }}</p>
      </div>
    </div>
    
    <!-- Sports Section -->
    <div class="section">
      <h3 class="section-title">Sports</h3>
      <ul class="sports-list">
        <li v-for="sport in country.sports" :key="sport.id" class="sport-item">
          <span class="sport-name">{{ sport.name }}</span> 
          <span class="sport-medals">Medals: {{ sport.medals }}</span>
        </li>
      </ul>
    </div>

    <!-- Comment Section -->
    <div class="comments-section">
      <h3 class="section-title">Comments</h3>
      <comment-section :comments="country.comments" />
    </div>
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
/* General Styles */
.country-page {
  font-family: 'Arial', sans-serif;
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.country-title {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.5rem;
  color: #2d3d4f;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
}

/* Country Info Section */
.country-info p {
  font-size: 1.1rem;
  color: #555;
  margin: 8px 0;
}

/* Sports Section */
.sports-list {
  list-style-type: none;
  padding-left: 0;
}

.sport-item {
  background-color: #fff;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.sport-name {
  font-weight: bold;
  color: #333;
}

.sport-medals {
  font-style: italic;
  color: #777;
}

/* Comment Section */
.comments-section {
  margin-top: 30px;
}

.comment-item {
  display: flex;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.comment-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.comment-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.comment-username {
  font-weight: bold;
  color: #333;
}

.comment-text {
  color: #555;
  font-size: 1rem;
}

/* Avatar Styling */
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

/* Responsive Design */
@media (max-width: 600px) {
  .country-page {
    padding: 15px;
  }
  .country-title {
    font-size: 1.8rem;
  }
  .section-title {
    font-size: 1.3rem;
  }
  .country-info p,
  .sport-item {
    font-size: 1rem;
  }
}
</style>
