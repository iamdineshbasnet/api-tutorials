import React from 'react';
import { Button, TextField, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
const CreateUser = ({edit: {editInfo, values}}) => {
    const navigate = useNavigate()
    const [studentInfo, setStudentInfo] = useState({
        firstname: editInfo ? values?.firstname : '',
        middlename: editInfo ? values?.middlename : '',
        lastname: editInfo ? values?.lastname : '',
        phone: editInfo ? values?.phone : '',
        address: editInfo ? values?.address : '',
    })
    const {firstname, middlename, lastname, phone, address} = studentInfo
    const postStudentInfo = () =>{
        axios.post('https://63c16232376b9b2e647a351d.mockapi.io/students', {
            firstname, middlename, lastname, phone, address
        }).then(({data})=>navigate('/user'))
    }
    const updateStudentInfo = () =>{
        axios.put(`https://63c16232376b9b2e647a351d.mockapi.io/students/${values?.id}`, {
            firstname, middlename, lastname, phone, address
        }).then(({data})=>navigate('/user'))
    }
    const handleFirstName = ({target: {value}})=>{
        setStudentInfo({...studentInfo, firstname: value})
    }
    const handleMiddleName = ({target: {value}})=>{
        setStudentInfo({...studentInfo, middlename: value})
    }
    const handleLastName = ({target: {value}})=>{
        setStudentInfo({...studentInfo, lastname: value})
    }
    const handlePhone = ({target: {value}})=>{
        setStudentInfo({...studentInfo, phone: value})
    }
    const handleAddress = ({target: {value}})=>{
        setStudentInfo({...studentInfo, address: value})
    }
    const handleUpdates = () =>{
        editInfo ? updateStudentInfo() : postStudentInfo()
    }
    return (
        <>
            <Grid mt={15} sx={{ marginLeft: '20px'}} container justifyContent="center">
                
                <Grid container flexDirection="column" sx={{width: '150px', marginLeft: '20px'}}>
                    <label htmlFor="">First Name</label>
                    <TextField size='small' onChange={handleFirstName} value={firstname}/>
                </Grid>
                <Grid container flexDirection="column" sx={{width: '150px', marginLeft: '20px'}}>
                    <label htmlFor="">Middle Name</label>
                    <TextField size='small' onChange={handleMiddleName} value={middlename}/>
                </Grid>
                <Grid container flexDirection="column" sx={{width: '150px', marginLeft: '20px'}}>
                    <label htmlFor="">Last Name</label>
                    <TextField size='small' onChange={handleLastName} value={lastname}/>
                </Grid>
                <Grid container flexDirection="column" sx={{width: '150px', marginLeft: '20px'}}>
                    <label htmlFor="">Phone Number</label>
                    <TextField size='small' onChange={handlePhone} value={phone}/>
                </Grid>
                <Grid container flexDirection="column" sx={{width: '150px', marginLeft: '20px'}}>
                    <label htmlFor="">Address</label>
                    <TextField size='small' onChange={handleAddress} value={address}/>
                </Grid>
            </Grid>
                <Grid container justifyContent="center" mt={10}>
                    <Button variant='contained' sx={{width: 150}} onClick={handleUpdates}>
                        {editInfo ? "Update" : "Add"}
                    </Button>
                </Grid>
        </>
    );
};

export default CreateUser;