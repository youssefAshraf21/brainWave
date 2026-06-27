import React from 'react'
import Section from './Section'
import { smallSphere , stars} from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import {LeftLine , RightLine} from './design/Pricing'

const Pricing = () => {
    return (
        <Section id="pricing" className="overflow-hidden">
            <div className="container relative z-2">
                <div className="hidden relative justify-center mb-26 lg:flex">
                    <img 
                    src={smallSphere}
                    className="relative z-1"
                    width={255}
                    height={255}
                    alt="small sphere"/>
                    <div className="absolute top-1/2 left-1/2 w-240 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <img src={stars} 
                        alt="stars"
                        className="w-full"
                        width={950}
                        height={400}/>
                    </div>
                </div>
                <Heading 
                tag="Get Started with Brainwave"
                title="Pay once, use forever"/>
                <div className="relative ">
                    <PricingList />
                    <LeftLine />
                    <RightLine />
                </div>
                <div className="flex justify-center mt-10">
                    <a
                        className="text-xs font-code font-bold tracking-wider uppercase transition-colors hover:text-color-1"
                        href="/pricing"
                    >
                        See the full details
                    </a>
                </div>
            </div>
        </Section>
    )
}

export default Pricing
