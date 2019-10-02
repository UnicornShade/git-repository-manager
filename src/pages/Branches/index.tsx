import React, { FC } from 'react'

import Table from 'components/Table'
import Repository from 'components/Repository'

const Files: FC = () => {
  return (
    <Repository className='Branches'>
      <Table className='Branches-table'>
        <Table.Row type='head'>
          <Table.Cell>Name</Table.Cell>
          <Table.Cell>Commit hash</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            
          </Table.Cell>
          <Table.Cell></Table.Cell>
        </Table.Row>
      </Table>
    </Repository>
  )
}

export default Files

// .Table.Branches
//   .Table-row.Table-row_head.Branches-item
//     .Table-cell Name
//     .Table-cell Commit hash

//   .Table-row.Branches-item
//     .Table-cell.Branches-name
//       .Branches-icon: .FileIcon.FileIcon_branch
//       | trunk
//     .Table-cell.Branches-hash: a.Link(href='#') 6748ds893432438dsd823329d923482d


//   .Table-row.Branches-item
//     .Table-cell.Branches-name
//       .Branches-icon: .FileIcon.FileIcon_branch
//       | users/a-aidyn00/my-feature-2
//     .Table-cell.Branches-hash: a.Link(href='#') 7748ds893432438dsd823329d923482d

//   .Table-row.Branches-item
//     .Table-cell.Branches-name
//       .Branches-icon: .FileIcon.FileIcon_branch
//       | users/a-aidyn00/my-feature-3
//     .Table-cell.Branches-hash: a.Link(href='#') 8748ds893432438dsd823329d923482d

//   .Table-row.Branches-item
//     .Table-cell.Branches-name
//       .Branches-icon: .FileIcon.FileIcon_branch
//       | users/a-aidyn00/my-feature-5
//     .Table-cell.Branches-hash: a.Link(href='#') 9748ds893432438dsd823329d923482d

//   .Table-row.Branches-item
//     .Table-cell.Branches-name
//       .Branches-icon: .FileIcon.FileIcon_branch
//       | users/a-aidyn00/my-feature-6
//     .Table-cell.Branches-hash: a.Link(href='#') 1748ds893432438dsd823329d923482d

//   .Table-row.Branches-item
//     .Table-cell.Branches-name
//       .Branches-icon: .FileIcon.FileIcon_branch
//       | users/a-aidyn00/my-feature-7
//     .Table-cell.Branches-hash: a.Link(href='#') 2748ds893432438dsd823329d923482d

