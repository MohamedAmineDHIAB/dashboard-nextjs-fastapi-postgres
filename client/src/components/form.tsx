import { addEmployee, fetchDepartments } from "@/apis/callAPI";
import React from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Box from "@mui/material/Box";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const Form = () => {
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [departmentId, setDepartmentId] = React.useState(0);
    const [departments, setDepartments] = React.useState([
        {
            id: 0,
            department_name: "",
        },
    ]);
    const [loading, setLoading] = React.useState(false);
    const handleSubmit = async () => {
        const employee_payload = {
            first_name: firstName,
            last_name: lastName,
            department_id: departmentId,
        };
        await addEmployee(employee_payload, setLoading);
        console.log(firstName, lastName, departmentId);
    };

    React.useEffect(() => {
        fetchDepartments(setLoading, setDepartments);
    }, []);
    return (
        <FormWrapper>
            <h1> Add Employee </h1>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <FormControl>
                    <InputLabel id="select-department-label">
                        Department
                    </InputLabel>
                    <Select
                        labelId="select-department-label"
                        id="select-department"
                        value={departmentId ? departmentId : ""}
                        label="Department"
                        onChange={(event) => {
                            setDepartmentId(event.target.value as number);
                        }}
                    >
                        {departments.map((department) => (
                            <MenuItem key={department.id} value={department.id}>
                                {department.department_name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/* submit button from mui */}
                <Button variant="contained" onClick={handleSubmit}>
                    Add Employee
                </Button>
            </Box>
        </FormWrapper>
    );
};

export default Form;
