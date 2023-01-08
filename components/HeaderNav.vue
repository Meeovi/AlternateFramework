<template>
    <v-app-bar>
        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title href="/">ALTERNATE</v-app-bar-title>
        <v-spacer></v-spacer>

        <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
            <v-col>
                <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">
                </v-btn>
            </v-col>
            <v-col>
                <v-menu :location="bottom" transition="slide-y-transition">
                    <template v-slot:activator="{ props }">
                        <v-btn color="primary" v-bind="props">
                            <v-icon start icon="fa-regular fa-circle-question"></v-icon>Help
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item title="Documentation" value="documentation" href="https://www.alternatecms.com/docs"></v-list-item>
                        <v-list-item title="Discussions" value="discussions" href="https://github.com/Meeovi/alternatecms/discussions"></v-list-item>
                        <v-list-item title="Versions" value="versions" href="https://github.com/Meeovi/alternatecms/releases"></v-list-item>
                        <v-list-item title="Official Site" value="official site" href="https://www.alternatecms.com"></v-list-item>
                    </v-list>
                </v-menu>
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

<script>
  export default {
    data: () => ({
      items: [
        { title: 'Documentation' },
        { title: 'Discussions' },
        { title: 'Versions' },
        { title: 'Official Site' },
      ],
    }),
  }
</script>

<script setup>
    import {
        ref
    } from 'vue'

    const theme = ref('light')

    function onClick() {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    }
</script>