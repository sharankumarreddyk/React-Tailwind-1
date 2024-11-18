import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import "datatables.net";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/dataTables.dataTables.css";

const TableComponent = ({
  data,
  filteredData,
  tableSearchInput,
  resultsPerPage,
  currentRangeStart,
  currentRangeEnd,
}) => {
  const tableRef = useRef(null);

  useEffect(() => {
    if (!data?.data?.length) return;

    const dataTable = $(tableRef.current).DataTable({
      data: filteredData || data.data,
      columns: data.columns
        .filter((col) => col.data !== "monthlySales")
        .map((col) => ({
          title: col.title,
          data: col.data,
        })),
      pageLength: resultsPerPage,
      searching: true,
      ordering: true,
      responsive: true,
      language: {
        search: "Search:",
        lengthMenu: "Show _MENU_ entries",
        info: `Showing ${currentRangeStart} to ${currentRangeEnd} of ${data.data.length} entries`,
        paginate: {
          first: "«",
          previous: "‹",
          next: "›",
          last: "»",
        },
      },
    });
    

    // Handle search input changes
    if (tableSearchInput) {
      dataTable.search(tableSearchInput).draw();
    }

    return () => {
      dataTable.destroy();
    };
  }, [data, filteredData, tableSearchInput, resultsPerPage]);

  return (
    <div className="container mx-auto p-4">
      <table ref={tableRef} className="display min-w-full  ">
        <thead className="bg-blue-950">
          <tr>
            {data?.columns
              ?.filter((col) => col.data !== "monthlySales")
              ?.map((col) => (
                <th key={col.data} className="text-white">
                  {col.title}
                </th>
              ))}
          </tr>
        </thead>
      </table>
    </div>
  );
};

TableComponent.propTypes = {
  data: PropTypes.object.isRequired,
  filteredData: PropTypes.array,
  tableSearchInput: PropTypes.string,
  handleTableSearchInput: PropTypes.func.isRequired,
  clearTableSearch: PropTypes.func.isRequired,
  resultsPerPage: PropTypes.number.isRequired,
  handleResultsPerPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  handlePageChange: PropTypes.func.isRequired,
  currentRangeStart: PropTypes.number.isRequired,
  currentRangeEnd: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default TableComponent; 