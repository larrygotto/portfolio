export const pageData = {
    home:{
        title: 'Pokémons',
        button: 'Pokédex',
        path: '/pokedex',
        nextPage: 'pokedex',
        display: 'none',
        buttonCard: 'add'
    },
    pokedex:{
        title: 'Pokédex',
        button: 'Pokémons',
        path: '/',
        nextPage: 'home',
        display: 'none',
        buttonCard: 'Remover'
    },
    detalhes:{
        title: '',
        button: 'Pokémons',
        path: '/',
        nextPage: 'home',
        display: '',
    }
}

export const pageType = (path) => {
    if (path === 'pokedex'){
        return 'pokedex'
    } else if (path.includes('detalhes')){
        return 'detalhes'
    } else {
        return 'home'
    }
}