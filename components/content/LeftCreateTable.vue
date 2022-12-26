<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" size="small" v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-file-pen"></v-icon>Create Content
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="text-h6">Create new content</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field label="Name*" id="tableName" required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field label="Description" id="tableDescription" hint="Optional"></v-text-field>
                            </v-col>
                            <v-divider></v-divider>
                            <br>
                            <v-row>
                                <v-col>
                                    <div class="text-subtitle-1 text-medium-emphasis">Broadcast changes to eligible users?</div>
                                    <v-autocomplete id="tableBroadcast" :items="['Broadcast', 'Disable']" label="Notifications"></v-autocomplete>
                                </v-col>
                                <v-col>
                                    <div class="text-subtitle-1 text-medium-emphasis">Who can see this content?</div>
                                    <v-autocomplete id="tableVisible" :items="['Public', 'Private']" label="Visibility"></v-autocomplete>
                                </v-col>
                            </v-row>
                            <v-divider></v-divider>
                            <br>
                            <div class="form-wrapper">
                                <form type="group" name="taskGroup" :repeatable="true" add-label="+ Add Task"
                                    validation="required">
                                    <div class="task" style="padding-bottom:10px;">
                                        <v-row>
                                            <v-col>
                                                <v-text-field id="columnName" label="Column Name" hint="Column Name"></v-text-field>
                                            </v-col>
                                            <v-col>
                                                <v-select id="columnType" :items="[data]" label="Type*" required></v-select>
                                            </v-col>
                                            <v-col>
                                                <v-autocomplete id="columnDefaultName" :items="['Set as NULL', 'Set as empty string']" label="Default Value"></v-autocomplete>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </form>
                            </div>
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

<script setup>
const { data } = await useFetch('/api/dataType.json')
</script>