import Navigation from "../components/Navigation"
import ProfileCard from "../components/ProfileCard"
import SongCard from "../components/SongCard"

function Profile() {

    const songCards = [];

    for (let i = 1; i <= 10; i++) {
        songCards.push(<SongCard key={i} index={i}></SongCard>);
    }

    return (
        <div className="w-full flex flex-col items-center p-4 pt-0">
            <Navigation page="profile"></Navigation>
            <ProfileCard tab="userProfile"></ProfileCard>
            <div className="w-[90vw] sm:max-w-[38rem]">
                <div className="w-fit border-b-2 border-black font-bold">
                    Top Tracks
                </div>
                <div>
                    {songCards}
                </div>
            </div>
        </div>
    )
}
  
export default Profile