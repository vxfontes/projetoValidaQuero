import { BiCategoryAlt, BiLogOutCircle } from 'react-icons/bi'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { TbCpu } from 'react-icons/tb'
import { FaUsers } from 'react-icons/fa'

export const MainSide = [
    {
        nome: 'Início',
        link: '/home',
        icone: <BiCategoryAlt size={20} />
    },
    {
        nome: 'ValidaQuero',
        link: '/',
        icone: <AiOutlineArrowLeft size={20} />
    },
]

export const MainSideAdm = [
    {
        nome: 'Dashboard',
        link: '/Dashboard',
        icone: <TbCpu size={20} />
    },
    {
        nome: 'Users',
        link: '/Users',
        icone: <FaUsers size={20} />
    },
]

export const MainSideNewUser = [
    {
        nome: 'Sair',
        link: '/login',
        icone: <BiLogOutCircle size={20} />
    },
]