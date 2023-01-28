import { FaLemon } from 'react-icons/fa';
import { GiChiliPepper, GiWaterDrop, GiWrappedSweet, GiBroccoli } from 'react-icons/gi';

export const typeFlavors = {
    spicy: {
      color: '#F0200B',
      name: 'Spicy',
      icon: <GiChiliPepper />
    },
    dry: {
      color: '#0D93D6',
      name: 'Dry',
      icon: <GiWaterDrop />,
    },
    sweet: {
      color: '#FF84DA',
      name: 'Sweet',
      icon: <GiWrappedSweet />
    },
    bitter: {
      color: '#43D24C',
      name: 'Bitter',
      icon: <GiBroccoli />
    },
    sour: {
      color: '#DFD20B',
      name: 'Sour',
      icon: <FaLemon />
    }
  };