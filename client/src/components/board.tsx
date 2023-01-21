import styled from "styled-components";
// mui button import
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import Link from "next/link";
import Skeleton from "@mui/material/Skeleton";
import NotFound from "./not_found";
import Table from "./table";
import { fetchData } from "@/apis/callAPI";
const BoardWrapper = styled.div`
    width: 90%;
    background-color: white;
    max-width: 1000px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 30px;
    padding: 20px;
    padding-bottom: 50px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1), 0 -5px 5px rgba(0, 0, 0, 0.1),
        5px 0 5px rgba(0, 0, 0, 0.1), -5px 0 5px rgba(0, 0, 0, 0.1);
`;
const BoardTitle = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
`;
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    position: relative;
`;

const Board = () => {
    // loader state
    const [loading, setLoading] = useState(true);
    // employees state
    const [employees, setEmployees] = useState([]);
    // departments state
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        fetchData(setLoading, setEmployees, setDepartments);
    }, []);
    return (
        <BoardWrapper>
            <BoardTitle>
                <h1>Employees Board</h1>
            </BoardTitle>
            {loading ? (
                <Skeleton variant="rectangular" height={250} animation="wave" />
            ) : // if employees length is 0, render NotFound component else render Table component
            employees.length === 0 ? (
                <NotFound />
            ) : (
                <Table employees={employees} departments={departments} />
            )}

            <ButtonWrapper>
                <Link href="/add_employee">
                    <Button variant="contained">Add Employee</Button>
                </Link>
            </ButtonWrapper>
        </BoardWrapper>
    );
};

export default Board;
