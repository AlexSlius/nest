import { InterfaceTypeOfRequest } from "src/interfaces/interface-type-request.interface";

const typesOfRequest: InterfaceTypeOfRequest[] = [
    {
        key: 'allowedCreate',
        name: 'Додати/створити',
        description: 'Можливість додавати нові запис'
    },
    {
        key: 'allowedUpdate',
        name: 'Редагувати',
        description: 'Можливість редагувати запис'
    },
    {
        key: 'allowedDelete',
        name: 'Видалити',
        description: 'Можливість видалити запис'
    },
    {
        key: 'allowedGetOne',
        name: 'Отримати один',
        description: 'Можливість отримати один запис'
    },
    {
        key: 'allowedGetAll',
        name: 'Отримати всі',
        description: 'Можливість отримати всі записи'
    },
]

export default typesOfRequest;