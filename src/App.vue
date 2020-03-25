<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
            <menu-left/>
        </v-navigation-drawer>

        <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
            <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
                <span class="hidden-sm-and-down">Vue exemples</span>
            </v-toolbar-title>

            <v-spacer/>

            <toggle v-model="$vuetify.theme.dark" icon="flash" :label="{on:'ON',off:'OFF'}"/>

        </v-app-bar>
        <v-content>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import MenuLeft from "./components/navigation/MenuLeft";
    import Toggle from "./components/forms/Toggle";

    export default {
        name: 'App',
        components: {MenuLeft, Toggle},
        props: {
            source: String,
        },
        data: () => ({
            dialog: false,
            drawer: null,
            items: [
                {icon: 'mdi-contacts', text: 'Contacts'},
                {icon: 'mdi-history', text: 'Frequently contacted'},
                {icon: 'mdi-content-copy', text: 'Duplicates'},
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'Labels',
                    model: true,
                    children: [
                        {icon: 'mdi-plus', text: 'Create label'},
                    ],
                },
                {
                    icon: 'mdi-chevron-up',
                    'icon-alt': 'mdi-chevron-down',
                    text: 'More',
                    model: false,
                    children: [
                        {text: 'Import'},
                        {text: 'Export'},
                        {text: 'Print'},
                        {text: 'Undo changes'},
                        {text: 'Other contacts'},
                    ],
                },
                {icon: 'mdi-settings', text: 'Settings'},
                {icon: 'mdi-message', text: 'Send feedback'},
                {icon: 'mdi-help-circle', text: 'Help'},
                {icon: 'mdi-cellphone-link', text: 'App downloads'},
                {icon: 'mdi-keyboard', text: 'Go to the old version'},
            ],
        }),
    };
</script>
