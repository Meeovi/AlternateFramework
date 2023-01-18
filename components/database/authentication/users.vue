<template>
    <div>
        <v-row>
            <v-col cols="10">

            </v-col>
            <v-col cols="2">
                <createUser />
            </v-col>
        </v-row>
        <v-table fixed-header height="300px">
            <thead>
                <tr>
                    <th class="text-left">
                        User UID
                    </th>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Email
                    </th>
                    <th class="text-left">
                        Phone
                    </th>
                    <th class="text-left">
                        Username
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                </tr>
            </thead>
            <tbody v-for="users in users" :key="users.id">
                <tr>
                    <td>{{ users.id }}</td>
                    <td>{{ users.first_name }} {{ users.last_name }}</td>
                    <td>{{ users.email }}</td>
                    <td>{{ users.phone }}</td>
                    <td>{{ users.username }}</td>
                    <td>{{ users.created_at }}</td>
                    <td><a :href="`/admin/database/${users.id}`"><!--<editUser />--></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createUser from './createUser'
    //import editUser from '../../../Admin/Database/1.vue'
    //import findManyUsers from '../../../graphql/query/findManyUsers.gql'

    export default {
        components: {
            createUser,
            //editUser
        },
     /*   data() {
            return {
                findManyUsers: [],
            }
        },
        apollo: {
            findManyUsers: {
                prefetch: true,
                query: findManyUsers
            }
        },*/
    }
</script>

<script setup>
const { data: users } = await useAsyncData(() => $fetch("/api/users"));
</script>