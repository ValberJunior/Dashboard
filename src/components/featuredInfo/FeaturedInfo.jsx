import React from 'react'
import { Featured, FeaturedItem, FeaturedMoney, FeaturedMoneyContainer, FeaturedMoneyRate, FeaturedTitle } from './styles'
import { ArrowDownward } from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <Featured>
        
        <FeaturedItem>

          <FeaturedTitle>Revanue</FeaturedTitle>

          <h1>37:58</h1>

          <FeaturedMoneyContainer>
              <FeaturedMoney>$ 2,415</FeaturedMoney>
              <FeaturedMoneyRate>
                -11,4  <ArrowDownward/>
              </FeaturedMoneyRate>
          </FeaturedMoneyContainer>

        </FeaturedItem>
        
    </Featured>
  )
}
