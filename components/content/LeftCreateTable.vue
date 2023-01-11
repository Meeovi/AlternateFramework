<template>
    <div>
        <tablecreator></tablecreator>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                dialog: false,
            /*    tableName: "",
                tableDescription: "",
                tableBroadcast: "",
                tableVisible: "",
                tableColumnName: "",
                tableColumnType: "",
                tableColumnDefault: "", */
            }
        },
    /*    methods: {
            addDatabaseTable() {
                this.$axios
                    .post("/admin/content/manager", {
                        tableName: this.tableName,
                        tableDescription: this.tableDescription,
                        tableBroadcast: this.tableBroadcast,
                        tableVisible: this.tableVisible,
                        tableColumnName: this.tableColumnName,
                        tableColumnType: this.tableColumnType,
                        tableColumnDefault: this.tableColumnDefault
                    });
            },
        } */
    }
</script>

<script setup>
    const { data } = await useFetch('/api/dataType.json')
</script>