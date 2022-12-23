<template>
  <div>
      <v-row>
          <v-col cols="2" class="leftContent">
              <FilesLeft />
          </v-col>
          <v-col>
              <FilesRight />
          </v-col>
      </v-row>
  </div>
</template>

<script>
import FilesLeft from './files/FilesLeft.vue'
import FilesRight from './files/FilesRight.vue'

export default {
  components: { FilesLeft, FilesRight }
}
</script>