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
            link: 'overzicht.html'
        },
        petten: {
            titel: 'Petten en hoeden',
            beschrijving: 'Zie hier meer hoedjes en petten',
            imagelink: '@/assets/assets/RAVEON_LIGHT.png',
        },
        rave_brillen: {
            titel: 'Rave brillen',
            beschrijving: 'Zie hier meer brillen',
            imagelink: '@/assets/assets/images.jpg',
        },
        rave_tasjes: {
            titel: 'Rave tasjes',
            beschrijving: 'Zie hier meer tasjes',
            imagelink: '@/assets/assets/download.jpg',
        },
        rave_waaiers: {
            titel: 'Rave waaiers',
            beschrijving: 'Zie hier meer waaiers',
            imagelink: '@/assets/assets/impr_977827-PDP.jpg',
        }
    }
    }
}

</script>

<template>
  <header>
        <h1>RaveWear</h1>
        <nav class="nav">
            <ul>
                <li><button><a href="start.html">Start pagina</a></button></li>
                <li><button><a href="overzicht.html">In de aanbieding</a></button></li>
                <li><button><a href="detail.html">Product</a></button></li>
                <li><button><a href="login.html">Login</a></button></li>
            </ul>
        </nav>
    </header>
    <br>
    
    <section class="section-beschrijving">
        <h2>{{ beschrijving.titel }}</h2>
        <h3>{{ beschrijving.tussentitel }}</h3>
        <p>{{ beschrijving.p1}}</p>
        <p>{{ beschrijving.p2 }}</p>
        <p>{{ beschrijving.p3 }}</p>
        <p>{{ beschrijving.p4 }}</p>
        <a v-bind:href="beschrijving.link">Ontdek hier</a>
    </section>
    <br>
    <h2 class="titel-producten">Onze producten</h2>
    <section class="product-section-start">
        
        <div class="product-start">
            <img v-bind:src="petten.imagelink">
            <h3>{{ petten.titel }}</h3>
            <p>{{ petten.beschrijving }}</p>
            
        </div>

        <div class="product-start">
            <img v-bind:src="rave_brillen.imagelink">
            <h3>{{ rave_brillen.titel }}</h3>
            <p>{{ rave_brillen.beschrijving}}</p>
            
        </div>        

        <div class="product-start">
            <img v-bind:src="rave_tasjes.imagelink">
            <h3>{{ rave_tasjes.titel }}</h3>
            <p>{{ rave_tasjes.beschrijving}}</p>
            
        </div>

        <div class="product-start">
            <img v-bind:src="rave_waaiers.titel">
            <h3>{{ rave_waaiers.titel }}</h3>
            <p>{{ rave_waaiers.beschrijving}}</p>
            
        </div>
    </section>
    <footer>
        <p class="contact-info">
            <span>Contactgegevens:</span>
            <span>Email: info@ravewear.com</span>
            <span>Telefoon: +32 123 456 789</span>
            <span>Adres: Steenweg 123, Genk</span>
        </p>
    </footer>
</template>

<style>

</style>
