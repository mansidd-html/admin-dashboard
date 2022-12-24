import React from 'react'
import './WidgetLG.css'
const WidgetLG = () => {
  const Button = ({ type }) => {
    return <button className={'WidgetLGbtn ' + type}>{type}</button>
  }
  return (
    <div className='WidgetLG'>
      <h3 className='WidgetLGTitle'>Latest Transactions</h3>
      <table className='WidgetLGTable'>
        <tr className='WidgetLGTr'>
          <th className='WidgetLGTh'>Customer</th>
          <th className='WidgetLGTh'>Date</th>
          <th className='WidgetLGTh'>Amount</th>
          <th className='WidgetLGTh'>Status</th>
        </tr>
        <tr className='WidgetLGTr'>
          <td className='WidgetLGUser'>
            <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='' className='WidgetLGImg'></img>
            <span className='WidgetLGName'>Susan Carol</span>
          </td>
          <td className='WidgetLGDate'>22 Aug 2022</td>
          <td className='WidgetLGAmount'>$400</td>
          <td className='WidgetLGStatus'><Button type='Approved'/></td>
        </tr>
        <tr className='WidgetLGTr'>
          <td className='WidgetLGUser'>
            <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='' className='WidgetLGImg'></img>
            <span className='WidgetLGName'>Susan Carol</span>
          </td>
          <td className='WidgetLGDate'>22 Aug 2022</td>
          <td className='WidgetLGAmount'>$400</td>
          <td className='WidgetLGStatus'><Button type='Approved'/></td>
        </tr>
        <tr className='WidgetLGTr'>
          <td className='WidgetLGUser'>
            <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='' className='WidgetLGImg'></img>
            <span className='WidgetLGName'>Susan Carol</span>
          </td>
          <td className='WidgetLGDate'>22 Aug 2022</td>
          <td className='WidgetLGAmount'>$400</td>
          <td className='WidgetLGStatus'><Button type='Declined'/></td>
        </tr>
        <tr className='WidgetLGTr'>
          <td className='WidgetLGUser'>
            <img src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg' alt='' className='WidgetLGImg'></img>
            <span className='WidgetLGName'>Susan Carol</span>
          </td>
          <td className='WidgetLGDate'>22 Aug 2022</td>
          <td className='WidgetLGAmount'>$400</td>
          <td className='WidgetLGStatus'><Button type='Pending'/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLG