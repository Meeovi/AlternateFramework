<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" size="small" v-bind="props" class="insertAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create API Token
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-autocomplete :items="['7 Days', '30 Days', '90 Days', '180 Days', 'Unlimited']" label="Token Duration*" required></v-autocomplete>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Description"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-autocomplete :items="['Read-Only', 'Full Access', 'Custom']" label="Token Type*"></v-autocomplete>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Close
                    </v-btn>
                    <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
    export default {
        data: () => ({
            dialog: false,
        }),
    }
</script>