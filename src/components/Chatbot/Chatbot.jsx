import React, { useState, useEffect, useRef } from "react";
import { CSVLink } from "react-csv";
import jsPDF from "jspdf";
import "jspdf-autotable";

const Chatbot = () => {
  // State management
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null); // state to store fetched data
  const hasShownWelcomeRef = useRef(false); // Using a ref to track if the message has been shown

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the JSON data dynamically from the public directory
        const response = await fetch("/data/Data.json");
        const result = await response.json();

        // Set the fetched data to the state
        setData(result);

        // Set loading state to false
        setIsLoading(false);

        // Filter data after loading it
        setFilteredData(result.data || []);
        
        // Add welcome message if it hasn't been shown yet
        if (!hasShownWelcomeRef.current) {
          addMessage("bot", "Welcome! How can I help you search the car sales data?");
          hasShownWelcomeRef.current = true; // Update ref to indicate the message has been shown
        }
      } catch (err) {
        console.error("Error loading data:", err); // Debugging log
        setError("Failed to load data");
        setIsLoading(false);
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures it runs only once

  // Helper function to add messages to chat
  const addMessage = (sender, text) => {
    setMessages((prev) => [...prev, { id: Date.now(), sender, text }]);
  };

  // Search functionality
  const handleSearch = (query) => {
    try {
      const filtered = data.data.filter((item) =>
        Object.values(item).some((value) =>
          value.toString().toLowerCase().includes(query.toLowerCase())
        )
      );
      setFilteredData(filtered);
      setShowTable(true);
      addMessage("bot", `Found ${filtered.length} results for "${query}"`);
    } catch (err) {
      addMessage("bot", "Sorry, there was an error processing your search");
    }
  };

  // Handle form submission
  const handleUserInput = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      addMessage("user", userInput);
      handleSearch(userInput);
      setUserInput("");
    }
  };

  // Export to PDF functionality
  const exportToPDF = () => {
    try {
      const doc = new jsPDF();
      doc.autoTable({
        head: [data.columns.map((col) => col.title)],
        body: filteredData.map((row) =>
          data.columns.map((col) => row[col.data])
        ),
      });
      doc.save("car-sales-data.pdf");
    } catch (err) {
      addMessage("bot", "Failed to export PDF");
    }
  };

  // Loading state
  if (isLoading) {
    return <div className="max-w-4xl mx-auto p-4">Loading...</div>;
  }

  // Error state
  if (error) {
    return <div className="max-w-4xl mx-auto p-4 text-red-500">{error}</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
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
      {filteredData.length > 0 && (
        <div className="flex gap-2">
          <button
            onClick={() => setShowTable(!showTable)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors shadow-sm"
          >
            {showTable ? "Hide Results" : "Show Results"}
          </button>
          <button
            onClick={exportToPDF}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors shadow-sm"
          >
            Export PDF
          </button>
          <CSVLink
            data={filteredData}
            headers={data.columns.map((col) => ({
              label: col.title,
              key: col.data,
            }))}
            filename="car-sales-data.csv"
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors shadow-sm"
          >
            Export CSV
          </CSVLink>
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
    </div>
  );
};

export default Chatbot;
