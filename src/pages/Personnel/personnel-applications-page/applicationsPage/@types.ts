export type FilterObject = {
  status: StatusType[]
  sort_by?: 'Oldest'
}

export type StatusType = 'pending' | 'accepted' | 'declined'
