<template>
    <div>
            <v-card class="metricsVcard">
                <v-toolbar color="secondary">
                    <v-toolbar-title>Database</v-toolbar-title>
                </v-toolbar>
                    <v-tabs v-model="tab" color="secondary">
                        <v-tab value="option-1">
                            <v-icon start>
                                mdi-account
                            </v-icon>
                            Overview
                        </v-tab>
                        <v-tab value="option-2">
                            <v-icon start>
                                mdi-lock
                            </v-icon>
                            SQL Editor
                        </v-tab>
                        <v-tab value="option-3">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Authentication
                        </v-tab>
                        <v-tab value="option-4">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Edge Functions
                        </v-tab>
                        <v-tab value="option-6">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Logs
                        </v-tab>
                        <v-tab value="option-7">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            API Docs
                        </v-tab>
                        <v-tab value="option-8">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            API Studio
                        </v-tab>
                    </v-tabs>
                    <v-card-text>
                    <v-window v-model="tab" class="databaseSections">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <overview />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <sqleditor />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <authentication />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-4">
                            <v-card flat>
                                <edgefunctions />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-6">
                            <v-card flat>
                                <logs />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-7">
                            <v-card flat>
                                <apidocs />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-8">
                            <v-card flat>
                                <apistudio />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
    </div>
</template>

<script>
    import overview from '~/components/database/overview'
    import sqleditor from '~/components/database/sqleditor'
    import authentication from '~/components/database/authentication'
    import edgefunctions from '~/components/database/edgefunctions'
    import logs from '~/components/database/logs'
    import apidocs from '~/components/database/apidocs'
    import apistudio from '~/components/database/apistudio'

    export default {
        components: {
            overview,
            sqleditor,
            authentication,
            edgefunctions,
            logs,
            apidocs,
            apistudio,
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Database',
    })
</script>

<style scoped>

</style>