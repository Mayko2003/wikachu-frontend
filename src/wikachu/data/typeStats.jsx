import { AiOutlineHeart } from 'react-icons/ai';
import { FaFistRaised, FaShieldAlt, FaCrosshairs } from 'react-icons/fa';
import { GiGooeyImpact, GiRunningNinja } from 'react-icons/gi';
import { RiShieldFlashFill } from 'react-icons/ri';
import { MdSpeed } from 'react-icons/md';

export const typeStats = {
  hp: {
    color: '#F0200B',
    name: 'HP',
    icon: <AiOutlineHeart />
  },
  attack: {
    color: '#E06A18',
    name: 'Attack',
    icon: <FaFistRaised />,
  },
  defense: {
    color: '#f2bf0d',
    name: 'Defense',
    icon: <FaShieldAlt />
  },
  'special-attack': {
    color: '#092DCF',
    name: 'Special Attack',
    icon: <GiGooeyImpact />
  },
  'special-defense': {
    color: '#33BD0E',
    name: 'Special Defense',
    icon: <RiShieldFlashFill />
  },
  speed: {
    color: '#7310C0',
    name: 'Speed',
    icon: <MdSpeed />
  },
  accuracy: {
    color: 'pink',
    name: 'Accuracy',
    icon: <FaCrosshairs/>
  },
  evasion: {
    color: 'grey',
    name: 'Evasion',
    icon: <GiRunningNinja />
  }
};
