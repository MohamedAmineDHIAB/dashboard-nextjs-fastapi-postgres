import { addEmployee, fetchDepartments } from "@/apis/callAPI";
import React from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

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
    const router = useRouter();
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [departmentId, setDepartmentId] = React.useState(0);
    const [departments, setDepartments] = React.useState([
        {
            id: 0,
            department_name: "",
        },
    ]);
    const [loadingPost, setLoadingPost] = React.useState(false);
    const [loadingDepartments, setLoadingDepartments] = React.useState(true);
    const handleSubmit = async () => {
        const employee_payload = {
            first_name: firstName,
            last_name: lastName,
            department_id: departmentId,
        };
        const res = await addEmployee(employee_payload, setLoadingPost);
        if (res?.status === 200) {
            Swal.fire({
                title: "Success!",
                text: "The employee was added successfully.",
                icon: "success",
                confirmButtonText: "OK",
            }).then(() => {
                router.push("/");
            });
        } else {
            Swal.fire({
                title: "Error!",
                text: "An error occured, please try again.",
                icon: "error",
                confirmButtonText: "Try Again",
            });
        }
    };

    React.useEffect(() => {
        fetchDepartments(setLoadingDepartments, setDepartments);
    }, []);
    if (loadingDepartments) {
        return <CircularProgress />;
    }
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
                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    sx={{ height: "40px" }}
                >
                    {loadingPost ? (
                        <CircularProgress size={20} sx={{ color: "white" }} />
                    ) : (
                        <>Add Employee</>
                    )}
                </Button>
            </Box>
        </FormWrapper>
    );
};

export default Form;
