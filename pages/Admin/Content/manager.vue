<template>
    <div>
        <v-row>
            <v-col cols="2">
                <ContentLeft />
            </v-col>
            <v-col>
                <ContentRight />
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
useHead({
        title: 'Content Manager',
    })
</script>

<script>
export default {
    
}
</script>