import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import { Divider } from '@mui/material'

import { SlArrowDown } from 'react-icons/sl'
import { FilterBoxWrapper, FilterBoxTitle } from './filterBox_style'

const FilterBox = () => {
  return (
    <FilterBoxWrapper>
      <FilterBoxTitle>Filter By</FilterBoxTitle>
      <Accordion>
        <AccordionSummary
          expandIcon={<SlArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Title</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText secondary={'Orthopaedic'} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText secondary={'Medical Technician'} />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<SlArrowDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Location</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText secondary={'Brong Ahafo'} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText secondary={'Eastern'} />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<SlArrowDown />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Shift</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText secondary={'Morning'} />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText secondary={'Evening'} />
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </FilterBoxWrapper>
  )
}

export default FilterBox
