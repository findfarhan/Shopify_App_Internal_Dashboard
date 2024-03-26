import { icons } from '../base-components/Lucide';

export const themeDefaultValues = {
  darkMode: 'false',
  colorScheme: 'theme-7',
  sideMenu: 'true',
  theme: 'razor',
  compactMenu: true,
  pageLoader: false,
};

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  badge?: number;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | string>;
}

export const selectSideMenu: SideMenuState = {
  menu: [
    'DASHBOARDS',
    {
      icon: 'Table2',
      pathname: '/competitions',
      title: 'Competitions List',
    },
    // {
    //   icon: 'GaugeCircle',
    //   pathname: '/DashboardOverview1',
    //   title: 'E-Commerce',
    // },
    // {
    //   icon: 'ActivitySquare',
    //   pathname: '/DashboardOverview2',
    //   title: 'CRM',
    // },
    // {
    //   icon: 'Album',
    //   pathname: '/DashboardOverview3',
    //   title: 'Hospital',
    // },
    // {
    //   icon: 'BookMarked',
    //   pathname: '/DashboardOverview4',
    //   title: 'Factory',
    // },
    // {
    //   icon: 'HardDrive',
    //   pathname: '/DashboardOverview5',
    //   title: 'Banking',
    // },
    // {
    //   icon: 'MousePointerSquare',
    //   pathname: '/DashboardOverview6',
    //   title: 'Cafe',
    // },
    // {
    //   icon: 'ShieldHalf',
    //   pathname: '/DashboardOverview7',
    //   title: 'Crypto',
    // },
    // {
    //   icon: 'Building',
    //   pathname: '/DashboardOverview8',
    //   title: 'Hotel',
    // },
    // 'APPS',
    // {
    //   icon: 'GanttChartSquare',
    //   pathname: '/Inbox',
    //   title: 'Inbox',
    //   badge: 4,
    // },
    // {
    //   icon: 'PanelRightInactive',
    //   pathname: '/FileManagerList',
    //   title: 'File Manager List',
    // },
    // {
    //   icon: 'PanelTopClose',
    //   pathname: '/FileManagerGrid',
    //   title: 'File Manager Grid',
    // },
    // {
    //   icon: 'PanelTopInactive',
    //   pathname: '/PointOfSale',
    //   title: 'Point of Sale',
    // },
    // {
    //   icon: 'MailOpen',
    //   pathname: '/Chat',
    //   title: 'Chat',
    // },
    // {
    //   icon: 'CalendarRange',
    //   pathname: '/Calendar',
    //   title: 'Calendar',
    // },
    // 'UI WIDGETS',
    // {
    //   icon: 'Album',
    //   pathname: '/Creative',
    //   title: 'Creative',
    // },
    // {
    //   icon: 'ActivitySquare',
    //   pathname: '/Dynamic',
    //   title: 'Dynamic',
    // },
    // {
    //   icon: 'Keyboard',
    //   pathname: '/Interactive',
    //   title: 'Interactive',
    // },
    // 'USER MANAGEMENT',
    // {
    //   icon: 'UserSquare',
    //   pathname: '/Users',
    //   title: 'Users',
    // },
    // {
    //   icon: 'CakeSlice',
    //   pathname: '/Departments',
    //   title: 'Departments',
    // },
    // {
    //   icon: 'PackagePlus',
    //   pathname: '/AddUser',
    //   title: 'Add User',
    // },
    // 'PERSONAL DASHBOARD',
    // {
    //   icon: 'Presentation',
    //   pathname: '/ProfileOverview',
    //   title: 'Profile Overview',
    // },
    // {
    //   icon: 'CalendarRange',
    //   pathname: '/profile-overview?page=events',
    //   title: 'Events',
    // },
    // {
    //   icon: 'Medal',
    //   pathname: '/profile-overview?page=achievements',
    //   title: 'Achievements',
    // },
    // {
    //   icon: 'TabletSmartphone',
    //   pathname: '/profile-overview?page=contacts',
    //   title: 'Contacts',
    // },
    // {
    //   icon: 'Snail',
    //   pathname: '/profile-overview?page=default',
    //   title: 'Default',
    // },
    // 'GENERAL SETTINGS',
    // {
    //   icon: 'Briefcase',
    //   pathname: '/settings',
    //   title: 'Profile Info',
    // },
    // {
    //   icon: 'MailCheck',
    //   pathname: '/settings?page=email-settings',
    //   title: 'Email Settings',
    // },
    // {
    //   icon: 'Fingerprint',
    //   pathname: '/settings?page=security',
    //   title: 'Security',
    // },
    // {
    //   icon: 'Radar',
    //   pathname: '/settings?page=preferences',
    //   title: 'Preferences',
    // },
    // {
    //   icon: 'DoorOpen',
    //   pathname: '/settings?page=two-factor-authentication',
    //   title: 'Two-factor Authentication',
    // },
    // {
    //   icon: 'Keyboard',
    //   pathname: '/settings?page=device-history',
    //   title: 'Device History',
    // },
    // {
    //   icon: 'Ticket',
    //   pathname: '/settings?page=notification-settings',
    //   title: 'Notification Settings',
    // },
    // {
    //   icon: 'BusFront',
    //   pathname: '/settings?page=connected-services',
    //   title: 'Connected Services',
    // },
    // {
    //   icon: 'Podcast',
    //   pathname: '/settings?page=social-media-links',
    //   title: 'Social Media Links',
    // },
    // {
    //   icon: 'PackageX',
    //   pathname: '/settings?page=account-deactivation',
    //   title: 'Account Deactivation',
    // },
    // 'ACCOUNT',
    // {
    //   icon: 'PercentSquare',
    //   pathname: '/Billing',
    //   title: 'Billing',
    // },
    // {
    //   icon: 'DatabaseZap',
    //   pathname: '/invoice',
    //   title: 'Invoice',
    // },
    // 'E-COMMERCE',
    // {
    //   icon: 'BookMarked',
    //   pathname: '/categories',
    //   title: 'Categories',
    // },
    // {
    //   icon: 'Compass',
    //   pathname: '/add-product',
    //   title: 'Add Product',
    // },
    // {
    //   icon: 'Table2',
    //   pathname: '/products',
    //   title: 'Products',
    //   subMenu: [
    //     {
    //       icon: 'LayoutPanelTop',
    //       pathname: '/product-list',
    //       title: 'Product List',
    //     },
    //     {
    //       icon: 'LayoutPanelLeft',
    //       pathname: '/product-grid',
    //       title: 'Product Grid',
    //     },
    //   ],
    // },
    // {
    //   icon: 'SigmaSquare',
    //   pathname: '/transactions',
    //   title: 'Transactions',
    //   subMenu: [
    //     {
    //       icon: 'DivideSquare',
    //       pathname: '/transaction-list',
    //       title: 'Transaction List',
    //     },
    //     {
    //       icon: 'PlusSquare',
    //       pathname: '/transaction-detail',
    //       title: 'Transaction Detail',
    //     },
    //   ],
    // },
    // {
    //   icon: 'FileArchive',
    //   pathname: '/sellers',
    //   title: 'Sellers',
    //   subMenu: [
    //     {
    //       icon: 'FileImage',
    //       pathname: '/seller-list',
    //       title: 'Seller List',
    //     },
    //     {
    //       icon: 'FileBox',
    //       pathname: '/seller-detail',
    //       title: 'Seller Detail',
    //     },
    //   ],
    // },
    // {
    //   icon: 'Goal',
    //   pathname: '/reviews',
    //   title: 'Reviews',
    // },
    // 'AUTHENTICATIONS',
    // {
    //   icon: 'BookKey',
    //   pathname: 'login',
    //   title: 'Login',
    // },
    // {
    //   icon: 'BookLock',
    //   pathname: 'register',
    //   title: 'Register',
    // },
    // 'COMPONENTS',
    // {
    //   icon: 'LayoutPanelLeft',
    //   title: 'Table',
    //   subMenu: [
    //     {
    //       icon: 'FlipVertical',
    //       pathname: '/regular-table',
    //       title: 'Regular Table',
    //     },
    //     {
    //       icon: 'FlipHorizontal',
    //       pathname: '/tabulator',
    //       title: 'Tabulator',
    //     },
    //   ],
    // },
    // {
    //   icon: 'MemoryStick',
    //   title: 'Overlay',
    //   subMenu: [
    //     {
    //       icon: 'MenuSquare',
    //       pathname: '/modal',
    //       title: 'Modal',
    //     },
    //     {
    //       icon: 'Newspaper',
    //       pathname: '/slideover',
    //       title: 'Slide Over',
    //     },
    //     {
    //       icon: 'PanelBottom',
    //       pathname: '/notification',
    //       title: 'Notification',
    //     },
    //   ],
    // },
    // {
    //   icon: 'Package2',
    //   pathname: '/tab',
    //   title: 'Tab',
    // },
    // {
    //   icon: 'Pocket',
    //   pathname: '/Accordion',
    //   title: 'Accordion',
    // },
    // {
    //   icon: 'PlusSquare',
    //   pathname: '/button',
    //   title: 'Button',
    // },
    // {
    //   icon: 'Presentation',
    //   pathname: '/alert',
    //   title: 'Alert',
    // },
    // {
    //   icon: 'ShieldEllipsis',
    //   pathname: '/progress-bar',
    //   title: 'Progress Bar',
    // },
    // {
    //   icon: 'Clapperboard',
    //   pathname: '/tooltip',
    //   title: 'Tooltip',
    // },
    // {
    //   icon: 'FlipVertical',
    //   pathname: '/dropdown',
    //   title: 'Dropdown',
    // },
    // {
    //   icon: 'FileType2',
    //   pathname: '/typography',
    //   title: 'Typography',
    // },
    // {
    //   icon: 'Aperture',
    //   pathname: '/icon',
    //   title: 'Icon',
    // },
    // {
    //   icon: 'Droplets',
    //   pathname: '/loading-icon',
    //   title: 'Loading Icon',
    // },
    // {
    //   icon: 'GalleryHorizontalEnd',
    //   pathname: '/regular-form',
    //   title: 'Regular Form',
    // },
    // {
    //   icon: 'Microwave',
    //   pathname: '/datepicker',
    //   title: 'Datepicker',
    // },
    // {
    //   icon: 'Disc3',
    //   pathname: '/tom-select',
    //   title: 'Tom Select',
    // },
    // {
    //   icon: 'Sandwich',
    //   pathname: '/file-upload',
    //   title: 'File Upload',
    // },
    // {
    //   icon: 'HopOff',
    //   pathname: '/wysiwyg-editor',
    //   title: 'Wysiwyg Editor',
    // },
    // {
    //   icon: 'ClipboardType',
    //   pathname: '/validation',
    //   title: 'Validation',
    // },
    // {
    //   icon: 'PieChart',
    //   pathname: '/chart',
    //   title: 'Chart',
    // },
    // {
    //   icon: 'KanbanSquare',
    //   pathname: '/slider',
    //   title: 'Slider',
    // },
    // {
    //   icon: 'Image',
    //   pathname: '/image-zoom',
    //   title: 'Image Zoom',
    // },
  ],
};
