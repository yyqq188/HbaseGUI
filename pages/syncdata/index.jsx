import { Tab, TabGroup, TabList, TabPanel, TabPanels, TextInput, Title,Text, Flex } from '@tremor/react'
import React from 'react'

const SyncData = () => {
  return (
    <>
    <TabGroup>
      <TabList>
        <Tab>开发环境导入</Tab>
        <Tab>测试环境导入</Tab>
        <Tab>生产环境导出</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Flex>
          <div className='w-40'>
            <Text color='red'>表名</Text>
          </div>
          <TextInput></TextInput>
          </Flex>
          
          <Flex>
          <div className='w-40'>
            <Text color='red'>hdfs路径</Text>
          </div>
          <TextInput></TextInput>
          </Flex>
          <Flex>
          <div className='w-40'>
            <Text color='red'>远程目录</Text>
          </div>
          <TextInput></TextInput>
          </Flex>
          <Flex>
          <div className='w-40'>
            <Text color='red'>本地目录</Text>
          </div>
          <TextInput></TextInput>
          </Flex>
          <Flex>
          <div className='w-40'>
            <Text color='red'>开始时间戳</Text>
          </div>
          <TextInput></TextInput>
          </Flex>
          <Flex>
          <div className='w-40'>
            <Text color='red'>结束时间戳</Text>
          </div>
          <TextInput></TextInput>
          </Flex>
        </TabPanel>
        <TabPanel>
          <Title>2</Title>
        </TabPanel>
        <TabPanel>
          <Title>3</Title>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    </>
  )
}

export default SyncData
