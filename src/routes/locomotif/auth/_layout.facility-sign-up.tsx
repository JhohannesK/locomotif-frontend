import FacilitySignUp from '@/container/auth/facility/components/FacilitySignUp'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/locomotif/auth/_layout/facility-sign-up'
)({
  component: () => (
    <div>
      <FacilitySignUp />
    </div>
  ),
})
