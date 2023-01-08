<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" size="small" v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-file-signature"></v-icon>Create Policy
                </v-btn>
            </template>
            <v-card>
                <form enctype="multipart/form-data" @submit.prevent="addPolicy()">
                <v-card-title>
                    <span class="text-h6">Create new policy</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="name" label="Name*" id="name" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-autocomplete v-model="type" id="policyType" :items="['Agreements', 'Policies', 'Announcements']" label="Policy Type"></v-autocomplete>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="author" label="Author" id="policyAuthor" hint="Optional"></v-text-field>
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
                        Create
                    </v-btn>
                </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
/* eslint-disable camelcase */
import  gql from "graphql-tag";
import findManyAgreements from "../../../graphql/query/findManyAgreements.gql";

const ADD_POLICY = gql`
    mutation ($type:String!,$name:String!,$author: String!){
    createOneAgreements(data: {type: $type, name: $name, author: $author}) {
        type
        name
        author
  }
}`;

export default {
    data() {
    return {
        dialog: false,
        type: " ",
        name: " ",
        author: " ",
      }
  },
  methods: {
      async addPolicy() {
            const type = this.type;
            const name = this.name;
            const author = this.author;
            await this.$apollo.mutate({
                mutation: ADD_POLICY,
                variables: {
                    type,
                    name,
                    author
                },
        update: (cache, { data: { insertAgreement }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedAgreement = insertAgreement.returning;
                            console.log(insertedAgreement)
                            cache.writeQuery({
                                query: findManyAgreements
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).catch(err => console.log(err));
                this.type = ' ';
                this.name = ' ';
                this.author = ' ';
            },
        },
}
</script>