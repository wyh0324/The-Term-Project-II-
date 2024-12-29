<template>
    <div class="country-card">
      <router-link :to="'/country/' + country.id">
        <h3>{{ country.name }}</h3>
        <p>Gold: {{ country.gold }} | Silver: {{ country.silver }} | Bronze: {{ country.bronze }}</p>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CountryCard',
    props: {
      country: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .country-card {
    padding: 15px;
    border: 1px solid #ddd;
    margin: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  .country-card:hover {
    background-color: #f0f0f0;
  }
  </style>
  