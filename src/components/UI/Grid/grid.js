import React from 'react'
import Card from '../Card'
import Sortable from 'sortablejs'
import Configuration from '../../Configuration'
import * as constants from '../../App/constants';

class Grid extends React.Component {
    constructor (props) {
        super(props)

        this.sortableParent = React.createRef();
        this.config = new Configuration();
    }

    componentDidMount() {
        if (this.sortableParent) {
            new Sortable(this.sortableParent.current, {
                ...constants.SORTABLE_OPTIONS,
                onSort: this.onGridSort.bind(this)
            })
        }
    }

    /**
     * Handler for the "Sort" event of Sortable JS
     * @param {CustomEvent} evt 
     */
    onGridSort(evt) {
        const { oldIndex, newIndex } = evt;
        const { orderConfigName } = this.props
        let orderMap = [...this.getOrderMap()];
        let newConfig = {};

        orderMap.splice(newIndex, 0, orderMap.splice(oldIndex, 1).pop());
        newConfig[orderConfigName] = orderMap;

        this.config.set(newConfig)
    }

    /**
     * Sorts the grid elements accordiong to the current sort configuration
     * @param {Array} items grid items
     * @returns {Array} sorted grid items
     */
    getSortedItems (items) {
        const orderMap = [...this.getOrderMap()];
        let sortedItems = [];

        if (!orderMap) return items;
        items.forEach(item => sortedItems.splice(orderMap.indexOf(item.id), 0, item))

        return sortedItems;
    }

    /**
     * Returns thearray of grid item ids in order they need to appear
     * @returns {Array} Array of item ids in proper order
     */
    getOrderMap() {
        const { config, items, orderConfigName } = this.props;
        let orderMap = config[orderConfigName];

        return orderMap || this.getInitialOrderMap(items)
    }

    /**
     * If no custom order has been specified by user - return the item ids in order as they are in the tree
     * @param {Array} items Array of grid items
     * @returns Array of item ids in proper order
     */
    getInitialOrderMap(items) {
        return items ? items.map((item) => item.id) : []
    }

    render () {
        const {items, tree, config} = this.props;
        const elems = this.getSortedItems(items).map((item, index) => {
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
