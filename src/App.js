import React, { Component } from 'react'


class Table extends Component {

    state = {
        activePage: 1,
        rowsPerPage: 10,
        columnHeaders: ['Name', 'Class', 'Level', 'Gold'],
        rowArray: [
            ['Leo', 'Warrior', 1, 41],
            ['Ragnarok', 'Warlock', 2, 450],
            ['Denzel', 'Cleric', 3, 120],
            ['Grey', 'Rogue', 4, 22],
            ['Mimic', 'Mimic', '', 4],
            ['', '', 6, 0],
            ['Leo', 'Warrior', 7, 41],
            ['Ragnarok', 'Warlock', 8, 450],
            ['Denzel', 'Cleric', 9, 120],
            ['Grey', 'Rogue', 10, 22],
            ['Mimic', 'Mimic', '', 4],
            ['', '', 12, 0],
            ['Leo', 'Warrior', 13, 41],
            ['Ragnarok', 'Warlock', 14, 450],
            ['Denzel', 'Cleric', 15, 120],
            ['Grey', 'Rogue', 16, 22],
            ['Mimic', 'Mimic', '', 4],
            ['', '', 18, 0],
            ['', '', 19, 0],
            ['Leo', 'Warrior', 20, 41],
            ['Ragnarok', 'Warlock', 21, 450],
            ['Denzel', 'Cleric', 22, 120],
            ['Grey', 'Rogue', 23, 22],
            ['Mimic', 'Mimic', 24, 4],
            ['', '', 25, 0]
        ]
    }

    componentDidMount() {
        this.validateData()

    }

    validateData = () => {
        let rows = this.state.rowArray

        for (let i = 0; i < rows.length; i++) {
            for (let j = 0; j < rows[i].length; j++) {
                if (!rows[i][j]) {
                    let cell = rows[i]
                    cell[j] = 'N/A'
                    rows[i] = cell
                    this.setState({
                        rowArray: rows
                    })
                }

            }
        }


        this.pagination()

    }

    pagination = () => {
        //making easier to read variables
        let activePage = this.state.activePage
        console.log('active page', activePage)

        let totalPages = Math.ceil(this.state.rowArray.length / this.state.rowsPerPage)
        console.log('total pages', totalPages)

        let rowArray = this.state.rowArray
        let rowsPerPage = this.state.rowsPerPage
        console.log('rowsPerPage', rowsPerPage)

        //makes sure activePage stays in range
        if (this.state.activePage < 1) {
          activePage = 1
        } else if (this.state.activePage > totalPages) {
          activePage = totalPages
        }
        
        let startPage = 1
        let endPage = totalPages
        console.log('start and end pages', startPage, endPage)

        //map out the total pages to get them indexed
        let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i)
        console.log('pages', pages)

        //calc start and ending indexes for each page
        let startIndex = (activePage - 1)  * rowsPerPage
        let endIndex = Math.min((startIndex + rowsPerPage -1), (rowArray.length -1))
        console.log('startIndex endIndex', startIndex, endIndex)
        
        
        let pagedRows = rowArray.slice(0, rowsPerPage)

        this.createBody(pagedRows)

    }

    createBody = (pagedRows) => {
        let tableBody = document.getElementById('myTableBody')

        pagedRows.forEach(function (rowData) {
            let row = document.createElement('tr')

            rowData.forEach(function (valueData) {
                let value = document.createElement('td')
                value.appendChild(document.createTextNode(valueData))
                row.appendChild(value)
            })

            tableBody.appendChild(row)
        })
    }

    render() {

        return (
            <div>
                <table className='table'>

                    <thead>
                        <tr>
                            {this.state.columnHeaders.map(column => <th key={column}>{column}</th>)}
                        </tr>
                    </thead>
                    <tbody id='myTableBody'>
                        {this.createBody}
                    </tbody>

                </table>
            </div>
        )
    }
}


export default Table