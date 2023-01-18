<template>
    <div>
            <v-card class="contentright">
                <v-toolbar color="primary">
                    <v-toolbar-title>Monitoring</v-toolbar-title>
                </v-toolbar>
                <div class="d-flex flex-row">
                    <v-tabs v-model="tab" direction="vertical" color="primary">
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
                            Errors
                        </v-tab>
                        <v-tab value="option-3">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Usage
                        </v-tab>
                        <v-tab value="option-4">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Operations
                        </v-tab>
                        <v-tab value="option-5">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Websockets
                        </v-tab>
                        <v-tab value="option-6">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Subscription Workers
                        </v-tab>
                        <v-tab value="option-7">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Allow Lists
                        </v-tab>
                        <v-tab value="option-8">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            API Limits
                        </v-tab>
                        <v-tab value="option-9">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Regression Tests
                        </v-tab>
                    </v-tabs>
                    <v-window v-model="tab" class="metricsWindowRight">
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
                        <v-window-item value="option-9">
                            <v-card flat>
                                <regressionTests />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </div>
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
    import regressionTests from '~/components/metrics/metriclinks/regressionTests'

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
            regressionTests
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Metrics',
    })
</script>

<style scoped>

</style>