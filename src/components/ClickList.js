import React, { Component } from 'react'

import { Channel } from '../services/EventEmitter';

class ClickList extends Component {
    constructor(props){
        super(props);
        this.state = {
            total: 0 
        }
    this.setTotal = this.setTotal.bind(this);
    }

    componentDidMount(){
        Channel.on('listItem: click', this.setTotal);
        //.on indica qual evento ele vai ficar ouvindo
    }

    setTotal(){
        this.setState(state => {
            return {
                total: state.total + 1
            }
        })
    }

    render() {
        const { state } = this; 
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