<template>
    <div>
        <v-navigation-drawer permanent class="contentLeft">
            <v-list>
                <RightAddContent />
                <v-divider></v-divider>
                <v-list-item title="Home" value="home"></v-list-item>

                <v-list-item title="Contacts" value="contacts"></v-list-item>

                <v-list-item title="Settings" value="settings"></v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {


    }
</script>