<template>
    <div>
        <v-row>
            <v-col cols="12">
                <h4>Details</h4>
            </v-col>
            <v-col cols="6">
                <h6>Alternate Framework Version</h6>

            </v-col>
            <v-col cols="6">
                <h6>Current Plan</h6>

            </v-col>
            <v-col cols="6">
                <h6>Node Version</h6>
                
            </v-col>
            <v-col cols="12">
                <h6>Customization</h6>
            </v-col>
            <v-col cols="6">
                <h6>Logo</h6>
                <v-file-input multiple label="Upload Logo" class="logoUpload"></v-file-input>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {

    }
</script>