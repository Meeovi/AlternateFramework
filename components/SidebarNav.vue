<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
        expand-on-hover
        rail
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
            <v-list-item prepend-icon="fas fa-cubes" title="Integrations" value="integrations" href="/Admin/Integrations/"></v-list-item>
            <v-list-item prepend-icon="fas fa-cog" title="Settings" value="settings" href="/Admin/Settings/general-settings"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main id="sidebarNav">
            <slot />
        </v-main>
      </v-layout>
    </v-card>
  </template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'fas fa-home' },
        { title: 'Content Manager', icon: 'fas fa-feather-pointed' },
        { title: 'Dashboards', icon: 'fas fa-chart-simple' },
        { title: 'Metrics', icon: 'fas fa-chart-column' },
        { title: 'Database', icon: 'fas fa-database' },
        { title: 'Integrations', icon: 'fas fa-cubes' },
        { title: 'Settings', icon: 'fas fa-cog' },
      ],
      rail: true,
    }
  },
}
</script>