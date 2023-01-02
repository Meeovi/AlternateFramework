<template>
    <div>
        <form action="">
            <v-row>
                <v-col cols="12">
                    <MonacoEditor v-model="value" lang="typescript" />
                </v-col>
                <v-col cols="12">
                    <v-row>
                        <v-col cols="10">

                        </v-col>
                        <v-col cols="2">
                            <v-expansion-panel v-for="i in 3" :key="i" appended-icon="fas fa-heart" title="Item"></v-expansion-panel>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </form>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('')
</script>