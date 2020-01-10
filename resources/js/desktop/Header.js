import React from 'react'
import '../styles/style.css'
import {
    makeStyles ,
    AppBar ,
    Toolbar ,
    IconButton ,
    Typography ,
    Button ,
    Container,
    fade
} from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Slide from '@material-ui/core/Slide';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { PersonOutline , AddOutlined } from '@material-ui/icons'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        fontFamily: 'IRANSans'
    },
    menuButton: {
        marginRight: theme.spacing(0),
    },
    title: {
        marginRight : theme.spacing(3),
        fontFamily : 'IRANSans',
        fontWeight : 700,
        color : 'black'
    },
    header : {
        background : 'white',
        boxShadow : '0 0px 0px #cccccc',
        borderBottom : '1px solid #efefef',
    },
    headContent : {
        paddingRight : theme.spacing(0),
    },
    search: {
        flexGrow: 1,
        marginRight : theme.spacing(3),
        position: 'relative',
        borderRadius: '8px',
        backgroundColor: "#efefef",
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color : "#8e8e8e"
    },
    inputRoot: {
        color: 'inherit',
        width : '100%'
    },
    inputInput: {
        flexGrow: 1,
        padding: theme.spacing(1.7,7, 1.7, 1),
        float : 'right',
        transition: theme.transitions.create('width'),
        width: '100%',
        color : "#333",
        fontWeight : 700,
        fontSize : "14px",
        // [theme.breakpoints.up('sm')]: {
        //     width: 120,
        //     '&:focus': {
        //         width: 400,
        //     },
        // },
    },
    paperStyle : {
        backgroundColor : "white",
        border : '1px solid rgb(239, 239, 239)',
        boxShadow : '0 3px 6px rgba(0,0,0,.18)',
        borderRadius : '7px',
        outline : 'none',
    }
}));


function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const MoreHorizon = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };
    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    const prevOpen = React.useRef(open);

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
      <React.Fragment>
          <IconButton edge="start" className={[classes.menuButton , 'on_focus'].join(' ')} aria-label="menu"
                      ref={anchorRef}
                      aria-controls={open ? 'menu-list-grow' : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle}>
              <MoreHoriz className="prim_color"/>
          </IconButton>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
              {({ TransitionProps, placement }) => (
                  <Grow
                      {...TransitionProps}
                      style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                      <Paper className={[classes.paperStyle , 'no_padding'].join(' ')}>
                          <ClickAwayListener onClickAway={handleClose}>
                              <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} className='no_padding'>
                                  <MenuItem onClick={handleClose} className={['my_font' , 'items']} style={{borderBottom : '1px solid rgb(239, 239, 239)'}}>دانلود اپلیکیشن</MenuItem>
                                  <MenuItem onClick={handleClose} className={['my_font' , 'items']} style={{borderBottom : '1px solid rgb(239, 239, 239)'}}>ایتم دوم</MenuItem>
                                  <MenuItem onClick={handleClose} className={['my_font' , 'items']}>مورد سوم</MenuItem>
                              </MenuList>
                          </ClickAwayListener>
                      </Paper>
                  </Grow>
              )}
          </Popper>
      </React.Fragment>
    );
}

const LoginPaper = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };
    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }
    const prevOpen = React.useRef(open);

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <React.Fragment>
            <IconButton edge="start" className={[classes.menuButton , 'on_focus'].join(' ')} aria-label="menu"
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}>
                <PersonOutline className="prim_color"/>
            </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                        <Paper className={[classes.paperStyle , 'no_padding'].join(' ')}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown} className='no_padding'>
                                    <MenuItem onClick={handleClose} className={['my_font' , 'items']} style={{borderBottom : '1px solid rgb(239, 239, 239)'}}>استریم من</MenuItem>
                                    <MenuItem onClick={handleClose} className={['my_font' , 'items']} style={{borderBottom : '1px solid rgb(239, 239, 239)'}}>ثبت نام</MenuItem>
                                    <MenuItem onClick={handleClose} className={['my_font' , 'items']} style={{borderBottom : '1px solid rgb(239, 239, 239)'}}>ورود</MenuItem>
                                    <MenuItem onClick={handleClose} className={['my_font' , 'items']}>خروج</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    );
}

const Header = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
            <AppBar className={classes.header}>
                <Container fixed className={classes.headContent} style={{ paddingLeft : '0' }}>
                    <Toolbar style={{ paddingRight : '0' , paddingLeft : '0'}}>
                        <MoreHorizon />
                        <Typography className={classes.title}>
                            لوگو
                        </Typography>
                        <div className={[classes.search, "on_focus"].join(' ')}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="جستوجو در میان آگهی ها..."
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                className="my_font"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <IconButton className='on_focus'>
                            <AddOutlined className="prim_color"/>
                        </IconButton>
                        <LoginPaper />
                    </Toolbar>
                </Container>
            </AppBar>
            </HideOnScroll>
            <br/>
        </React.Fragment>
    );
}

export default Header
