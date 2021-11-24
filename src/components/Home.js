import axios from 'axios';
import React, { useEffect } from 'react';
import Layout from './Layout'

export default function Home() {

    useEffect(() => {
        axios.get('http://bef0-35-226-109-127.ngrok.io/')
            .then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            }
            )
    }, [])

    return (
        <Layout>

        </Layout>
    )
}
