import pluralize from 'pluralize'
import moment from 'moment'

export const unitPrice = (price, amount, unit) => {
  if (Number(amount) <= 0) {
    return null
  }

  const formattedAmount = (Number(price) / Number(amount)).toFixed(2).toString()
  const formattedUnit = unit ? pluralize(unit, 1) : 'ea'

  return `$${formattedAmount}/${formattedUnit}`
}

export const getExpirationFromAddDate = (addDate, daysLeft) => {
  return moment(addDate)
    .add(daysLeft, 'days')
    .valueOf()
}

export const getExpirationFromNow = (daysLeft) => {
  return moment()
    .add(daysLeft, 'days')
    .valueOf()
}

export const inventoryAmountString = (
  weightAmount,
  weightUnit,
  quantityAmount,
  quantityUnit
) => {
  if (!weightAmount && !quantityAmount) return ''

  let result = ''

  if (weightAmount) {
    result += `${weightAmount} ${weightUnit}`
    if (quantityAmount) {
      result += ' '
    }
  }
  if (quantityAmount) {
    if (weightAmount) {
      result += '('
    }
    result += `${quantityAmount}`
    if (quantityUnit) {
      result += ` ${quantityUnit}`
    }
    if (weightAmount) {
      result += ')'
    }
  }

  return result
}

export const millisecondsToDisplayDate = (milliseconds) => {
  return moment(Number(milliseconds)).format('M/D/YY')
}

export const millisecondsToPgDate = (milliseconds) => {
  return moment(Number(milliseconds)).format('YYYY-MM-DD')
}

export const pgDateToDisplayDate = (pgFormat) => {
  return moment(pgFormat).format('M/D/YY')
}
