let dataMock = [
    {
        status: 'backlog',
        statusId: 0,
        tasks: [
            {
                id: 1,
                name: 'Test task backlog',
                description: 'lorem ipsum etc...'
            },
            {
                id: 2,
                name: 'One more test task in backlog',
                description: 'next lorem ipsum'
            },
        ]
    },

    {
        status: 'ready',
        statusId: 1,
        tasks: [
            {
                id: 3,
                name: 'test task in ready',
                description: 'ready lorem ipsum'
            },
        ]
    },

    {
        status: 'in progress',
        statusId: 2,
        tasks: [
        ]
    },

    {
        status: 'finished',
        statusId: 3,
        tasks: [
            {
                id: 4,
                name: 'test task already finished',
                description: 'finished lorem ipsum'
            },
        ]
    },
]

export default dataMock;