import * as React from "react"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import Divider from "@mui/material/Divider"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import { Button, ButtonGroup } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import {
	decreaseFontSize,
	increaseFontSize,
	toggleTheme,
} from "../../store/SettingSlice"
import NightlightIcon from "@mui/icons-material/Nightlight"

export default function MebuSettings({
	anchorEl,
	open,
	onClose,
}: {
	anchorEl: HTMLElement | null
	open: boolean
	onClose: () => void
}) {
	const dispatch = useDispatch()
	const theme = useSelector((state) => state.theme.theme)
	const fontSize = useSelector((state) => state.theme.fontSize)

	return (
		<React.Fragment>
			<Menu
				anchorEl={anchorEl}
				id='account-menu'
				open={open}
				onClose={onClose} // Добавлен onClose для закрытия меню
				slotProps={{
					paper: {
						elevation: 0,
						sx: {
							overflow: "visible",
							filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
							mt: 1.5,
							"& .MuiAvatar-root": {
								width: 32,
								height: 32,
								ml: -0.5,
								mr: 1,
							},
							"&::before": {
								content: '""',
								display: "block",
								position: "absolute",
								top: 0,
								right: 14,
								width: 10,
								height: 10,
								bgcolor: "background.paper",
								transform: "translateY(-50%) rotate(45deg)",
								zIndex: 0,
							},
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem>Размер шрифта</MenuItem>
				<MenuItem>
					<ButtonGroup variant='outlined' aria-label='Basic button group'>
						<Button onClick={() => dispatch(decreaseFontSize())}>-</Button>
						<Button disabled>{fontSize}</Button>
						<Button onClick={() => dispatch(increaseFontSize())}>+</Button>
					</ButtonGroup>
				</MenuItem>
				<Divider />
				<MenuItem onClick={() => dispatch(toggleTheme())}>
					<ListItemIcon>
						{theme === "Светлая" ? (
							<WbSunnyIcon fontSize='small' />
						) : (
							<NightlightIcon fontSize='small' />
						)}
					</ListItemIcon>
					{theme} тема
				</MenuItem>
			</Menu>
		</React.Fragment>
	)
}
