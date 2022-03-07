import { Avatar, Logo, Notification, TopbarContainer, TopIconBadge, TopLeft, TopRight, Wrapper } from "./styles";
import LogoAdmin from '../../assets/admin.png';
import UserImg from '../../assets/avatar.png';
import  NotificationsNoneIcon  from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';



export default function Topbar() {
  return (
    <TopbarContainer>
        <Wrapper>
            <TopLeft>
                <Logo src={LogoAdmin} alt='logomarca do site'/>
            </TopLeft>

            <TopRight>
                    <Notification>
                        <NotificationsNoneIcon/>
                        <TopIconBadge>2</TopIconBadge>
                    </Notification>

                    <Notification>
                        <LanguageIcon/>
                        <TopIconBadge>2</TopIconBadge>
                    </Notification>

                    <Notification>
                        <SettingsIcon/>
                    </Notification>

                    <Avatar src={UserImg} alt='user image'/>
            </TopRight>
        </Wrapper>
    </TopbarContainer>
  )
}
