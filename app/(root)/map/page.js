'use client'
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';
import { MapContainer, TileLayer, CircleMarker , Tooltip} from 'react-leaflet'



function Page() {

  const environmentalGroupActivities = [
    {
      id: 1,
      content: (
        <p>
          🌳🌍 Currently planting trees in Central Park!<br/>
          If you're nearby, swing by and help us make the park greener.<br/>
          Let's do this together! 🌿🤝 #TreePlanting #CentralPark
        </p>
      ),
    },
    {
      id: 2,
      content: (
        <p>
          🚴‍♂️🏙️ About to bike to work through downtown!<br/>
          Join me at the corner of 4th and Elm if you're up for an eco-commute challenge!<br/>
          🚴‍♀️💚 #BikeToWork #EcoCommute
        </p>
      ),
    },
    {
      id: 3,
      content: (
        <p>
          🌞🏠 Installing solar panels on my rooftop today.<br/>
          Want to learn more about solar energy? Come over, and we can chat while we work!<br/>
          ☀️💬 #SolarPower #DIY
        </p>
      ),
    },
    {
      id: 4,
      content: (
        <p>
          ♻️🏡 Hosting a recycling drive in my driveway right now.<br/>
          Bring your recyclables, and let's make a positive impact on our community!<br/>
          🔄🌍 #RecyclingDrive #JoinIn
        </p>
      ),
    },
    {
      id: 5,
      content: (
        <p>
          🌊🏖️ Cleaning up Ocean Beach this afternoon.<br/>
          Grab a bucket and join me at the pier. Together, we'll leave no trace!<br/>
          🏄‍♂️🌊 #BeachCleanup #OceanHeroes
        </p>
      ),
    },
    {
      id: 6,
      content: (
        <p>
          🌸🌱 Planting native wildflowers in the city park at 3 PM.<br/>
          Swing by with a shovel, and let's make our city more beautiful and pollinator-friendly!<br/>
          🌻🐝 #WildflowerPlanting #CityPark
        </p>
      ),
    },
    {
      id: 7,
      content: (
        <p>
          🌎🏠 Building a rain garden in my backyard right now.<br/>
          If you're curious about sustainable landscaping, come over and get your hands dirty!<br/>
          🌧️🏡 #RainGarden #SustainableLiving
        </p>
      ),
    },
    {
      id: 8,
      content: (
        <p>
          🚮🌆 Starting a neighborhood cleanup at 2 PM near the community center.<br/>
          Grab a trash bag, and let's keep our streets spotless!<br/>
          🏡♻️ #CommunityCleanup #CleanStreets
        </p>
      ),
    },
    {
      id: 9,
      content: (
        <p>
          🍏🛒 Heading to the farmers' market on Main Street in an hour.<br/>
          Join me, and let's support local farmers and eat fresh!<br/>
          🥦🥕 #FarmersMarket #LocalProduce
        </p>
      ),
    },
    {
      id: 10,
      content: (
        <p>
          🌿🌇 Organizing a rooftop herb garden session at my apartment complex at 5 PM.<br/>
          Come up, and we can share tips on urban gardening!<br/>
          🏢🌱 #HerbGarden #UrbanGardening
        </p>
      ),
    },
  ];

  function getRandomActivity() {
    const randomIndex = Math.floor(Math.random() * environmentalGroupActivities.length);
    return environmentalGroupActivities[randomIndex];
  }

  function generateRandomLocationObjects(numObjects) {
    const objects = [];
  
    for (let i = 0; i < numObjects; i++) {
      const id = i + 1;
      const latitude = getRandomFloat(53.4612, 53.651557);
      const longitude = getRandomFloat(9.876065, 10.209309);
      const tooltip = environmentalGroupActivities[i].content;
  
      objects.push({ id, latitude, longitude, tooltip });
    }
  
    return objects;
  }
  
  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  const style = {
    height:'100%',
    width:'100%',
  }

  const locations = generateRandomLocationObjects(10)


    return (
      <MapContainer style={style} center={[53.545474, 9.989857]} zoom={12} scrollWheelZoom={true}>        
        <TileLayer
        attribution= '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         {locations?.map((location)=>(
           <CircleMarker  key={location.id} center={[location.latitude,location.longitude]} pathOptions={{color: 'green'}} radius={10}>
                  <Link href={'/home'}>
                    <Tooltip>
                     {location.tooltip}
                    </Tooltip>
          </Link>
                </CircleMarker >
        ))}
    </MapContainer>
    )
}

export default Page;