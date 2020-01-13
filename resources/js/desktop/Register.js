import React, {useState} from 'react'
import {makeStyles, Container, Button} from '@material-ui/core'
import {Alert} from '@material-ui/lab'
import axios from 'axios'
import URL from "../url";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress'

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
        borderRight: '3px solid rgb(255, 145, 0)',
        fontSize: '14px',
        fontWeight: 700,
        '&:focus': {
            outline: '0',
        }
    },
    lableErr: {
        color: '#ef5662'
    },
    textFieldErr: {
        width: '95%',
        padding: '7px 10px',
        borderRadius: '7px',
        fontSize: '14px',
        fontWeight: 700,
        border: '1px solid #ef5662',
        borderRight: '3px solid #ef5662',
    },
    error: {
        color: '#ef5662',
        display: 'block',
        fontSize: '12px',
        margin: theme.spacing(0, 1, 1, 0),
        fontWeight: 700
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "yellow !important"
    }
}))

function sleep(delay = 0) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}
const Register = () => {
    const classes = useStyle()
    const [name, setName] = useState(null)
    const [family, setFamily] = useState(null)
    const [stuNumber, setStuNumber] = useState(null)
    const [degreeId, setDegreeId] = useState('')
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPass, setConfirmPass] = useState(null)
    const [errors, setErrors] = useState([])
    ///////////////////////////////////////////////////////
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;

    let errs = [];
    const HandleForm = e => {
        e.preventDefault()

        errs = []
        if (name == null) {
            setName('')
        }
        if (family == null) {
            setFamily('')
        }
        if (email == null) {
            setEmail('')
        }
        if (phone == null) {
            setPhone('')
        }
        if (stuNumber == null) {
            setStuNumber('')
        }
        if (password == null) {
            setPassword('')
        }
        if (confirmPass == null) {
            setConfirmPass('')
        }
        if (name != null && name != '' &&
            family != null && family != '' &&
            email != null && name != '' &&
            phone != null && name != '' &&
            stuNumber != null && stuNumber != '' &&
            password != null && password != '' &&
            confirmPass != null && confirmPass != '' &&
            degreeId != null && degreeId != ''
        ) {
            if (password == confirmPass) {
                axios.post(`${URL}/register`, {
                    name: name,
                    family: family,
                    email: email,
                    stu_number: stuNumber,
                    phone: phone,
                    password: password,
                    password_confirmation: confirmPass
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                    .then(res => {
                        // if (res.data.status == 'success') {
                        //
                        // }
                        console.log(res.data)
                    })
                    .catch(err => {
                        for (let key in err.response.data.errors) {
                            errs.push(err.response.data.errors[key][0])
                        }
                        setErrors(errs)
                    })
            }
        }
    }

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
            // await sleep(1e3); // For demo purposes.
            const countries = await response.json();

            if (active) {
                setOptions(Object.keys(countries).map(key => countries[key].item[0]));
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    return (
        <React.Fragment>
            <Container className={classes.filterContainer} fixed
                       style={{marginTop: '60px', marginBottom: '10px', width: '400px'}}>
                <h3 align='center' style={{margin: '10px 5px'}}>ثبت نام</h3>
                {
                    errors.length > 0 ? <div><Alert severity="error">
                        <ul>
                            {errors.map(err => {
                                return (
                                    <li>{err}</li>
                                )
                            })}
                        </ul>
                    </Alert><br/></div> : <div></div>
                }
                <form className={classes.root} noValidate autoComplete="off">
                    <span style={name != '' ? {color: '#8e8e8e'} : {color: '#ef5662'}}>نام</span>
                    <input type="text" onChange={e => {
                        setName(e.target.value)
                    }} className={name != '' ? classes.textBox : classes.textFieldErr}
                           placeholder="نام خود را وارد کنید..."/>
                    {/*{nameErr != () => {<span className={classes.error}>این فیلد باید پر شود</span>} : <div></div>}*/}
                    <span style={family != '' ? {color: '#8e8e8e'} : {color: '#ef5662'}}>نام خانوادگی</span>
                    <input type="text" onChange={e => {
                        setFamily(e.target.value)
                    }} className={family != '' ? classes.textBox : classes.textFieldErr}
                           placeholder="نام خانوادگی خود را وارد کنید..."/>
                    <span style={stuNumber != '' ? {color: '#8e8e8e'} : {color: '#ef5662'}}>شماره دانشجویی</span>
                    <input type="text" className={stuNumber != '' ? classes.textBox : classes.textFieldErr}
                           onChange={e => {
                               setStuNumber(e.target.value)
                           }} placeholder="شماره دانشجویی خود را وارد کنید..."/>

                    <span style={stuNumber != '' ? {color: '#8e8e8e'} : {color: '#ef5662'}}>رشته تحصیلی</span>
                    <Autocomplete
                        id="degree_id"
                        open={open}
                        onOpen={() => {
                            setOpen(true);
                        }}
                        onClose={() => {
                            setOpen(false);
                        }}
                        getOptionSelected={(option, value) => option.name === value.name}
                        getOptionLabel={option => option.name}
                        options={options}
                        loading={loading}
                        style={{ width : '100%' }}
                        renderInput={params => (
                            <TextField
                                className={classes.textBox}
                                {...params}
                                placeholder="رشته تحصیلی خود را انتخاب کنید..."
                                style={{fontSize : '14px'}}
                                fullWidth
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {loading ? <CircularProgress style={{ color : 'rgb(255, 145, 0)' }} size={20} /> : null}
                                            {params.InputProps.endAdornment}
                                        </React.Fragment>
                                    ),
                                }}
                            />
                        )}
                    />

                    <span style={phone != '' ? {color: '#8e8e8e'} : {color: '#ef5662'}}>شماره تماس</span>
                    <input type="text" className={phone != '' ? classes.textBox : classes.textFieldErr} onChange={e => {
                        setPhone(e.target.value)
                    }} placeholder="شماره تماس خود را وارد کنید..."/>
                    <span style={email != '' ? {color: '#8e8e8e'} : {color: '#ef5662'}}>ایمیل</span>
                    <input type="email" className={email != '' ? classes.textBox : classes.textFieldErr}
                           onChange={e => {
                               setEmail(e.target.value)
                           }} placeholder="ایمیل خود را وارد کنید..."/>
                    <span style={password != '' ? {color: '#8e8e8e'} : {color: '#ef5662'}}>رمز</span>
                    <input type="password" className={password != '' ? classes.textBox : classes.textFieldErr}
                           onChange={e => {
                               setPassword(e.target.value)
                           }} placeholder="رمز خود را وارد کنید..."/>
                    {password < 6 ? <span className={classes.error}>رمز عبور نباید کمتر از ۶ کاراکتر باشد.</span> :
                        <div></div>}
                    <span style={confirmPass != '' ? {color: '#8e8e8e'} : {color: '#ef5662'}}>تکرار رمز</span>
                    <input type="password" className={confirmPass != '' ? classes.textBox : classes.textFieldErr}
                           onChange={e => {
                               setConfirmPass(e.target.value)
                           }} placeholder="تکرار رمز خود را وارد کنید..."/>
                    {password != confirmPass ? <span className={classes.error}>تکرار رمز با رمز برابر نیست!</span> :
                        <div></div>}
                    <Button
                        onClick={e => HandleForm(e)}
                        type='submit'
                        style={{
                            backgroundColor: '#ff9100',
                            color: 'white',
                            fontWeight: 700
                        }}>
                        ثبت نام
                    </Button>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default Register
