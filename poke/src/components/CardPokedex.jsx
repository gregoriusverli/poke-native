import React, {useEffect, useState} from 'react';

import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
} from 'native-base';
import {windowHeight, windowWidth} from '../globarVar';
import {useDispatch} from 'react-redux';
import {setLoading} from '../store/action';

export default function CardPokedex({poke}) {
  const dispatch = useDispatch();
  const [image, setImage] = useState('');
  const [types, setTypes] = useState([]);
  const [color, setColor] = useState('');
  const [idPoke, setIdPoke] = useState('');

  useEffect(() => {
    fetchPoke();
  }, []);

  async function fetchPoke() {
    try {
      const response = await fetch(`${poke.url}`);
      if (response.ok) {
        const result = await response.json();
        setImage(result.sprites.front_default);
        setTypes(result.types);
        setIdPoke(result.id);
        const response = await fetch(`${result.species.url}`);
        if (response.ok) {
          const {color} = await response.json();
          setColor(color.name);
        } else {
          throw Error;
        }
      } else {
        throw Error;
      }
    } catch (error) {
      //   console.log(error, 'error card');
    }
  }

  return (
    <Box
      rounded="lg"
      overflow="hidden"
      shadow={1}
      style={{
        backgroundColor: 'black',
        width: windowWidth * 0.45,
        height: windowHeight / 5,
      }}>
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image src={image} alt="image" />
        </AspectRatio>
        <Center
          bg="violet.500"
          _text={{color: 'white', fontWeight: '700', fontSize: 'xs'}}
          position="absolute"
          bottom={0}
          px="3"
          py="1.5">
          PHOTOS
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            The Garden City
          </Heading>
          <Text
            fontSize="xs"
            _light={{color: 'violet.500'}}
            _dark={{color: 'violet.300'}}
            fontWeight="500"
            ml="-0.5"
            mt="-1">
            The Silicon Valley of India.
          </Text>
        </Stack>
        <Text fontWeight="400">
          Bengaluru (also called Bangalore) is the center of India's high-tech
          industry. The city is also known for its parks and nightlife.
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="gray.500" fontWeight="400">
              6 mins ago
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
}
