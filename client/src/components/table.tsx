import React from "react";

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

const Table = ({ employees, departments }: TableProps) => {
    return (
        <div>
            {/* render the elements inside data */}
            {employees.map((employee) => (
                <div key={employee.id}>
                    <p>{employee.first_name}</p>
                    <p>{employee.last_name}</p>
                    {/* the department name corresponding to department_id in departments */}
                    <p>
                        {
                            departments.find(
                                (department) =>
                                    department.id === employee.department_id
                            )?.department_name
                        }
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Table;
