<template>
    <div>
        <v-navigation-drawer permanent class="contentLeft">
            <v-list>
                <h4>Content Manager</h4>
                <LeftCreateTable />
                <v-divider></v-divider>
                <h6>Tables ()</h6>
                <div>
                    <v-list-item :title="apitables" :value="apitables">{{ apitables }}</v-list-item>
                </div>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import LeftCreateTable from './LeftCreateTable'

    export default {
        components: { LeftCreateTable }
    }
</script>

<script setup>
const { data: apitables } = await useAsyncData("api", () => $fetch("/api/read"));
</script>