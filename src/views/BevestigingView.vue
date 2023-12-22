<template>
  <div class="confirmation-container">
    <h2>{{ tekst.titel }}</h2>
    <p>{{ tekst.tekst }}</p>
    <ul>
      <li v-for="item in orderDetails" :key="item.id">
        {{ item.title }} - {{ item.price }} - Aantal: {{ item.quantity }}
      </li>
    </ul>
  
      <!-- Totale prijs blijft 0, geen idee wat hier het probleem is -->
    <p>Totale prijs: {{ calculateTotalPrice() }}</p>
  </div>
</template>
  
<script>
  import { useProductStore } from '../stores/productStore';
  
  export default {
    data() {
      return {
        tekst: {
          titel: "Bestelling geplaatst",
          tekst: "Bedankt voor je bestelling!",
        },
        orderDetails: [], 
      };
    },
    methods: {
      calculateTotalPrice() {
        return this.orderDetails.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    created() {
      this.orderDetails = useProductStore().getCart();
    },
  };
</script>
  
<style>
  .confirmation-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center; 
    max-width: 400px;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
  