<template>
    <div>
        <v-navigation-drawer permanent class="contentLeft">
            <v-list>
                <h4>Guidelines</h4>
                <RightAddGuidelines />
                <v-divider></v-divider>
                <v-list-item title="Home" value="home"></v-list-item>

                <v-list-item title="Contacts" value="contacts"></v-list-item>

                <v-list-item title="Settings" value="settings"></v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import RightAddGuidelines from './RightAddGuidelines.vue'

    export default {
        components: { RightAddGuidelines }

    }
</script>