<template>
    <div class="home-page">
      <h1>Olympic Medal Table</h1>
      <div>
        <label for="numCountries">Enter number of countries: </label>
        <input v-model="numCountries" type="number" min="1" @input="loadCountries" />
      </div>
      <div v-if="countries.length > 0">
        <ul>
          <li v-for="country in countries" :key="country.id">
            <router-link :to="'/country/' + country.id">{{ country.name }}</router-link>
            - Gold: {{ country.gold }} | Silver: {{ country.silver }} | Bronze: {{ country.bronze }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        numCountries: 5,
        countries: [],
      };
    },
    methods: {
      loadCountries() {
        // Mock data based on the number of countries
        this.countries = Array.from({ length: this.numCountries }, (_, i) => ({
          id: i + 1,
          name: `Country ${i + 1}`,
          gold: Math.floor(Math.random() * 10),
          silver: Math.floor(Math.random() * 10),
          bronze: Math.floor(Math.random() * 10),
        }));
      },
    },
    created() {
      this.loadCountries();
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for the home page */
  </style>
  