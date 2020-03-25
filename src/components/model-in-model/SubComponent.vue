<template>
    <span>
        <sub-sub-component
            :value="toto"
            @input="value=$event"/>
    </span>
</template>

<script lang="ts">
    import Vue from "vue";
    import SubSubComponent from "./SubSubComponent.vue";

    export default Vue.extend({
        props: {
            toto: {},
        },
        data(){
            return {
                value:null
            }
        },
        components: {SubSubComponent}
    });
</script>

<style scoped>

</style>
