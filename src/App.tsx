import React, { useState } from "react";
import Text from "./components/Text/Text";
import { Dropdown } from "./components/Dropdown";
import { Radio } from "./components/Radio";
import { Table } from "./components/Table";
import TableHeader from "./components/Table/TableHeader";
import TableCell from "./components/Table/TableCell";
import TableRow from "./components/Table/TableRow";
import TableFooter from "./components/Table/TableFooter";
import logo from './logo.svg';
import './App.css';

function App() {
  // State to manage the selected value of the Dropdown
  const [dropdownValue, setDropdownValue] = useState("Male");

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Components Showcase</h1>
      </header>

      <main style={{ padding: "20px" }}>
        {/* Text Component */}
        <section>
          <h2>Text Component</h2>
          <h3>Default Text</h3>
          <Text text="Positivity feeds the soul." types="paragraph" />
          <h3>Disabled Text</h3>
          <Text text="Positivity feeds the soul." types="paragraph" disabled={true} />
        </section>

        {/* Dropdown Component */}
        <section>
          <h2>Dropdown Component</h2>
          <Dropdown
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
              { value: "Other", label: "Other" }
            ]}
            value={dropdownValue}
            onChange={handleDropdownChange} // Add the onChange handler here
          />
        </section>

        {/* Radio Component */}
        <section>
          <h2>Radio Button Component</h2>
          <Radio id="radio1" name="radio" value="Yes" />
          <Radio id="radio2" name="radio" value="No" disabled />
        </section>

        {/* Table Component */}
        <section>
          <h2>Table Component</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHeader>
            <tbody>
              <TableRow>
                <TableCell>Ravneet Kaur</TableCell>
                <TableCell>20</TableCell>
                <TableCell>rvnt@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jaspreet Kaur</TableCell>
                <TableCell>19</TableCell>
                <TableCell>jasprt@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Mehak Gill</TableCell>
                <TableCell>17</TableCell>
                <TableCell>mehak@example.com</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Sahib Gill</TableCell>
                <TableCell>25</TableCell>
                <TableCell>sahib@example.com</TableCell>
              </TableRow>
            </tbody>
            <TableFooter>
              <TableRow>
                <TableCell>Total Users</TableCell>
                <TableCell> </TableCell>
                <TableCell>4</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </section>
      </main>
    </div>
  );
}

export default App;
