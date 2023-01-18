<template>
    <div>
        <v-row>
            <v-col cols="10">

            </v-col>
            <v-col cols="2">
                <createPolicy />
            </v-col>
        </v-row>
        <v-table fixed-header height="300px">
            <thead>
                <tr>
                    <th class="text-left">
                        Policy ID
                    </th>
                    <th class="text-left">
                        Policy Name
                    </th>
                    <th class="text-left">
                        Type
                    </th>
                    <th class="text-left">
                        Author
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Updated
                    </th>
                </tr>
            </thead>
            <tbody v-for="policies in agreements" :key="policies.id">
                <tr>
                    <td>{{ policies.id }}</td>
                    <td>{{ policies.name }}</td>
                    <td>{{ policies.type }}</td>
                    <td>{{ policies.author }}</td>
                    <td>{{ policies.created_at }}</td>
                    <td>{{ policies.updated_at }}</td>
                    <td><a :href="`/admin/database/${policies.id}`"><!--<editUser />--></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createPolicy from './createPolicy'
    //import editUser from '../../../Admin/Database/1.vue'
    //import findManyAgreements from '../../../graphql/query/findManyAgreements.gql'

    export default {
        components: {
            createPolicy,
            //editUser
        },
    /*    data() {
            return {
                findManyAgreements: [],
            }
        },
        apollo: {
            findManyAgreements: {
                prefetch: true,
                query: findManyAgreements
            }
        }, */
    }
</script>

<script setup>
const { data: agreements } = await useAsyncData(() => $fetch("/api/agreements"));
</script>