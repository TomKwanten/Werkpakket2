<script>
export default {
    data(){
        return {
                span: {
                    contact: "Contactgegevens",
                    email: "Email: info@ravewear.com",
                    telefoon: "Telefoon: +32 123 456 789",
                    adres: "Adres: Steenweg 123, Genk"                   
                }
            }
        }
    }

</script>
<template>
    <footer>

        <p class="contact-info">
            <span>{{ span.contact }}</span>
            <span>{{ span.email }}</span>
            <span>{{ span.telefoon }}</span>
            <span>{{ span.adres }}</span>
        </p>
    </footer>
</template>
<style></style>