<template>
    <div>

    </div>
</template>

<script>
export default {
    
}
</script>

<script setup>
    useHead({
        title: 'Customers',
    });

const { data: pages } = await useAsyncData(() => $fetch("/api/pages"));
</script>