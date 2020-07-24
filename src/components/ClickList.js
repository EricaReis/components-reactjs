import React, { Component } from 'react'

import { Channel } from '../services/EventEmitter';

class ClickList extends Component {
    constructor(props){
        super(props);
        this.state = {
            total: 0,
            hasError: false 
        }
    this.setTotal = this.setTotal.bind(this);
    this.restart = this.restart.bind(this);
    }

    componentDidMount(){
        Channel.on('listItem:click', this.setTotal);
        //.on indica qual evento ele vai ficar ouvindo
    }

    componentWillUnmount(){
        Channel.removeListener('listItem:click', this.setTotal);
    }

    static getDerivedStateFromError(error){
        return{
            hasError: true
        }
    }

    restart(){
        this.setState({
            total: 0,
            hasError: false
        })
    }

/*   preferir usar o getDerivedStateFromError no lugar de componentDidCatch(error){
        this.setState({
            hasError: true
        })
    }

 */
    setTotal(){
        this.setState(state => {
            return {
                total: state.total + 1
            }
        })
    }

    render() {
        const { state } = this; 
      /*   fake error p/ teste
            if(state.hasError){
            return <button onClick={this.restart}>Restart</button>
        } */
        return (
            <div>
                Total: {state.total}
                <ul>
                    {this.props.children.map((item, index) => {
                        return <item.type index={index} >
                                 {item.props.children}
                               </item.type>
                    })} {/*retorna lista com os childrens em lista*/}
                </ul>
            </div>
        )
    }
}

export default ClickList;