import { AppState } from './../core';

export const NIGHT_MODE_THEME = 'DEFAULT-THEME';

export type Language = 'en' | 'sk' | 'de' | 'fr' | 'es' | 'pt-br';

export interface SettingsState {
  language: string;
  theme: string;
  autoNightMode: boolean;
  nightTheme: string;
  stickyHeader: boolean;
  pageAnimations: boolean;
  pageAnimationsDisabled: boolean;
  elementsAnimations: boolean;
  hour: number;
}

export interface State extends AppState {
  settings: SettingsState;
}
