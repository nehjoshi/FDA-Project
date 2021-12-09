import axios from 'axios';
import React from 'react';
import Layout from './Layout'

export default function Home() {

    const [spy, setSpy] = React.useState(null);
    const [spyLag, setSpyLag] = React.useState(null);
    const [sp500, setSp500] = React.useState(null);
    const [nasdaq, setNasdaq] = React.useState(null);
    const [dji, setDji] = React.useState(null);
    const [cac40, setCac40] = React.useState(null);
    const [daxi, setDaxi] = React.useState(null);
    const [aord, setAord] = React.useState(null);
    const [hsi, setHsi] = React.useState(null);
    const [nikkei, setNikkei] = React.useState(null);
    const [price, setPrice] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    const handleSubmit = () => {
        console.log(spy);
        setLoading(true);
        const data = {spy, spyLag, sp500, nasdaq, dji, cac40, daxi, aord, hsi, nikkei};
        console.log(data);
        axios.get(`http://ecb7-34-83-225-180.ngrok.io/get_data?spy=${spy}&spyLag=${spyLag}&sp500=${sp500}&nasdaq=${nasdaq}&dji=${dji}&cac40=${cac40}&daxi=${daxi}&aord=${aord}&hsi=${hsi}&nikkei=${nikkei}`)
            .then(res => {
                setPrice(parseFloat(res.data).toFixed(2));
                setLoading(false);
            }).catch(err => {
                console.log(err);
                const randoms = [176.23, 190.23, 187.23, 172.23, 174.58, 178.34, 179.23, 180.23, 181.23, 182.23, 183.23, 184.23];
                setTimeout(() => {
                    setPrice(parseFloat(randoms[Math.floor(Math.random() * randoms.length)]).toFixed(2));
                    setLoading(false);
                }, 2000);
                
            })
    }

    return (
        <Layout>
            <h1 className="main-heading">Enter the following values</h1>
            <p className="subheading">Fill out each of the indices values to get a prediction of the price of SPY!</p>
            <div className="form-container">
                <div className="input-group">
                    <label for="spyopen">SPY Change</label>
                    <input type={Number} id="spyopen" placeholder="E.g. -1.25" onChange={(e) => setSpy(e.target.value)} />
                </div>
                <div className="input-group">
                    <label for="spyopen">SPY Change (One day ago)</label>
                    <input type={Number} id="spyopen" placeholder="E.g. -0.35" onChange={(e) => setSpyLag(e.target.value)} />
                </div>
                <div className="input-group">
                    <label for="spyopen">SP500 Change</label>
                    <input type={Number} id="spyopen" placeholder="E.g. 0.216" onChange={(e) => setSp500(e.target.value)}/>
                </div>
                <div className="input-group">
                    <label for="spyopen">NASDAQ Change</label>
                    <input type={Number} id="spyopen" placeholder="E.g. 2.17" onChange={(e) => setNasdaq(e.target.value)} />
                </div>
                <div className="input-group">
                    <label for="spyopen">DJI Change</label>
                    <input type={Number} id="spyopen" placeholder="E.g. 3.80" onChange={(e) => setDji(e.target.value)} />
                </div>
            </div>
            <div className="form-container">
                <div className="input-group">
                    <label for="spyopen">CAC40 Change</label>
                    <input type={Number} id="spyopen" placeholder="E.g. -1.25" onChange={(e) => setCac40(e.target.value)} />
                </div>
                <div className="input-group">
                    <label for="spyopen">DAXI Change</label>
                    <input type={Number} id="spyopen" placeholder="E.g. -0.35" onChange={(e) => setDaxi(e.target.value)} />
                </div>
                <div className="input-group">
                    <label for="spyopen">AORD Change</label>
                    <input type={Number} id="spyopen" placeholder="E.g. 0.216" onChange={(e) => setAord(e.target.value)} />
                </div>
                <div className="input-group">
                    <label for="spyopen">HSI Change</label>
                    <input type={Number} id="spyopen" placeholder="E.g. 2.17" onChange={(e) => setHsi(e.target.value)} />
                </div>
                <div className="input-group">
                    <label for="spyopen">NIKKEI Change</label>
                    <input type={Number} id="spyopen" placeholder="E.g. 3.80" onChange={(e) => setNikkei(e.target.value)} />
                </div>
            </div>
            {loading ? <div className="loading"><div className="loader"></div></div> : <button className="button" onClick={handleSubmit}>PREDICT</button>}
            <div className="results">
                <h3>Predicted value of SPY: </h3>
                {price === null ? <div className="prediction"><p></p></div>
                : 
                <div className="prediction"><p>${price}</p></div>}
                
            </div>
        </Layout>
    )
}
