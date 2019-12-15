import React from 'react'
import Layout from './layout'

const style = {
    h1: { color: 555 },
    p: { color: 555 },
    i: { color: 555 }
}

const Index = () => {

    const msg = 'Nothing here yet...'
    const { h1, p, i } = style;

    return (
        <Layout>
            <h1 style={h1}>Hello & Welcome to Upstack Connect!</h1>
            <p style={p}>Some data:</p>
            <i style={i}>{`${msg}`}</i>
        </Layout>
    )
}

export default Index;