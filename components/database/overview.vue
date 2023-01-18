<template>
    <div>
        <v-row>
            <v-col cols="12" class="homeTitle">
                <h3>Preview Extensions</h3>
                <p class="homeDescription">When a new Prisma Client or Prisma schema feature is released, it often starts in preview so that you can test it and submit your feedback. After we improve the feature with your feedback and are satisfied with the internal test results, we promote the feature to general availability.</p>
                <p class="homeDescription">Click on any script to fill the query box, modify the script, then click Run.</p>
            </v-col>
            <v-col cols="3" v-for="data in preview" :key="data.id">
                <a href="/"><v-card color="red-darken-2" append-icon="fas fa-arrow-right" theme="dark" :title="data.title" :text="data.description"></v-card></a>
            </v-col>
        </v-row>
        <br>
        <v-row>
            <v-col cols="12" class="homeTitle">
                <h3>PostgresSql Extensions</h3>
                <p class="homeDescription">PostgreSQL allows you to extend your database functionality by installing and activating packages known as extensions.</p>
                <p class="homeDescription">Only extensions natively supported by Alternate will be listed below. Only Postgresql databases will support these extensions.</p>
            </v-col>
            <v-col cols="3" v-for="data in postgrextensions" :key="data.id">
                <a href="/"><v-card color="blue-darken-2" append-icon="fas fa-arrow-right" theme="dark" :title="data.title" :text="data.description"></v-card></a>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {

}
</script>

<script setup>
const { data: preview } = await useAsyncData('preview', () => queryContent('/preview/').find())

const { data: postgrextensions } = await useAsyncData('post-extensions', () => queryContent('/post-extensions/').find())
</script>