<template>
    <div>
            <v-card class="metricsVcard">
                <div class="d-flex flex-row">
                    <v-tabs v-model="tab" direction="vertical" color="primary">
                        <v-tab value="option-1">
                            <v-icon start>
                                mdi-account
                            </v-icon>
                            Query
                        </v-tab>
                        <v-tab value="option-2">
                            <v-icon start>
                                mdi-lock
                            </v-icon>
                            Saved Queries
                        </v-tab>
                        <v-tab value="option-3">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Recent Queries
                        </v-tab>
                        <v-tab value="option-4">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Templates
                        </v-tab>
                        <v-tab value="option-5">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            API Edge Network
                        </v-tab>
                        <v-tab value="option-6">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Auth
                        </v-tab>
                        <v-tab value="option-7">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Storage
                        </v-tab>
                        <v-tab value="option-8">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Realtime
                        </v-tab>
                    </v-tabs>
                    <v-window v-model="tab" class="metricsWindowRight">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <query />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <savedqueries />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <recentqueries />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-4">
                            <v-card flat>
                                <templates />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-5">
                            <v-card flat>
                                <apiedge />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-6">
                            <v-card flat>
                                <auth />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-7">
                            <v-card flat>
                                <storage />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-8">
                            <v-card flat>
                                <realtime />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </div>
            </v-card>
    </div>
</template>

<script>
    import query from '~/components/database/logs/query'
    import savedqueries from '~/components/database/logs/savedqueries'
    import recentqueries from '~/components/database/logs/recentqueries'
    import templates from '~/components/database/logs/templates'
    import apiedge from '~/components/database/logs/apiedge'
    import auth from '~/components/database/logs/auth'
    import storage from '~/components/database/logs/storage'
    import realtime from '~/components/database/logs/realtime'

    export default {
        components: {
            query,
            savedqueries,
            recentqueries,
            templates,
            apiedge,
            auth,
            storage,
            realtime,
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<style scoped>

</style>