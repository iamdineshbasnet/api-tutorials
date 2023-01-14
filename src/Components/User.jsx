import React, { useState } from "react";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import { useEffect } from "react";
import {
    Button,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
const User = ({setEdit}) => {
    const navigate = useNavigate()
    const [students, setStudents] = useState([]);
    const [rowsPerPage, setRowsPerPage] = useState(3)
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const handlePagination = (event, newPage) =>{
        setPage(newPage)
    }
    const handleEdit = (info) =>{
        // console.log(info)
        setEdit({editInfo: true, values: info})
        navigate("/create-user")

    }
    const getStudentInfo = () => {
        setIsLoading(true)
        axios
            .get("https://63c16232376b9b2e647a351d.mockapi.io/students")
            .then(({ data }) => {
                setIsLoading(false)
                setStudents(data);
            });
    };
    useEffect(() => {
        getStudentInfo();
    }, []);

   
    const handleDelete = (id) =>{
        
    }
    return (
        <>
        {isLoading ? <Loader/> 
        :<Grid>
            <Grid mt={10}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                    I.D
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                    First Name
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                    Middle Name
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                    Last Name
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                    Phone Number
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                    Address
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold" }}>
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {students?.slice(rowsPerPage*page-rowsPerPage, rowsPerPage*page).map((info, index) => {
                                return (
                                    <TableRow key={info.id}>
                                        <TableCell>{(index+1)+(page-1)*rowsPerPage}</TableCell>
                                        <TableCell>{info.firstname}</TableCell>
                                        <TableCell>{info.middlename}</TableCell>
                                        <TableCell>{info.lastname}</TableCell>
                                        <TableCell>{info.phone}</TableCell>
                                        <TableCell>{info.address}</TableCell>
                                        <TableCell>
                                            <Grid container>
                                                <Button
                                                    onClick={()=>handleEdit(info)}
                                                    variant="contained"
                                                    size="small">
                                                    Edit
                                                </Button>
                                                <Button
                                                    onClick={()=>handleDelete(info.id)}
                                                    variant="contained"
                                                    size="small"
                                                    sx={{ marginLeft: "5px" }}>
                                                    Delete
                                                </Button>
                                            </Grid>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            <TableCell></TableCell>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid container justifyContent="center" mt={4}>
                <Pagination count={Math.ceil(students.length/rowsPerPage)} color="primary" onChange={handlePagination}/>
            </Grid>
        </Grid> }
            
        </>
    );
};

export default User;
