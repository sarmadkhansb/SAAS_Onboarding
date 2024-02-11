import {
  billing,
  orderManagement,
  helpdesk,
  referralManagement,
  teamDetails,
  seoAgencies,
  contentAgencies,
  docoments,
  onboardingSessions,
  guideProductizing,
  caseStudies,
} from './menu-details';

const menu_data = [
  {
    id: 2,
    mega_menu: true,
    has_dropdown: true,
    title: "Features",
    link: "/",
    active: "",
    sub_menus: [
      billing,
      orderManagement,
      helpdesk,
      referralManagement,
      teamDetails,
    ],
  },
  {
    id: 3,
    mega_menu: true,
    has_dropdown: true,
    title: "Use Cases",
    link: "/",
    active: "",
    sub_menus: [
      seoAgencies,
      contentAgencies,
    ],
  },
  {
    id: 4,
    mega_menu: true,
    has_dropdown: true,
    title: "Resources",
    link: "/",
    active: "",
    sub_menus: [
      docoments,
      onboardingSessions,
      guideProductizing,
      caseStudies
    ],
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Pricing",
    link: "/price",
    active: "",
  },
  
];

export default menu_data;


// const menu_data = [
//   {
//     // features menu
//     id: 2,
//     mega_menu: true,
//     has_dropdown: true,
//     title: "Features",
//     link: "/",
//     active: "",
//     sub_menus: [
//       { link: "/billing", title: "Billing", icon: "billing-icon", description: "Elegant one-page payment flow, designed for selling services." },
//       { link: "/order-management", title: "Order Management", icon: "order-icon", description: "Helps your team keep organized and deliver projects at scale." },
//       { link: "/help-desk", title: "Helpdesk", icon: "helpdesk-icon", description: "Support your customers with full context of their purchases." },
//       { link: "/refferal-management", title: "Referral Management", icon: "referral-icon", description: "Turn your happy clients into brand ambassadors." },
//       { link: "/team-details", title: "Team Details", icon: "team-icon", description: "Manage and view details of your team members." },
//     ],
//   },

//   {
//     id: 3,
//     mega_menu: true,
//     has_dropdown: true,
//     title: "Use Cases",
//     link: "/",
//     active: "",
//     sub_menus: [
//       { link: "/seo-agencies", title: "Seo Agencies", icon: "billing-icon", description: "Helps you sell audits, link building, outreach, or local SEO." },
//       { link: "/content-agencies", title: "Content Agencies", icon: "order-icon", description: "Helps you sell content packages and manage your writers." },
//     ],
//   },

//   {
//     id: 4,
//     mega_menu: true,
//     has_dropdown: true,
//     title: "Resources",
//     link: "/",
//     active: "",
//     sub_menus: [
//       { link: "/docs", title: "Docs" },
//       { link: "/onboarding-sessions", title: "Onboarding Sessions" },
//       { link: "/blog", title: "Agency Growth Blog" },
//       { link: "/productize-ebook", title: "Epic Guide to Productizing"},
//       { link: "/case-studies", title: "Case Studies" },
//     ],
//   },

//   {
//     id: 5,
//     mega_menu: false,
//     has_dropdown: false,
//     title: "Pricing",
//     link: "/price",
//     active: "",
//   },

//   // {
//   //   id: 6,
//   //   mega_menu: false,
//   //   has_dropdown: false,
//   //   title: "Contact",
//   //   link: "/contact",
//   //   active: "",
//   // },
  

// ];
// export default menu_data;



// { title: "Docs", link: "/docs" },
//       { title: "Onboarding Sessions", link: "/onboarding-sessions" },
//       { title: "Agency Growth Blog", link: "/blog" },
//       { title: "Epic Guide to Productizing", link: "/productize-ebook" },
//       { title: "Case Studies", link: "/case-studies" },

      // { link: "/billing", title: "Billing" },
      // { link: "/order-management", title: "Order Management" },
      // { link: "/help-desk", title: "Helpdesk" },
      // { link: "/refferal-management", title: "Refferal Management" },
      // { link: "/team-details", title: "Team Details" },

      // { link: "/seo-agencies", title: "Seo Agencies" },
      // { link: "/content-agencies", title: "Content Agencies" },



    // {
  //   id: 1,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "Home",
  //   link: "/home-5",
  //   active: "",
  // },

  // {
  //   id: 1,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Home",
  //   link: "/",
  //   active: "active",
  //   sub_menus: [
  //     { link: "/", title: "Data analytics" },
  //     { link: "/home-2", title: "Payment Gateway" },
  //     { link: "/home-3", title: "CRM Software" },
  //     { link: "/home-4", title: "Security Software" },
  //     { link: "/home-5", title: "Saas" },
  //   ],
  // },

  // {
  //   id: 2,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Pages",
  //   link: "/about",
  //   active: "",
  //   sub_menus: [
  //     { link: "/about", title: "About" },
      // { link: "/service", title: "Service" },
      // { link: "/service-details", title: "Service Details" },
      // { link: "/team", title: "Team" },
      // { link: "/team-details", title: "Team Details" },
      // { link: "/career", title: "Career" },
      // { link: "/career-details", title: "Career Details" },
      // { link: "/integrations", title: "Integrations" },
      // { link: "/price", title: "Price" },
      // { link: "/register", title: "Register" },
      // { link: "/sign-in", title: "Signin" },
      // { link: "/404", title: "404" }, 
  //   ],
  // },
  
  // {
  //   id: 3,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Projects",
  //   link: "/project",
  //   active: "",
  //   sub_menus: [
  //     { link: "/project", title: "Project" },
  //     { link: "/project-details", title: "Project Details" }, 
  //   ],
  // },

  // {
  //   id: 4,
  //   mega_menu: false,
  //   has_dropdown: true,
  //   title: "Blog",
  //   link: "/blog",
  //   active: "",
  //   sub_menus: [
  //     { link: "/blog", title: "Blog" },
  //     { link: "/blog-list", title: "Blog List" },
  //     { link: "/blog-details", title: "Blog Details" },
  //     { link: "/blog-details-2", title: "Blog Details 02" },
  //   ],
  // },