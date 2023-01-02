<template>
    <v-card>
        <v-tabs v-model="tab" bg-color="primary">
            <v-tab value="one">SQL Editor</v-tab>
            <v-tab value="two">Diff</v-tab>
        </v-tabs>

        <v-card-text>
            <v-window v-model="tab">
                <v-window-item value="one">
                    <sqleditor />
                </v-window-item>

                <v-window-item value="two">
                    
                </v-window-item>
            </v-window>
        </v-card-text>
    </v-card>
</template>

<script>
    import sqleditor from '~/components/Editors/sqleditor'

    export default {
        components: {
            sqleditor,
        },
        data: () => ({
            tab: null,
        }),
    }
</script>