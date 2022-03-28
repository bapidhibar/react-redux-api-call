import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getData } from "../redux/actions/tableAction";
// import axios from 'axios';


export default function Table() {

    const dispatch = useDispatch();
    const mydata = useSelector((state) => state.Mydata.mydataPayload); //data access..

    // const [name, setName] = useState();
    // const [fatherName, setfName] = useState();
    // const [pAddress, setpAddress] = useState();
    // const [peAddress, setpeAddress] = useState();
    // const [Gender, setGender] = useState("Male");
    // const [pincode, setpincode] = useState();
    // const [emailid, setemailid] = useState();
    // const [dob, setdob] = useState();
    // const [mobileno, setmobileno] = useState();
    // const [city, setcity] = useState("Bihar");
    const [isShow, setisShow] = useState(false);


    const clickHandle = () => {
        setisShow(true);
    }

    useEffect(() => {
        dispatch(getData());
    }, []);



    // const changeName = (event) => {

    //     mydata.name = event.target.value;
    //     dispatch({
    //         type: 'MY_DATA',   //data store..
    //         payload: mydata
    //     });
    // }

    // const changefName = (event) => {

    //     mydata.fatherName = event.target.value;
    //     dispatch({
    //         type: 'MY_DATA',
    //         payload: mydata
    //     });
    // }
    // const changepAddress = (event) => {

    //     mydata.pAddress = event.target.value;
    //     dispatch({
    //         type: 'MY_DATA',
    //         payload: mydata
    //     });
    // }
    // const changepeAddress = (event) => {

    //     mydata.peAddress = event.target.value;
    //     dispatch({
    //         type: 'MY_DATA',
    //         payload: mydata
    //     });
    // }
    // const changeGender = (event) => {

    //     mydata.Gender = event.target.value;
    //     dispatch({
    //         type: 'MY_DATA',
    //         payload: mydata
    //     });
    // }
    // const changepincode = (event) => {

    //     mydata.pincode = event.target.value;
    //     dispatch({
    //         type: 'MY_DATA',
    //         payload: mydata
    //     });
    // }
    // const changeEmailid = (event) => {

    //     mydata.emailid = event.target.value;
    //     dispatch({
    //         type: 'MY_DATA',
    //         payload: mydata
    //     });
    // }
    // const changedob = (event) => {

    //     mydata.dob = event.target.value;
    //     dispatch({
    //         type: 'MY_DATA',
    //         payload: mydata
    //     });
    // }
    // const changemobileno = (event) => {

    //     mydata.mobileno = event.target.value;
    //     dispatch({
    //         type: 'MY_DATA',
    //         payload: mydata
    //     });
    // }
    // const changeCity = (event) => {

    //     mydata.city = event.target.value;
    //     dispatch({
    //         type: 'MY_DATA',
    //         payload: mydata
    //     });
    // }


    const clickReset = () => {

        // setName("");
        // setfName("");
        // setpAddress("");
        // setpeAddress("");
        // setGender("");
        // setpincode("");
        // setemailid("");
        // setdob("");
        // setmobileno("");
        // setcity("");


    };


    return (
        <>

            <table>
                <tbody>
                    {/* <tr>
                        <td>Counrty</td>
                        <td><input type="text" name="name" value={name} onChange={changeName} /></td>
                    </tr>

                    <tr>
                        <td>University</td>
                        <td><input type="text" name="fathername" value={fatherName} onChange={changefName} /></td>
                    </tr> */}

                    {/* <tr>
                        <td>Postal Address</td>
                        <td><input type="text" name="pAddress" value={pAddress} onChange={changepAddress} /></td>
                    </tr>

                    <tr>
                        <td>Personal Address</td>
                        <td><input type="text" name="personaladdress" value={peAddress} onChange={changepeAddress} /></td>
                    </tr>

                    <tr>
                        <td>Gender</td>
                        <td>
                            <input type="radio" name="Gender" value={Gender} onChange={changeGender} />Male
                            <input type="radio" name="Gender" value={Gender} onChange={changeGender} />Female
                        </td>
                    </tr>

                    <tr>
                        <td>City</td>
                        <td><select name="City" value={city} onChange={changeCity}>
                            <option value="Bihar">Bihar</option>
                            <option value="New Delhi">NEW DELHI</option>
                            <option value="Mumbai">MUMBAI</option>
                            <option value="Goa">GOA</option>
                            <option value="Patna">PATNA</option>
                        </select>
                        </td>
                    </tr>

                    <tr>
                        <td>PinCode</td>
                        <td><input type="text" name="pincode" value={pincode} onChange={changepincode} /></td>
                    </tr>

                    <tr>
                        <td>EmailId</td>
                        <td><input type="text" name="emailid" value={emailid} onChange={changeEmailid} /></td>
                    </tr>

                    <tr>
                        <td>DOB</td>
                        <td><input type="text" name="dob" value={dob} onChange={changedob} /></td>
                    </tr>

                    <tr>
                        <td>MobileNo</td>
                        <td><input type="text" name="mobileno" value={mobileno} onChange={changemobileno} /></td>
                    </tr> */}

                    <tr>
                        {/* <td><input type="button" value="Reset" onClick={clickReset} /></td> */}
                        <td><input type="button" value="Click here to find colleges" onClick={clickHandle} /></td>
                    </tr>

                    {
                        isShow ?
                            <>
                                {mydata?.map(function (value,index) {
                                    return (
                                        <div key={index}>
                                            <p>Counrty: {value?.country}</p>
                                            <p>University: {value?.name}</p>
                                           <hr/>
                                        </div>
                                    )
                                })}

                            </>
                            :
                            <></>
                    }
                </tbody>
            </table>



        </>
    );


};