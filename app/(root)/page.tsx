
import ThreadCard from "@/components/cards/ThreadCard";
import { fetchPosts } from "@/lib/actions/thread.actions";
import { currentUser } from "@clerk/nextjs";

 

export default async function Home() {

  const result = await fetchPosts(1, 30);
  const user = await currentUser();
  const environmentalPosts = [
    {
      _id: 1,
      id: "post1",
      currentUserId: "user123",
      parentId: null,
      text: "🌳🌍 Currently planting trees in Central Park!\n\nIf you're nearby, swing by and help us make the park greener. Let's do this together! 🌿🤝 #TreePlanting #CentralPark",
      author:
        {
          name:(await getRandomUserWithPicture()).name,
          image:(await getRandomUserWithPicture()).picture,
          id:"",
        },
      community: 
        {
          name:"Environmentalists",
          image:"",
          id:"",
        },
      createdAt: "2023-09-12T10:00:00Z",
      children: [],
    },
    {
      _id: 2,
      id: "post2",
      currentUserId: "user456",
      parentId: null,
      text: "🚴‍♂️🏙️ About to bike to work through downtown!\n\nJoin me at the corner of 4th and Elm if you're up for an eco-commute challenge! 🚴‍♀️💚 #BikeToWork #EcoCommute",
      author:
      {
        name:(await getRandomUserWithPicture()).name,
        image:(await getRandomUserWithPicture()).picture,
        id:"",
      },
    community: 
      {
        name:"SustainableLiving",
        image:"",
        id:"",
      },
      createdAt: "2023-09-12T11:30:00Z",
      children: [],
    },
    {
      _id: 3,
      id: "post3",
      currentUserId: "user789",
      parentId: null,
      text: "🌞🏠 Installing solar panels on my rooftop today.\n\nWant to learn more about solar energy? Come over, and we can chat while we work! ☀️💬 #SolarPower #DIY",
      author:
      {
        name:(await getRandomUserWithPicture()).name,
        image:(await getRandomUserWithPicture()).picture,
        id:"",
      },
    community: 
      {
        name:"RenewableEnergy",
        image:"",
        id:"",
      },
      createdAt: "2023-09-12T12:45:00Z",
      children: [],
    },
    {
      _id: 4,
      id: "post4",
      currentUserId: "user123",
      parentId: null,
      text: "♻️🏡 Hosting a recycling drive in my driveway right now.\n\nBring your recyclables, and let's make a positive impact on our community! 🔄🌍 #RecyclingDrive #JoinIn",
      author:
      {
        name:(await getRandomUserWithPicture()).name,
          image:(await getRandomUserWithPicture()).picture,
        id:"",
      },
    community: 
      {
        name:"RecyclingHeroes",
        image:"",
        id:"",
      },
      createdAt: "2023-09-12T14:15:00Z",
      children: [],
    },
    {
      _id: 5,
      id: "post5",
      currentUserId: "user456",
      parentId: null,
      text: "🌊🏖️ Cleaning up Ocean Beach this afternoon.\n\nGrab a bucket and join me at the pier. Together, we'll leave no trace! 🏄‍♂️🌊 #BeachCleanup #OceanHeroes",
      author:
      {
        name:(await getRandomUserWithPicture()).name,
        image:(await getRandomUserWithPicture()).picture,
        id:"",
      },
    community: 
      {
        name:"BeachLovers",
        image:"",
        id:"",
      },
      createdAt: "2023-09-12T15:30:00Z",
      children: [],
    },
    {
      _id: 6,
      id: "post6",
      currentUserId: "user789",
      parentId: null,
      text: "🌸🌱 Planting native wildflowers in the city park at 3 PM.\n\nSwing by with a shovel, and let's make our city more beautiful and pollinator-friendly! 🌻🐝 #WildflowerPlanting #CityPark",
      author:
      {
        name:(await getRandomUserWithPicture()).name,
        image:(await getRandomUserWithPicture()).picture,
        id:"",
      },
    community: 
      {
        name:"UrbanGardeners",
        image:"",
        id:"",
      },
      createdAt: "2023-09-12T16:45:00Z",
      children: [],
    },
    {
      _id: 7,
      id: "post7",
      currentUserId: "user123",
      parentId: null,
      text: "🌎🏠 Building a rain garden in my backyard right now.\n\nIf you're curious about sustainable landscaping, come over and get your hands dirty! 🌧️🏡 #RainGarden #SustainableLiving",
      author:
      {
        name:(await getRandomUserWithPicture()).name,
          image:(await getRandomUserWithPicture()).picture,
        id:"",
      },
    community: 
      {
        name:"FarmToTable",
        image:"",
        id:"",
      },
      createdAt: "2023-09-12T18:00:00Z",
      children: [],
    },
    {
      _id: 8,
      id: "post8",
      currentUserId: "user456",
      parentId: null,
      text: "🚮🌆 Starting a neighborhood cleanup at 2 PM near the community center.\n\nGrab a trash bag, and let's keep our streets spotless! 🏡♻️ #CommunityCleanup #CleanStreets",
      author:
      {
        name:(await getRandomUserWithPicture()).name,
          image:(await getRandomUserWithPicture()).picture,
        id:"",
      },
    community: 
      {
        name:"GreenLiving",
        image:"",
        id:"",
      },
      createdAt: "2023-09-12T19:30:00Z",
      children: [],
    },
    {
      _id: 9,
      id: "post9",
      currentUserId: "user789",
      parentId: null,
      text: "🍏🛒 Heading to the farmers' market on Main Street in an hour.\n\nJoin me, and let's support local farmers and eat fresh! 🥦🥕 #FarmersMarket #LocalProduce",
      author:
      {
        name:(await getRandomUserWithPicture()).name,
        image:(await getRandomUserWithPicture()).picture,
        id:"",
      },
    community: 
      {
        name:"GreenLiving",
        image:"",
        id:"",
      },
      createdAt: "2023-09-12T21:00:00Z",
      children: [],
    },
    {
      _id: 10,
      id: "post10",
      currentUserId: "user123",
      parentId: null,
      text: "🌿🌇 Organizing a rooftop herb garden session at my apartment complex at 5 PM.\n\nCome up, and we can share tips on urban gardening! 🏢🌱 #HerbGarden #UrbanGardening",
      author:
      {
        name:(await getRandomUserWithPicture()).name,
          image:(await getRandomUserWithPicture()).picture,
        id:"",
      },
    community: 
      {
        name:"GreenLiving",
        image:"",
        id:"",
      },
      createdAt: "2023-09-12T22:15:00Z",
      children: [],
    },
  ];

  return (
    <div className="max-w-4xl m-auto">
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
           
          {result.posts.map((post) => (
            <ThreadCard
              key={post._id}
              id={post.id}
              currentUserId={user?.id || ""}
              parentId={post.parentId}
              content={post.text}
              author={post.author}
              community={post.community}
              createdAt={post.createdAt}
              comments={post.children}
            />
          ))}
          </>
        )}
      </section>
    </div>
  )
}

async function getRandomUserWithPicture() {
  try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
    
      return {
        name: `${data.results[0].name.first} ${data.results[0].name.last}`,
        picture: data.results[0].picture.large,
      };
    }
   catch (error) {
    console.error('Error fetching random users:', error);
    throw error;
  }
}
