<template>
    <div>
        <h4>Regression Tests</h4>
        <v-divider></v-divider>
            <v-card>
                <v-tabs v-model="tab" bg-color="primary">
                    <v-tab value="one">TEST SUITE</v-tab>
                    <v-tab value="two">NEW OPERATIONS</v-tab>
                    <v-tab value="three">RUN TESTS</v-tab>
                    <v-tab value="four">PAST RUNS</v-tab>
                </v-tabs>

                <v-card-text>
                    <v-window v-model="tab">
                        <v-window-item value="one">
                            <v-row>
                                <v-col cols="2">
                                    <div class="text-subtitle-1 text-medium-emphasis">Import allow list from</div>
                                </v-col>
                                <v-col>
                                    <v-autocomplete id="tableVisible" :items="['Public']" label="Select Project">
                                    </v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-window-item>

                        <v-window-item value="two">
                            <v-row>
                                <v-col cols="2">
                                    <div class="text-subtitle-1 text-medium-emphasis">Showing operations from</div>
                                </v-col>
                                <v-col>
                                    <v-autocomplete id="tableVisible" :items="['Public']" label="This Project">
                                    </v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-window-item>
                        <v-window-item value="three">
                            <v-row>
                                <v-col cols="2">
                                    <div class="text-subtitle-1 text-medium-emphasis">Showing operations from</div>
                                </v-col>
                                <v-col>
                                    <v-autocomplete id="tableVisible" :items="['Public']" label="This Project">
                                    </v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-window-item>
                        <v-window-item value="four">
                            <v-row>
                                <v-col cols="2">
                                    <div class="text-subtitle-1 text-medium-emphasis">Showing operations from</div>
                                </v-col>
                                <v-col>
                                    <v-autocomplete id="tableVisible" :items="['Public']" label="This Project">
                                    </v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
    </div>
</template>

<script>
  export default {
    data: () => ({
      tab: 'one',
    }),
  }
</script>