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
                    </v-tabs>
                    <v-window v-model="tab" class="metricsWindowRight">
                        <v-window-item value="option-1">
                            <v-card flat>
                                <users />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-2">
                            <v-card flat>
                                <policies />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-3">
                            <v-card flat>
                                <providers />
                            </v-card>
                        </v-window-item>
                        <v-window-item value="option-4">
                            <v-card flat>
                                <emailtemplates />
                            </v-card>
                        </v-window-item>
                    </v-window>
                </div>
            </v-card>
    </div>
</template>

<script>
    import users from '~/components/database/authentication/users'
    import policies from '~/components/database/authentication/policies'
    import providers from '~/components/database/authentication/providers'
    import emailtemplates from '~/components/database/authentication/emailtemplates'

    export default {
        components: {
            users,
            policies,
            providers,
            emailtemplates,
        },
        data: () => ({
            tab: 'option-1',
        }),
    }
</script>

<style scoped>

</style>