<template>
    <div>
        
    </div>
</template>

<script>
    import findManyPages from '../../../graphql/query/findManyPages.gql'

    export default {
        components: {},
        data() {
            return {
                findManyPages: [],
            }
        },
        apollo: {
            findManyPages: {
                prefetch: true,
                query: findManyPages
            }
        },
    }
</script>

<script setup>
    useHead({
        title: 'Blog',
    })
</script>

<style scoped>

</style>