import { msg } from "gt-next";

// Shared UI labels — used across server and client components
export const labels = {
  appTitle: msg("Shared String Constants"),
  navHome: msg("Home"),
  serverSection: msg("Server Component"),
  clientSection: msg("Client Component"),
  sharedFileNote: msg(
    "All strings below are defined once in a shared constants file and resolved per-locale at render time."
  ),
};

// Form validation error messages
export const errors = {
  required: msg("This field is required."),
  emailInvalid: msg("Please enter a valid email address."),
  passwordTooShort: msg("Password must be at least 8 characters."),
  passwordMismatch: msg("Passwords do not match."),
  usernameTaken: msg("This username is already taken."),
};

// Status labels
export const statuses = {
  active: msg("Active"),
  inactive: msg("Inactive"),
  pending: msg("Pending review"),
  suspended: msg("Account suspended"),
};

// Dashboard labels with variables
export const dashboard = {
  welcome: msg("Welcome back, {name}!"),
  itemCount: msg(
    "You have {count, plural, =0 {no items} =1 {one item} other {{count} items}} in your queue."
  ),
  lastLogin: msg("Last login: {date}"),
};
