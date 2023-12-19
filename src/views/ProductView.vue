<script>
export default {
    data() {
        return {
            product: {
                titel: "Zwarte buckethat",
                afbeelding: "@/assets/images/RAVEON_LIGHT.png",
                beschrijving: "De perfecte aanvulling op je rave-outfit! Onze zwarte bucket hat is niet alleen stijlvol, maar ook functioneel. Met zijn trendy ontwerp en hoogwaardige kwaliteit, beschermt deze hoed je tegen de zon terwijl je danst tot in de vroege uurtjes. Gemaakt voor comfort en duurzaamheid, deze zwarte bucket hat is een must-have accessoire voor elke raver. Voeg een vleugje mysterie en coolheid toe aan je look met deze veelzijdige hoed. Bestel vandaag nog en maak je klaar om te stralen op het volgende feest!",
                prijs: "Prijs: €19.99",
                button: "Toevoegen aan winkelwagen"
            },

        }
    }
}
</script>
<template>
    <section class="product-details">
        <h2>Zwarte buckethat</h2>
        <div class="product-content">
            <img src="./assets/RAVEON_LIGHT.png" alt="Petten en hoedjes" class="product">
            <div class="description">
                <p>
                    De perfecte aanvulling op je rave-outfit! Onze zwarte bucket hat is niet alleen stijlvol, 
                    maar ook functioneel. Met zijn trendy ontwerp en hoogwaardige kwaliteit, beschermt deze 
                    hoed je tegen de zon terwijl je danst tot in de vroege uurtjes. Gemaakt voor comfort en 
                    duurzaamheid, deze zwarte bucket hat is een must-have accessoire voor elke raver. 
                    Voeg een vleugje mysterie en coolheid toe aan je look met deze veelzijdige hoed. 
                    Bestel vandaag nog en maak je klaar om te stralen op het volgende feest!
                </p>
                <p class="price">Prijs: €19.99</p>
                <button class="add-to-cart">Toevoegen aan winkelwagen</button> 
            </div>
        </div>   
    </section>
</template>
<style></style>