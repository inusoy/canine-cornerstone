
/**
 * Site-wide configuration settings
 */
export const siteConfig = {
  /**
   * When true, shows the maintenance page to all visitors
   * When false, the main site is accessible to everyone
   */
  maintenanceMode: false,
  
  /**
   * Access key that bypasses maintenance mode when provided in the URL
   * Example: /?access=dev-preview
   */
  maintenanceBypassKey: "dev-preview"
};
