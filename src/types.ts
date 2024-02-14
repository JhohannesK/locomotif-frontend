type Roles = 'personnel' | 'facility' | 'doctor'
export interface ProtectedRouteProps {
  allowedRoles: Roles[] // Roles allowed to access the route
  userRole: Roles // User's role ('personnel' or 'facility')
  children?: React.ReactNode
}

export enum TJobSteps {
  'Job Details',
  'Staff information',
  'Contract Details',
  'Pay type',
  'Location',
  'Personel Specification',
  'Professional Registration',
  'Recruiter Information',
  'Preview Posting',
}
