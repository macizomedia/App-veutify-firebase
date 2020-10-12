<template>
    <v-bottom-navigation app fixed active-class grow dark :value="value">
        <v-btn v-for="link in icons" :key="link.mdi" class="mx-4" icon>
            <router-link style="text-decoration: none; color: inherit;" :to="link.routeUrl">
                <v-icon color="white" size="24px">
                    {{ link.mdi }}
                </v-icon>
            </router-link>
        </v-btn>
    </v-bottom-navigation>
</template>

<script>
    export default {
        data: () => ({
            value: 1,
            icons: [{
                    mdi: 'mdi-home',
                    routeUrl: '/',
                },
                {
                    mdi: 'mdi-camera',
                    routeUrl: '/About',
                },
                {
                    mdi: 'mdi-share-variant',
                    routeUrl: '/users',
                },
            ],
        }),
    };
</script>