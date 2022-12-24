import React from 'react'
import './WidgetSm.css'
import { Visibility } from '@mui/icons-material'
const WidgetSm = () => {
  return (
    <div className='WidgetSm'>
      <span className='WidgetSmTitle'>New Join Member</span>
      <ul className='WidgetSmList'>
        <li className='WidgetSmItem'>
          <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='' className='WidgetSmImg' />
          <div className='WidgetSmUser'>
            <span className='WidgetSmUsername'>Anna</span>
            <span className='WidgetSmUsertitle'>Software Eng</span>
          </div>
          <button className='WidgetSmbtn'>
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className='WidgetSmItem'>
          <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='' className='WidgetSmImg' />
          <div className='WidgetSmUser'>
            <span className='WidgetSmUsername'>Anna</span>
            <span className='WidgetSmUsertitle'>Software Eng</span>
          </div>
          <button className='WidgetSmbtn'>
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className='WidgetSmItem'>
          <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='' className='WidgetSmImg' />
          <div className='WidgetSmUser'>
            <span className='WidgetSmUsername'>Anna</span>
            <span className='WidgetSmUsertitle'>Software Eng</span>
          </div>
          <button className='WidgetSmbtn'>
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className='WidgetSmItem'>
          <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='' className='WidgetSmImg' />
          <div className='WidgetSmUser'>
            <span className='WidgetSmUsername'>Anna</span>
            <span className='WidgetSmUsertitle'>Software Eng</span>
          </div>
          <button className='WidgetSmbtn'>
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
        <li className='WidgetSmItem'>
          <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='' className='WidgetSmImg' />
          <div className='WidgetSmUser'>
            <span className='WidgetSmUsername'>Anna</span>
            <span className='WidgetSmUsertitle'>Software Eng</span>
          </div>
          <button className='WidgetSmbtn'>
            <Visibility className='widgetSmIcon'/>
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm