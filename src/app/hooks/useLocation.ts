import { useMemo } from 'react'

import { useGetCitiesMutation } from '@/app/services/countries/countries.api'
import { SelectValue } from '@/ui/custom-select/custom-select.types'

export const useLocation = () => {
  const [getCities, { data: cities }] = useGetCitiesMutation()
  const mappedCities: SelectValue[] | undefined = useMemo(() => {
    return cities?.data.map(city => {
      return { value: city.toLowerCase(), label: city }
    })
  }, [cities])

  return { getCities, mappedCities }
}
