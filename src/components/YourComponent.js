// import React from 'react';
// import './YourComponent.css'; // Import your CSS file

// function FreeViews() {
//   return (
//     <div className="container mx-auto sm-px-4 section-padding">
//       <div className="flex flex-wrap package-card xl-p-12 lg-p-6 p-6 m-2 section-title">
//         <div className="xl-w-2/3 pr-4 pl-4 w-full flex text-white flex-col items-start">
//           <p className="text-white text-4xl xl-p">
//             Receive <span className="font-weight">1000 FREE VIEWS</span> on mobile verification.
//           </p>
//           <a href='/dashboard/free-views/' id="GetItNow1000FreeViewsBtn">
//             <button className="purpleBackground whiteBorder py-2 px-4 h5 mt-10 btn-border-radius">
//               Get it now!
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FreeViews;
import React from 'react';
import './YourComponent.css'

const YourComponent = () => {
  return (
    <>
    <div className='img_section_'> 
     <div className='items_'>
        <p>Receive 1000 <span>FREE VIEWS</span> on mobile <br/> verification.</p>
        <button className="btn">Get it now!</button>
     </div>
    </div>
    </>
  )
}

export default YourComponent

