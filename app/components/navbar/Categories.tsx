'use client'

import Container from "../Container"

import { TbBeach, TbMountain, TbPool } from 'react-icons/tb'
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from 'react-icons/gi'
import { MdOutlineVilla } from 'react-icons/md'
import { usePathname, useSearchParams } from "next/navigation"

import CategoryBox from "./CategoryBox"
import { FaSkiing } from "react-icons/fa"
import { BsSnow } from "react-icons/bs"
import { IoDiamond } from "react-icons/io5"

export const categories = [
  {
    label: "Beach",
    description: "This property is close to the beach!",
    icon: TbBeach,
  },
  {
    label: "Windmills",
    description: "This property has windmills!",
    icon: GiWindmill,
  },
  {
    label: "Modern",
    description: "This property is modern!",
    icon: MdOutlineVilla,
  },
  {
    label: "Countryside",
    description: "This property is in the countryside!",
    icon: TbMountain,
  },
  {
    label: "Pools",
    description: "This property has a pool!",
    icon: TbPool,
  },
  {
    label: "Islands",
    description: "This property is on an island!",
    icon: GiIsland,
  },
  {
    label: "Lake",
    description: "This property is close to a lake!",
    icon: GiBoatFishing,
  },
  {
    label: "Skiing",
    description: "This property has skiing activities!",
    icon: FaSkiing,
  },
  {
    label: "Castles",
    description: "This property is in a castle!",
    icon: GiCastle,
  },
  {
    label: "Camping",
    description: "This property has camping activities!",
    icon: GiForestCamp,
  },
  {
    label: "Arctic",
    description: "This property is on the artic!",
    icon: BsSnow,
  },
  {
    label: "Cave",
    description: "This property is in a cave!",
    icon: GiCaveEntrance,
  },
  {
    label: "Desert",
    description: "This property is in the desert!",
    icon: GiCactus,
  },
  {
    label: "Barns",
    description: "This property is in the barn!",
    icon: GiBarn,
  },
  {
    label: "Lux",
    description: "This property is luxurious!",
    icon: IoDiamond,
  },
];

const Categories = () => {
  const params = useSearchParams()
  const category = params?.get('category')
  const pathname = usePathname()
  const isMainPage = pathname === '/'

  if(!isMainPage){
    return null
  }

  return (
    <Container>
      <div 
        className="
          pt-4
          flex 
          flex-row
          items-center 
          justify-between 
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon}
          />    
        ))}
      </div>
    </Container>
  )
}

export default Categories