import React from 'react';
import { useNavigate } from "react-router-dom";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	paper: {
		marginRight: theme.spacing(2),
	},
	center: {
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'inline-block',
        width: '100%'
	},
	hello: {
		padding: '10px',
		fontWeight: 'bold'
	}
}));

export default function MenuListComposition() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);
	const history = useNavigate();

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}

		setOpen(false);
	};

	const handleLogout = (event) => {
		handleClose(event);
		history.push('/')
	}

	function handleListKeyDown(event) {
		if (event.key === 'Tab') {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	return (
		<div className={classes.root}>
			<div>
				<Avatar
					ref={anchorRef}
					aria-controls={open ? 'menu-list-grow' : undefined}
					aria-haspopup="true"
					onClick={handleToggle}
				>
				</Avatar>

				<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<div>
										<Typography className={classes.hello} variant="body2" color="textSecondary" component="p">
											{'Olá, Fulano'}
										</Typography>
										<MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
											<MenuItem className={classes.center} onClick={handleLogout}>Logout</MenuItem>
										</MenuList>
									</div>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</div>
	);
}
