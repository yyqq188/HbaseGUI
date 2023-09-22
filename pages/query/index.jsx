import React from 'react'
import { Card,Grid,Col ,Text, List, ListItem, Title, Button,Metric, Icon,
  TabList,Tab, TabPanels, TabPanel, TabGroup, TextInput, Flex,
  Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, TableFoot, TableFooterCell } from '@tremor/react'
import { GrUpdate } from "react-icons/gr";
import { HiInformationCircle } from "react-icons/hi";
const cities = [
  {
    city: "Athens",
    rating: "2 open PR",
  },
  {
    city: "Luzern",
    rating: "1 open PR",
  },
  {
    city: "Zürich",
    rating: "0 open PR",
  },]

const Query = () => {
  return (
    <div>
      <Grid numItems={3} className="gap-2">
        <Card>
          <div>
            <List className='h-96 overflow-auto'>
              {cities.map((item) =>(
                <ListItem key={item.city}>
                  <span>{item.city}</span>
                  <span>{item.rating}</span>
                </ListItem>
              ))}
            </List>
          </div>
          <div className='flex justify-center mt-10'>
              <Button icon={GrUpdate}>刷新</Button>
          </div>
        </Card>
        <Col numColSpan={2}>
          <Card>
            <div className='h-24'>
              <TabGroup >
                <TabList className='flex justify-end'>
                  <Tab>GET</Tab>
                  <Tab>SCAN</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Grid numItems={2} className='flex justify-between'>
                      <Flex className='gap-2'>
                        <TextInput placeholder='填写Rowkey'></TextInput>  
                        <TextInput placeholder='填写Columns(可选)'></TextInput>
                        <Icon
                            icon={HiInformationCircle}
                            variant="simple"
                            tooltip="(可选)填写列名,多个用逗号分隔"
                          />
                      </Flex>
                      <div className='m-2'>
                        <Button size='sm'>查询</Button>
                      </div>
                    </Grid>
                  </TabPanel>
                  <TabPanel>
                    <Flex>
                      <TextInput placeholder='start rowkey' className='mt-2 mr-1'></TextInput>
                      <TextInput placeholder='end rowkey' className='mt-2 mr-1'></TextInput>
                      <TextInput placeholder='prefix' className='mt-2 mr-1'></TextInput>
                      <TextInput placeholder='limit' className='mt-2 mr-1'></TextInput>
                      <TextInput placeholder='columns' className='mt-2 mr-1'></TextInput>
                      <Icon className='mt-2'
                            icon={HiInformationCircle}
                            variant="simple"
                            tooltip="(均为可选)建议填写limit,columns以逗号分隔,不填返回全部字段"
                          />

                    </Flex>
                  </TabPanel>
                </TabPanels>

              </TabGroup>
              
            </div>
          </Card>
          <Card className='mt-2'>
            <div className='h-96'>
              <Table className="mt-5">
                <TableHead>
                  <TableRow>
                    <TableHeaderCell>City</TableHeaderCell>
                    <TableHeaderCell>Rating</TableHeaderCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cities.map((item) => (
                    <TableRow key={item.city}>
                      <TableCell>
                        <Text>{item.city}</Text>
                      </TableCell>
                      <TableCell>
                        <Text>{item.rating}</Text>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Card>
        </Col>
     
      </Grid>
    </div>
  )
}

export default Query
