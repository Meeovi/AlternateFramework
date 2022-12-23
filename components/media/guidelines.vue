<template>
  <div>
      <v-row>
          <v-col cols="2" class="leftContent">
              <GuidelinesLeft />
          </v-col>
          <v-col>
              <GuidelinesRight />
          </v-col>
      </v-row>
  </div>
</template>

<script>
import GuidelinesLeft from './guidelines/GuidelinesLeft.vue'
import GuidelinesRight from './guidelines/GuidelinesRight.vue'

export default {
  components: { GuidelinesLeft, GuidelinesRight }
}
</script>