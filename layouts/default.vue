<template>
    <v-app :theme="theme">
        <v-app-bar>
            <template v-slot:prepend>
                <v-icon start icon="fas fa-hurricane"></v-icon>
            </template>
            <v-app-bar-title>ALTERNATE</v-app-bar-title>
            <v-spacer></v-spacer>

            <div class="d-flex justify-space-around align-center flex-column flex-sm-row fill-height">
                <v-col>
                    <v-btn :prepend-icon="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"
                        @click="onClick"></v-btn>
                </v-col>
                <v-col>
                    <v-btn variant="flat">
                        <v-icon start icon="fas fa-question-circle"></v-icon>Help
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn variant="flat">
                        <v-icon start icon="fas fa-comment"></v-icon>Feedback on this page?
                    </v-btn>
                </v-col>
                <v-col>
                    <v-btn variant="flat">
                        <v-icon start icon="fas fa-bell"></v-icon>
                    </v-btn>
                </v-col>
            </div>
        </v-app-bar>

        <v-main>
            <v-card>
      <v-layout>
        <v-navigation-drawer
          v-model="drawer"
          :rail="rail"
          permanent
          @click="rail = false"
        >
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
            nav
          >
            <template v-slot:append>
              <v-btn
                variant="text"
                icon="fas fa-chevron-left"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item prepend-icon="fas fa-home" title="Home" value="home" href="/"></v-list-item>
            <v-list-item prepend-icon="fas fa-feather-pointed" title="Content Manager" value="content manager" href="/Admin/Content/manager"></v-list-item>
            <v-list-item prepend-icon="fas fa-chart-simple" title="Dashboards" value="dashboards" href="/Admin/Dashboard/explorer"></v-list-item>
            <v-list-item prepend-icon="fas fa-chart-column" title="Metrics" value="metrics" href="/Admin/Metrics/"></v-list-item>
            <v-list-item prepend-icon="fas fa-database" title="Database" value="database" href="/Admin/Database/editor"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main id="sidebarNav">
          <main id="mainSection">
            <slot />
          </main>
        </v-main>
      </v-layout>
    </v-card>
        </v-main>
    </v-app>
</template>

<script>
export default {
    data() {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'fas fa-home' },
        { title: 'Content Manager', icon: 'fas fa-feather-pointed' },
        { title: 'Dashboards', icon: 'fas fa-chart-simple' },
        { title: 'Metrics', icon: 'fas fa-chart-column' },
        { title: 'Database', icon: 'fas fa-database' },
      ],
      rail: true,
    }
  }
}
</script>

<script setup>
    import { ref } from 'vue'

    const theme = ref('dark')

    function onClick() {
        theme.value = theme.value === 'light' ? 'dark' : 'light'
    };
</script>

