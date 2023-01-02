<template>
    <div>
        <v-row>
            <v-col cols="12" class="homeTitle">
                <h3>Scripts</h3>
                <p class="homeDescription">Quick scripts to run on your database.</p>
                <p class="homeDescription">Click on any script to fill the query box, modify the script, then click Run.</p>
            </v-col>
            <v-col cols="3">
                <a href="/"><v-card color="red-darken-2" append-icon="fas fa-arrow-right" theme="dark" :title="data.title" :text="data.description"></v-card></a>
            </v-col>
        </v-row>
        <br>
        <v-row>
            <v-col cols="12" class="homeTitle">
                <h3>Quick Start</h3>
                <p class="homeDescription">While we're in beta, we want to offer a quick way to explore Supabase. While we build importers, check out these simple starters.</p>
                <p class="homeDescription">Click on any script to fill the query box, modify the script, then click Run.</p>
            </v-col>
            <v-col cols="3">
                <a href="/"><v-card color="blue-darken-2" append-icon="fas fa-arrow-right" theme="dark" title="Documentation" text="Discover the essential concepts, guides, and instructions."></v-card></a>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').find())
</script>