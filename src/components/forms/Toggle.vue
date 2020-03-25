<template>
    <span class="toggle">
        <v-icon>mdi-visibility</v-icon>
        <span @click="turn" class="pa-2 grey--text darken-2--text" style="cursor: pointer">
            <v-icon small>{{ value ? iconSelected.on : iconSelected.off}}</v-icon> {{value ? label.on : label.off}}
        </span>
    </span>
</template>

<script lang="ts">
    import Vue from "vue";
    import {
        mdiToggleSwitch,mdiToggleSwitchOff,
        mdiCheckboxBlankOutline,mdiCheckboxMarkedOutline,
        mdiRadioboxBlank,mdiRadioboxMarked,
        mdiEye, mdiEyeOff,
        mdiFlash,mdiFlashOff
    } from "@mdi/js";
    export default Vue.extend({
        props: {
            value: Boolean,
            label: {
                default: () => ({on: '', off: ''})
            },
            icon: {
                default: "toggle"
            },
            small:{
                default:false
            }
        },
        methods: {
            turn() {
                this.$emit('input', !this.value)
            }
        },
        computed: {
            iconSelected() {
                return this.icons[this.icon];
            }
        },
        data() {
            return {
                icons: {
                    toggle: {on: mdiToggleSwitch, off: mdiToggleSwitchOff},
                    checkbox: {on: mdiCheckboxBlankOutline, off:mdiCheckboxMarkedOutline },
                    radio: {on: mdiRadioboxBlank, off: mdiRadioboxMarked},
                    visibility: {on: mdiEye, off: mdiEyeOff},
                    flash: {on: mdiFlash, off: mdiFlashOff},
                }
            }
        }
    });
</script>

<style scoped>

</style>
