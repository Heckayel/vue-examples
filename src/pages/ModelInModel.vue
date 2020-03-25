<template>
    <span>
        My value : {{myValue}}
        <sub-component :toto="myValue" ref="haha"/>
        <v-btn @click="save">Save</v-btn>
    </span>
</template>

<script lang="ts">
    import Vue from "vue";
    import SubComponent from "../components/model-in-model/SubComponent";
    export default Vue.extend({
        components: {SubComponent},
        methods : {
          save(){
                this.myValue = this.$refs.haha.value;
            }
        },
        data() {
            return {
                myValue:"youpi"
            }
        },
    });
</script>
