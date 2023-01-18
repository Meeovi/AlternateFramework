<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ props }">
                <v-btn color="primary" size="small" v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-user-circle"></v-icon>Create User
                </v-btn>
            </template>
            <v-card>
                <form enctype="multipart/form-data" @submit.prevent="addUser()">
                <v-card-title>
                    <span class="text-h6">Create new user</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="6">
                                <v-text-field v-model="username" label="Username*" id="username" required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="first_name" label="First Name*" id="first_name" required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="last_name" label="Last Name" id="last_name" hint="Optional"></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field v-model="phone" label="Phone" id="userPhone" hint="Optional"></v-text-field>
                            </v-col>
                            <v-divider></v-divider>
                            <v-col cols="6">
                                <v-text-field type="email" v-model="email" label="Email*" id="email" hint="example@example.com" required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-text-field type="password" v-model="password" label="Password*" id="password" required></v-text-field>
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
//import findManyUsers from "../../../graphql/query/findManyUsers.gql";

const ADD_USER = gql`
    mutation ($first_name:String!,$last_name:String!,$username:String!,$email:String!, $password: String!, $phone: String!){
    createOneUsers(data: {first_name: $first_name, last_name: $last_name, email: $email, username: $username, password: $password, phone: $phone}) {
        email
        first_name
        last_name
        username
        password
        phone
  }
}`;

export default {
    data() {
    return {
        dialog: false,
        email: " ",
        first_name: " ",
        last_name: " ",
        username: " ",
        password: " ",
        phone: " ",
      }
  },
  methods: {
      async addUser() {
            const first_name = this.first_name;
            const last_name = this.last_name;
            const email = this.email;
            const username = this.username;
            const password = this.password;
            const phone = this.phone;
            await this.$apollo.mutate({
                mutation: ADD_USER,
                variables: {
                    first_name,
                    last_name,
                    email,
                    username,
                    password,
                    phone
                },
        update: (cache, { data: { insertStaffMember }}) => {
                        // Read data from cache for this query
                        try {
                            const insertedStaffMember = insertStaffMember.returning;
                            console.log(insertedStaffMember)
                            cache.writeQuery({
                                query: findManyUsers
                            })
                        }
                        catch (err) {
                            console.error(err)
                        }
                    }
                }).catch(err => console.log(err));
                this.first_name = ' ';
                this.last_name = ' ';
                this.email = ' ';
                this.username = ' ';
                this.password = ' ';
                this.phone = ' ';
            },
        },
}
</script>