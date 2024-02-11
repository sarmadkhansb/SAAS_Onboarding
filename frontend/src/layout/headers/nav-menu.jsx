import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";

const NavMenu = () => {
  return (
    <>
    {/* Styling for sub menu, need to add this in css later */}
    <style jsx>{`
        .submenu {
          width: 250px; /* Adjust the width as needed */
        }

        // .submenu li {
        //   padding: 10px; /* Add padding to each submenu item */
        // }

        .submenu p {
          font-size: 12px; /* Adjust the font size for the description */
          margin: 0; /* Remove margin to reduce space */
        }
      `}</style>

      <ul>
        {menu_data.map((menu_item, i) => (
          <li key={i}>
            <Link href={menu_item.link}>{menu_item.title}</Link>
            {menu_item.has_dropdown && (
              <ul className="submenu">
                {menu_item.sub_menus.map((sub_menu, j) => (
                  <li key={j}>
                    <Link href={sub_menu.link}>{sub_menu.title}</Link>
                    {sub_menu.icon && <span className={sub_menu.icon}></span>}
                    {sub_menu.description && <p>{sub_menu.description}</p>}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;



// import Link from "next/link";
// import React from "react";
// import menu_data from "./menu-data";

// const NavMenu = () => {
//   return (
//     <>
//       <ul>
//         {menu_data.map((menu_item, i) => (
//           <li key={i}>
//             <Link href={menu_item.link}>{menu_item.title}</Link>
//             {menu_item.has_dropdown && (
//               <ul className="submenu">
//                 {menu_item.sub_menus.map((sub_menu, i) => (
//                   <li key={i}>
//                     <Link href={sub_menu.link}>{sub_menu.title}</Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default NavMenu;
