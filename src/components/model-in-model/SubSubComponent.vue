<template>
    <span>
        <v-text-field type="text"
                      :value="value"
                      @input="$emit('input', $event)"
        />
    </span>
</template>

<script lang="ts">
    import Vue from "vue";

    export default Vue.extend({
        props:{
            value:{}
        },
        computed: {},
        data() {
            return {}
        }
    });
</script>
