<template>
    <div>
        <h4>Allow Lists</h4>
        <v-divider></v-divider>
        <v-card>
            <v-tabs v-model="tab" bg-color="primary">
                <v-tab value="one">ALLOWED OPERATIONS</v-tab>
                <v-tab value="two">NEW OPERATIONS</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <v-window-item value="one">
                        <v-row>
                            <v-col cols="2">
                                <div class="text-subtitle-1 text-medium-emphasis">Import allow list from</div>
                            </v-col>
                            <v-col>
                                <v-autocomplete id="tableVisible" :items="['Public']" label="Select Project">
                                </v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-window-item>

                    <v-window-item value="two">
                        <v-row>
                            <v-col cols="2">
                                <div class="text-subtitle-1 text-medium-emphasis">Showing operations from</div>
                            </v-col>
                            <v-col>
                                <v-autocomplete id="tableVisible" :items="['Public']" label="This Project">
                                </v-autocomplete>
                            </v-col>
                            <v-col cols="12">
                                <v-toolbar color="info">
                                    <v-col cols="9">
                                        <v-toolbar-title>Content Name</v-toolbar-title>
                                    </v-col>
                                    <v-col cols="2">
                                        <createContent />
                                    </v-col>
                                </v-toolbar>
                                <v-table fixed-header height="300px" width="100%">
                                    <thead>
                                        <tr>
                                            <th class="text-left">
                                                Feature Pack ID
                                            </th>
                                            <th class="text-left">
                                                Feature Pack Name
                                            </th>
                                            <th class="text-left">
                                                Feature Pack URL
                                            </th>
                                            <th class="text-left">
                                                Feature Pack Author
                                            </th>
                                            <th class="text-left">
                                                Created
                                            </th>
                                            <th class="text-left">
                                                Edit
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="pages in findManyPages" :key="pages.id">
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
                            </v-col>
                        </v-row>
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import createContent from './InsertAddContent.vue'
    import findManyPages from '../../graphql/query/findManyPages.gql'

    export default {
        components: {
            createContent,
            //editUser
        },
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