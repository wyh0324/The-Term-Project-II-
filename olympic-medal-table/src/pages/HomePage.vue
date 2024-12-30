<template>
  <div class="home-page">
    <h1 class="page-title">Olympic Medal Table</h1>
    
    <div class="input-container">
      <label for="numCountries" class="input-label">Enter number of countries: </label>
      <input
        v-model="numCountries"
        type="number"
        min="1"
        max="100"
        class="input-number"
        @input="loadCountries"
      />
    </div>

    <div v-if="countries.length > 0" class="countries-list">
      <ul>
        <li v-for="country in countries" :key="country.id" class="country-item">
          <router-link :to="'/country/' + country.id" class="country-link">{{ country.name }}</router-link>
          - <span class="medal gold">Gold: {{ country.gold }}</span> |
          <span class="medal silver">Silver: {{ country.silver }}</span> |
          <span class="medal bronze">Bronze: {{ country.bronze }}</span>
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
/* Global Styles */
.home-page {
  font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.page-title {
  font-size: 2.5rem;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.input-label {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #444;
}

.input-number {
  padding: 8px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 60px;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 10px;
  transition: border-color 0.3s ease;
}

.input-number:focus {
  border-color: #007bff;
  outline: none;
}

.countries-list {
  margin-top: 20px;
}

.country-item {
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

.country-link {
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
}

.country-link:hover {
  text-decoration: underline;
}

.medal {
  font-weight: bold;
}

.gold {
  color: #ffd700;
}

.silver {
  color: #c0c0c0;
}

.bronze {
  color: #cd7f32;
}
</style>
