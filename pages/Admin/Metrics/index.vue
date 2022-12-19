<template>
    <div>
        <metricsStockChart />
    </div>
</template>

<script>
import metricsStockChart from '~/components/charts/metricsStockChart'

export default {
    components: { metricsStockChart }

}
</script>

<script setup>
useHead({
        title: 'Metrics',
    })
</script>

<style scoped>

</style>