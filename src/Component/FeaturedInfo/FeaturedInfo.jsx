import React from 'react'
import './FeaturedInfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className='featuredItem'>
                <span className='featruedTitle'>Revenue</span>
                <div className='featuredMoneyConatiner'>
                    <span className='featuredMoney'>$2.477</span>
                    <span className='featuredMoneyRate'>-11.4
                        <ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featruedTitle'>Sales</span>
                <div className='featuredMoneyConatiner'>
                    <span className='featuredMoney'>$4.477</span>
                    <span className='featuredMoneyRate'>-1.4
                        <ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
            <div className='featuredItem'>
                <span className='featruedTitle'>Cost</span>
                <div className='featuredMoneyConatiner'>
                    <span className='featuredMoney'>$2.477</span>
                    <span className='featuredMoneyRate'>+5.4
                        <ArrowUpward className='featuredIcon'/>
                    </span>
                </div>
                <span className='featuredSub'>Compared to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo