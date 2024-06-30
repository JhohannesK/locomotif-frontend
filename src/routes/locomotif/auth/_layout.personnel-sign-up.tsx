import PersonnelSignup from '@/container/auth/personnel/Personnel-Signup'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/locomotif/auth/_layout/personnel-sign-up'
)({
  component: () => (
    <div>
      <PersonnelSignup />
    </div>
  ),
})
