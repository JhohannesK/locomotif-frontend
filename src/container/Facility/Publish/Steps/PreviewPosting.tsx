import { GenericButton } from '../../../../_shared'
import { colors } from '../../../../colors'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks/hook'
import { prevPage } from '../../../../redux/slices/appSlice'

const PreviewPosting = () => {
  const dispatch = useAppDispatch()
  const { publish_form_state } = useAppSelector((state) => state.facility)
  console.log('🚀 ~ PreviewPosting ~ publish_form_state:', publish_form_state)
  return (
    <div className="border details-container">
      <div className="details-container__wrapper">
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }} className="mb-2">
          Preview before submission
        </p>
        <div className="flex flex-col gap-7">
          <div>
            <p className="font-medium text-2xl text-background-primary">
              Job Details
            </p>
            <div className="grid-view-template">
              <div>
                <div className="font-medium opacity-60">Job title</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.title}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">
                  Why are you advertising this role?
                </div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.advertisement_reason}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">Job Description</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-medium text-2xl text-background-primary">
              Staff Information
            </p>
            <div className="grid-view-template">
              <div>
                <div className="font-medium opacity-60">Staff Group</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.required_staff_group}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">
                  Area of work or speciality
                </div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.required_area_of_work}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium text-2xl text-background-primary">
              Contract details
            </p>
            <div className="grid-view-template">
              <div>
                <div className="font-medium opacity-60">
                  What type of Contract is it?
                </div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.contract_type}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">
                  What's the contract duration?
                </div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.contract_duration}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">
                  What's the working pattern
                </div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.contract_working_pattern}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium text-2xl text-background-primary">
              Pay Type
            </p>
            <div className="grid-view-template">
              <div>
                <div className="font-medium opacity-60">Payment category</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.payment_type}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">Fixed pay rate</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {/* TODO: properly display right format */}
                    {publish_form_state.payment_billing_cylce}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">Pay range Rate</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.payment_billing_cylce}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium text-2xl text-background-primary">
              Location
            </p>
            <div className="grid-view-template">
              <div>
                <div className="font-medium opacity-60">Country</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.location?.country}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">Address Line 1</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.location?.address_line_1}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">Address line 2</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.location?.address_line_2}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">Address line 2</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.location?.address_line_2}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">
                  Town or City Address
                </div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.location?.city}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">Region</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.location?.region}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">Digital Address</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.location?.digital_address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium text-2xl text-background-primary">
              Personnel Specification
            </p>
            <div className="grid-view-template">
              <div>
                <div className="font-medium opacity-60">
                  Job Qualification and Experience
                </div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.qualifications}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">
                  Additional Information
                </div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.additional_information}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">
                  Supporting Documents
                </div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.supporting_document}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium text-2xl text-background-primary">
              Professional Registration
            </p>
            <div className="grid-view-template">
              <div>
                <div className="font-medium opacity-60">
                  Pre-application questions
                </div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.pre_application_questions}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-medium text-2xl text-background-primary">
              Recruiter Information
            </p>
            <div className="grid-view-template">
              <div>
                <div className="font-medium opacity-60">Name</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.recruiter_contact?.name}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">Job Title</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.recruiter_contact?.title}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">Email Address</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.recruiter_contact?.email}
                  </p>
                </div>
              </div>
              <div>
                <div className="font-medium opacity-60">Telephone number</div>
                <div className="border border-border-tertiary rounded-lg h-11">
                  <p className="px-2 py-2 opacity-50">
                    {publish_form_state.recruiter_contact?.phone_number}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-group">
          <GenericButton
            type="button"
            sx={{
              width: '8rem',
              bgcolor: 'white',
              border: `1px solid ${colors.text.pineGreen}`,
              color: `${colors.text.pineGreen}`,
            }}
            title="Previous"
            onClick={() => {
              dispatch(prevPage())
            }}
          />
          <GenericButton
            type="button"
            sx={{ width: '8rem' }}
            title="Submit"
            onClick={() => {
              // dispatch(nextPage())
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default PreviewPosting
