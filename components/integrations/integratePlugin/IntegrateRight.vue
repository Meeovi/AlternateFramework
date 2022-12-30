<template>
    <v-row class="tableEditor" theme="dark">
        <v-col class="buttonBar">
            <v-btn variant="flat" size="small" v-on:click="refreshCache([])"><v-icon start icon="fas fa-rotate"></v-icon>Refresh</v-btn>
            <v-btn variant="flat" size="small" @click="deselectRows">deselect rows</v-btn>
        </v-col>
        <v-col class="rightCsv">
            <v-btn variant="flat" size="small" v-on:click="onBtnUpdate()"><v-icon start icon="fas fa-file-csv"></v-icon>Show CSV</v-btn>
            <v-btn variant="flat" size="small" v-on:click="onBtnExport()"><v-icon start icon="fas fa-share"></v-icon>Export CSV</v-btn>
        </v-col>
        <ag-grid-vue class="ag-theme-alpine"
            :columnDefs="columnDefs.value" :rowData="rowData.value" :defaultColDef="defaultColDef"
            rowSelection="multiple" animateRows="true" @cell-clicked="cellWasClicked"
            :autoGroupColumnDef="autoGroupColumnDef" :rowModelType="rowModelType" :suppressAggFuncInHeader="true"
            :rowGroupPanelShow="rowGroupPanelShow" @grid-ready="onGridReady">
        </ag-grid-vue>
    </v-row>
</template>

<script>
    import {
        AgGridVue
    } from "ag-grid-vue3"; // the AG Grid Vue Component
    import {
        reactive,
        onMounted,
        ref
    } from "vue";
    import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
    import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

    export default {
        name: "App",
        components: {
            AgGridVue,
        },
        setup() {
            const gridApi = ref(null); // Optional - for accessing Grid's API

            // Obtain API from grid's onGridReady event
            const onGridReady = (params) => {
                gridApi.value = params.api;
            };

            const rowData = reactive({}); // Set rowData to Array of Objects, one Object per Row

            // Each Column Definition results in one Column.
            const columnDefs = reactive({
                value: [{
                        field: "make"
                    },
                    {
                        field: "model"
                    },
                    {
                        field: "price"
                    }
                ],
            });

            // DefaultColDef sets props common to all Columns
            const defaultColDef = {
                sortable: true,
                filter: true,
                editable: true,
                resizable: true,
                minWidth: 150,
                headerCheckboxSelection: true,
                checkboxSelection: true,
                flex: 1
            };

            // Example load data from sever
            onMounted(() => {
                fetch("https://www.ag-grid.com/example-assets/row-data.json")
                    .then((result) => result.json())
                    .then((remoteRowData) => (rowData.value = remoteRowData));
            });

            return {
                onGridReady,
                columnDefs,
                rowData,
                defaultColDef,
                autoGroupColumnDef: null,
                rowModelType: null,
                rowGroupPanelShow: null,
                gridApi: null,
                columnApi: null,
                cellWasClicked: (event) => { // Example of consuming Grid Event
                    console.log("cell was clicked", event);
                },
                deselectRows: () => {
                    gridApi.value.deselectAll()
                }
            };
        },
        methods: {
            onBtnExport() {
            this.gridApi.exportDataAsCsv();
            },
            onBtnUpdate() {
            document.querySelector('#csvResult').value = this.gridApi.getDataAsCsv();
            },
            onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
            },
        },
    };
</script>

<style lang="scss"></style>