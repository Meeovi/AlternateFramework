<template>
    <div>
            <v-card class="metricsVcard">
                <div class="d-flex flex-row">
                    <v-tabs v-model="tab" direction="vertical" color="primary">
                        <v-tab value="option-1">
                            <v-icon start>
                                mdi-account
                            </v-icon>
                            New Query
                        </v-tab>
                        <v-tab value="option-2">
                            <v-icon start>
                                mdi-lock
                            </v-icon>
                            Getting Started
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
                            SQL Snippets
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
                    </v-window>
                </div>
            </v-card>
    </div>
</template>

<script>
    import overview from '~/components/database/overview'
    import errors from '~/components/metrics/metriclinks/errors'
    import usage from '~/components/metrics/metriclinks/usage'
    import operations from '~/components/metrics/metriclinks/operations'

    export default {
        components: {
            overview,
            errors,
            usage,
            operations,
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<style scoped>

</style>