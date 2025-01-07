import { InterfacePageFront } from "src/interfaces/page-front.interface";

const crmPagesForFront: InterfacePageFront[] = [
    {
        key: 'login',
        url: '/login',
        name: 'Сторінка авторизації',
        description: '',
        active: true
    },
    {
        key: 'home',
        url: '/home',
        name: 'Головна сторінка',
        description: '',
        active: true
    }
]

export default crmPagesForFront;