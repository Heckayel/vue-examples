<template>
    <v-list dense>
        <template v-for="item in items">
            <v-list-item :key="item.text" link>
                <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                        <router-link :to="item.url">{{ item.text }}</router-link>
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-list>
</template>

<script>
    export default {
        data: () => ({
            items: [
                {url: '/toggle', text: 'Composant Toggle'},
                {url: '/model-in-model', text: 'v-model in sub components'},
            ],
        }),
    };
</script>
