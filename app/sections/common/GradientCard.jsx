// const gradient = ["white", "yellow", "green", "blue"];

// function GradientCard({ cardDetails, header, children, ...options }) {
//   return (
//     <div className="container">
//       <p className="container-title">{header}</p>
//       <div className="gradient-cards" {...options}>
//         {cardDetails.lists.map((data, index) => (

//          <a href={data.href} style={{textDecorationLine:"none"}}  key={index}>
//           <div className="card" key={index}>
//             <div className={`container-card bg-${gradient[index % 4]}-box`}>
//               <a href={data.href}></a>
//               <p className="card-title">{data.header}</p>

//               <p className="card-description">{data.content}</p>
//               {children}
//             </div>
//           </div>
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default GradientCard;
"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation"; // or "next/router" for Pages Router

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const gradient = ["white", "yellow", "green", "blue"];

function GradientCard({ cardDetails, header, children, ...options }) {
  const router = useRouter();

  return (
    <div className="container">
      <p className="container-title">{header}</p>
      <div className="gradient-cards" {...options}>
        {cardDetails.lists.map((data, index) => (
          <div className="card" key={index}>
            <div className={`container-card bg-${gradient[index % 4]}-box`}>
              <div className="flex gap-3">
                <img src={data.img} alt={data.header} width={100} height={100} />

                <p className="card-title">{data.header}</p>
              </div>
              <p className="card-description">{data.content}</p>
              <div className="flex justify-end">
              
              <Button
                variant="outlined"
                color="primary"
                sx={{ mt: 2, borderRadius: 2 }}
                onClick={() => router.push(data.href)}
                endIcon={<ArrowForwardIosIcon />}
              >
                Learn More
              </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GradientCard;
