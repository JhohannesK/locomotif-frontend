import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Constants from '../../../../utils/constants'
import { ApplicationsCardProps } from '../components/applicationsCard/applicationsCard'
import { ApplicationType } from '../../../../_shared/@types'

axios.defaults.withCredentials = true

const usePersonnelApplication = () => {
  const fetchAppication = async (): Promise<ApplicationType[]> => {
    const response = await axios.get<ApplicationType[]>(
      `${Constants.BaseURL}postings/applications`
    )
    return response.data
  }

  const { data, isLoading } = useQuery<ApplicationType[], Error>({
    queryKey: ['application'],
    queryFn: fetchAppication,
    notifyOnChangeProps: ['data'],
  })

  const _processedData: ApplicationsCardProps[] = []

  data?.forEach((appication) => {
    _processedData.push({
      postingID: `APP-${appication.id}`,
      status: appication.status,
      facilityName: appication.posting.facility.name,
      postingRole: appication.posting.required_speciality,
      shiftType: appication.posting.shift_type ?? 'Full Time',
      date: appication.created_at,
    })
  })

  return {
    data: _processedData,
    isLoading,
  }
}

export default usePersonnelApplication
