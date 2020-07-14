import React, { Component } from 'react';

/* function MeuComponent(){
    return <h1>Hello World!</h1>
} */

/* const MeuComponent = () => {
    return <h1>Hello World!</h1>
} */

class MeuComponent extends React.Component{
    render(){
        const {props} = this;
        return (
            <ul>
                <li>Nome: {props.nome}</li>
                <li>Sobrenome: {props.sobrenome}</li>
                <li>Idade: {props.idade}</li>
            </ul>
        );
    }
}
/* 
export const MeusComponents = {
    TreinaWeb: function(props){
        return <h1>Ola {props.nome}!</h1>
    }
}; */

export default MeuComponent;