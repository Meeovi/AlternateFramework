<template>
    <div>
            <v-card class="metricsVcard">
                <v-toolbar color="primary">
                    <v-toolbar-title>Database</v-toolbar-title>
                </v-toolbar>
                    <v-tabs v-model="tab" color="primary">
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
                        <v-tab value="option-5">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Reports
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
                                <errors />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <usage />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-4">
                            <v-card flat>
                                <operations />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-5">
                            <v-card flat>
                                <websockets />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-6">
                            <v-card flat>
                                <subscriptionWorkers />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-7">
                            <v-card flat>
                                <allowLists />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-8">
                            <v-card flat>
                                <apiLimits />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
    </div>
</template>

<script>
    import overview from '~/components/metrics/metriclinks/overview'
    import errors from '~/components/metrics/metriclinks/errors'
    import usage from '~/components/metrics/metriclinks/usage'
    import operations from '~/components/metrics/metriclinks/operations'
    import websockets from '~/components/metrics/metriclinks/websockets'
    import subscriptionWorkers from '~/components/metrics/metriclinks/subscriptionWorkers'
    import allowLists from '~/components/metrics/metriclinks/allowLists'
    import apiLimits from '~/components/metrics/metriclinks/apiLimits'

    export default {
        components: {
            overview,
            errors,
            usage,
            operations,
            websockets,
            subscriptionWorkers,
            allowLists,
            apiLimits,
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