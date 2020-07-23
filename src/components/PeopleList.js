import React, { Component } from 'react'

const myList = [
    {id: 123, nome: "Joao", idade: 23},
    {id: 456, nome: "Maria", idade: 24},
    {id: 789, nome: "José", idade: 26}
]
class PeopleList extends Component{

    sayMyName(person){
        alert(person.nome);
    }

    render(){
        return (
            <ul>
                { myList.map(person => <li onClick={() => {this.sayMyName(person)}} key={person.id}>{person.nome} - {person.idade}</li>) }
            </ul>
        )
    }
}

export default PeopleList;
