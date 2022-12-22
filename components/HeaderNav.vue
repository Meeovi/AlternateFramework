<template>
    <v-app-bar>
            <template v-slot:prepend>
                <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>
            <v-app-bar-title href="/">ALTERNATE</v-app-bar-title>
            <v-spacer></v-spacer>

            <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
                <v-col>
                    <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
                        @click="onClick"></v-btn>
                </v-col>
                <v-col>
                    <v-btn size="small" variant="flat">
                        <v-icon start icon="fa-regular fa-question-circle"></v-icon>Help
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn size="small" variant="flat">
                        <v-icon start icon="fa-regular fa-comment"></v-icon>Feedback on this page?
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn size="small" variant="flat">
                        <v-icon start icon="fa-regular fa-alert"></v-icon>
                    </v-btn>
                </v-col>
            </div>
        </v-app-bar>
</template>

<script setup>
    import {
        ref
    } from 'vue'

    const theme = ref('light')

    function onClick() {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
</script>