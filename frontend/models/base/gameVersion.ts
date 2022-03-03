import type { RecordInfo } from '~/types'
import TimeagoColumn from '~/components/table/timeagoColumn.vue'
import AvatarColumn from '~/components/table/avatarColumn.vue'
import NameAvatarColumn from '~/components/table/nameAvatarColumn.vue'
import BooleanColumn from '~/components/table/booleanColumn.vue'
import { syncGameTypeLinks, syncGameTypes } from '../actions'
import { GameType } from './gameType'

export const GameVersion = <RecordInfo<'gameVersion'>>{
  typename: 'gameVersion',
  pluralTypename: 'gameVersions',
  name: 'Game Version',
  pluralName: 'Game Versions',
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
    nameWithAvatar: {
      text: 'Name',
      fields: ['name', 'avatar'],
      component: NameAvatarColumn,
    },
    generation: {
      text: 'Generation',
    },
    folderName: {
      text: 'Folder Name',
    },
    isLatest: {
      text: 'Is Latest',
      component: BooleanColumn,
      parseQueryValue: (val) => val === 'true',
      default: () => false,
      inputType: 'switch',
      parseImportValue: (val) => {
        return val === 'TRUE'
      },
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
    downloadOptions: {},
  },
  addOptions: {
    fields: [
      'avatar',
      'name',
      'description',
      'generation',
      'folderName',
      'isLatest',
    ],
  },
  importOptions: {
    fields: [
      'avatar',
      'name',
      'description',
      'generation',
      'folderName',
      'isLatest',
    ],
  },
  editOptions: {
    fields: [
      'avatar',
      'name',
      'description',
      'generation',
      'folderName',
      'isLatest',
    ],
  },
  viewOptions: {
    fields: [
      'avatar',
      'name',
      'description',
      'generation',
      'folderName',
      'isLatest',
    ],
  },
  enterOptions: {},
  deleteOptions: {},
  shareOptions: {},
  expandTypes: [
    {
      recordInfo: GameType,
      name: 'GameTypes',
      lockedFilters: (_that, item) => {
        return [
          {
            field: 'gameVersionGameTypeLink/gameVersion.id',
            operator: 'eq',
            value: item.id,
          },
        ]
      },
    },
  ],
  customActions: [
    {
      text: 'Sync GameType Links',
      icon: 'mdi-refresh',
      handleClick: syncGameTypeLinks,
      isAsync: true,
    },
    {
      text: 'Sync Game Types',
      icon: 'mdi-refresh',
      handleClick: syncGameTypes,
      isAsync: true,
    },
  ],
}
