<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';


export default {
    data() {
        return {

        };
    },
    components: {
        HeaderComponent,
        FooterComponent
    }
}
</script>

<template>
    <HeaderComponent />
    <Router-view />
    <FooterComponent />
</template>
