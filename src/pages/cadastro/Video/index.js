import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo () {
    return (

        <PageDefault>
        <h1>Página de cadastro</h1>
        
        <Link to="/cadastro/categoria">
        cadastrar categoria
        </Link>
        </PageDefault>
)
}

export default CadastroVideo;