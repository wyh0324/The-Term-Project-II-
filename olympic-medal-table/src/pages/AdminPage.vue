<template>
  <div class="admin-page">
    <h2 class="dashboard-title">Admin Dashboard</h2>

    <!-- Users Section -->
    <div class="section">
      <h3 class="section-title">Users</h3>
      <ul class="user-list">
        <li v-for="user in users" :key="user.id" class="user-item">
          <span class="user-info">{{ user.username }} - {{ user.role }}</span>
          <button class="toggle-btn" @click="toggleRole(user)">Toggle Role</button>
        </li>
      </ul>
    </div>

    <!-- Manage Countries Section -->
    <div class="section">
      <h3 class="section-title">Manage Countries</h3>
      <button class="add-country-btn" @click="addCountry">Add New Country</button>
      <ul class="country-list">
        <li v-for="country in countries" :key="country.id" class="country-item">
          <router-link :to="'/country/' + country.id" class="country-link">{{ country.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, username: 'admin', role: 'Administrator' },
        { id: 2, username: 'user1', role: 'Registered User' },
      ],
      countries: [
        { id: 1, name: 'Country 1' },
        { id: 2, name: 'Country 2' },
      ],
    };
  },
  methods: {
    toggleRole(user) {
      user.role = user.role === 'Administrator' ? 'Registered User' : 'Administrator';
    },
    addCountry() {
      const newCountryId = this.countries.length + 1;
      this.countries.push({ id: newCountryId, name: `Country ${newCountryId}` });
    },
  },
};
</script>

<style scoped>
/* General page styling */
.admin-page {
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
}

.dashboard-title {
  color: #333;
  text-align: center;
  margin-bottom: 40px;
}

/* Section styling */
.section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 1.6rem;
  color: #444;
  border-bottom: 2px solid #3a8dff;
  padding-bottom: 10px;
  margin-bottom: 15px;
}

/* Users list */
.user-list {
  list-style-type: none;
  padding: 0;
}

.user-item {
  background-color: #fff;
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-info {
  font-size: 1.1rem;
  color: #333;
}

.toggle-btn {
  padding: 8px 16px;
  background-color: #3a8dff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.toggle-btn:hover {
  background-color: #3478d7;
}

/* Manage Countries section */
.add-country-btn {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.add-country-btn:hover {
  background-color: #218838;
}

.country-list {
  list-style-type: none;
  padding: 0;
}

.country-item {
  background-color: #fff;
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.country-link {
  text-decoration: none;
  color: #3a8dff;
  font-size: 1.1rem;
}

.country-link:hover {
  text-decoration: underline;
}
</style>
