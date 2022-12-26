<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" size="small" v-bind="props" class="insertAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Create New Page
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h5">New Page</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Page Name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Page Description" hint="What is this page about?">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field id="pageUrl" label="URL*" hint="/about" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-textarea counter label="Content*" :rules="rules" :model-value="value"></v-textarea>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Meta Name*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field label="Meta Description" hint="What is this page about?">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field id="pageUrl" label="URL*" hint="/about" required></v-text-field>
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
            rules: [v => v.length <= 25 || 'Max 25 characters'],
            value: '',
    }),
  }
</script>