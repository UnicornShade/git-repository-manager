import React from 'react'

import Table from '../../Table'

import { Record } from '../'

import File from '../File'
import Branch from '../Branch'
import Commit from '../Commit'
import Committer from '../Committer'
import Time from '../Time'

// export default function Row({ branch:, commit, committer, file, time }: Record) {
export default function Row({ file }: Record) {
  return (
    // <Table.Row className='Files-Row'>
    //   <Table.Cell><File type={file.type} />{file.name}</Table.Cell>
    //   <Table.Cell><Branch href={branch.href}>{branch.content}</Branch></Table.Cell>
    //   <Table.Cell><Commit>{commit}</Commit></Table.Cell>
    //   <Table.Cell><Committer>{committer}</Committer></Table.Cell>
    //   <Table.Cell><Time>{time}</Time></Table.Cell>
    // </Table.Row>
    <Table.Row className='Files-Row'>
      <Table.Cell><File {...file} /></Table.Cell>
      <Table.Cell><Branch href='#'>empty</Branch></Table.Cell>
      <Table.Cell><Commit>empty</Commit></Table.Cell>
      <Table.Cell><Committer>empty</Committer></Table.Cell>
      <Table.Cell><Time>empty</Time></Table.Cell>
    </Table.Row>
  )
}
