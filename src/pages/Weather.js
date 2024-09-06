import { useState, useCallback, Fragment } from "react";
import { api } from '../api/index';
import { Flex, Input, Stack, Radio, RadioGroup, IconButton, Box, Text } from "@chakra-ui/react";
import { SearchIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { IF } from '../components/If';
import { ForecastItem } from '../components/ForecastItem';
import { Link } from "react-router-dom";
import moment from "moment";

export const Weather = () => {
    const defaultForm = {
        cityName: '',
        days: 1
      };
      const [form, setForm] = useState(defaultForm);
      const handleForm = useCallback(({ target: { name, value } }) => {
        setForm((prevForm) => ({ ...prevForm, [name]: value }));
      }, []);
      const [visivilityForecast, setVisivilityForecast] = useState(null);
      const [forecast, setForecast] = useState(null);
    
      const handleFindWeather = async() => {
        try {
          const cityCoordinates = await api.getCityCoordinates(form.cityName);
          const { data } = cityCoordinates;
    
          if (!data.length) {
            throw new Error('No city');
          }
    
          let response;
          const { lat, lon } = data[0];
    
          if (form.days === 1) {
            response = await api.getWeather({ lat, lon });
          } else {
            response = await api.getDaysForecast({ lat, lon });
            const grouppedDates = {};
            response.data.list.map((item) => {
                const date = moment.unix(item.dt).format('DD.MM.YYYY');

                if (grouppedDates[date]) {
                    grouppedDates[date].push({ ...item.main });
                } else {
                    grouppedDates[date] = [{ ...item.main }];
                }
            });
            response.data.list = grouppedDates;
          }
    
          setVisivilityForecast(form.days);
          setForecast(response.data);
        } catch(e) {
          alert(e);
        }
      }
    
      return (
        <>
        {/* <div style={{ position: 'absolute', top: '30px', left: '20px' }}>
            <Link to='/' style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <IconButton icon={<ArrowBackIcon />}/>
                Back
            </Link>
        </div> */}
          <Flex maxWidth={600} direction='column' padding='20px 0' gap='20px'>
            <Flex gap='20px'>
              <Input placeholder="Enter city name" name="cityName" onChange={handleForm} color='black'/>
              <IconButton aria-label='Search database' icon={<SearchIcon />} onClick={handleFindWeather} />
            </Flex>
            <RadioGroup 
              onChange={(days) => {
                handleForm({ target: { name: 'days', value: +days } })
              }}
              value={form.days}
            >
              <Stack direction='row'>
                <Radio value={1}>1 day forecast</Radio>
                <Radio value={5}>5 day / 3 hours forecast</Radio>
              </Stack>
            </RadioGroup>
          </Flex>
          <IF condition={forecast !== null}>
              <IF condition={visivilityForecast === 1}>
                <Box display='flex' gap='20px' flexDirection='column'>
                    <Text as='b'>{moment().format('DD.MM.YYYY')}</Text>
                    <ForecastItem {...forecast?.main} />
                </Box>
              </IF>
              <IF condition={visivilityForecast === 5}>
                <Flex direction="column" gap='20px' width='100vw' padding='0 50px'>
                  {
                    !!forecast?.list && Object.entries(forecast?.list).map(([key, value]) => (
                        <Box display='flex' gap='20px' marginBottom='50px' flexDirection='column' width='100%' justifyContent='start' key={key}>
                            <Text as='b'>{key}</Text>
                            <Box display='flex' gap='20px' flexWrap='wrap'>
                                {value?.map((item, index) => (
                                    <ForecastItem key={`${key}-${index}`} {...item} />
                                ))}
                            </Box>
                        </Box>
                    ))
                  }
                </Flex>
              </IF>
            </IF>
        </>
      );
}