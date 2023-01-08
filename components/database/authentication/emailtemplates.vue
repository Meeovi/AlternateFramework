<template>
    <v-card>
        <v-row class="emailTemplates">
            <v-col cols="12">
                <h2>Email Templates</h2>
            </v-col>
            <v-col cols="12">
                <h4>Customize the emails that will be sent out to your users.</h4>
            </v-col>
        </v-row>
        <v-tabs fixed-tabs v-model="tab" bg-color="primary">
            <v-tab value="one">Confirm signup</v-tab>
            <v-tab value="two">Invite user</v-tab>
            <v-tab value="three">Magic Link</v-tab>
            <v-tab value="four">Change Email Address</v-tab>
            <v-tab value="five">Reset Password</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <confirmSignup />
                </v-window-item>

                <v-window-item value="two">
                    <inviteUser />
                </v-window-item>

                <v-window-item value="three">
                    <magicLink />
                </v-window-item>

                <v-window-item value="four">
                    <changeEmail />
                </v-window-item>
                
                <v-window-item value="five">
                    <resetPassword />
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
import confirmSignup from './templates/confirmSignup.vue'
import inviteUser from './templates/inviteUser.vue'
import magicLink from './templates/magicLink.vue'
import changeEmail from './templates/changeEmail.vue'
import resetPassword from './templates/resetPassword.vue'

    export default {
        components: { confirmSignup, inviteUser, magicLink, changeEmail, resetPassword },
        data: () => ({
            tab: null,
        }),
    }
</script>