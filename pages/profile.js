import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

const Profile = (props) => {

    // <MyContext.Consumer>

    //     {(context) => {
    //         const entries = Object.values(context);
    //         console.log(context, entries)

    return (
        <div>
            <Link href="/">
                <a>Go Home</a>
            </Link>
            {/* <h1>Batman TV Shows</h1> */}
            <ul>
                {/* {props.shows.map(show => (
                    <li key={show.id}>
                        <Link href="/p/[id]" as={`/p/${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))} */}
            </ul>

            <p>
                Aliquip eu eiusmod ex incididunt exercitation aliquip laborum. Consectetur veniam non Lorem aliquip. Officia fugiat exercitation nulla sit ullamco ut exercitation duis. Mollit magna laborum occaecat dolor labore laborum do nisi laboris ea aliquip.

                Mollit cillum nisi duis excepteur sunt cillum adipisicing minim. Do cillum cupidatat esse veniam commodo sit sit. Nisi Lorem adipisicing aliqua amet laboris voluptate exercitation ullamco sint qui quis nostrud ex occaecat.

                Tempor ad quis mollit magna. Voluptate commodo non amet laboris ullamco eu elit deserunt esse sit. Ea laborum duis reprehenderit minim cupidatat aliquip voluptate commodo nostrud aliqua aliqua incididunt cupidatat. Proident ut non labore exercitation nulla. Ea aliqua minim pariatur reprehenderit voluptate in.

                Et dolor do consectetur duis sunt sit dolor nulla nulla in. Adipisicing minim officia voluptate nisi reprehenderit ad ullamco incididunt do labore cillum ad. Minim nisi consectetur pariatur aliquip labore esse duis ut ex amet ea voluptate excepteur. Adipisicing anim consectetur consequat ex commodo adipisicing sunt exercitation quis aliqua proident labore aute eu. Ut Lorem aute ea fugiat consequat qui laboris pariatur consequat. Tempor nisi magna deserunt quis eiusmod fugiat irure reprehenderit exercitation commodo.
                    </p>
        </div>
    )

    // }}

    // </MyContext.Consumer>

}

Profile.getInitialProps = async function () {
    const query = 'https://api.to.wtf/api/users'

    const res = await fetch(query);
    const data = await res.json();

    console.log("query", query, 'result: ', data);

    // const resX = await axios.get("GET", { query })
    //     .then(r => console.log('result:', r))
    //     .catch(console.error)

    // const data = await res.value//.json();
    // console.log('data: ', data);

    // console.log(`Show data fetched. Count: ${data.length}`);

    return {
        profile: { data }
    }
    // return {
    //     shows: data.map(entry => entry.show)
    // };
};

export default Profile