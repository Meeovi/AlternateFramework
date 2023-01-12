import {
    createApp
} from 'vue'

const app = createApp({})

const createTable = app.component('create-table', {
    template:
        /*html*/
        `
    <v-row justify="center">
        <v-dialog v-model="dialog" fullscreen :scrim="false" transition="dialog-bottom-transition" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" size="small" v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-file-pen"></v-icon>Create Content
                </v-btn>
            </template>
            <v-card>
    <form action="" method="post" @v-on:submit.prevent="addDatabaseTable()">
    <v-toolbar dark color="primary">
        <v-btn icon dark @click="dialog = false">
            <v-icon icon="fas fa-circle-xmark"></v-icon>
        </v-btn>
        <v-card-title>
            <span class="text-h6">Create new content</span>
        </v-card-title>
    </v-toolbar>
    <v-card-text>
        <v-container>
            <v-row>
                <v-col cols="6">
                    <v-text-field v-model="tableName" label="Name*" id="tableName" required>
                    </v-text-field>
                </v-col>
                <v-col cols="6">
                    <v-text-field v-model="tableDescription" label="Description" id="tableDescription"
                        hint="Optional"></v-text-field>
                </v-col>
                <v-divider></v-divider>
                <v-col cols="6">
                    <div class="text-subtitle-1 text-medium-emphasis">Broadcast changes to eligible
                        users?</div>
                    <v-autocomplete v-model="tableBroadcast" id="tableBroadcast"
                        :items="['Broadcast', 'Disable']" label="Notifications"></v-autocomplete>
                </v-col>
                <v-col cols="6">
                    <div class="text-subtitle-1 text-medium-emphasis">Who can see this content?</div>
                    <v-autocomplete v-model="tableVisible" id="tableVisible"
                        :items="['Public', 'Private']" label="Visibility"></v-autocomplete>
                </v-col>
                <v-divider></v-divider>
                <br>
                <div class="form-wrapper">
                    <div type="group" name="taskGroup" :repeatable="true" add-label="+ Add Task"
                        validation="required">
                        <div class="task" style="padding-bottom:10px;">
                            <v-row>
                                <v-col cols="4">
                                    <v-text-field v-model="tableColumnName" id="columnName"
                                        label="Column Name" hint="Column Name"></v-text-field>
                                </v-col>
                                <v-col cols="4">
                                    <v-select v-model="tableColumnType" id="columnType"
                                        :items="['Integer', 'BigInteger', 'Text', 'Boolean', 'SmallInteger', 'Datetime', 'Float', 'Json', 'Bytes', 'Decimal']"
                                        label="Type*" required></v-select>
                                </v-col>
                                <v-col cols="4">
                                    <v-autocomplete v-model="tableColumnDefault" id="columnDefaultName"
                                        :items="['Set as NULL', 'Set as empty string']"
                                        label="Default Value"></v-autocomplete>
                                </v-col>
                                <v-col><v-btn variant="text" prepend-icon="fas fa-plus">Add Field</v-btn></v-col>
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
    `,
    data() {
        return {
            tableName: "",
            tableDescription: "",
            tableBroadcast: "",
            tableVisible: "",
            tableColumnName: "",
            tableColumnType: "",
            tableColumnDefault: "",
        }
    },
    methods: {
        onSubmit() {
            if (this.tableName === '' || this.tableColumnName === '' || this.tableColumnType === null || this.tableColumnDefault === null) {
                alert('fields are incomplete. Please fill out every field.')
                return
            }

            let tablecreator = {
                tableName: this.tableName,
                tableDescription: this.tableDescription,
                tableBroadcast: this.tableBroadcast,
                tableVisible: this.tableVisible,
                tableColumnName: this.tableColumnName,
                tableColumnType: this.tableColumnType,
                tableColumnDefault: this.tableColumnDefault

            }
            this.$emit('create-table', tablecreator)

            this.tableName = ' '
            this.tableDescription = ' '
            this.tableBroadcast = ' '
            this.tableVisible = ' '
            this.tableColumnName = ' '
            this.tableColumnType = ' '
            this.tableColumnDefault = ' '
        }
    }
})

export default createTable