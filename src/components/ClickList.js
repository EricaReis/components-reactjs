import React, { Component } from 'react'

class ClickList extends Component {
    render() {
        return (
            <div>
                abc
                <ul>
                    {this.props.children.map(item => {
                        return <li>{item}</li>
                    })} {/*retorna lista com os childrens em lista*/}
                </ul>
                {this.props.children}
                {/*retorna os childrens*/}
            </div>
        )
    }
}

export default ClickList