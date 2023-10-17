import './home.scss'
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/ChartBox";
import { chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion } from "../../data";

const Home = () => {
    return (
        <div className="home">
            <div className="box box1"><TopBox/></div>
            <div className="box box2">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="box box3">
                <ChartBox {...chartBoxProduct } />
            </div>
            <div className="box box4">
                <ChartBox {...chartBoxRevenue }/>
            </div>
            <div className="box box5">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="box box6">Box6</div>
            <div className="box box7">Box7</div>
            <div className="box box8">Box8</div>
            <div className="box box9">Box9</div>
            <div className="box box10">Box10</div>
        </div>
    )
}

export default Home