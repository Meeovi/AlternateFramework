<template>
    <div>
        <v-row>
            <v-col cols="2" class="leftContent">
                <IntegrateLeft />
            </v-col>
            <v-col>
                <IntegrateRight />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import IntegrateLeft from './integratePlugin/IntegrateLeft'
import IntegrateRight from './integratePlugin/IntegrateRight'

export default {
    components: { IntegrateLeft, IntegrateRight }
}
</script>
