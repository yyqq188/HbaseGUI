import React from 'react'
import { Card,Grid,Col ,Text, List, ListItem, Title, Button,Metric, Icon,
  TabList,Tab, TabPanels, TabPanel, TabGroup, TextInput, Flex,
  Table, TableHead, TableHeaderCell, TableBody, TableRow, TableCell, TableFoot, TableFooterCell } from '@tremor/react'
import { GrUpdate } from "react-icons/gr";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { RxReset } from "react-icons/rx";

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
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
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
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
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
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
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
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
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
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
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
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
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
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
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
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
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
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
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
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
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
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
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
  },
  {
    city: "Vienna",
    rating: "1 open PR",
  },
  {
    city: "Ermatingen",
    rating: "0 open PR",
  },
  {
    city: "Lisbon",
    rating: "0 open PR",
  },
];

const CreateTable = () => {
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
          <Card >
            <div  className='h-96'>
              <Flex>
                <div className='mt-2 w-40'>
                  <Text>表名</Text>
                </div>
                
                <TextInput placeholder='' className='mt-2'></TextInput>
              </Flex>
              <Flex>
              <div className='mt-2 w-40'>
                  <Text>列族名</Text>
                </div>
                <TextInput placeholder='' className='mt-2'></TextInput>
              </Flex>
              <Flex>
              <div className='mt-2 w-40'>
                  <Text>最大版本</Text>
                </div>
                <TextInput placeholder='' className='mt-2'></TextInput>
              </Flex>
              <Flex>
              <div className='mt-2 w-40'>
                  <Text>数据过期时间ms</Text>
                </div>
                <TextInput placeholder='' className='mt-2'></TextInput>
              </Flex>
              <Flex>
              <div className='mt-2 w-40'>
                  <Text>start rowkey</Text>
                </div>
                <TextInput placeholder='' className='mt-2'></TextInput>
              </Flex>
              <Flex>
              <div className='mt-2 w-40'>
                  <Text>end rowkey</Text>
                </div>
                <TextInput placeholder='' className='mt-2'></TextInput>
              </Flex>
              <Flex>
              <div className='mt-2 w-40'>
                  <Text>num regions</Text>
                </div>
                <TextInput placeholder='' className='mt-2'></TextInput>
              </Flex>
            </div>
            <div className='flex justify-around mt-2'>
              <Button icon={AiOutlinePlusCircle}>创建</Button>
              <Button icon={RxReset}>重置</Button>
            </div>
            
            <div className='h-40'></div>
          </Card>
        </Col>
     
      </Grid>
    </div>
  )
}

export default CreateTable
