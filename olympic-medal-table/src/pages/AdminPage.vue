<template>
  <div class="admin-page">
    <h2>Admin Dashboard</h2>
    <div>
      <h3>Users</h3>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.username }} - {{ user.role }}
          <button @click="toggleRole(user)">Toggle Role</button>
        </li>
      </ul>
    </div>
    <div>
      <h3>Manage Countries</h3>
      <button @click="addCountry">Add New Country</button>
      <ul>
        <li v-for="country in countries" :key="country.id">
          <router-link :to="'/country/' + country.id">{{ country.name }}</router-link>
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
/* Add styles for admin page */
</style>
