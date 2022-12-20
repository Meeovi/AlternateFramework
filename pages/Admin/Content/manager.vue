<template>
    <div>
        <v-row>
            <v-col cols="2" class="leftContent">
                <ContentLeft />
            </v-col>
            <v-col>
                <ContentRight />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import ContentLeft from '../../../components/content/ContentLeft'
import ContentRight from '../../../components/content/ContentRight'

export default {
    components: { ContentLeft, ContentRight }
}
</script>

<script setup>
useHead({
        title: 'Content Manager',
    })
</script>
