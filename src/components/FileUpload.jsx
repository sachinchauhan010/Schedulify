import { useState } from "react";
import * as XLSX from "xlsx";


function FileUpload() {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      setData(parsedData);
    };
  }

  return (
    <div>

      <div className="shadow-2xl border-2 w-fit flex flex-col justify-center items-center">
        <div className="text-2xl font-semibold p-4">Upload Your Time Table</div>
        <input
          type="file"
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
        />

        {data.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                {Object.keys(data[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <br /><br />
      </div>
    </div>
  )
}

export default FileUpload
