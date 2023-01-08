<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" size="small" v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-file-pen"></v-icon>Create Content
                </v-btn>
            </template>
            <v-card>
                <form action="" method="post" @submit.prevent="addDatabaseTable()">
                <v-card-title>
                    <span class="text-h6">Create new content</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field v-model="tableName" label="Name*" id="tableName" required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="tableDescription" label="Description" id="tableDescription" hint="Optional"></v-text-field>
                            </v-col>
                            <v-divider></v-divider>
                                <v-col cols="6">
                                    <div class="text-subtitle-1 text-medium-emphasis">Broadcast changes to eligible users?</div>
                                    <v-autocomplete v-model="tableBroadcast" id="tableBroadcast" :items="['Broadcast', 'Disable']" label="Notifications"></v-autocomplete>
                                </v-col>
                                <v-col cols="6">
                                    <div class="text-subtitle-1 text-medium-emphasis">Who can see this content?</div>
                                    <v-autocomplete v-model="tableVisible" id="tableVisible" :items="['Public', 'Private']" label="Visibility"></v-autocomplete>
                                </v-col>
                            <v-divider></v-divider>
                            <br>
                            <div class="form-wrapper">
                                <div type="group" name="taskGroup" :repeatable="true" add-label="+ Add Task"
                                    validation="required">
                                    <div class="task" style="padding-bottom:10px;">
                                        <v-row>
                                            <v-col cols="4">
                                                <v-text-field v-model="tableColumnName" id="columnName" label="Column Name" hint="Column Name"></v-text-field>
                                            </v-col>
                                            <v-col cols="4">
                                                <v-select v-model="tableColumnType" id="columnType" :items="['Integer', 'BigInteger', 'Text', 'Boolean', 'SmallInteger', 'Datetime', 'Float', 'Json', 'Bytes', 'Decimal']" label="Type*" required></v-select>
                                            </v-col>
                                            <v-col cols="4">
                                                <v-autocomplete v-model="tableColumnDefault" id="columnDefaultName" :items="['Set as NULL', 'Set as empty string']" label="Default Value"></v-autocomplete>
                                            </v-col>
                                        </v-row>
                                    </div>
                                </div>
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
                        Create
                    </v-btn>
                </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>

    export default {
        data(){
            return {
              dialog: false,
              tableName: "",
            tableDescription: "",
            tableBroadcast: "",
            tableVisible: "",
            tableColumnName: "",
            tableColumnType: "",
            tableColumnDefault: ""
            }
        },
        methods: {
            addDatabaseTable(){
              this.$axios.content('api/create', {
                tableName: this.tableName,
                tableDescription: this.tableDescription,
                tableBroadcast: this.tableBroadcast,
                tableVisible: this.tableVisible,
                tableColumnName: this.tableColumnName,
                tableColumnType: this.tableColumnType,
                tableColumnDefault: this.tableColumnDefault,
              })
              .then((response) => {
                console.log(response)
                if(response.data._id){
                    this.$router.push({ name:'content', params:{ created:'yes' } })
                }
                })
                .catch( (error) => {
                console.log(error)
                if(error.response.data.errors){
                    this.errors = error.response.data.errors
                }
                });
            }
        }   
    }
</script>

<script setup>
const { data } = await useFetch('/api/dataType.json')
</script>