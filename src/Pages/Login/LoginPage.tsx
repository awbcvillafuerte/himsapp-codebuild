import React, { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';

import './style.scss';

interface LoginDataType {
  grant_type: string;
  username: string;
  password: string;
}

// Module URL
const customerCareUrl = 'customer-care/index.html#/customer-care/';
const membershipUrl = 'membership/index.html#/membership/';
const systemAdminUrl = 'system-admin/index.html#/system-admin/';
const underwritingUrl = 'underwriting/index.html#/underwriting/';

//Claims URL
const claimsPageURL = "claims/index.html";

const encodeFormData = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const LoginPage = () => {
  const [loginData, setLoginData] = useState<LoginDataType>({
    grant_type: 'password',
    username: '',
    password: '',
  });

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleTextFieldOnChange = (name: string) => (event: any) => {
    const data = { ...loginData, [name]: event.target.value };
    setLoginData(data);
  };

  const onLogin = async () => {
    if (loginData.username.length === 0) {
      alert('Username is required.');
      return;
    }

    if (loginData.password.length === 0) {
      alert('Password is required.');
      return;
    }
    await callLoginPost();
  };

  const callLoginPost = async () => {
    const backendLoginUrl = process.env.REACT_APP_BASE_URL+'oidc/token';
      
    await fetch(backendLoginUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: 'Basic dmVyaWRhdGE6dmVyaWRhdGFfc2VjcmV0',
      },
      body: encodeFormData(loginData),
    })
      .then(response => response.json())
      .then(async data => {
        console.log('data ',data);
        if (data['access_token']){
          localStorage.setItem('api_token',data['access_token']);
        }
        if (data['pmclient']&&data['pmclient']['access_token']){
          localStorage.setItem('pm_token',data['pmclient']['access_token']);
        }
        if (data.error_description) {
          if(data.error_description !== undefined && data.error_description !== null
            && data.error_description !== ""
            && data.error_description.toLowerCase().includes("user is a claims account")){
            await claimsLoginPost();
          }else{
            alert(`Error: ${data.error_description}`);
            return;
          }
        } else {
          await callUserMeGet(data);
        }
      })
      .catch(error => {
        console.error(error);
        alert(error);
      });
  };

  const callUserMeGet = (requestData: any) => {
    const backendUserUrl = process.env.REACT_APP_BASE_URL+'users/me';
      
    fetch(backendUserUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer '+ requestData['access_token'],
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.error_description) {
          alert(`Error: ${data.error_description}`);
          return;
        } else {
          localStorage.setItem('employee_id',data.employee_id);
          localStorage.setItem('first_name',data.first_name);
          localStorage.setItem('last_name',data.last_name);
          if (data.main_module === 'Underwriting') {
            window.location.replace(underwritingUrl);
          } else if (data.main_module === 'Customer Care') {
            window.location.replace(customerCareUrl);
          } else if (data.main_module === 'Membership') {
            window.location.replace(membershipUrl);
          } else {
            window.location.replace(systemAdminUrl);
          }
        }
      })
      .catch(error => {
        console.error(error);
        alert(error);
      });
  };
  const claimsLoginPost = async () => {

    await fetch(process.env.REACT_APP_CLAIMS_URL+"/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: encodeFormData(loginData),
    })
      .then(response => response.json())
      .then(async data => {
        if(data !== undefined && data["status"] === 200 && data.data !== undefined
          && data.data.token && data.data.token !== undefined &&  data.data.token !== null){
          await claimsUserMe(data);
        }else{
          if(data.message){
            alert(`Error: ${data.message}`);
          }
          return;
        }
      })
      .catch(error => {
        console.error(error);
        alert(error);
      });
  };

  const claimsUserMe = (requestData: any) => {

    fetch(process.env.REACT_APP_CLAIMS_URL+"/me", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer '+ requestData.data.token,
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data === undefined || data["status"] !== 200) {
          alert(`Error: ${data.message}`);
          return;
        } else {
          localStorage.setItem('token',requestData.data.token);
          window.location.replace(claimsPageURL);
        }
      })
      .catch(error => {
        console.error(error);
        alert(error);
      });
  };

  const onForgotPassword = () => {
    alert('onForgotPassword() clicked');
  };

  const onContact = () => {
    alert('onContact() clicked');
  };

  return (
    <Grid container className="login-main">
      <img
        alt="shape1"
        className="login-shape-1"
        src={require('./images/shape-1.png')}
      />
      <img
        alt="shape2"
        className="login-shape-2"
        src={require('./images/shape-2.png')}
      />
      <Grid item xs={6}></Grid>
      <Grid item xs={6} className="login-block">
        <img
          alt="logo"
          className="login-logo"
          src={require('./icons/logo/logo@2x.png')}
        />
        <div className="login-project-name">Intellicare HIMS</div>
        <div className="login-input-area">
          <span className="login-text">Username</span>
          <InputBase
            className="login-text-field"
            fullWidth
            value={loginData.username}
            onChange={handleTextFieldOnChange('username')}
            inputRef={usernameRef}
          />
        </div>
        <div className="login-input-area">
          <Grid container className="login-text">
            <Grid item xs={6}>
              Password
            </Grid>
            <Grid item xs={6} style={{ textAlign: 'right' }}>
              <Link className="login-link" onClick={onForgotPassword}>
                Forgot Password
              </Link>
            </Grid>
          </Grid>
          <InputBase
            className="login-text-field"
            fullWidth
            type="password"
            onChange={handleTextFieldOnChange('password')}
            inputRef={passwordRef}
          />
        </div>
        <Button className="login-button" onClick={onLogin}>
          LOG IN
        </Button>
        <div style={{ paddingTop: '3rem' }}>
          Problems logging in? Please &nbsp;
          <Link className="login-link" onClick={onContact}>
            contact your IT Team
          </Link>
          &nbsp; for assistance.
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
