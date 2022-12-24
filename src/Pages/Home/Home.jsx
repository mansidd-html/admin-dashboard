import React from 'react'
import Chart from '../../Component/Chart/Chart';
import FeaturedInfo from '../../Component/FeaturedInfo/FeaturedInfo';
import './Home.css';
import { userData } from '../../Dummydata.js';
import WidgetSm from '../../Component/WigetSm/WidgetSm';
import WidgetLG from '../../Component/WigetLG/WidgetLG'
const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className='homeWidgets'>
        <WidgetSm />
        <WidgetLG />
      </div>
    </div>
  )
}

export default Home