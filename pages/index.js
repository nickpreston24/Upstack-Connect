import react from 'react'

const Index = () => {

    const data = await fetch('https://api.to.wtf/ping');
    console.log(data);

    return (
        <div>
            <h1>Hello & Welcome to Upstack Connect!</h1>
        </div>
    )
}

export default Index;