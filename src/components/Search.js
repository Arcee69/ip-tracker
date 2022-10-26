import React, { useState, useContext, useEffect } from 'react';
import Arrow from "../asset/images/icon-arrow.svg";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch} from 'react-redux';
import * as Yup from "yup";
import axios from 'axios';
import "../App.css";
import { getIpRequest, getIpSuccess, getIpFailure, getIpReset } from '../redux/action/ipAddress';

const Search = () => {
    const [ipAddressData, setipAddressData] = useState();
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const ipAddressSchema = Yup.object().shape({
        ipAddress: Yup.string()
        //         .matches(
        //     /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        //     'Enter correct ipAddress!'
        // )
        .required('Kindly Enter an Ip Address'),
      });

    

    const apiKey = "at_BqHSurbemZjMNGoPiEzJU9Pklk0hS";

    const submitIpAddress = async (values) => {
        dispatch(getIpRequest())

        setLoading(true);
        await axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_BqHSurbemZjMNGoPiEzJU9Pklk0hS&ipAddress=${values?.ipAddress}`)
        .then((response) => {
            dispatch(getIpSuccess(response?.data))
            setipAddressData(response?.data);
            setLoading(false);
        })
        .catch((err) => {
            dispatch(getIpFailure(err))
            return err;
        })
    };

    // useEffect(() => {
    //     submitIpAddress();
    // }, [ipAddressData])


    return (
    <>
        <div>
            <Formik
            initialValues={{
                ipAddress: '',
            }}
            validationSchema={ipAddressSchema}
            onSubmit={values => {
                // same shape as initial values
                console.log(values, "okolok");
               submitIpAddress(values);
            
            }}
            >
                {({ 
                    handleSubmit,
                    errors, 
                    touched,
                    values 
                }) => (
                    <Form onSubmit={handleSubmit} className="w-full relative sm:top-12 xs:top-14 z-10">
                        <div className='sm:w-6/12 xs:w-11/12 flex xs:flex-col xs:justify-between sm:flex-col mx-auto sm:items-center sm:justify-center sm:p-7 xs:p-3 bg-PRIMARY_DARK_VIOLET'>
                            <div className='sm:w-6/6 xs:w-6/6 xs:mt-2 sm:mt-0 flex flex-row justify-center'>
                                <div>
                                    <Field 
                                        name="ipAddress" 
                                        values={values.ipAddress}
                                        className="sm:w-6/6 xs:w-full h-10 rounded-l-md p-2 outline-none"
                                        placeholder=" Shorten a link here..." 
                                    />
                                </div>
                                <div className='sm:w-6/6 xs:w-6/6 text-center'>
                                    <button type="submit" className='text-white xs:text-sm h-10 rounded-r-md w-10 bg-black p-3 sm:text-sm  border'>
                                        {loading ? 
                                            "..."
                                            : <img src={Arrow} alt="arrow" />
                                        }
                                    </button>   
                                </div>
                            </div>
                            <div className='text-red-500 text-lg mt-2'>
                                <ErrorMessage name="ipAddress"  />
                            </div>    
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
        {ipAddressData &&
            <div className="w-full mt-5 relative sm:top-12 xs:top-14 z-10 flex flex-row items-center justify-center">
                <div className='xs:w-11/12 sm:w-9/12 border rounded-md mx-auto flex xs:flex-col sm:flex-row sm:justify-between sm:items-center xs:p-3  sm:p-5  bg-white'>
                    <div className='flex flex-col w-4/12'>
                        <div className='text-xs text-gray-400 font-medium'>IP ADDRESS</div>
                        <div className='xs:w-12/12 sm:w-3/6 font-medium text-black sm:mt-2'>{ipAddressData?.ip}</div>
                    </div>
                    <div className='flex flex-col w-4/12'>
                        <div className='text-xs text-gray-400 font-medium'>LOCATION</div>
                        <div className='xs:w-12/12 sm:w-3/6 font-medium text-black sm:mt-2'>{ipAddressData?.location?.city}</div>
                    </div>
                    <div className='flex flex-col w-4/12'>
                        <div className='text-xs text-gray-400 font-medium'>TIMEZONE</div>
                        <div className='xs:w-12/12 sm:w-3/6 font-medium text-black  sm:mt-2'>{`UTC${ipAddressData?.location?.timezone}`}</div>
                    </div>
                    <div className='flex flex-col w-4/12'>
                        <div className='text-xs text-gray-400 font-medium'>ISP</div>
                        <div className='xs:w-12/12 sm:w-3/6 font-medium text-black sm:mt-2'>{ipAddressData?.isp}</div>
                    </div>
                </div>
            </div> 
        }
    </>    
    );
};

export default Search;