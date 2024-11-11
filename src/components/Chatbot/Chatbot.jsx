import React, { useState, useEffect, useRef } from "react";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
  const hasShownWelcomeRef = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/Data.json");
        const result = await response.json();

        setData(result);
        setIsLoading(false);
        setFilteredData(result.data || []);

        if (!hasShownWelcomeRef.current) {
          addMessage("bot", "Welcome! How can I help you search the car sales data?");
          hasShownWelcomeRef.current = true;
        }
      } catch (err) {
        setError("Failed to load data");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { id: Date.now(), sender, text }]);
  };

  const handleSearch = (query) => {
    const filtered = data.data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setShowTable(true);
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

  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.autoTable({
      head: [data.columns.map((col) => col.title)],
      body: filteredData.map((row) =>
        data.columns.map((col) => row[col.data])
      ),
    });
    doc.save("car-sales-data.pdf");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  // Chart data
  const chartData = {
    labels: data.data.map((item) => item["carModel"]),
    datasets: [
      {
        label: "Units Sold",
        data: data.data.map((item) => item["unitsSold"]),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to resize dynamically
    plugins: {
      title: {
        display: true,
        text: "Car Sales Data",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Car Model",
        },
        ticks: {
          maxRotation: 45,
          minRotation: 0,
        },
      },
      y: {
        title: {
          display: true,
          text: "Units Sold",
        },
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-4 min-h-screen space-y-4">
      <h1 className="text-5xl font-bold text-blue-950">Chat Bot:</h1>

      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto border rounded-lg p-4 bg-white shadow-sm">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-2 ${
              message.sender === "user" ? "text-right" : "text-left"
            }`}
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

      {/* Export and View Controls */}
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
      </div>

      {/* Export Options */}
      {showExportOptions && (
        <div className="flex gap-4 mt-4">
          <CSVLink
            data={filteredData}
            headers={data.columns.map((col) => ({ label: col.title, key: col.data }))}
            filename="car-sales-data.csv"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            Export as CSV
          </CSVLink>
          <button
            onClick={exportToPDF}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Export as PDF
          </button>
        </div>
      )}

      {/* Results Table */}
      {showTable && filteredData.length > 0 && (
        <div className="overflow-x-auto border rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {data.columns.map((col) => (
                  <th
                    key={col.data}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {col.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  {data.columns.map((col) => (
                    <td key={col.data} className="px-6 py-4 whitespace-nowrap">
                      {item[col.data]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Show Graph */}
      {showGraph && data && data.data.length > 0 && (
        <div className="p-4 w-full h-96">
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
};

export default Chatbot;

