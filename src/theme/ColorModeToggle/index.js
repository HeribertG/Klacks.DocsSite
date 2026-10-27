import React from 'react';
import clsx from 'clsx';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {translate} from '@docusaurus/Translate';
import {useColorMode} from '@docusaurus/theme-common';

const LIGHT = 'light';
const DARK = 'dark';

function getColorModeLabel(colorMode) {
  if (colorMode === DARK) {
    return translate({
      message: 'dark mode',
      id: 'theme.colorToggle.ariaLabel.mode.dark',
      description: 'The name for the dark color mode',
    });
  }
  return translate({
    message: 'light mode',
    id: 'theme.colorToggle.ariaLabel.mode.light',
    description: 'The name for the light color mode',
  });
}

function getAriaLabel(colorMode) {
  return translate(
    {
      message: 'Switch between dark and light mode (currently {mode})',
      id: 'theme.colorToggle.ariaLabel',
      description: 'The ARIA label for the color mode toggle',
    },
    {mode: getColorModeLabel(colorMode)},
  );
}

function MoonIcon() {
  return (
    <svg className="klacks-theme-icon klacks-theme-moon" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path fill="currentColor" d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg className="klacks-theme-icon klacks-theme-sun" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path fill="currentColor" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zM2 13h2a1 1 0 1 0 0-2H2a1 1 0 1 0 0 2zm18 0h2a1 1 0 1 0 0-2h-2a1 1 0 1 0 0 2zM11 2v2a1 1 0 1 0 2 0V2a1 1 0 1 0-2 0zm0 18v2a1 1 0 1 0 2 0v-2a1 1 0 1 0-2 0zM5.99 4.58a1 1 0 1 0-1.41 1.41l1.06 1.06a1 1 0 1 0 1.41-1.41L5.99 4.58zm12.37 12.37a1 1 0 1 0-1.41 1.41l1.06 1.06a1 1 0 1 0 1.41-1.41l-1.06-1.06zm1.06-10.96a1 1 0 1 0-1.41-1.41l-1.06 1.06a1 1 0 1 0 1.41 1.41l1.06-1.06zM7.05 18.36a1 1 0 1 0-1.41-1.41l-1.06 1.06a1 1 0 1 0 1.41 1.41l1.06-1.06z" />
    </svg>
  );
}

export default function ColorModeToggle({className, buttonClassName}) {
  const isBrowser = useIsBrowser();
  const {colorMode, setColorMode} = useColorMode();
  const current = colorMode === DARK ? DARK : LIGHT;

  return (
    <div className={clsx('klacks-theme-toggle', className)}>
      <button
        className={clsx('clean-btn', 'klacks-theme-button', buttonClassName)}
        type="button"
        onClick={() => setColorMode(current === DARK ? LIGHT : DARK, {persist: false})}
        disabled={!isBrowser}
        title={getColorModeLabel(current)}
        aria-label={getAriaLabel(current)}>
        <MoonIcon />
        <SunIcon />
      </button>
    </div>
  );
}
