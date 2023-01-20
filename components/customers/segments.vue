<template>
    <div>
        <v-toolbar color="info">
            <v-col cols="9">
                <v-toolbar-title>Segments</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createSegment />
            </v-col>
        </v-toolbar>
        <v-table fixed-header height="300px" width="100%">
            <thead>
                <tr>
                    <th class="text-left">
                        Page ID
                    </th>
                    <th class="text-left">
                        Page Name
                    </th>
                    <th class="text-left">
                        URL
                    </th>
                    <th class="text-left">
                        Meta Title
                    </th>
                    <th class="text-left">
                        Created
                    </th>
                    <th class="text-left">
                        Edit
                    </th>
                </tr>
            </thead>
            <tbody v-for="pages in pages" :key="pages.id">
                <tr>
                    <td>{{ pages.id }}</td>
                    <td>{{ pages.title }}</td>
                    <td>{{ pages.url_key }}</td>
                    <td>{{ pages.meta_title }}</td>
                    <td>{{ pages.created_at }}</td>
                    <td><a :href="`/admin/database/${pages.id}`">
                            <!--<editUser />--></a></td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    import createSegment from './addCustomer/add-segment.vue'
    //import findManySegments from '../../../graphql/query/findManySegments.gql'

    export default {
        components: {
            createSegment,
            //editUser
        },
    /*    data() {
            return {
                findManySegments: [],
            }
        },
        apollo: {
            findManySegments: {
                prefetch: true,
                query: findManySegments
            }
        }, */
    }
</script>

<script setup>
    useHead({
        title: 'Segments',
    });

const { data: pages } = await useAsyncData(() => $fetch("/api/pages"));
</script>