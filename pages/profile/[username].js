// make an array for user name the parms file
// this is the profile component
// there is a hook that comes with next js for the import for the router, import the use user router hook
// we can destucture whatever variables we put in at the top
// can be use for ids
import { useRouter } from "next/router";
const Profile = () => {
    const router = useRouter()
    const { username} = router.query;
    return <div>Hello {username}! </div>
}

export default Profile;