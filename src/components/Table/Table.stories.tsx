import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Table from "./Table";
import TableHeader from "./TableHeader";
import TableCell from "./TableCell";
import TableRow from "./TableRow";
import TableFooter from "./TableFooter";
import { ITable } from "./Table.types";

const meta: Meta<ITable> = {
  title: "Components Assignment/Table",
  component: Table,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables interaction with the table',
    },
  }
};

export default meta;

const TableTemplate: StoryFn<ITable> = (args) => (
  <Table {...args}>
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
        <TableCell> 4</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

// Story for Default Table
export const DefaultTable = TableTemplate.bind({});
DefaultTable.args = {};

// Story for Disabled Table
export const DisabledTable = TableTemplate.bind({});
DisabledTable.args = {
  disabled: true,
};
