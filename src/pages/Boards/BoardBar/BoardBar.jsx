import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import {capitalizeFirstLetter} from '~/utils/formatters'  

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar( {board} ) {
  return (
    <Box sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'hsl(215, 90%, 30%)' : 'hsl(215, 90%, 40%)')
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip 
            sx={MENU_STYLES}
            icon={<SpaceDashboardIcon />} 
            label={board?.title}
            clickable
          />
          <Chip 
            sx={MENU_STYLES}
            icon={<VpnLockIcon />} 
            label={capitalizeFirstLetter(board?.type)} 
            clickable
          />
          <Chip 
            sx={MENU_STYLES}
            icon={<AddToDriveIcon />} 
            label="Add to Google Drive" 
            clickable
          />
          <Chip 
            sx={MENU_STYLES}
            icon={<BoltIcon />} 
            label="Automation" 
            clickable
          />
          <Chip 
            sx={MENU_STYLES}
            icon={<FilterListIcon />} 
            label="Filter" 
            clickable
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button 
            variant="outlined" 
            startIcon={<PersonAddIcon />}
            sx={{
              color: 'white', 
              borderColor: 'white',
              '&:hover': { borderColor: 'white' }
            }}
          >Invite
          </Button>  
          <AvatarGroup 
            max={6}
            sx={{ 
              gap: '10px',
              '& .MuiAvatar-root': {
                width: 34,
                height: 34,
                fontSize: 16,
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                '&:first-of-type': {
                  bgcolor: 'a4b0de'
                }
              } 
            }}
          >
            <Tooltip title="ZungBii">
              <Avatar 
                alt="ZungBii" 
                src="/static/images/avatar/1.jpg" 
              />
            </Tooltip>
            <Tooltip title="ZungBii">
              <Avatar 
                alt="ZungBii" 
                src="/static/images/avatar/1.jpg" 
              />
            </Tooltip>
            <Tooltip title="ZungBii">
              <Avatar 
                alt="ZungBii" 
                src="/static/images/avatar/1.jpg" 
              />
            </Tooltip>
          </AvatarGroup>
        </Box>
    </Box>
  )
}

export default BoardBar