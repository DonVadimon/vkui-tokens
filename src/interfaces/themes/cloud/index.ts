import { Adaptive } from '@/interfaces/general/tools';
import { DefaultViewports } from '@/interfaces/general/tools/viewports';
import { Font } from '@/interfaces/general/typography';
import {
	ParadigmTheme,
	ParadigmThemeCssVars,
	ParadigmThemeDescription,
} from '@/interfaces/namespaces/paradigm';

interface ThemeCloudTypohraphy {
	/**
	 * @desc Caption 1 CAPS • DEMIBOLD
	 * @tags font
	 * */
	fontCaption1CapsDemibold: {
		regular: Font;
	};
	/**
	 * @desc Caption 2 CAPS • DEMIBOLD
	 * @tags font
	 * */
	fontCaption2CapsDemibold: {
		regular: Font;
	};
	/**
	 * @desc Caption 3 CAPS • DEMIBOLD
	 * @tags font
	 * */
	fontCaption3CapsDemibold: {
		regular: Font;
	};
	/**
	 * @desc Заголовок Title 2 • Custom
	 * @tags font
	 * */
	fontTitle2Custom: Adaptive<Font>;
	/**
	 * @desc Заголовок Title3 • Custom
	 * @tags font
	 * */
	fontTitle3Custom: Adaptive<Font>;
	/**
	 * @desc Заголовок Subtitle • Medium
	 * @tags font
	 * */
	fontSubtitleMedium: Font;
	/**
	 * @desc Заголовок Subtitle • Regular
	 * @tags font
	 * */
	fontSubtitleCustom: Font;
	/**
	 * @desc Заголовок HeadlineLarge• Medium.
	 * Используется для обозначения занятого места в блоке с чистилкой
	 * @tags font
	 * */
	fontHeadlineLargeMedium: Font;
	/**
	 * @desc LargeText • Regular.
	 * Используется как текст под заголовком в тултипах
	 * @tags font
	 * */
	fontLargeText: Font;
}

export interface ThemeCloud extends ParadigmTheme, ThemeCloudTypohraphy {}
export interface ThemeCloudDescription extends ParadigmThemeDescription, ThemeCloudTypohraphy {}
export interface ThemeCloudCssVars extends ParadigmThemeCssVars<DefaultViewports, ThemeCloud> {}
