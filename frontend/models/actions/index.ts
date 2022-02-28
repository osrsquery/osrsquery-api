// special actions go here

import { handleError } from '~/services/base'
import { executeGiraffeql } from '~/services/giraffeql'

export const syncGameTypeLinks = async (that, item) => {
  try {
    that.$notifier.showSnackbar({
      message: 'Syncing GameType Links',
      variant: 'info',
    })

    await executeGiraffeql(that, {
      syncGameTypeLinks: {
        __args: {
          id: item.id,
        },
      },
    })

    that.$notifier.showSnackbar({
      message: 'Done Syncing',
      variant: 'success',
    })
  } catch (err) {
    handleError(that, err)
  }
}

export const syncGameTypes = async (that, item) => {
  try {
    that.$notifier.showSnackbar({
      message: 'Syncing Game Types',
      variant: 'info',
    })

    await executeGiraffeql(that, {
      syncGameTypes: {
        __args: {
          id: item.id,
        },
      },
    })

    that.$notifier.showSnackbar({
      message: 'Done Syncing',
      variant: 'success',
    })
  } catch (err) {
    handleError(that, err)
  }
}
