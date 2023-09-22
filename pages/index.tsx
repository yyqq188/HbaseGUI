import {
  ProgressBar,
  Card,
  Flex,
  Text,
  Metric,
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel,
  Title,
} from "@tremor/react";


import { FaWrench } from "react-icons/fa";
import { BsCalendarPlus } from "react-icons/bs";
import {BiSortAlt2,BiSearchAlt2,BiTable} from "react-icons/bi";

import TableInfo from './tableinfo'
import SyncData from './syncdata'
import MetaData from './metadata'
import Query from './query'
import CreateTable from './createtable'
const Home = () => {
  return (
    <Card>
      <Title>新华HBase管理平台</Title>
      <TabGroup>
        <TabList className="mt-8" >  
          <Tab icon={BiTable}>表详情</Tab>
          <Tab icon={BiSearchAlt2}>查询</Tab>
          <Tab icon={FaWrench}>表字段信息</Tab>
          <Tab icon={BsCalendarPlus}>创建表</Tab>
          <Tab icon={BiSortAlt2}>导入导出</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="mt-10">
              <TableInfo />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-10">
              <Query />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-10">
              <MetaData />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-10">
              <CreateTable />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="mt-10">
              <SyncData />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </Card>
  );
};


export default Home;