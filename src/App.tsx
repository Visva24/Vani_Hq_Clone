// import Button from "./Button";
import Navbar from "./Navbar";


const App = () => {
  return (
    <>
       <div className="relative   ">
        <img className="absolute z-10 top-44 right-24 h-10" src="./Images/vi_sparkle.svg" alt="" />
        <img className="absolute z-10 top-96 left-24 h-10" src="./Images/vi_sparkle.svg" alt="" />
       <Navbar/>
       <div className="flex flex-col justify-center px-16 items-center">
       <h1 className="text-[60px] mt-20  flex flex-col justify-center items-center">Where teams create,<span className="text-transparent bg-clip-text bg-instagram-gradient" >meet, and work together</span></h1>
       <div className="mt-14 mb-12 mx-20 px-32 text-zinc-500 flex flex-col justify-center items-center ">
         Vani is the easiest way for your team to collaborate on an infinite
         canvas. Teammates <span>can express themselves, build on ideas, and get stuff
         done-all while hanging out together</span><span>over a video Catchup.</span>
       </div>
       <div>
         <button className="px-14 rounded-full py-3 border bg-instagram-gradient text-white hover:bg-bluevoilet transition-all duration-300 ease-linear flex justify-center">Sign up for free</button>
       </div>
       <div className="flex justify-center py-24  mb-14">
        <video className="w-[840px] rounded-lg shadow-2xl" autoPlay loop muted playsInline> <source src="./Videos/vi_thumbnail_video.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
       </div>
       </div> 
       <div className="bg-gray-100 h-[1000px]">
       <div className="flex flex-col justify-center items-center bg-back w-[100%]  pt-24  pb-16">
        <h1 className="text-[50px] flex justify-center  mb-8">Meet.Work. <span className="text-transparent bg-clip-text bg-instagram-gradient">Catchup!</span> </h1>
        <p className="flex flex-col justify-center items-center mb-10  text-zinc-500 ">Catchups bring your team as close as they can get to creating together in person. Everybody can see each other, talk,<span> create, and meet without losing context or having to switch screens.</span></p>
        <button className="border  border-gray-800 p-14 py-3 rounded-full hover:text-blue-700 ">Learn more</button>
        <img src="./Images/one.web" alt="" className="h-4 absolute right-[560px] " />
       </div>
       <div className=" relative w-[100%]  ">
        <img src="./Images/two.webp" alt="" className=" h-24 absolute left-52 "/>
        <img src="./Images/topic.webp" alt="" className="h-56 absolute right-36 top-10"/>
        <img src="./Images/four.webp" alt="" className="h-36 absolute left-[450px] top-[140px] "/>
        <img src="./Images/three.webp" alt="" className="h-36 absolute top-[350px] right-[450px]"/>
        <img src="./Images/zena.svg" alt="" className="anime absolute top-[390px] left-[470px] z-10 " />
        <img src="./Images/nadia.svg" alt="" className="anime absolute right-60 top-16 z-100 " />
        <img src="./Images/josh.svg" alt="" className=" anime absolute top-8 left-[370px] z-100 " />
        <video className="h-24 absolute top-[360px] left-[325px]" autoPlay loop muted playsInline><source src="./Videos/vi.mp4" type="video/mp4"/>Your browser does not support the video tag.</video>
        <video className="absolute h-28 left-[210px] top-[160px]" autoPlay loop muted playsInline ><source src="./Videos/allie.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
        <video className="absolute h-28 left-[730px] top-[120px]" autoPlay loop muted playsInline ><source src="./Videos/jenny.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
        <video className="absolute h-28 right-[200px] top-[400px]" autoPlay loop muted playsInline ><source src="./Videos/jhon.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
       </div>
       </div>
       <div className="flex flex-col justify-center items-center mt-20 mx-32 py-10">
        <h1 className="text-[40px] mb-5">Work should feel like <span className="text-transparent bg-clip-text bg-instagram-gradient"> play.</span></h1>
        <h1 className="text-[30px] mb-3">Play shouldn't feel like work.</h1>
        <p className=" flex flex-col justify-center items-center text-sm  text-zinc-500">Replace back-to-back Slack messages, flooded email inboxes, boring Zoom meets, and daily standups with an infinite <span>canvas where everybody can express themselves freely.</span> </p>
       </div>
       </div>
       
    </>
   
  );
};

export default App;
