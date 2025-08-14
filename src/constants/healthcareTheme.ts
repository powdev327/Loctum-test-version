/**
 * Healthcare Theme Color Constants
 * 
 * This file contains the healthcare color palette for easy reference in components.
 * These colors are also available as Tailwind CSS classes (e.g., bg-brand-500, text-gray-900).
 */

export const HealthcareColors = {
  // Primary Brand - Deep Healthcare Blue
  primary: {
    main: '#1E5A8C',
    light: '#f1f5f9',
    dark: '#0e2844',
  },

  // Secondary - Teal Green
  secondary: {
    main: '#2BBFA3',
    light: '#ccfbf1',
    dark: '#134e4a',
  },

  // Backgrounds
  background: {
    light: '#F9FAFB',  // Off-White
    white: '#ffffff',
    dark: '#1a2231',
  },

  // Text Colors
  text: {
    primary: '#2E2E2E',    // Charcoal - Main body text
    secondary: '#6B7280',  // Cool Gray - Labels, metadata
    light: '#ffffff',
    inverse: '#ffffff',
  },

  // Call-to-Action
  cta: {
    main: '#FF6B5A',  // Warm Coral
    hover: '#dc2626',
    light: '#fef2f2',
  },

  // Status Colors
  success: {
    main: '#4CAF50',   // Soft Green
    light: '#dcfce7',
    dark: '#15803d',
  },

  error: {
    main: '#E53935',   // Warm Red
    light: '#fee2e2',
    dark: '#b91c1c',
  },

  // Neutral Grays
  gray: {
    50: '#F9FAFB',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6B7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#2E2E2E',
  },
} as const;

/**
 * Tailwind Class Mappings
 * Use these for consistent class naming in your components
 */
export const HealthcareTailwindClasses = {
  // Backgrounds
  bgPrimary: 'bg-brand-500',
  bgSecondary: 'bg-teal-500',
  bgLight: 'bg-gray-50',
  bgWhite: 'bg-white',
  bgCta: 'bg-coral-500',
  bgSuccess: 'bg-success-500',
  bgError: 'bg-error-500',

  // Text Colors
  textPrimary: 'text-gray-900',      // Charcoal
  textSecondary: 'text-gray-500',    // Cool Gray
  textWhite: 'text-white',
  textBrand: 'text-brand-500',
  textTeal: 'text-teal-500',
  textCta: 'text-coral-500',
  textSuccess: 'text-success-500',
  textError: 'text-error-500',

  // Buttons
  btnPrimary: 'bg-brand-500 text-white hover:bg-brand-600',
  btnSecondary: 'bg-teal-500 text-white hover:bg-teal-600',
  btnCta: 'bg-coral-500 text-white hover:bg-coral-600',
  btnSuccess: 'bg-success-500 text-white hover:bg-success-600',
  btnError: 'bg-error-500 text-white hover:bg-error-600',

  // Borders
  borderLight: 'border-gray-200',
  borderMedium: 'border-gray-300',
  borderBrand: 'border-brand-500',
  borderTeal: 'border-teal-500',
  borderError: 'border-error-500',
} as const;

/**
 * Component Presets
 * Common combinations for specific UI elements
 */
export const HealthcareComponentPresets = {
  // Cards
  card: 'bg-white border border-gray-200 rounded-lg shadow-theme-sm',
  cardHover: 'bg-white border border-gray-200 rounded-lg shadow-theme-sm hover:shadow-theme-md transition-shadow',

  // Headers
  headerPrimary: 'bg-brand-500 text-white',
  headerSecondary: 'bg-gray-50 text-gray-900 border-b border-gray-200',

  // Navigation
  navItem: 'text-gray-700 hover:text-brand-500 hover:bg-gray-100',
  navItemActive: 'text-brand-500 bg-brand-50',

  // Forms
  input: 'border-gray-300 focus:border-brand-500 focus:ring-brand-500',
  inputError: 'border-error-500 focus:border-error-500 focus:ring-error-500',
  inputSuccess: 'border-success-500 focus:border-success-500 focus:ring-success-500',

  // Status Indicators
  statusSuccess: 'bg-success-100 text-success-700 border border-success-200',
  statusError: 'bg-error-100 text-error-700 border border-error-200',
  statusWarning: 'bg-warning-100 text-warning-700 border border-warning-200',
} as const;