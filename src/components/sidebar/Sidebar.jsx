import { Container, Icon, List, ListItem, Menu, Title, Wrapper } from "./styles";

//icons
import {
    LineStyle,
    Timeline,
    TrendingUp,
    PersonOutline,
    Storefront,
    AttachMoney,
    Equalizer ,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline ,
    WorkOutline ,
    Report } from '@material-ui/icons';


export default function Sidebar() {



  return (
    <Container>
      
      <Wrapper>
 

          <Menu>
                <Title>Dashboard</Title>
                
                <List>
                  <ListItem> 
                      <Icon>
                         <LineStyle/>
                      </Icon>
                      Home
                  </ListItem>

                  <ListItem >
                      <Icon>
                          <Timeline/>
                      </Icon>
                      Analytics
                  </ListItem>

                  <ListItem>
                      <Icon>
                          <TrendingUp/>
                      </Icon>
                      Sales
                  </ListItem>

                </List>
          </Menu>


          <Menu>
                <Title>Quick Menu</Title>
                <List>

                  <ListItem > 
                      <Icon>
                         <PersonOutline/>
                      </Icon>
                      Users
                  </ListItem>

                  <ListItem>
                      <Icon>
                          <Storefront/>
                      </Icon>
                      Products
                  </ListItem>

                  <ListItem>
                      <Icon>
                          <AttachMoney/>
                      </Icon>
                      Transactions
                  </ListItem>

                  <ListItem>
                      <Icon>
                          <Equalizer/>
                      </Icon>
                      Reports
                  </ListItem>

                </List>
          </Menu>


          <Menu>
                <Title>Notifications</Title>
                <List>

                  <ListItem > 
                      <Icon>
                         <MailOutline/>
                      </Icon>
                      Mail
                  </ListItem>

                  <ListItem>
                      <Icon>
                          <DynamicFeed/>
                      </Icon>
                      Feedback
                  </ListItem>

                  <ListItem>
                      <Icon>
                          <ChatBubbleOutline/>
                      </Icon>
                      Messages
                  </ListItem>

                </List>
          </Menu>




          <Menu>
                <Title>Staff</Title>
                <List>

                  <ListItem > 
                      <Icon>
                         <WorkOutline/>
                      </Icon>
                      Manage
                  </ListItem>

                  <ListItem>
                      <Icon>
                          <Timeline/>
                      </Icon>
                      Analytics
                  </ListItem>

                  <ListItem>
                      <Icon>
                          <Report/>
                      </Icon>
                      Report
                  </ListItem>

                </List>
          </Menu>




         
      </Wrapper>

    </Container>
  )
}
