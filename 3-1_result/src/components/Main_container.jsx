import React, { useState } from "react";
import "../App.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";

function Main_container() {
  let [captchashow, setcaptchashow] =useState("")
  let [student, setstudent] = useState("");
  let [Search, setsearch] = useState("Search");
 
  let [display,setdisplay] = useState("hidden");
  const searchf = (e) => {
    if (Search == "Search Another result") {
      window.location.reload(); 
      
     
    }
    if (captcha == true) {
      if (student in toppers || student in names) {
        setsearch((prev) => {
          if (prev === "Search") {
            submit(e)
           return "Search Another result"// Update the state
          } 
        });
        
       
        setdisplay(" ")
        
        
      }
    }
  };

  const inputfun = (Search) => {};

  let captcha = false;

  function handleVerificationSuccess() {
    captcha = true;
  }
  async function submit(e) {
    e.preventDefault(); // Prevent form submission from refreshing the page
    const name = stname;

    try {
        const response = await fetch(`https://script.google.com/macros/s/AKfycbz080tgc1gb57Bg83c35IJwinRMI1FQXciSpnSL2nbTmzsrVI_prD1thcfo5uZiEyxX6w/exec?name=${encodeURIComponent(name)}`, {
            method: 'GET', // Use GET as per the updated Google Apps Script
        });

        
    } catch (error) {
        console.error('Error:', error);
        
    }
}
  let subjectcodecode = [
    "20A05503",
    "20A05502T",
    "20A56501",
    "20A05504A",
    "20A05501T",
  ];
  let labcodes = ["20A05506", "20A05501P", "20A05502P"];
  let m30codes = ["20A99201A", "20A05507"];
  let m30 = ["ENVIRONMENTAL SCIENCE", "COMMUNITY SERVICE PROJECT"];
  let labs = [
    "SOC III-ADVANCED WEB APPLICATION DEVELOPMENT",
    "COMPUTER NETWORKS LAB",
    "ARTIFICIAL INTELLIGENCE LAB",
  ];
  let subjects = [
    "FORMAL LANGUAGES AND AUTOMATA THEORY",
    "ARTIFICIAL INTELLIGENCE",
    "MATERIALS CHARACTERIZATION TECHNIQUES",
    "SOFTWARE PROJECT MANAGEMENT",
    "COMPUTER NETWORKS",
  ];

  const names = {
    "22F71A0501": "SHAIK NAYAB SABGARI ABDUL KHADER",
    "22F71A0502": "PATAN ABDULLA",
    "22f71a0503": "SYED ABDULLA",
    "22f71A0504": "SYED AFFAN",
    "22F71A0505": "SYED AFRIDI",
    "22f71A0506": "SHAIK AFZAL",
    "22F71A0507": "PATAN ASIFA",
    "22F71A0508": "BEPARI ASIYA KHANAM",
    "22F71A0510": "SHAIK AYESHA BANU",

    "22F71A0512": "SHAIK BABAFAQRUDDIN",
    "22F71A0513": "CHERUVU BABA SHARIEF",
    "22F71A0514": "SHAIK BABJI",
    "22F71A0515": "TAMMELA BALA KRISHNA",
    "22F71A0516": "SHAIK BAVATAJ",
    "22F71A0517": "SHAIK BEEBI AYESHA",
    "22F71A0518": "CHERLOPALLI BHANU PRAKASH",
    "22f71A0519": "BHAVANA THUMMALA",
    "22F71A0520": "MADANAPALLI BHUVANESWARI",
    "22F71A0521": "MATURI CHARAN",
    "22F71A0522": "CHAGALAMARRI CHINNAREDDAIAH",
    "22F71A0523": "PATAN DARBAR",
    "22F71A0524": "NIMMANAPALLE DINESH REDDY",

    "22F71A0526": "SYED FAIZAN",
    "22F71A0527": "SHAIK FANISHMA",

    "22F71A0530": "MUKKARA SUSHMITHA",
    "22F71A0531": "SHAIK FAZALAY ELAHI",
    "22F71a0532": "PATHAN FUMAID KHAN",
    "22F71A0533": "RAJUPALEM GEETHANJALI",
    "22F71A0534": "KONDURU HARISH KUMAR RAJU",
    "22F71A0535": "RUDRARAJU HARSHITHA",
    "22F71A0536": "SHAIK HEENA",

    "22F71A0538": "GUNDLURU HIMAJA",
    "22F71A0539": "PATHAN ISRA KHANAM",
    "22F71A0540": "SHAIK USMAN",
    "22F71A0541": "VEMPALLI JAVEED",
    "22F71A0542": "CHAVVAKULA KOYALATHA",

    "22F71A0545": "VEERABALLI LAKSHMI PRASANNA",
    "22F71A0546": "KANCHAM NIHARIKA",
    "22F71A0547": "BOMMALA MADHAVI",
    "22F71A0548": "PATAN MAHAMMED FAHAD",

    "22F71A0550": "AVULA MANOHAR",

    "22F71A0554": "SHAIK MOHAMMAD ALI",
    "22F71A0555": "SYED MOHAMMAD VASEEM",
    "22F71A0556": "SHAIK MOHAMMED KHIZER",
    "22F71A0557": "SYED MOHAMMED UMER",
    "22F71A0558": "SHAIK MOHAMMED UZAIR",
    "22F71A0559": "SHAIK MOHASEENA",

    "22F71A0561": "BUDDA MUKESH KUMAR",
    "22F71A0562": "VELPULA NAVEEN KUMAR",

    "22F71A0564": "KOTI REDDY JITHENDRA",

    "22F71A0566": "SYED MUSTAK",
    "22F71A0567": "AFKHAN RIYAN KHAN",
    "22F71A0568": "SHAIK THAHASEEN",
    "22F71A0569": "BATHALA VISHNUTEJA",
    "22F71A0570": "ABDUL REHMAN SHAIK",
    "22F71A0571": "AVINASH REDDY AMIREDDY",
    "22F71A0572": "MURALI KAMMINENI",
    "22F71A0573": "NAGA SUDHARSHAN RAJU SANGARAJU",
    "22F71A0575": "NANDINI JANAKEDDU",
    "22F71A0576": "NAVYA SREE TEKURI",
    "22F71A0577": "LATISH KUMAR CHAVAKULA",
    "22F71A0578": "PALLAVI SEITEM",
    "22F71A0579": "PAWAN KUMAR REDDY THIMMIREDDYKARI",
    "22F71A0580": "POOJITHA YAMNAMURI",
    "22F71A0581": "PRASANNA KOMIREDDY",
    "22F71A0582": "RAGHAVENDRA DERANGULA",
    "22F71A0583": "RAJESH RAJU KONDURU",
    "22F71A0584": "RAJYA LAKSHMI KAMATHAM",
    "22F71A0585": "REDDAIAH CHENNAMSETTY",
    "22F71A0586": "REDDY BABU BODIGOLLA",
    "22F71A0587": "REDDY HARISH SOMA",
    "22F71A0588": "REDDY KISHORE BURSU",
    "22F71A0589": "REDDY NAGA GAYATRI MOTHUKURI",
    "22F71A0590": "REDDY PRASAD REDDY ARAVA",
    "22F71A0591": "REDDY RANI YARININTI",
    "22F71A0592": "REDDY VENKATA JASWANTH GOGUDPALLE",

    "22F71A0595": "REHANA SHAIK",
    "22F71A0596": "REVATHI PULLAGURA",
    "22F71A0597": "Roothi Jarugumalli",

    "22F71A05A0": "Sai Manoj Gajula",
    "22F71A05A1": "SAI MOKSHITH POOLA",
    "22F71A05A2": "SAI SREE VALAGATRA",

    "22F71A05A5": "SATHEESH REDDY POLU",
    "22F71A05A6": "SHAHAN KHAN MAYANA",
    "22F71A05A7": "SHAHINSHA ALI SHAIK",

    "22F71A05A9": "SIVA PAVAN BHUPATHI",

    "22F71A05B1": "SOUMYA KUPPAM",
    "22F71A05B2": "SRAVANI NIMMANAPALLI",
    "22F71A05B3": "SREENIVAS REDDY PALLEM",
    "22F71A05B4": "SUDHEESHA AVULA",
    "22F71A05B5": "FAWAZ BASHA SHAIK",
    "22F71A05B6": "SWARNA GOWRI MADAKALA",
    "22F71A05B7": "SYED BASHA SHAIK",
    "22F71A05B8": "TEJASWANI VEMI REDDY",

    "22F71A05C1": "JAGADEESHWAR DERANGULA",
    "22F71A05C2": "VANAM DIDDISETTY",
    "22F71A05C3": "VEENA VANI PERNAPATI",
    "22F71A05C4": "VENKAT RATNAS LOTHITH ANNATH",
    "22F71A05C5": "VENKATA KUMAR KOYYA",
    "22F71A05C6": "VENKATA SAI VANADDI",
    "22F71A05C7": "YASWANTH KUMAR RAJU PALLAPU",
    "22F71A05C8": "YAMINI VALLAIPU",
    "22F71A05C9": "DINESH KUMAR NALLBOTHULA",

    "22F71A05D1": "ZUBER BASHA SHAIK",
    "23F75A0501": "Ahmed Shaik",
    "23F75A0502": "Asad Tarigonda Shaik",
    "23F75A0503": "Harish Musalagolla",
    "23F75A0504": "Lasya Devaravula",
    "23F75A0505": "Mahalakshmi Thanuku",
    "23F75A0506": "Sreenad Kuppam",
    "23F75A0507": "Vishnu Vardhan Reddy Chintam",
    "23F75A0508": "Vishnu Vardhna Somineni",
    "23F75A0509": "Purna Sai Reddy M P",
    "23F75A0510": "Sujith Mandem",
  };

  let toppers = {
    "22F71A0560": "SYED MUHAMMED FARHAN",
    "22F71A0511": "SHAIK AYESHA SANA",
    "22F71A0525": "SHAIK EMAN",
    "22F71A0528": "SHAIK FAREEHA",
    "22F71A0529": "SHAIK FARHANA",
    "22F71A0537": "YANDAPALLI HEMA SREE",
    "22F71A0543": "SHAIK KHUBRA BANU",
    "22F71A0544": "SHAIK KUBRA SUHANA",
    "22F71A0549": "SHAIK MAHINOOR",
    "22F71A0551": "SHAIK MANSOORA",
    "22F71A0553": "SHAIK MAVIYA",
    "22f71A0552": "SHAIK MARIYA BATHUL",
    "22F71A0563": "PAVANI JAVAJI",
    "22F71A0565": "PATAN MUSKAN",
    "22F71A0593": "REEMA SHAIK",
    "22F71A0594": "REEMA SHAIK",
    "22F71A05A3": "SANA SHAZIYA SYED",
    "22F71A05A4": "SANIYA SHAIK",
    "22F71A05A8": "SHAJINEEN SHAIK",
    "22F71A05C0": "THANJILA SHAIK",
    "22F71A05D0": "ZOYA MUSKAN SHAIK",
    "22F71A05B0": "SOFIYA ASMI SHAIK",
    "22F71A05D2": "ZUBERIYA TASLIM KHATEEB",
    "22F71A0598": "Saba Hunen Shaik",
    "22F71A0599": "Safiya Kalakada",
  };

  let mforsub = function score() {
    let a = Math.floor(Math.random() * 10) + 20;
    let b = Math.floor(Math.random() * 20) + 50;
    let totalmarks = a + b;
    let grade = "D";

    if (totalmarks > 89) {
      grade = "S";
    } else if (totalmarks > 79) {
      grade = "A";
    } else if (totalmarks > 69) {
      grade = "B";
    } else if (totalmarks > 59) {
      grade = "C";
    } else {
      grade = "D";
    }

    return [a, b, totalmarks, grade, 3];
  };

  let mforsubt = function score() {
    let a = Math.floor(Math.random() * 10) + 20;
    let b = Math.floor(Math.random() * 40) + 10;
    let totalmarks = a + b;
    let grade = "D";

    if (totalmarks > 89) {
      grade = "S";
    } else if (totalmarks > 79) {
      grade = "A";
    } else if (totalmarks > 69) {
      grade = "B";
    } else if (totalmarks > 59) {
      grade = "C";
    } else if (totalmarks > 49) {
      grade = "D";
    } else {
      grade = "E";
    }

    return [a, b, totalmarks, grade, 3];
  };

  let mforlabs = function scoreforlab() {
    let a = Math.floor(Math.random() * 5) + 25;
    let b = Math.floor(Math.random() * 5) + 65;
    let totalmarks = a + b;
    let grade = "D";

    if (totalmarks > 89) {
      grade = "S";
    } else if (totalmarks > 79) {
      grade = "A";
    } else if (totalmarks > 69) {
      grade = "B";
    } else if (totalmarks > 59) {
      grade = "C";
    } else if (totalmarks > 49) {
      grade = "D";
    } else {
      grade = "E";
    }

    return [a, b, totalmarks, grade, 1.5];
  };

  function resultofNl(subjectcode, subjectName) {
    const result = mforlabs();
    let status;
    if (result[1] > 21) {
      status = "P";
    } else {
      status = "F";
      result[4] = 0;
      result[3] = "F";
    }
    return [
      subjectcode,
      subjectName,
      result[0],
      result[1], // First random score
      result[2], // Total marks
      status,
      result[4],
      result[3], // Grade
    ];
  }

  function reportofN(subjectcode, subjectName) {
    const result = mforsub();
    let status;
    if (result[1] > 21) {
      status = "P";
    } else {
      status = "F";
      result[4] = 0;
      result[3] = "F";
    }
    return [
      subjectcode,
      subjectName,
      result[0],
      result[1], // First random score
      result[2], // Total marks
      "P",
      result[4],
      result[3], // Grade
    ];
  }

  function reportoft(subjectcode, subjectName) {
    const result = mforsubt();
    let status;
    if (result[1] > 21) {
      status = "P";
    } else {
      status = "F";
      result[4] = 0;
      result[3] = "F";
    }
    return [
      subjectcode,
      subjectName,
      result[0],
      result[1], // First random score
      result[2], // Total marks
      status,
      result[4],
      result[3], // Grade
    ];
  }

  let resultforlabs = [];

  let resultofsub = [];

  let stname;

  if (student in toppers) {
    stname = toppers[student];
    for (let index = 0; index < 5; index++) {
      resultofsub.push(reportoft(subjectcodecode[index], subjects[index]));
    }

    for (let index = 0; index < 3; index++) {
      resultforlabs.push(resultofNl(labcodes[index], labs[index]));
    }
  } else {
    stname = names[student];
    for (let index = 0; index < 5; index++) {
      resultofsub.push(reportofN(subjectcodecode[index], subjects[index]));
    }

    for (let index = 0; index < 3; index++) {
      resultforlabs.push(resultofNl(labcodes[index], labs[index]));
    }
  }

  return (
    <div className="sm:w-[1250px]  sm:h-[120vh] sm:m-5 min-h-[100vh]">
      <div className="items-center  grid place-content-center m-7  ">
        <div className="  flex flex-col justify-center p-5  tbox  mt-4  sm:w-[1250px] ">
          Title : B.Tech III Year I Semester (R20) Regular Examinations,
          November 2024 
        </div>
        <div className="mt-8 mb-10 mbox shadow-md w-full grid place-content-center rounded-sm  pt-5 ">
          <div className="bg tittle sm:flex items-center sm:space-x-10 pt-3">
            <div className="font-bold text-black text-xl pb-3">
              Enter Hallticket Number : #
            </div>
            <div>
              <input
                type="text"
                placeholder="Hallticket Number"
                readOnly={Search==="Search Another result"}
                onChange={(e) => setstudent(e.target.value)}
                
             
                className="border-[1px] p-2 border-slate-700 "
              />
            </div>
          </div>
          <div className={` pt-5 mt-5 ${Search=="Search Another result" ? "hidden":" "} `} >
            <HCaptcha
              sitekey="11008032-573a-4956-bfc0-baf4ec784b0e"
              onVerify={(token, ekey) => handleVerificationSuccess(token, ekey)}
            />
          </div>
          <div className="pt-3 mt-5 mb-5 ">
            <button
              className=" bg-blue-900  hover:shadow-xl active:bg-blue-800 cursor-pointer text-white p-2  pl-4 pr-4 rounded-lg font-normal"
              onClick={searchf}
            >
              {Search}
            </button>
          </div>
        </div>
        <div className={`name ${display} m-7 sm:flex justify-evenly text-md  sm:${display}`}>
          <div className="font-bold">
            HallTicket Number :<span className="text-red-800"> {student}</span>
          </div>
          <div className="font-bold">
            Student Name :<span className="text-red-800"> {stname}</span>
          </div>
        </div>
        <div className={`${display} sm:overflow-hidden overflow-scroll rounded-xl border`}>
          <table className="table-auto border-collapse border border-gray-300 w-full text-sm rounded-xl">
            <thead className="rounded-lg">
              <tr className="bg-blue-100 ">
                <th className="border border-gray-300   min-w-[120px] p-2">
                  Subject Code
                </th>
                <th className="border border-gray-300  min-w-[200px]  p-1">
                  Subject Name
                </th>
                <th className="border border-gray-300   w-[100px] p-3">
                  Internal Marks
                </th>
                <th className="border border-gray-300   w-[100px] p-3">
                  External Marks
                </th>
                <th className="border border-gray-300    w-[100px] p-3">
                  Total Marks
                </th>
                <th className="border border-gray-300   w-[100px] p-3">
                  Result Status
                </th>
                <th className="border border-gray-300 w-[100px]   p-3">
                  Credits
                </th>
                <th className="border border-gray-300   w-[100px] p-3">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr className="odd:bg-white">
                <td className="border border-gray-300   p-2">
                  {resultofsub[0][0]}
                </td>
                <td className="border border-gray-300    text-left  p-2">
                  {resultofsub[0][1]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[0][2]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[0][3]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[0][4]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[0][5]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[0][6]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[0][7]}
                </td>
              </tr>
              <tr className="odd:bg-white">
                <td className="border border-gray-300    p-2">
                  {resultforlabs[0][0]}
                </td>
                <td className="border border-gray-300  text-left  p-2">
                  {resultforlabs[0][1]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[0][2]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[0][3]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[0][4]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[0][5]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[0][6]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[0][7]}
                </td>
              </tr>{" "}
              <tr className="odd:bg-white">
                <td className="border border-gray-300   p-2">
                  {resultofsub[1][0]}
                </td>
                <td className="border border-gray-300    text-left  p-2">
                  {resultofsub[1][1]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[1][2]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[1][3]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[1][4]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[1][5]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[1][6]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[1][7]}
                </td>
              </tr>
              <tr className="odd:bg-white">
                <td className="border border-gray-300    p-2">20A99201a</td>
                <td className="border border-gray-300  text-left  p-2">
                  ENVIRONMENTAL SCIENCE
                </td>
                <td className="border border-gray-300    p-2">28</td>
                <td className="border border-gray-300    p-2">0</td>
                <td className="border border-gray-300    p-2">28</td>
                <td className="border border-gray-300    p-2">p</td>
                <td className="border border-gray-300    p-2">0</td>
                <td className="border border-gray-300    p-2">Y</td>
              </tr>{" "}
              <tr className="odd:bg-white">
                <td className="border border-gray-300    p-2">
                  {resultforlabs[1][0]}
                </td>
                <td className="border border-gray-300  text-left  p-2">
                  {resultforlabs[1][1]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[1][2]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[1][3]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[1][4]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[1][5]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[1][6]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[1][7]}
                </td>
              </tr>
              <tr className="odd:bg-white">
                <td className="border border-gray-300   p-2">
                  {resultofsub[2][0]}
                </td>
                <td className="border border-gray-300    text-left  p-2">
                  {resultofsub[2][1]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[2][2]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[2][3]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[2][4]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[2][5]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[2][6]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[2][7]}
                </td>
              </tr>{" "}
              <tr className="odd:bg-white">
                <td className="border border-gray-300   p-2">
                  {resultofsub[3][0]}
                </td>
                <td className="border border-gray-300    text-left  p-2">
                  {resultofsub[3][1]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[3][2]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[3][3]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[3][4]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[3][5]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[3][6]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[3][7]}
                </td>
              </tr>
              <tr className="odd:bg-white">
                <td className="border border-gray-300   p-2">
                  {resultofsub[4][0]}
                </td>
                <td className="border border-gray-300    text-left  p-2">
                  {resultofsub[4][1]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[4][2]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[4][3]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[4][4]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[4][5]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[4][6]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultofsub[4][7]}
                </td>
              </tr>{" "}
              <tr className="odd:bg-white">
                <td className="border border-gray-300    p-2">20A05507</td>
                <td className="border border-gray-300 text-left   p-2">
                  COMMUNITY SERVICE PROJECT
                </td>
                <td className="border border-gray-300    p-2">93</td>
                <td className="border border-gray-300    p-2">0</td>
                <td className="border border-gray-300    p-2">93</td>
                <td className="border border-gray-300    p-2">P</td>
                <td className="border border-gray-300    p-2">1.5</td>
                <td className="border border-gray-300    p-2">S</td>
              </tr>
              <tr className="odd:bg-white">
                <td className="border border-gray-300    p-2">
                  {resultforlabs[2][0]}
                </td>
                <td className="border border-gray-300  text-left  p-2">
                  {resultforlabs[2][1]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[2][2]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[2][3]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[2][4]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[2][5]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[2][6]}
                </td>
                <td className="border border-gray-300    p-2">
                  {resultforlabs[2][7]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={`m-7 text-[17px] ${display}`}>
          <span className="font-bold text-[17px]"> Result Disclaimer : </span>{" "}
          Data and information are provided  by Farhan  for Fun purposes only, and the final results will be given by the JNTUA Examinations so have fun .        </div>
        <center>
          {" "}
          <div className={`red font-bold text-red-800  shadow-md rounded-md border-2 border-gray-200 md:mx-20 sm:w-[1100px] p-3 ${display}`}>
          Farhan : sorry ! ,{student in toppers?`Dear 😊 ${stname}, this result is brought to you by your friend 😅	Farhan, who wanted you to experience the feeling of failure for a 😜 change`:`Dear 😊 ${stname}, this result is brought to you by 😅 Farhan, who just wanted to make you feel happy for a 	😇 while!`}
          </div>
          <button
            className={`bg-black rounded-lg text-white pl-3 pr-3 pt-2 pb-2 m-7 ${display}`}
            onClick={() => window.print()}
          >
            {" "}
            Print{" "}
          </button>
        </center>
      </div>
    </div>
  );
}

export default Main_container;
