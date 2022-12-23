<template>
  <div>
      <v-row>
          <v-col cols="2" class="leftContent">
              <WorkflowLeft />
          </v-col>
          <v-col>
              <WorkflowRight />
          </v-col>
      </v-row>
  </div>
</template>

<script>
import WorkflowLeft from './workflow/WorkflowLeft.vue'
import WorkflowRight from './workflow/WorkflowRight.vue'

export default {
  components: { WorkflowLeft, WorkflowRight }
}
</script>