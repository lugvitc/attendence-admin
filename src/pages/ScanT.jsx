import React from "react";

// import { Link, useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
import axios from "axios";
// import QRCode from "qrcode";
import { useState, useEffect } from "react";
import b64ux from "b64ux";
import favicon from "../assets/favicon.png";
// import QRCode from 'qrcode';
// import QrReader from 'react-qr-reader';
// import QrReader from "react-qr-scanner";/
// import { Html5QrcodeScanner } from "html5-qrcode";

import { QrReader } from 'react-qr-reader';

export default function Scan() {
    const [data, setData] = useState('No result');

  const onSubmit = async (data) => {
    // const decoded = b64ux.decode(scanResult, "string");
    console.log('2');
    axios
      .post("http://localhost:8000/attend", {
        participant: data,
      })
      .then(function (response) {
        console.log(response.data);
        //   const decoded = ;
      })
      .catch(function (error) {
        console.log(error);
        //   toast.error("This didn't work.");
      });
  };




//   const [scanResult, setScanResult] = useState(null);

//   useEffect(() => {
//     if (scanResult) {
//       onSubmit();
//     }

//     return () => {};
//   }, [scanResult]);

//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner("reader", {
//       qrbox: {
//         width: 250,
//         height: 250,
//       },
//       fps: 5,
//     });

//     scanner.render(success, error);

//     function success(result) {
//       scanner.clear();
//       setScanResult(result);
//     }
//     function error(err) {
//       console.warn(err);
//     }
//   }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img src={favicon} className="h-40 w-40 my-7" alt="img" />
        <h1 className="font-bold my-1 text-5xl">The Linux Club</h1>
        <h2 className="font-bold my-4 text-3xl">Scanner</h2>
      </div>
      {/* scanner */}
      <div className="flex flex-col justify-center items-center">
        <div className="h-80 w-80 ">
        <QrReader
        onResult={(result, error) => {
          if (result) {
            // console.log('0');
            // console.log(result.text);
            // setData(result.text);
            // console.log(data);
            // onSubmit(data);
            // console.log('3');
            axios
      .post("http://localhost:8000/attend", {
        participant: result.text,
      })
      .then(function (response) {
        console.log(response.data);
        //   const decoded = ;
      })
      .catch(function (error) {
        console.log(error);
        //   toast.error("This didn't work.");
      });
          }

          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>{data}</p>
   
        </div>
        {/* <div className="h-80 w-80 ">
          {scanResult ? <></> : <div id="reader"></div>}
        </div> */}
      </div>
    </>
  );
}
