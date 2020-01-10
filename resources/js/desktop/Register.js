import React, {useState} from 'react'
import {makeStyles, Container, Button} from '@material-ui/core'

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
    const [nameErr , setNameErr] = useState(null)
    const [family , setFamily] = useState(null)
    const [familyErr , setFamilyErr] = useState(null)
    const [stuNumber , setStuNumber] = useState(null)
    const [stuNumberErr , setStuNumberErr] = useState(null)
    const [phone , setPhone] = useState(null)
    const [phoneErr , setPhoneErr] = useState(null)
    const [email , setEmail] = useState(null)
    const [emailErr , setEmailErr] = useState(null)
    const [password , setPassword] = useState(null)
    const [passwordErr , setPasswordErr] = useState(null)
    const [confirmPass , setConfirmPass] = useState(null)
    const [confirmPassErr , setConfirmPassErr] = useState(null)

    const HandleForm = () => {

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
                    <input type="text" className={email != '' ? classes.textBox : classes.textFieldErr} onChange={e => {setEmail(e.target.value)}} placeholder="ایمیل خود را وارد کنید..."/>
                    <span style={ password != '' ? {color: '#8e8e8e'} : {color : '#ef5662'}}>رمز</span>
                    <input type="text" className={password != '' ? classes.textBox : classes.textFieldErr} onChange={e => {setPassword(e.target.value)}} placeholder="رمز خود را وارد کنید..."/>
                    <span style={ confirmPass != '' ? {color: '#8e8e8e'} : {color : '#ef5662'}}>تکرار رمز</span>
                    <input type="text" className={confirmPass != '' ? classes.textBox : classes.textFieldErr} onChange={e => {setConfirmPass(e.target.value)}} placeholder="تکرار رمز خود را وارد کنید..."/>
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
