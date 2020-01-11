import React, {useState} from 'react'
import {makeStyles, Container, Button , Alert} from '@material-ui/core'
import axios from 'axios'
import URL from "../url";

const useStyle = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
    filterContainer: {
        border: '1px solid #efefef',
        padding: '5px'
    },
    textBox: {
        width: '95%',
        padding: '7px 10px',
        borderRadius: '7px',
        border: '1px solid #8e8e8e',
        fontSize: '14px',
        fontWeight: 700,
        '&:focus': {
            outline: '0',
        }
    },
    lableErr : {
        color : '#ef5662'
    },
    textFieldErr : {
        width: '95%',
        padding: '7px 10px',
        borderRadius: '7px',
        fontSize: '14px',
        fontWeight: 700,
        border : '1px solid #ef5662',
    },
    error : {
        color : '#ef5662',
        display : 'block',
        fontSize : '12px',
        margin : theme.spacing(0 , 1 , 1, 0),
        fontWeight : 700
    }
}))

const Register = () => {
    const classes = useStyle()
    const [name , setName] = useState(null)
    const [family , setFamily] = useState(null)
    const [stuNumber , setStuNumber] = useState(null)
    const [phone , setPhone] = useState(null)
    const [email , setEmail] = useState(null)
    const [password , setPassword] = useState(null)
    const [confirmPass , setConfirmPass] = useState(null)

    const HandleForm = () => {
        if (name == null){ setName('') }
        if (family == null){ setFamily('') }
        if (email == null){ setEmail('') }
        if (phone == null){ setPhone('') }
        if (stuNumber == null){ setStuNumber('') }
        if (password == null){ setPassword('') }
        if (confirmPass == null){ setConfirmPass('') }
        if (name != null && name != '' &&
            family != null && family != '' &&
            email != null && name != '' &&
            phone != null && name != '' &&
            stuNumber != null && stuNumber != '' &&
            password != null && password != '' &&
            confirmPass != null && confirmPass != ''
        ){
            if (password == confirmPass){
                axios.post(`${URL}/register` , {
                    name : name,
                    family : family,
                    email : email,
                    stu_number : stuNumber,
                    phone : phone,
                    password : password,
                    password_confirmation : confirmPass
                } , {
                    headers : {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(res => {
                        console.log(res.data)
                    })
                    .catch(err => {
                        console.log(err.response.data.errors)
                    })
            }
        }
    }

    return (
        <React.Fragment>
            <Container className={classes.filterContainer} fixed
                       style={{marginTop: '60px', marginBottom: '10px', width: '400px'}}>
                <h3 align='center' style={{margin: '10px 5px'}}>ثبت نام</h3>
                <br/>
                <form className={classes.root} noValidate autoComplete="off">
                    <span style={ name != '' ? {color: '#8e8e8e'} : {color : '#ef5662'}}>نام</span>
                    <input type="text" onChange={e => {setName(e.target.value)}} className={name != '' ? classes.textBox : classes.textFieldErr} placeholder="نام خود را وارد کنید..."/>
                    {/*{nameErr != () => {<span className={classes.error}>این فیلد باید پر شود</span>} : <div></div>}*/}
                    <span style={ family != '' ? {color: '#8e8e8e'} : {color : '#ef5662'}}>نام خانوادگی</span>
                    <input type="text" onChange={e => {setFamily(e.target.value)}} className={family != '' ? classes.textBox : classes.textFieldErr} placeholder="نام خانوادگی خود را وارد کنید..."/>
                    <span style={ stuNumber != '' ? {color: '#8e8e8e'} : {color : '#ef5662'}}>شماره دانشجویی</span>
                    <input type="text" className={stuNumber != '' ? classes.textBox : classes.textFieldErr} onChange={e => {setStuNumber(e.target.value)}} placeholder="شماره دانشجویی خود را وارد کنید..."/>
                    <span style={ phone != '' ? {color: '#8e8e8e'} : {color : '#ef5662'}}>شماره تماس</span>
                    <input type="text" className={phone != '' ? classes.textBox : classes.textFieldErr} onChange={e => {setPhone(e.target.value)}} placeholder="شماره تماس خود را وارد کنید..."/>
                    <span style={ email != '' ? {color: '#8e8e8e'} : {color : '#ef5662'}}>ایمیل</span>
                    <input type="email" className={email != '' ? classes.textBox : classes.textFieldErr} onChange={e => {setEmail(e.target.value)}} placeholder="ایمیل خود را وارد کنید..."/>
                    <span style={ password != '' ? {color: '#8e8e8e'} : {color : '#ef5662'}}>رمز</span>
                    <input type="password" className={password != '' ? classes.textBox : classes.textFieldErr} onChange={e => {setPassword(e.target.value)}} placeholder="رمز خود را وارد کنید..."/>
                    <span style={ confirmPass != '' ? {color: '#8e8e8e'} : {color : '#ef5662'}}>تکرار رمز</span>
                    <input type="password" className={confirmPass != '' ? classes.textBox : classes.textFieldErr} onChange={e => {setConfirmPass(e.target.value)}} placeholder="تکرار رمز خود را وارد کنید..."/>
                    {password != confirmPass ? <span className={classes.error}>تکرار رمز با رمز برابر نیست!</span> : <div></div>}
                    <Button
                        onClick={() => HandleForm()}
                        style={{
                            backgroundColor: '#ff9100',
                            color: 'white',
                            fontWeight : 700
                        }}
                    >
                        ثبت نام
                    </Button>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default Register
