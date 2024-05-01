import React from 'react';
import './changepassword.css';
import { callApi, errorResponse, getSession } from './main';

const tableStyle = { "width": "100%" };

export function updatePwd() {
    var uname = getSession("sid");
    var T1 = document.getElementById("T1");
    var url = "http://localhost:5000/login/signin";
    var data = JSON.stringify({
        emailid: uname,
        pwd: T1.value
    });
    callApi("POST", url, data, validatePwd, errorResponse);
}

export function validatePwd(res) {
    var data = JSON.parse(res);
    if (data === 0)
        alert("Invalid Credentials...");
    else {
        var T2 = document.getElementById('T2');
        var T3 = document.getElementById('T3');
        var passwordRegex = /^(?=.\d)(?=.[!@#$%^&])(?=.[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(T2.value)) {
            alert("New password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
            return;
        }
        if (T2.value !== T3.value) {
            alert("New password and Re-Type password are not matched");
            return;
        }
        var url = "http://localhost:5000/cp/updatepwd";
        var input = JSON.stringify({
            emailid: getSession("sid"),
            pwd: T2.value
        });
        callApi("POST", url, input, updatePwdSuccess, errorResponse);
    }
}

export function updatePwdSuccess(res) {
    var data = JSON.parse(res);
    alert(data);
}

class ChangePassword extends React.Component {
    constructor() {
        super();
        this.sid = getSession("sid");
        if (this.sid === "")
            window.location.replace("/");
    }

    render() {
        return (
            <div className='full-height'>
                <div className='cpcontent'>
                    <h3>Change Your Password</h3>
                    <table style={tableStyle}>
                        <tbody>
                            <tr>
                                <td>Current Password* <input type='password' id='T1' className='txtbox' /></td>
                            </tr>
                            <tr>
                                <td>New Password* <input type='password' id='T2' className='txtbox' /></td>
                            </tr>
                            <tr>
                                <td>Re-type New Password* <input type='password' id='T3' className='txtbox' /></td>
                            </tr>
                            <tr>
                                <td><button className='button' onClick={updatePwd}>Update</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ChangePassword;