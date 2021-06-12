import moment from 'moment'
import 'moment/locale/id'

export const tanggal = (format) => (
  moment().format(format)
)

export const jam = () => {
  const hour = moment().format('h')

  if (hour < 10) return 'Selamat pagi, '
  else if (hour < 20) return 'Selamat siang, '
  else return 'Selamat malam'
}