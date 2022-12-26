<template>
    <v-row class="tableEditor">
        <v-col class="buttonBar">
            <v-btn variant="flat" size="small" v-on:click="refreshCache([])"><v-icon start icon="fas fa-rotate"></v-icon>Refresh</v-btn>
            <v-btn variant="flat" size="small" @click="deselectRows">deselect rows</v-btn>
            <InsertAddInternationalization />
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
import { AgGridVue } from "ag-grid-vue3"; // the AG Grid Vue Component
import { reactive, onMounted, ref } from "vue";
import InsertAddInternationalization from './InsertAddInternationalization.vue'
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

export default {
        name: "App",
        components: {
            AgGridVue,
            InsertAddInternationalization
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
                        field: "ID"
                    },
                    {
                        field: "Display Name"
                    },
                    {
                        field: "Default Locale"
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
            onGridReady(params) {
            this.gridApi = params.api;
            this.gridColumnApi = params.columnApi;
            },
        },
    };
</script>

<style lang="scss"></style>