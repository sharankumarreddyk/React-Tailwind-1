import React, { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import jsPDF from "jspdf";
import "jspdf-autotable";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [showExportOptions, setShowExportOptions] = useState(false);
  const [showGraph, setShowGraph] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const [showNoResults, setShowNoResults] = useState(false);
  const [tableSearchInput, setTableSearchInput] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const hasShownWelcomeRef = useRef(false);
  const [isSortDisabled, setIsSortDisabled] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/Data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (!result || !result.data || !result.columns) {
          throw new Error("Invalid data structure");
        }

        setData(result);
        setFilteredData(result.data);
        setIsLoading(false);

        if (!hasShownWelcomeRef.current) {
          addMessage(
            "bot",
            "Welcome! How can I help you search the car sales data?"
          );
          hasShownWelcomeRef.current = true;
        }
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { id: Date.now(), sender, text }]);
  };

  const handleSearch = (query) => {
    if (!data || !data.data) return;

    const filtered = data.data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setShowTable(true);
    setShowNoResults(filtered.length === 0);
    setCurrentPage(1);
    setSortOption("default"); // Reset sort
    setIsSortDisabled(true); // Disable sort
    addMessage("bot", `Found ${filtered.length} results for "${query}"`);
  };

  const handleUserInput = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      addMessage("user", userInput);
      handleSearch(userInput);
      setUserInput("");
    }
  };

  const clearSearch = () => {
    setMessages((prev) =>
      prev.filter((message) => message.text.includes("Welcome!"))
    );
    setUserInput("");
    setFilteredData(data?.data || []);
    setShowTable(false);
    setShowNoResults(false);
    setCurrentPage(1);
    setTableSearchInput("");
    setSortOption("default");
    setIsSortDisabled(false); // Re-enable sort
  };

  const exportToCSV = () => {
    if (!data || !data.data) return;

    const csvRows = [];
    const headers = data.columns.map((col) => col.title);
    csvRows.push(headers.join(","));

    data.data.forEach((row) => {
      const values = data.columns.map((col) => row[col.data]);
      csvRows.push(values.join(","));
    });

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "car_sales_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportToPDF = () => {
    if (!data || !data.data) return;

    const doc = new jsPDF();
    const tableColumn = data.columns.map((col) => col.title);
    const tableRows = [];

    data.data.forEach((row) => {
      const rowData = data.columns.map((col) => row[col.data]);
      tableRows.push(rowData);
    });

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.text("Car Sales Data", 14, 15);
    doc.save("car_sales_data.pdf");
  };

  const paginateData = () => {
    const startIndex = (currentPage - 1) * resultsPerPage;
    const endIndex = startIndex + resultsPerPage;
    return filteredData.slice(startIndex, endIndex);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleTableSearchInput = (e) => {
    const searchValue = e.target.value;
    setTableSearchInput(searchValue);

    if (!data || !data.data) return;

    const filtered = data.data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchValue.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setShowNoResults(filtered.length === 0);
    setCurrentPage(1);
  };

  const clearTableSearch = () => {
    setTableSearchInput("");
    setFilteredData(data?.data || []);
    setShowNoResults(false);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleResultsPerPageChange = (e) => {
    setResultsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const getSortedData = () => {
    if (!data || !data.data) return [];

    if (sortOption === "unitsSoldAsc") {
      return [...filteredData].sort((a, b) => a.totalRevenue - b.totalRevenue);
    } else if (sortOption === "unitsSoldDesc") {
      return [...filteredData].sort((a, b) => b.totalRevenue - a.totalRevenue);
    } else if (sortOption.startsWith("carModel")) {
      const carModel = sortOption.split("-")[1];
      return filteredData.filter((item) => item.carModel === carModel);
    }
    return filteredData;
  };

  const getChartData = () => {
    const sortedData = getSortedData();

    if (
      sortOption === "default" ||
      sortOption === "unitsSoldAsc" ||
      sortOption === "unitsSoldDesc"
    ) {
      return {
        labels: sortedData.map((item) => item.carModel),
        datasets: [
          {
            label: "Units Sold",
            data: sortedData.map((item) => item.totalUnitsSold),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgb(75, 192, 192)",
            borderWidth: 1,
          },
        ],
      };
    } else {
      const months = Object.keys(sortedData[0]?.monthlySales || {});
      return {
        labels: months,
        datasets: sortedData.map((item) => ({
          label: item.carModel,
          data: Object.values(item.monthlySales),
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgb(75, 192, 192)",
          borderWidth: 1,
        })),
      };
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Car Sales Data",
      },
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Units Sold",
        },
      },
      x: {
        title: {
          display: true,
          text: sortOption.startsWith("carModel") ? "Months" : "Car Models",
        },
      },
    },
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-4 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-4 min-h-screen">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    );
  }

  // No data state
  if (!data || !data.columns || !data.data) {
    return (
      <div className="max-w-4xl mx-auto p-4 min-h-screen">
        <div
          className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Warning!</strong>
          <span className="block sm:inline"> No data available.</span>
        </div>
      </div>
    );
  }

  const totalPages = Math.ceil(filteredData.length / resultsPerPage);
  const currentRangeStart = (currentPage - 1) * resultsPerPage + 1;
  const currentRangeEnd = Math.min(
    currentPage * resultsPerPage,
    filteredData.length
  );

  return (
    <>
      <div className="max-w-4xl mx-auto p-4 min-h-screen space-y-4">
        <h1 className="text-5xl font-bold text-blue-950">Chat Bot</h1>

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto border rounded-lg p-4 bg-white shadow-sm">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-2 ${message.sender === "user" ? "text-right" : "text-left"}`}
            >
              <span
                className={`inline-block p-2 rounded-lg ${
                  message.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {message.text}
              </span>
            </div>
          ))}
        </div>

        {/* Search Form */}
        <form onSubmit={handleUserInput} className="flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Search car sales data..."
            className="flex-1 p-2 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors shadow-sm"
          >
            Search
          </button>
        </form>

        {/* Controls */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              setShowTable(!showTable);
              if (showGraph) setShowGraph(false);
            }}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors shadow-sm"
          >
            {showTable ? "Hide Results" : "Show Results"}
          </button>
          <button
            onClick={() => {
              setShowGraph(!showGraph);
              if (showTable) setShowTable(false);
            }}
            className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition-colors shadow-sm"
          >
            {showGraph ? "Hide Graph" : "Show Graph"}
          </button>
          <button
            onClick={() => setShowExportOptions(!showExportOptions)}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors shadow-sm"
          >
            Export
          </button>
          <button
            onClick={clearSearch}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors shadow-sm"
          >
            Clear Search
          </button>
        </div>

        {/* Export Options */}
        {showExportOptions && (
          <div className="flex gap-4">
            <button
              onClick={exportToCSV}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
              Export as CSV
            </button>
            <button
              onClick={exportToPDF}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
            >
              Export as PDF
            </button>
          </div>
        )}

        {/* Results Table */}
        {showTable && (
          <div>
            <div className="flex justify-between items-center  mt-10 mb-4  ">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tableSearchInput}
                  onChange={handleTableSearchInput}
                  placeholder="Search within results..."
                  className="p-2 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <button
                  onClick={clearTableSearch}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors shadow-sm"
                >
                  Clear
                </button>
              </div>
              <div>
                <label htmlFor="resultsPerPage" className="mr-2">
                  Show:
                </label>
                <select
                  id="resultsPerPage"
                  value={resultsPerPage}
                  onChange={handleResultsPerPageChange}
                  className="p-2 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
                <span className="ml-2">entries</span>
              </div>
            </div>
            <div className="overflow-x-auto border rounded-lg shadow-sm">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-blue-950">
                  <tr>
                    {data.columns
                      .filter((col) => col.data !== "monthlySales")
                      .map((col) => (
                        <th
                          key={col.data}
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          {col.title}
                        </th>
                      ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.length > 0 ? (
                    paginateData().map((item, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        {data.columns
                          .filter((col) => col.data !== "monthlySales")
                          .map((col) => (
                            <td
                              key={col.data}
                              className="px-6 py-4 whitespace-nowrap"
                            >
                              {item[col.data]}
                            </td>
                          ))}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={data.columns.length}
                        className="text-center py-4"
                      >
                        No results found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Pagination */}
        {showTable && filteredData.length > 0 && (
          <div className="flex justify-between items-center">
            <div className="text-sm">
              Showing {currentRangeStart} to {currentRangeEnd} of{" "}
              {filteredData.length} entries
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handlePageChange(1)}
                disabled={currentPage === 1}
                className="px-3 py-2 bg-blue-900 text-white rounded hover:bg-blue-300 transition-colors disabled:opacity-50"
              >
                «
              </button>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 bg-blue-900 text-white rounded hover:bg-blue-300 transition-colors disabled:opacity-50"
              >
                ‹
              </button>
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`px-3 py-2 ${
                    currentPage === idx + 1 ? "bg-blue-700" : "bg-blue-900"
                  } text-white rounded hover:bg-blue-300 transition-colors`}
                >
                  {idx + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 bg-blue-900 text-white rounded hover:bg-blue-300 transition-colors disabled:opacity-50"
              >
                ›
              </button>
              <button
                onClick={() => handlePageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="px-3 py-2 bg-blue-900 text-white rounded hover:bg-blue-300 transition-colors disabled:opacity-50"
              >
                »
              </button>
            </div>
          </div>
        )}

        {/* Show Graph */}
        {showGraph && (
          <div className="p-4 w-full h-96">
            <div className="mb-4">
              <label htmlFor="sort" className="mr-2">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
                disabled={isSortDisabled}
                className={`p-2 border rounded shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                  isSortDisabled
                    ? "opacity-50 bg-gray-100 cursor-not-allowed"
                    : ""
                }`}
              >
                <option value="default">Default</option>
                <option value="unitsSoldAsc">Units Sold (Ascending)</option>
                <option value="unitsSoldDesc">Units Sold (Descending)</option>
                {data &&
                  [...new Set(data.data.map((item) => item.carModel))].map(
                    (carModel) => (
                      <option key={carModel} value={`carModel-${carModel}`}>
                        {carModel}
                      </option>
                    )
                  )}
              </select>
            </div>
            <Bar data={getChartData()} options={chartOptions} />
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;