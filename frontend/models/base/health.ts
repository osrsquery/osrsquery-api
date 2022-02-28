import type { RecordInfo } from '~/types'
import TimeagoColumn from '~/components/table/timeagoColumn.vue'

export const Health = <RecordInfo<'health'>>{
  typename: 'health',
  pluralTypename: 'healths',
  name: 'Health',
  pluralName: 'Healths',
  icon: 'mdi-folder-information',
  routeName: 'a-view',
  renderItem: (item) => item.name,
  fields: {
    id: {
      text: 'ID',
    },
    gameId: {
      text: 'Game ID',
    },
    healthScale: {
      text: 'Health Scale',
    },
    data: {
      text: 'Data',
    },
    createdAt: {
      text: 'Created At',
      component: TimeagoColumn,
    },
    updatedAt: {
      text: 'Updated At',
      component: TimeagoColumn,
    },
  },
  paginationOptions: {
    hasSearch: false,
    filterOptions: [],
    sortOptions: [
      {
        field: 'createdAt',
        desc: true,
      },
    ],
    headerOptions: [
      {
        field: 'gameId',
      },
      {
        field: 'createdAt',
        width: '150px',
      },
      {
        field: 'updatedAt',
        width: '150px',
      },
    ],
    downloadOptions: {},
  },
  addOptions: {
    fields: ['gameId', 'healthScale', 'data'],
  },
  importOptions: {
    fields: ['gameId', 'healthScale', 'data'],
  },
  editOptions: {
    fields: ['gameId', 'healthScale', 'data'],
  },
  viewOptions: {
    fields: ['gameId', 'healthScale', 'data'],
  },
  enterOptions: {},
  deleteOptions: {},
  shareOptions: {},
  expandTypes: [],
}
