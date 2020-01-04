import Link from 'next/link';
import axios from 'axios';
import sha1 from 'sha1'

const Profile = (props) => {

    function signUp() {

        const query = 'api/register'
        const password = sha1("demoday2019")
        console.log('Sha1 password: ', password);

        const postData = {
            "first_name": "Michael",
            "last_name": "Preston",
            phone: "+359884909301",
            email: "michael.n.preston@gmail.com",
            password: password,
            address: "105 Bleecker Street",
            city: "Brooklyn",
            "pic_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTw3dxAr-998XQnx4i8BeI2Gk3AUo2U-Wu7MO3nPTqIFIB2btxL",
            location: {
                lat: 44.4268,
                lng: 25.10
            },
            paragraph: "Perferendis aut sit voluptatem consequatur accusantium. Accusantium sit perferendis consequatur voluptatem aut. Voluptatem accusantium consequatur sit aut perferendis.",
            offers: "good company & much more",
            country: "USA"
        }

        console.log(`Registering user ${postData["first_name"]}`)

        axios.post(query, postData)
            .then(response => console.log(response))
            .catch(console.error)
    }

    return (
        <div>
            {/* Standins for fancier forms */}
            <h2>Register Here</h2>
            <label>UserName</label> <br />
            <input></input><br />
            <label>Password</label> <br />
            <input></input><br />

            <button type='submit' onClick={signUp}>Register</button><br />
            <Link href="/">
                <a>Go Home</a>
            </Link>

        </div>
    )
}


export default Profile


