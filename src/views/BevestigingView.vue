<template>
    <div>
      <h2>Bestelling geplaatst</h2>
      <p>Bedankt voor je bestelling!</p>
  
      <!-- Toon de details van de bestelling -->
      <ul>
        <li v-for="item in orderDetails" :key="item.id">
          {{ item.title }} - {{ item.price }} - Aantal: {{ item.quantity }}
        </li>
      </ul>
  
      <!-- Toon de totale prijs -->
      <p>Totale prijs: {{ totalPrice }}</p>
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/productStore';
  
  export default {
    data() {
      return {
        orderDetails: [], // Hier zul je de details van de bestelling bewaren
      };
    },
    computed: {
      totalPrice() {
        // Bereken hier de totale prijs op basis van de orderDetails
        return this.orderDetails.reduce((total, item) => total + item.price * item.quantity, 0);
      },
    },
    created() {
      // Haal de details van de bestelling op uit de winkelwagen
      this.orderDetails = useProductStore().getCart();
    },
  };
  </script>
  
  <style>
  /* Voeg hier indien nodig stijlen toe voor de bevestigingspagina */
  </style>
  
  