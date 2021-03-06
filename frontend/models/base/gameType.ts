import type { RecordInfo } from '~/types'
import TimeagoColumn from '~/components/table/timeagoColumn.vue'
import AvatarColumn from '~/components/table/avatarColumn.vue'
import NameAvatarColumn from '~/components/table/nameAvatarColumn.vue'

export const GameType = <RecordInfo<'gameType'>>{
  typename: 'gameType',
  pluralTypename: 'gameTypes',
  name: 'Game Type',
  pluralName: 'Game Types',
  icon: 'mdi-folder-information',
  routeName: 'a-view',
  renderItem: (item) => item.name,
  fields: {
    id: {
      text: 'ID',
    },
    name: {
      text: 'Name',
    },
    avatar: {
      text: 'Avatar',
      inputType: 'avatar',
      component: AvatarColumn,
    },
    description: {
      text: 'Description',
      inputType: 'textarea',
    },
    fileName: {
      text: 'Filename',
    },
    modelName: {
      text: 'Model Name',
    },
    fieldsMap: {
      text: 'Fields Map',
      inputType: 'value-array',
      inputOptions: {
        nestedFields: [
          {
            key: 'key',
            inputType: 'text',
            text: 'From Field',
            inputOptions: {
              cols: 6,
            },
          },
          {
            key: 'value',
            inputType: 'text',
            text: 'Target Field',
            inputOptions: {
              cols: 6,
            },
          },
        ],
      },
      parseValue: (val) => {
        // if value is empty, set it equal to key
        if (!Array.isArray(val)) return []

        val.forEach((ele) => {
          if (!ele.value) ele.value = ele.key
        })

        return val
      },
      parseImportValue: (val) => {
        if (typeof val !== 'string') return []

        return val.split(',').map((field) => ({
          key: field,
          value: field,
        }))
      },
    },
    nameWithAvatar: {
      text: 'Name',
      fields: ['name', 'avatar'],
      component: NameAvatarColumn,
    },
    createdAt: {
      text: 'Created At',
      component: TimeagoColumn,
    },
    updatedAt: {
      text: 'Updated At',
      component: TimeagoColumn,
    },
    'gameVersionGameTypeLink/gameVersion.id': {},
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
        field: 'nameWithAvatar',
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
    downloadOptions: {
      fields: [
        'avatar',
        'name',
        'description',
        'fileName',
        'modelName',
        'fieldsMap',
      ],
    },
  },
  addOptions: {
    fields: [
      'avatar',
      'name',
      'description',
      'fileName',
      'modelName',
      'fieldsMap',
    ],
  },
  importOptions: {
    fields: [
      'avatar',
      'name',
      'description',
      'fileName',
      'modelName',
      'fieldsMap',
    ],
  },
  editOptions: {
    fields: [
      'avatar',
      'name',
      'description',
      'fileName',
      'modelName',
      'fieldsMap',
    ],
  },
  viewOptions: {
    fields: [
      'avatar',
      'name',
      'description',
      'fileName',
      'modelName',
      'fieldsMap',
    ],
  },
  enterOptions: {},
  deleteOptions: {},
  shareOptions: {},
  expandTypes: [],
}
