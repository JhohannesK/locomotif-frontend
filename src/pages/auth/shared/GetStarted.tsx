import facility from '../../../_shared/assets/facility.jpeg'
import doctor from '../../../_shared/assets/doctor.jpeg'
import routes from '../../../routes'
import Constants from '../../../utils/constants'

function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-green-100 to-white md:h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full py-10">
        <div className="font-bold text-3xl bg-background-primary p-3 text-white rounded-xl">
          Loco
        </div>
        <div>
          <div className="flex flex-col gap-2 mb-3">
            <div className="text-center text-3xl font-bold">
              Get Started With Locomotif
            </div>
            <div className="text-center opacity-60">
              Join Locomotif as a Personnel or Facility
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-7 px-4 items-center justify-center">
            <div
              className="cursor-pointer"
              onClick={() => {
                routes.navigate(Constants.ROUTES.AUTH.FACILITY.facility_signup)
              }}
            >
              <div />
              <img
                src={facility}
                className="rounded-lg w-96 h-80 object-cover"
                alt="facility"
                width={360}
                height={300}
              />
              <p className="text-center text-xl pt-3 opacity-85">
                Join As a Health Care Facility
              </p>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => {
                routes.navigate(
                  Constants.ROUTES.AUTH.PERSONNEL.personnel_signup
                )
              }}
            >
              <div />
              <img
                src={doctor}
                alt="doctor"
                width={360}
                height={300}
                className="rounded-lg w-96 h-80 object-cover"
              />
              <p className="text-center text-xl opacity-85 pt-3">
                Register As a Personnel
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>fgfhj</div>
  )
}

export default LandingPage
