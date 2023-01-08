<template>
    <div>
        <v-row style="overflow-y: scroll; height: 55vh;">
            <v-col cols="12">
                <h4>Subject Heading</h4>
                <v-text-field label="Confirm Your Signup*" id="confirmSignup" required></v-text-field>
            </v-col>
            <v-col cols="12">
                <h4>Message body</h4>
                <v-card subtitle="Message variables" text="{{ .ConfirmationURL }} : URL to confirm the email change
{{ .Token }} : The 6-digit numeric email OTP
{{ .TokenHash }} : The hashed token used in the URL" variant="tonal"></v-card>
            </v-col>
            <v-col cols="12">
                <v-textarea clearable clear-icon="fas fa-circle-xmark" label="Text" model-value="This is clearable text."></v-textarea>
            </v-col>
            <v-col cols="12">
                <v-btn>Cancel</v-btn>
                <v-btn color="success">Save</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        
    }
</script>