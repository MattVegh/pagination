import React, { Component } from 'react'
import { TablePagination } from 'react-pagination-table'

class Table extends Component {

    state = {
        activePage: 1,
        rowsPerPage: 10,
        columnHeaders: ['Name', 'Class', 'Level', 'Gold'],
        rowArray: [
            {name:'Leo', class: 'Warrior', level: 1,gold:  41},
            {name:'Ragnarok', class: 'Warlock', level: 2, gold: 450},
            {name:'Denzel', class: 'Cleric', level: 3, gold: 120},
            {name:'Grey', class: 'Rogue', level: 4, gold: 22},
            {name:'Mimic', class: 'Mimic', level: '', gold: 4},
            {name:'', class: '', level: 6, gold: 0},
            {name:'Leo', class: 'Warrior',level: 7, gold: 41},
            {name:'Ragnarok', class: 'Warlock', level: 8, gold: 450},
            {name:'Denzel', class: 'Cleric', level: 9, gold: 120},
            {name:'Grey', class: 'Rogue', level: 10, gold: 22},
            {name:'Mimic', class: 'Mimic', level: '', gold: 4},
            {name:'', class: '', level: 12, gold: 0},
            {name:'Leo', class: 'Warrior', level: 13, gold: 41},
            {name:'Ragnarok', class: 'Warlock', level: 14, gold: 450},
            {name:'Denzel', class: 'Cleric', level: 15, gold: 120},
            {name:'Grey', class: 'Rogue', level: 16, gold: 22},
            {name:'Mimic', class: 'Mimic', level: '', gold: 4},
            {name:'', class: '', level: 18, gold: 0},
            {name:'', class: '', level: 19, gold: 0},
            {name:'Leo', class: 'Warrior', level: 20, gold: 41},
            {name:'Ragnarok', class: 'Warlock', level: 21, gold: 450},
            {name:'Denzel', class: 'Cleric', level: 22, gold: 120},
            {name:'Grey', class: 'Rogue', level: 23, gold: 22},
            {name:'Mimic', class: 'Mimic', level: 24, gold: 4},
            {name:'', class: '', level: 25, gold: 0}
        ]
    }

    // componentDidMount() {
    //     this.validateData()

    // }

    // validateData = () => {
    //     let rows = this.state.rowArray

    //     for (let i = 0; i < rows.length; i++) {
    //         for (let j = 0; j < rows[i].length; j++) {
    //             if (!rows[i][j]) {
    //                 let cell = rows[i]
    //                 cell[j] = 'N/A'
    //                 rows[i] = cell
    //                 this.setState({
    //                     rowArray: rows
    //                 })
    //             }

    //         }
    //     }


    //     this.pagination()

    // }

    // pagination = () => {
    //     //making easier to read variables
    //     let activePage = this.state.activePage
    //     console.log('active page', activePage)

    //     let totalPages = Math.ceil(this.state.rowArray.length / this.state.rowsPerPage)
    //     console.log('total pages', totalPages)

    //     let rowArray = this.state.rowArray
    //     let rowsPerPage = this.state.rowsPerPage
    //     console.log('rowsPerPage', rowsPerPage)

    //     //makes sure activePage stays in range
    //     if (this.state.activePage < 1) {
    //       activePage = 1
    //     } else if (this.state.activePage > totalPages) {
    //       activePage = totalPages
    //     }

    //     let startPage = 1
    //     let endPage = totalPages
    //     console.log('start and end pages', startPage, endPage)

    //     //map out the total pages to get them indexed
    //     let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i)
    //     console.log('pages', pages)

    //     //calc start and ending indexes for each page
    //     let startIndex = (activePage - 1)  * rowsPerPage
    //     let endIndex = Math.min((startIndex + rowsPerPage -1), (rowArray.length -1))
    //     console.log('startIndex endIndex', startIndex, endIndex)


    //     let pagedRows = []
    //     console.log('pr b4 loop', pagedRows)
    //     console.log('test', rowArray.slice(0, rowsPerPage))
    //     console.log('test2', rowArray.slice(10, 20))
    //     console.log('test3', rowArray.slice(20, 30))

    //     for (let i = 0; i < rowArray.length; i++) {
    //       let page = rowArray.splice(0, rowsPerPage)
    //       pagedRows.push(page)

    //       console.log('i', i)
    //       console.log('pr', pagedRows)

    //       //rowsPerPage+= this.state.rowsPerPage
    //       console.log('rpp', rowsPerPage)
    //     }

    //     this.createBody(pagedRows)

    // }

    // createBody = (pagedRows) => {
    //     let tableBody = document.getElementById('myTableBody')

    //     pagedRows.forEach(function (rowData) {
    //         let row = document.createElement('tr')

    //         rowData.forEach(function (valueData) {
    //             let value = document.createElement('td')
    //             value.appendChild(document.createTextNode(valueData))
    //             row.appendChild(value)
    //         })

    //         tableBody.appendChild(row)
    //     })
    // }


    render() {

        return (
            <div>
                <TablePagination
                    headers={this.state.columnHeaders}
                    data={this.state.rowArray}
                    columns="name.class.level.gold"
                    perPageItemCount={this.state.rowsPerPage}
                    totalCount={this.state.rowArray.length}
                    arrayOption={[["size", 'all', ' ']]}
                />
                {/* <table className='table'>

                    <thead>
                        <tr>
                            {this.state.columnHeaders.map(column => <th key={column}>{column}</th>)}
                        </tr>
                    </thead>
                    <tbody id='myTableBody'>
                        {this.createBody}
                    </tbody>

                </table> */}
            </div>
        )
    }
}


export default Table