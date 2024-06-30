import { Input, LocoSelect } from '@/_shared'
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { VscSettings } from 'react-icons/vsc'
import FilterBy from './FilterBy'

const Header = ({ count }: { count: number }) => {
  return (
    <div className="w-full flex flex-col border-b pb-5">
      <h1 className="text-5xl font-semibold">My Postings</h1>
      <Accordion className="bg-transparent shadow-none">
        <div className="mt-5 flex flex-col lg:flex-row items-center justify-between gap-5 ">
          <div className="flex items-center gap-4">
            <Input
              className="rounded-full w-96"
              placeholder="Search"
              name="search key term"
            />
            <AccordionSummary
              //   expandIcon={<MoreVertical />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <div className="flex items-center gap-2 cursor-pointer">
                <VscSettings className="rotate-90 h-5 w-5" />
                <p className="text-primary">Filters</p>
              </div>
            </AccordionSummary>
          </div>
          <div className="flex items-center gap-4">
            <p>Sort by</p>
            <LocoSelect
              name="sort_by"
              value={'Start Date'}
              className="w-32"
              // onChange={(_, newValue) => {
              //   dispatch(
              //     handleSelectChange({
              //       name: 'payment_currency',
              //       value: newValue as string,
              //     })
              //   )
              // }}
              options={['Start Date', 'End Date', 'Rate', 'Role']}
              defaultOption="GHS"
            />
            <LocoSelect
              name="sort_by"
              className="w-32"
              value={'Ascending'}
              // onChange={(_, newValue) => {
              //   dispatch(
              //     handleSelectChange({
              //       name: 'payment_currency',
              //       value: newValue as string,
              //     })
              //   )
              // }}
              options={['Ascending', 'Descending']}
              defaultOption="GHS"
            />
            <p className="opacity-80">{count} total</p>
          </div>
        </div>
        <AccordionDetails>
          <FilterBy />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Header
