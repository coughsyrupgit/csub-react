import React from 'react'
import Card from '../Card'
import Sortable from 'sortablejs'

const SORTABLE_OPTIONS = {
    handle      : '[data-role="drag-handle"]',
    animation   : 500,
    easing      : 'cubic-bezier(1, 0, 0, 1)'
}

class Grid extends React.Component {
    constructor (props) {
        super(props)

        this.sortableParent = React.createRef();
    }

    componentDidMount() {
        if (this.sortableParent) {
            new Sortable(this.sortableParent.current, SORTABLE_OPTIONS)
        }
    }

    render () {
        const {items, tree, config} = this.props;
        const elems = items.map((item, index) => {
            let classNames = "uk-width-1-1 uk-width-1-2@s uk-width-1-3@m";
            classNames += item.isHidden ? ' fade--hidden' : '';
    
            return (
                <li className={classNames} key={index}>
                    <Card title={item.title}
                          links={item.links}
                          iterator={index}
                          tree={tree}
                          config={config} />
                </li>
            )
        })
    
        return (
            <ul
                className="uk-margin-medium-bottom"
                data-uk-grid="masonry: true"
                ref={this.sortableParent}>
                {elems}
            </ul>
        )
    }
}

export default Grid
