<template>
    <div>
        <v-navigation-drawer permanent class="contentLeft">
            <v-list>
                <h4>Dashboards</h4>
                <CreateDashboard />
                <v-divider></v-divider>
                <div v-for="dashboards in dashboards" :key="dashboards.id">
                   <v-list-item :title="dashboards.name" :value="dashboards.name"></v-list-item> 
                </div>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import CreateDashboard from './CreateDashboard.vue'
//import findManyDashboards from '../../graphql/query/findManyDashboards.gql'

    export default {
        components: { CreateDashboard },
    /*    data() {
            return {
                findManyDashboards: [],
            }
        },
        apollo: {
            findManyDashboards: {
                prefetch: true,
                query: findManyDashboards
            }
        }, */
    }
</script>

<script setup>
const { data: dashboards } = await useAsyncData(() => $fetch("/api/dashboards"));
</script>