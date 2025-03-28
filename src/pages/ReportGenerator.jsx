import { useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';
import { Bar, Pie, Line } from 'react-chartjs-2';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

function ReportGenerator() {
  const [excelData, setExcelData] = useState(null);
  const [columns, setColumns] = useState([]);
  const [reportType, setReportType] = useState('bar');
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');
  const [error, setError] = useState('');
  const [reportGenerated, setReportGenerated] = useState(false);
  const [chartData, setChartData] = useState(null);
  const [summary, setSummary] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setError('');
    setReportGenerated(false);
    
    if (!file) return;
    
    // Check file type
    const fileType = file.name.split('.').pop().toLowerCase();
    if (fileType !== 'xlsx' && fileType !== 'xls' && fileType !== 'csv') {
      setError('Please upload an Excel or CSV file');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        
        // Get first sheet
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        // Convert to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
        if (jsonData.length === 0) {
          setError('The uploaded file contains no data');
          return;
        }
        
        // Get column headers
        const headers = Object.keys(jsonData[0]);
        
        setExcelData(jsonData);
        setColumns(headers);
        setXAxis(headers[0]);
        
        // Try to find a numeric column for Y-axis
        const numericColumn = headers.find(header => 
          typeof jsonData[0][header] === 'number'
        );
        setYAxis(numericColumn || headers[1]);
        
      } catch (err) {
        console.error('Error parsing Excel file:', err);
        setError('Failed to parse the Excel file. Please check the file format.');
      }
    };
    
    reader.onerror = () => {
      setError('Failed to read the file');
    };
    
    reader.readAsArrayBuffer(file);
  };

  const generateReport = () => {
    if (!excelData || !xAxis || !yAxis) {
      setError('Please select both X and Y axis columns');
      return;
    }
    
    try {
      // Extract data for the chart
      const labels = excelData.map(row => row[xAxis]);
      
      // Check if Y-axis values are numeric
      const values = excelData.map(row => {
        const val = row[yAxis];
        if (typeof val !== 'number') {
          // Try to convert to number
          const numVal = Number(val);
          if (isNaN(numVal)) {
            throw new Error(`Y-axis column "${yAxis}" contains non-numeric values`);
          }
          return numVal;
        }
        return val;
      });
      
      // Generate chart data
      const data = {
        labels,
        datasets: [
          {
            label: yAxis,
            data: values,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(199, 199, 199, 0.6)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(199, 199, 199, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      setChartData(data);
      
      // Generate summary statistics
      const numValues = values.filter(v => !isNaN(v));
      const sum = numValues.reduce((acc, val) => acc + val, 0);
      const avg = sum / numValues.length;
      const max = Math.max(...numValues);
      const min = Math.min(...numValues);
      
      setSummary({
        count: numValues.length,
        sum: sum.toFixed(2),
        average: avg.toFixed(2),
        max: max.toFixed(2),
        min: min.toFixed(2)
      });
      
      setReportGenerated(true);
      setError('');
      
    } catch (err) {
      console.error('Error generating report:', err);
      setError(err.message || 'Failed to generate report');
      setReportGenerated(false);
    }
  };

  const resetForm = () => {
    setExcelData(null);
    setColumns([]);
    setXAxis('');
    setYAxis('');
    setError('');
    setReportGenerated(false);
    setChartData(null);
    setSummary(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const exportReport = () => {
    if (!reportGenerated || !excelData) return;
    
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    
    // Convert data to worksheet
    const ws = XLSX.utils.json_to_sheet(excelData);
    
    // Add summary data
    const summaryData = [
      ['Report Summary'],
      ['X-Axis', xAxis],
      ['Y-Axis', yAxis],
      ['Count', summary.count],
      ['Sum', summary.sum],
      ['Average', summary.average],
      ['Maximum', summary.max],
      ['Minimum', summary.min],
    ];
    
    const summaryWs = XLSX.utils.aoa_to_sheet(summaryData);
    
    // Add worksheets to workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Data');
    XLSX.utils.book_append_sheet(wb, summaryWs, 'Summary');
    
    // Generate Excel file
    XLSX.writeFile(wb, 'report_analysis.xlsx');
  };

  const renderChart = () => {
    if (!chartData) return null;
    
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: `${yAxis} by ${xAxis}`,
        },
      },
    };
    
    switch (reportType) {
      case 'bar':
        return <Bar data={chartData} options={options} />;
      case 'pie':
        return <Pie data={chartData} options={options} />;
      case 'line':
        return <Line data={chartData} options={options} />;
      default:
        return <Bar data={chartData} options={options} />;
    }
  };

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Excel Report Generator</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Upload Excel Data</h2>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Excel or CSV File
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".xlsx,.xls,.csv"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-primary-50 file:text-primary-700
                hover:file:bg-primary-100"
            />
            <p className="mt-1 text-sm text-gray-500">
              Upload an Excel (.xlsx, .xls) or CSV file to generate a report
            </p>
          </div>
          
          {excelData && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Report Type
                  </label>
                  <select
                    value={reportType}
                    onChange={(e) => setReportType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="bar">Bar Chart</option>
                    <option value="pie">Pie Chart</option>
                    <option value="line">Line Chart</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    X-Axis (Categories)
                  </label>
                  <select
                    value={xAxis}
                    onChange={(e) => setXAxis(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {columns.map(column => (
                      <option key={column} value={column}>{column}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Y-Axis (Values)
                  </label>
                  <select
                    value={yAxis}
                    onChange={(e) => setYAxis(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {columns.map(column => (
                      <option key={column} value={column}>{column}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={generateReport}
                  className="btn btn-primary"
                >
                  Generate Report
                </button>
                <button
                  onClick={resetForm}
                  className="btn bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  Reset
                </button>
                {reportGenerated && (
                  <button
                    onClick={exportReport}
                    className="btn bg-green-600 text-white hover:bg-green-700"
                  >
                    Export Report
                  </button>
                )}
              </div>
            </div>
          )}
          
          {error && (
            <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md">
              {error}
            </div>
          )}
        </div>
        
        {reportGenerated && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Report Results</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  {renderChart()}
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Summary Statistics</h3>
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Count</td>
                        <td className="py-2 text-right font-medium">{summary.count}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Sum</td>
                        <td className="py-2 text-right font-medium">{summary.sum}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Average</td>
                        <td className="py-2 text-right font-medium">{summary.average}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 text-gray-600">Maximum</td>
                        <td className="py-2 text-right font-medium">{summary.max}</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-gray-600">Minimum</td>
                        <td className="py-2 text-right font-medium">{summary.min}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Data Preview</h3>
                  <div className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          {columns.slice(0, 3).map(column => (
                            <th key={column} className="px-4 py-2 text-left">{column}</th>
                          ))}
                          {columns.length > 3 && <th className="px-4 py-2 text-left">...</th>}
                        </tr>
                      </thead>
                      <tbody>
                        {excelData.slice(0, 5).map((row, index) => (
                          <tr key={index} className="border-b">
                            {columns.slice(0, 3).map(column => (
                              <td key={column} className="px-4 py-2">{row[column]}</td>
                            ))}
                            {columns.length > 3 && <td className="px-4 py-2">...</td>}
                          </tr>
                        ))}
                        {excelData.length > 5 && (
                          <tr>
                            <td colSpan={Math.min(4, columns.length)} className="px-4 py-2 text-center text-gray-500">
                              {excelData.length - 5} more rows
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReportGenerator;