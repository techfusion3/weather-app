// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import "./InfoBox.css";

// export default function InfoBox({ info }) {
//     const INIT_URL = 
//     "https://images.unsplash.com/photo-1577298672248-aa9979541592?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//     const HOT_URL = "https://images.unsplash.com/photo-1743738049563-520b88442d04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fEhPVCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
//     const COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
//     const ULTRACOLD_URL = "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
//     const RAIN_URL = "https://images.unsplash.com/photo-1737472794232-4c8be24ba535?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
//     const FOG_URL = "https://images.unsplash.com/photo-1577298672248-aa9979541592?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     return (
//         <div className="InfoBox">
//             <h1 className='InfoBoxText'>Weather Info - {info.weather}</h1>
//             <div className='cardContainer'>
//             <Card sx={{ maxWidth: 345 }}>
//       <CardMedia
//         sx={{ height: 140 }}
        // image={
        //     info.temp < 7
        //       ? ULTRACOLD_URL
        //       : info.temp <= 15
        //         ? COLD_URL
        //         : info.humidity > 80
        //           ? RAIN_URL
        //           : HOT_URL
        //   }                   
//         title="green iguana"
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="div">
//           {info.city}
//         </Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
//           <p>Temperature = {info.temp}&deg;C</p>
//           <p>Humidity = {info.humidity}</p>
//           <p>Min Temp = {info.tempMin}&deg;C</p>
//           <p>Max Temp = {info.tempMax}&deg;C</p>
//           <p>The weather can be described as <i><b>{info.weather}</b></i> and feels like = {info.feelsLike}&deg;C</p>

//         </Typography>
//       </CardContent>
//     </Card>
//     </div>
//         </div>
//     );
// }

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1577298672248-aa9979541592?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1743738049563-520b88442d04?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fEhPVCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const COLD_URL =
    "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const ULTRACOLD_URL =
    "https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q09MRCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

  const RAIN_URL =
    "https://images.unsplash.com/photo-1737472794232-4c8be24ba535?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  let imageUrl = INIT_URL;

  // Logic: First check temperature, then humidity
  if (info.temp < 8) {
    imageUrl = ULTRACOLD_URL;
  } else if (info.temp < 15 && info.humidity > 80) {
    imageUrl = RAIN_URL;
  }
  else if (info.temp <= 15) {
    imageUrl = COLD_URL;
  } else if (info.humidity > 80) {
    imageUrl = RAIN_URL;
  } else {
    imageUrl = HOT_URL;
  }

  return (
    <div className="InfoBox">
      <h1 className='InfoBoxText'>Weather Info - {info.weather}</h1>
      <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={imageUrl}
            title="Weather"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {""}
              {info.temp < 8
              ? <AcUnitIcon />
              : info.temp <= 15
                ? <AcUnitIcon />
                : info.humidity > 80
                  ? <ThunderstormIcon />
                  : <SunnyIcon />
          }        
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i><b>{info.weather}</b></i><br />
                and feels like = {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
