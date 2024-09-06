import { Box, Flex, Text } from '@chakra-ui/react';

export const ForecastItem = ({ temp, feels_like, temp_min, temp_max, pressure, humidity, sea_level, grnd_level }) => {
    return (
        <Box 
            display='flex'
            flexDirection='column'
            border='1px'
            borderRadius='10px'
            padding='10px'
            gap='20px'
            width='fit-content'
        >
            <Text fontSize='md'>Temp: {temp}</Text>
            <Text fontSize='md'>Feels like: {feels_like}</Text>
            <Text fontSize='md'>Min temp: {temp_min}</Text>
            <Text fontSize='md'>Max temp: {temp_max}</Text>
            <Text fontSize='md'>Pressure: {pressure}</Text>
            <Text fontSize='md'>Humidity: {humidity}</Text>
            <Text fontSize='md'>Sea level: {sea_level}</Text>
            <Text fontSize='md'>Ground level: {grnd_level}</Text>
        </Box>
    )
}