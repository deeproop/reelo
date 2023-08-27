import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
export default function PreloadVirtualScrollDemo({ data }) {
  return (
    <div className="card">
      <DataTable
        value={data}
        removableSort
        scrollable
        scrollHeight="400px"
        virtualScrollerOptions={{ itemSize: 46 }}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          field="pl_name"
          header="Planet Name"
          sortable
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="hostname"
          header="Host Name"
          sortable
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="discoverymethod"
          header="Discovery Method"
          sortable
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="disc_year"
          header="Discovery Year"
          sortable
          style={{ width: "20%" }}
        ></Column>
        <Column
          field="disc_facility"
          header="Discovery Facility"
          sortable
          style={{ width: "20%" }}
        ></Column>
      </DataTable>
    </div>
  );
}
