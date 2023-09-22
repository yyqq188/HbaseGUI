import React from 'react'
import { Flex, TextInput,Title ,Text, Grid} from '@tremor/react'
import { useState } from 'react'
const tableinfo = () => {

  const [bloomFilter,setBloomFilter] = useState('')
  const [versions,setVersions] = useState('')
  const [keepDeletedCells,setKeepDeletedCells] = useState('')
  const [ttl,setTtl] = useState('')
  const [blockSize,setBlockSize] = useState('')
  const [inMemory,setInMemory] = useState('')
  const [minVersions,setMinVersions] = useState('')
  const [dataBlockEncoding,setDataBlockEncoding] = useState('')
  const [compression,setCompression] = useState('')
  const [replicationScope,setReplicationScope] = useState('')

  return (
    <div>
      <Grid numItems={2} className='gap-2'>
      <Flex >
        <div className='w-40'>
          <Text className='font-bold'>bloomFilter</Text>
        </div>
        <TextInput className="w-80" placeholder="" value='' />
      </Flex>
      <Flex >
        <div className='w-40'>
          <Text className='font-bold'>versions</Text>
        </div>
        <TextInput className="w-80" placeholder="" value='' />
      </Flex>
      <Flex >
        <div className='w-40'>
          <Text className='font-bold'>keepDeletedCells</Text>
        </div>
        <TextInput className="w-80" placeholder="" value='' />
      </Flex>
      <Flex >
        <div className='w-40'>
          <Text className='font-bold'>ttl</Text>
        </div>
        <TextInput className="w-80" placeholder="" value='' />
      </Flex>
      <Flex>
        <div className='w-40'>
          <Text className='font-bold'>blockSize</Text>
        </div>
        <TextInput className='w-80' placeholder="" value='' />
      </Flex>
      <Flex >
        <div className='w-40'>
          <Text className='font-bold'>inMemory</Text>
        </div>
        <TextInput className="w-80" placeholder="" value='' />
      </Flex>
      <Flex>
        <div className='w-40'>
          <Text className='font-bold'>minVersions</Text>
        </div>
        <TextInput className="w-80" placeholder="" value='' />
      </Flex>
      <Flex >
        <div className='w-40'>
          <Text className='font-bold'>dataBlockEncoding</Text>
        </div>
        <TextInput className="w-80" placeholder="" value='' />
      </Flex>
      <Flex >
        <div className='w-40'>
          <Text className=''>compression</Text>
        </div>
        <TextInput className="w-80" placeholder="" value='' />
      </Flex>
      <Flex >
        <div className='w-40'>
          <Text className='font-bold'>replicationScope</Text>
        </div>
        <TextInput className="w-80" placeholder="" value='' />
      </Flex>
      </Grid>
      
      
    </div>
  )
}

export default tableinfo
