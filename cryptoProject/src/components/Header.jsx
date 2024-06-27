import React from 'react'
import { Link } from 'react-router-dom'
import { Button, HStack } from '@chakra-ui/react'

const Header = () => {
  return (
    <HStack p={4} shadow={'base'} bgColor={'black'}>
      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/'} >Home</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/coins'} >Coin</Link>
      </Button>
      <Button variant={'unstyled'} color={'white'}>
        <Link to={'/Exchange'} >Exchanges</Link>
      </Button>
    </HStack>
    
  )
}

export default Header