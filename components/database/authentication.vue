<template>
    <div>
            <v-card class="metricsVcard">
                <div class="d-flex flex-row">
                    <v-tabs v-model="tab" direction="vertical" color="primary">
                        <v-tab value="option-1">
                            <v-icon start>
                                mdi-account
                            </v-icon>
                            Users
                        </v-tab>
                        <v-tab value="option-2">
                            <v-icon start>
                                mdi-lock
                            </v-icon>
                            Policies
                        </v-tab>
                        <v-tab value="option-3">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Providers
                        </v-tab>
                        <v-tab value="option-4">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            Email Templates
                        </v-tab>
                        <v-tab value="option-5">
                            <v-icon start>
                                mdi-access-point
                            </v-icon>
                            URL Configuration
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

    export default {
        components: {
            overview,
            errors,
            usage,
            operations,
            websockets,
            subscriptionWorkers,
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<style scoped>

</style>