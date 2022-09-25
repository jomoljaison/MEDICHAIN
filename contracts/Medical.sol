
//SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;


contract Medical
{

    //address of the owner
    address private owner;

    constructor()
    {
        owner=msg.sender;
    }

//struct for register doctor
    struct RegDoc
    {
        uint256 id;
        string name;
        string _gender;
        string _category;
        string post;
        string discipline;
        string stateCouncil;
        bool isVerified;

    }
//struct for setpassword
    struct pwdDoc
    {
        uint256 id;
        string pass;
    }
//mapped uint256 to struct RegDoc
    mapping (uint256 => RegDoc) doctors;
//mapped uint256 to struct pwdDoc    
    mapping (uint256 => pwdDoc) passwords;
    modifier isVerifier() {
        require(msg.sender == owner, "Caller is not owner");
        _;
    }
    //struct for register patient
    struct Regpatient
    {
        string name;
        string _gender;
        uint dob;
        uint age;
        string blood;
    }
    // struct for define checkup
    struct Diagnosis
    {
        uint256 patientid;
        uint256 docid;
        string name0fdise;
        string others;
        string medicine;
    }
   //mapped uint256 to struct Regpatient
    mapping (uint256 => Regpatient) patients;
    //mapped uin256 to struct Diagnosis
    mapping (uint256 => Diagnosis[]) listOfdiagosis;
    //events
    event regid(uint256 ,string );
    event regpat_id(uint256 ,string,uint256 );
/*
@dev setnewAdmin setting new admin
@param admin
*/
    function setnewAdmin(address admin)public isVerifier
    {
        owner=admin;
    }
    /*
    @dev Regdoc -Registeration of doctor,by doctor
    @param name,gender,category,post,discipline,statecouncil
    //id creation
    //registrration using id
    //emit regpat_id(id,name)

    */

    function Regdoc(string memory name,string memory _gender,string memory _category,string memory post,string memory discipline,string memory stateCouncil)public returns (uint256)
    {
        uint id= uint(keccak256(abi.encodePacked(name,block.timestamp,discipline)))%10000000000;

        doctors[id] =RegDoc(id,name,_gender,_category,post,discipline,stateCouncil,false);
        emit regid(id,name);

        return id;

    }
/*
@dev verifyDoctor
@param verifiedstatus,id
//verification only  by verifier
*/
    function verifyDoctor(bool _verifedStatus, uint256 id) public isVerifier
    {
        doctors[id].isVerified = _verifedStatus;
    }

/*
@dev getDoc returns doctor details
@param id 
*/    function getDoc(uint256 id) public view  returns (RegDoc memory)
    {
        return doctors[id];
    }
/*
@dev setpassword verified doctor can set password
@param id ,password
*/ 
    function setpassword(uint256 id,string memory password)public 
    {
        require(doctors[id].isVerified == true);
        passwords[id].pass=password;
    }
/*
@dev Regpatit :registeration if patient 
@param name,gender,dob,age,bood
//id generation
//emit regpat_id(id,name,age)

*/
    function Regpatit(string memory name,string memory _gender,uint256 dob,uint256 age,string memory blood) public isVerifier
    {
    uint id= uint(keccak256(abi.encodePacked(name,block.timestamp,dob,blood)))%10000000000;
    patients[id] =Regpatient(name,_gender,dob,age,blood);
    emit regpat_id(id,name,age);
    }

/*
@dev diagnosis 
@param patientid,docid,nameofdise,others,medicine
//only verified doctor can check patient data or update
*/

    function diagnosis(uint256 patientid,uint256 docid,string memory name0fdise,string memory others,string memory medicine)public{
    require(doctors[docid].isVerified == true);
    Diagnosis memory diagnos=Diagnosis(patientid,docid,name0fdise,others,medicine);

    listOfdiagosis[patientid].push(diagnos);
    }

//    function getPatient(uint256 id) public pure  returns (uidiant256 patientid,uint256 docid,string memory name0fdise,string memory others,string memory medicine)
//     {
//         return (listOfdiagosis[id].patientid,listOfdiagosis[id].docid,listOfdiagosis[id].name0fdise,listOfdiagosis[id].others,listOfdiagosis[id].medicine);
//     }



}