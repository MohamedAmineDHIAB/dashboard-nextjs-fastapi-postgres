import React from "react";
import TableMui from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styled from "styled-components";
import { StyledTableCell, StyledTableRow } from "@/styles/muiStyles";
// data type for table, array of employee objects
type TableProps = {
    employees: Array<{
        id: number;
        first_name: string;
        last_name: string;
        department_id: number;
    }>;
    departments: Array<{
        id: number;
        department_name: string;
    }>;
};
const TableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Table = ({ employees, departments }: TableProps) => {
    return (
        <TableWrapper>
            {/* render the elements inside employees */}
            <TableMui sx={{ maxWidth: "100%" }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ID</StyledTableCell>
                        <StyledTableCell align="center">
                            First Name
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            Last Name
                        </StyledTableCell>
                        <StyledTableCell align="center">
                            Department
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee) => (
                        <StyledTableRow
                            key={employee.id}
                            sx={{
                                "&:last-child td, &:last-child th": {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell align="center">{employee.id}</TableCell>
                            <TableCell align="center">
                                {employee.first_name}
                            </TableCell>
                            <TableCell align="center">
                                {employee.last_name}
                            </TableCell>
                            <TableCell align="center">
                                {
                                    departments.find(
                                        (department) =>
                                            department.id ===
                                            employee.department_id
                                    )?.department_name
                                }
                            </TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </TableMui>
        </TableWrapper>
    );
};

export default Table;
