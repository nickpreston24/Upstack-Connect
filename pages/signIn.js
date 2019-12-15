import Link from 'next/link'
import axios from 'axios'

const SignIn = () => {

    function signUp() {

        const query = 'api/register'

        const signInData = {
            email: "michael.n.preston@gmail.com",
            password: "daef4953b9783365cad6615223720506cc46c5167cd16ab500fa597aa08ff964eb24fb19687f34d7665f778fcb6c5358fc0a5b81e1662cf90f73a2671c53f991",
        }

        console.log(`Signing in user ${signInData.email}`)

        axios.post(query, signInData)
            .then(response => console.log(response))
            .catch(console.error)
    }

    return (
        <div>
            {/* Standins for fancier forms */}
            <h2>Sign In Here</h2>
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

export default SignIn