<template>
    <div>
        <v-toolbar color="info">
            <v-col cols="9">
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-col>
            <v-col cols="2">
                <createCategory />
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
    import createCategory from '../../../components/content/add-category.vue'
    //import findManyPages from '../../../graphql/query/findManyPages.gql'

    export default {
        components: {
            createCategory,
            //editUser
        },
    /*    data() {
            return {
                findManyPages: [],
            }
        },
        apollo: {
            findManyPages: {
                prefetch: true,
                query: findManyPages
            }
        }, */
    }
</script>

<script setup>
    useHead({
        title: 'Categories',
    });

const { data: pages } = await useAsyncData(() => $fetch("/api/pages"));
</script>