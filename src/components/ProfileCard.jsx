import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import { BiSolidLike } from 'react-icons/bi';
import { BiSolidPencil } from 'react-icons/bi';

function Socials() {
    return (
        <div className='flex flex-wrap gap-2'>
            <a href="" className='flex items-center gap-1 p-1 border-2 border-black bg-button-green hover:bg-button-green-dark rounded-lg break-all'>
                <div>
                   <FaInstagram className='text-white  bg-black p-1 text-2xl rounded-lg block'/> 
                </div>
                <p>
                    insta_id
                </p>
            </a>
            <a href="" className='flex items-center gap-1 p-1 border-2 border-black bg-button-green hover:bg-button-green-dark rounded-lg'>
                <div>
                   <FaXTwitter className='text-white  bg-black p-1 text-2xl rounded-lg block'/> 
                </div>
                <p>
                    twitter_id
                </p>
            </a>
        </div>
    )
}

function Reactions() {
    return (
        <div className='flex gap-32 md:gap-44 absolute -bottom-5'>
            <button><AiOutlineClose className='text-white hover:text-cross-red bg-black text-4xl p-1 rounded-full'/></button>
            <button><BiSolidLike className='text-white hover:text-like-blue bg-black text-4xl p-1 rounded-full'/></button>
        </div>
    )
}
function EditButton() {
    return (
        <div className='flex gap-32 md:gap-44 absolute -bottom-4 right-5'>
            <Link to="/edit-profile"><BiSolidPencil className='text-white hover:text-nav-yellow bg-black text-3xl p-1 rounded-full'/></Link>
        </div>
    )
}


function ProfileCard({tab="userProfile"}) {

  let socials = false, reactions = false, editButton = false, cardBg = "bg-card-yellow", cardPb = "pb-7";

  if (tab === "userProfile") {
    socials = true;
    editButton = true;
    cardBg = "bg-gradient-to-r from-card-grad-l to-card-grad-r";
  } else if (tab === "search" || tab === "review") {
    reactions = true;
  } else if (tab === "connect") {
    socials = true;
    cardPb = "pb-2";
  }

  return (
    <div className={`flex flex-wrap justify-center gap-2 p-2 w-[90vw] sm:max-w-[38rem] mb-6 ${cardPb} ${cardBg} border-4 border-black rounded-xl relative`}>
        <div className="flex justify-center items-center w-full sm:w-fit">
            <img alt="profile pic" src="./assets/avatar (1).png" className='w-28 h-28 border-4 border-black rounded-full'/>
        </div>
        <div className="flex flex-col flex-grow items-center sm:items-start gap-2">
            <h1 className='font-bold'>Tom Holland | 72%</h1>
            <p className='w-full bg-white p-1 rounded-lg'>
                🌟 Exploring Life&apos;s Beauty, One Adventure at a Time 🌍✈️ <br />
                📸 Capturing Moments | 🌄 Nature Lover | 🎵 Music Enthusiast <br />
                📚 Learning, Growing, & Inspiring Along the Way 🌱✨ <br />
                📍 India<br />
            </p>
            {
                socials===true && <Socials />
            }
        </div>
        {
            reactions===true && <Reactions />
        }
        {
            editButton===true && <EditButton />
        }
    </div>
  )
}

export default ProfileCard;
