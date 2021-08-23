import { darken, ThemeOptions } from "@material-ui/core";


export const themeOption = {
    palette: {
		primary: {
			light: '#8269B2',
			// light2: '#797bf2',
			main: '#671cc9',
			dark: darken('#671cc9', 0.125),
			contrastText: '#fff',
		},
		success: {
			light: '#93E088',
			main: '#06d6a0',
			dark: darken('#06d6a0', 0.125),
			contrastText: '#fff',
		},
		info: {
			light: '#37C3FF',
			main: '#039BE5',
			dark: darken('#039BE5', 0.125),
			contrastText: '#fff',
		},
		warning: {
			light: '#FFA981',
			main: '#FFD66E',
			dark: '#faae42',
			contrastText: '#fff',
		},
		error: {
			light: '#F92B60',
			main: '#e62965',
			dark: darken('#e62965', 0.125),
			contrastText: '#fff',
		},
		grey: {
			100: '#f5f5f5',
			200: '#ededed',
			300: '#e5e5e5',
			400: '#cecece',
			500: '#a2a5b9',
			600: '#999',
		},
		text: {
			primary: '#283252',
			secondary: '#a2a5b9',
			disabled: '#999',
			hint: '#ededed',
		},
		divider: '#ededed',
		background: {
			paper: '#fff',
			default: '#f2f2f2',
		},
		common: {
			white: '#fff',
			black: '#283252',
		},
	},
    overrides:{
        MuiCssBaseline: {
			'@global': {
				html: {
					fontSize: '62.5%',
				},
			},
		},
    }
}