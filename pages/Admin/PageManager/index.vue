<template>
    <div>
        <v-row>
            <v-col cols="2" class="leftContent">
                <PageLeft />
            </v-col>
            <v-col>
                <PageRight />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import PageLeft from '../../../components/pageMaker/PageLeft.vue'
import PageRight from '../../../components/pageMaker/PageRight.vue'

export default {
    components: { PageLeft, PageRight }
}
</script>

<script setup>
useHead({
        title: 'Pages',
    })
</script>

