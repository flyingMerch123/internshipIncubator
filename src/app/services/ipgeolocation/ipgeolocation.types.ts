export type IpGeolocationType = {
  calling_code: string
  city: string
  connection_type: string
  continent_code: string
  continent_name: string
  country_capital: string
  country_code2: string
  country_code3: string
  country_emoji: string
  country_flag: string
  country_name: string
  country_name_official: string
  country_tld: string
  currency: IpGeolocationTypeCurrency
  district: string
  geoname_id: string
  ip: string
  is_eu: boolean
  isp: string
  languages: string
  latitude: string
  longitude: string
  organization: string
  state_code: string
  state_prov: string
  time_zone: IpGeolocationTypeTime_zone
  zipcode: string
}
export type IpGeolocationTypeCurrency = {
  code: string
  name: string
  symbol: string
}
export type IpGeolocationTypeTime_zone = {
  current_time: string
  current_time_unix: number
  dst_savings: number
  is_dst: boolean
  name: string
  offset: number
  offset_with_dst: number
}
