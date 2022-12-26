<template>
    <div>
        <v-navigation-drawer permanent class="contentLeft">
            <v-list>
                <h4>Content Manager</h4>
                <LeftCreateTable />
                <v-divider></v-divider>
                <h6>Tables ({{ data }})</h6>
                <v-list-item title="Home" value="home">{{ data }}</v-list-item>

                <v-list-item title="Contacts" value="contacts"></v-list-item>

                <v-list-item title="Settings" value="settings"></v-list-item>
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
const count = ref(1)
const { data } = await useFetch(() => `/api/read/${count.value}`, { params: { token: 123 } })
</script>