import axios from "axios";

// async function to sleep for a given time
const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};
// async function to fetch employees and departments using axios

export const fetchData = async (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setEmployees: React.Dispatch<React.SetStateAction<never[]>>,
    setDepartments: React.Dispatch<React.SetStateAction<never[]>>
) => {
    setLoading(true);
    await sleep(1000);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    const employeesRoute = process.env.NEXT_PUBLIC_GET_EMPLOYEES || "";
    const departmentsRoute = process.env.NEXT_PUBLIC_GET_DEPARTMENTS || "";
    const employeesEndpoint = baseUrl + employeesRoute;
    const departmentsEndpoint = baseUrl + departmentsRoute;

    try {
        const employeesRes = await axios.get(employeesEndpoint);
        const departmentsRes = await axios.get(departmentsEndpoint);
        setDepartments(departmentsRes.data);
        setEmployees(employeesRes.data);
        setLoading(false);
    } catch (err) {
        console.log(err);
        setLoading(false);
    }
};

// async function to add employee using axios
export const addEmployee = async (
    employee: {
        first_name: string;
        last_name: string;
        department_id: number;
    },
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
    setLoading(true);
    await sleep(1000);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    const employeesRoute = process.env.NEXT_PUBLIC_POST_EMPLOYEE || "";
    const employeesEndpoint = baseUrl + employeesRoute;
    try {
        const res = await axios.post(employeesEndpoint, employee);
        setLoading(false);
        return res;
    } catch (err) {
        console.log(err);
        setLoading(false);
    }
};

// async function to fetch departments only
export const fetchDepartments = async (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setDepartments: React.Dispatch<
        React.SetStateAction<
            {
                id: number;
                department_name: string;
            }[]
        >
    >
) => {
    setLoading(true);
    await sleep(1000);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
    const departmentsRoute = process.env.NEXT_PUBLIC_GET_DEPARTMENTS || "";
    const departmentsEndpoint = baseUrl + departmentsRoute;
    try {
        const departmentsRes = await axios.get(departmentsEndpoint);
        setDepartments(departmentsRes.data);
        setLoading(false);
    } catch (err) {
        console.log(err);
        setLoading(false);
    }
};
