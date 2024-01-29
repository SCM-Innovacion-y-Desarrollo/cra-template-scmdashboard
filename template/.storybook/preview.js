import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

import React, { Suspense, useEffect } from "react";
import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { I18nextProvider } from 'react-i18next'
import i18n from '../src/i18n'

/* TODO: update import for your custom Material UI themes */
import { 
	LightTheme,
	DarkTheme,
	CustomTheme 
} from '../src/styles/themes';

/** @type { import('@storybook/react').Preview } */

i18n.on('languageChanged', (locale) => {
	let direction = i18n.dir(locale)
	document.dir = direction

	//i18n.changeLanguage('en')
	console.log(`Language changed to ${locale} (${direction})`)
});

const withI18next = (Story, context) => {
	const { locale } = context.globals;

	useEffect(() => {
		i18n.changeLanguage(locale);
	}, [locale]);

	return (
		<Suspense fallback={<div>loading translations...</div>}>
			<I18nextProvider i18n={i18n}>
				<Story />
			</I18nextProvider>
		</Suspense>
	);
};

export const globalTypes = {
	locale: {
		name: 'Locale',
		description: 'Internationalization locale',
		toolbar: {
			icon: 'globe',
			items: [
				{ value: 'en', title: 'English', right: '🇺🇸' },
				{ value: 'es', title: 'Español', right: '🇪🇸' },
			],
			showName: true,
		},
	},
};

const preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [ 
		withThemeFromJSXProvider({
			GlobalStyles: CssBaseline,
			Provider: ThemeProvider,
			themes: {
				// Provide your custom themes here
				light: LightTheme,
				dark: DarkTheme,
				custom: CustomTheme,
			},
			defaultTheme: 'light',
		}),
		withI18next,
	]
};

export default preview;