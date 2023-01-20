import styled from "styled-components";
// mui button import
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Link from "next/link";
const TableWrapper = styled.div`
    width: 90%;
    background-color: white;
    max-width: 1000px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 20px;
    padding-bottom: 50px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1), 0 -5px 5px rgba(0, 0, 0, 0.1),
        5px 0 5px rgba(0, 0, 0, 0.1), -5px 0 5px rgba(0, 0, 0, 0.1);
`;
const TabelTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
`;

const Table = () => {
    // loader state
    const [loading, setLoading] = useState(false);
    // employees state
    const [employees, setEmployees] = useState([]);
    // fetch employees
    useEffect(() => {
        setLoading(true);
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
        const route = process.env.NEXT_PUBLIC_GET_EMPLOYEES || "";
        const endpoint = baseUrl + route;
        fetch(endpoint)
            .then((res) => res.json())
            .then((data) => {
                setEmployees(data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }, []);
    console.log(employees);
    return (
        <TableWrapper>
            <TabelTitle>
                <h1>Employees Table</h1>
            </TabelTitle>
            <ButtonWrapper>
                <Link href="/add_employee">
                    <Button variant="contained">Add Employee</Button>
                </Link>
            </ButtonWrapper>
        </TableWrapper>
    );
};

export default Table;
