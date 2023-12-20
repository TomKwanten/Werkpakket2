<script>
export default { 
    data() {
      return {
        beschrijving:{
            titel: 'Welkom bij RaveWear',
            tussentitel: 'Een korte omschrijving van alle producten dat wij aanbieden',
            p1: 'Rave-hoedjes en -petten zijn populaire accessoires die vaak worden gedragen raves. Ze voegen niet alleen een stijlvolle en eigenzinnige uitstraling toe aan een outfit, maar dienen ook praktische doelen zoals het beschermen tegen zonlicht en het verbeteren van de algehele uitstraling.',
            p2: 'Rave-brillen zijn populaire accessoires die vaak worden gedragen op raves. Deze brillen zijn ontworpen om visueel opvallend en soms experimenteel te zijn, en ze kunnen de ervaring van lichtshows en visuele effecten verbeteren.',
            p3: 'Rave-tasjes zijn kleine tassen of heuptasjes die speciaal zijn ontworpen voor gebruik op raves. Deze tasjes zijn praktisch, stijlvol en ideaal om enkele essentiële items bij je te dragen terwijl je aan het raven bent.',
            p4: 'Rave-waaiers zijn populaire accessoires op raves. Ze zijn ontworpen om verkoeling te bieden, stijlvol te zijn en te dienen als een visueel statement.',
        },
        petten: {
            titel: 'Petten en hoeden',
            beschrijving: 'Zie hier meer hoedjes en petten',
            imagelink: 'src/assets/images/RAVEON_LIGHT.png',
        },
        rave_brillen: {
            titel: 'Rave brillen',
            beschrijving: 'Zie hier meer brillen',
            imagelink: 'src/assets/images/images.jpg',
        },
        rave_tasjes: {
            titel: 'Rave tasjes',
            beschrijving: 'Zie hier meer tasjes',
            imagelink: 'src/assets/images/download.jpg',
        },
        rave_waaiers: {
            titel: 'Rave waaiers',
            beschrijving: 'Zie hier meer waaiers',
            imagelink: 'src/assets/images/impr_977827-PDP.jpg',
        }
    }
    }
}
</script>

<template>
    <br>
    <section class="section-beschrijving">
        <h2>{{ beschrijving.titel }}</h2>
        <h3>{{ beschrijving.tussentitel }}</h3>
        <p>{{ beschrijving.p1}}</p>
        <p>{{ beschrijving.p2 }}</p>
        <p>{{ beschrijving.p3 }}</p>
        <p>{{ beschrijving.p4 }}</p>
        <router-link to="/overzicht">Ontdek hier</router-link>
    </section>
    <router-view></router-view>
    <br>
    <h2 class="titel-producten">Onze producten</h2>
    <section class="product-section-start">
        
        <div class="product-start">
            <img v-bind:src="petten.imagelink" alt="petten en hoeden">
            <h3>{{ petten.titel }}</h3>
            <p>{{ petten.beschrijving }}</p>
            
        </div>

        <div class="product-start">
            <img v-bind:src="rave_brillen.imagelink" alt="brillen">
            <h3>{{ rave_brillen.titel }}</h3>
            <p>{{ rave_brillen.beschrijving}}</p>
            
        </div>        

        <div class="product-start">
            <img v-bind:src="rave_tasjes.imagelink" alt="tasjes">
            <h3>{{ rave_tasjes.titel }}</h3>
            <p>{{ rave_tasjes.beschrijving}}</p>
            
        </div>

        <div class="product-start">
            <img v-bind:src="rave_waaiers.imagelink" alt="waaiers">
            <h3>{{ rave_waaiers.titel }}</h3>
            <p>{{ rave_waaiers.beschrijving}}</p>
            
        </div>
    </section>
</template>

<style>

</style>