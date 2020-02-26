import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import './style.scss';
import LoginStorageService from './LoginStorageService';

interface LoginDataType {
  username: string;
  password: string;
}

// Module URL
const customerCareUrl = 'customer-care/index.html#/customer-care/';
const membershipUrl = 'membership/index.html#/membership/';
const systemAdminUrl = 'system-admin/index.html#/system-admin/';
const underwritingUrl = 'underwriting/index.html#/underwriting/';
const claimsUrl = 'claims';

let mainModule = '';
let cptFetchDone = false;
let icd10FetchDone = false;

//Claims URL
const claimsPageURL = "claims/index.html";

const loginStorageService = new LoginStorageService();

const encodeFormData = (data: any) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const LoginPage = () => {
  const [loginData, setLoginData] = useState<LoginDataType>({
    username: '',
    password: '',
  });

  let cptFetched = 0;
  let cptList: any = [];

  let icdFetched = 0;
  let icd10List: any = [];

  useEffect(() => {
    let urls = {
      PARTNER_URL: process.env.REACT_APP_HIMS_API_PARTNER_URL,
      CLIENT_URL: process.env.REACT_APP_HIMS_API_CLIENT_URL
    }

    let configToSave = Object.entries(urls).map(entry => {
      return {key: entry[0], value: entry[1]}
    });

    loginStorageService.initStorage('himsDb');

    loginStorageService.saveEntry(configToSave, 'config').then((res) => console.log(res)).catch(err => console.log(err))

    loginStorageService.clearUser('himsDb').then((res) => {
      console.log(res);
    }).catch((err) => console.log(err));
  }, [])

  const redirect = () => {
    console.log(mainModule);
    if (mainModule === 'Underwriting') {
      localStorage.setItem('sidebar','dashboard');
      window.location.replace(underwritingUrl);
    } else if (mainModule === 'Customer Care') {
      window.location.replace(customerCareUrl);
    } else if (mainModule === 'Membership') {
      localStorage.setItem('sidebar','dashboard');
      window.location.replace(membershipUrl);
    } else if (mainModule === 'Claims') {
      localStorage.setItem('sidebar','dashboard');
      window.location.replace(claimsUrl);
    } else {
      window.location.replace(systemAdminUrl);
    }
  }

  // Fetch Icd10 systematically
  const fetchIcd10 = async () => {
    let filter = {
      limit: 20000,
      skip: icdFetched
    }
    let url = `${process.env.REACT_APP_HIMS_API_CLIENT_URL}icd10-codes?filter=${JSON.stringify(filter)}`;
    let options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          icdFetched = icdFetched + data.length;
          icd10List.push(...data);
          fetchIcd10();
        } else {
          loginStorageService.saveEntry(icd10List, 'icd10_list').then((res) => {
            icd10FetchDone = true;
            if (cptFetchDone) {
              redirect();
            }
          }).catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err))
  }

  // Fetch Icd10 updates
  const fetchIcd10Update = async () => {
    let query = await loginStorageService.getSingleEntryByKeyReturnValue('icd10', 'date_updated');
    let url = `${process.env.REACT_APP_HIMS_API_CLIENT_URL}/icd10-codes/latest/${query.result}`;
    let options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        let newItems: Array<any> = [];

        data.forEach((i: any) => {
          let item = {key: '', value: {}};

          item.key = i._id;
          item.value = i;

          newItems.push(item);

          loginStorageService.saveEntry(newItems, 'icd10_list').then((res) => {
            console.log(res);
          }).catch((err) => console.log(err));
        })
      })
      .catch((err) => console.log(err));

       icd10FetchDone = true;
        if (cptFetchDone) {
          redirect();
        } 
  }

  // Fetch Cpt systematically
  const fetchCpt = async () => {
    let filter = {
      limit: 1000,
      skip: cptFetched
    }
    let url = `${process.env.REACT_APP_HIMS_API_CLIENT_URL}cpts?filter=${JSON.stringify(filter)}`;
    let options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          cptFetched = cptFetched + data.length;
          cptList.push(...data);
          fetchCpt();
        } else {
          loginStorageService.saveEntry(cptList, 'cpt_list').then(() => {
            cptFetchDone = true;
            if (icd10FetchDone) {
              redirect();
            }
          }).catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err))
  }
  
  // Fetch Cpt updates
  const fetchCptUpdate = async () => {
    let query = await loginStorageService.getSingleEntryByKeyReturnValue('cpt', 'date_updated');
    let url = `${process.env.REACT_APP_HIMS_API_CLIENT_URL}/cpts/latest/${query.result}`;
    let options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        let newItems: Array<any> = [];

        data.forEach((i: any) => {
          let item = {key: '', value: {}};

          item.key = i._id;
          item.value = i;

          newItems.push(item);

          loginStorageService.saveEntry(newItems, 'cpt_list').then((res) => {
            console.log(res);
          }).catch((err) => console.log(err));
        })
      })
      .catch((err) => console.log(err));

      cptFetchDone = true;
      if (icd10FetchDone) {
        redirect();
      }
  }

  // Process saving to indexedDB
  const saveToIndexedDB = async (data: any) => {

    let userDataToSave = Object.entries(data.login).map(entry => {
      return {key: entry[0], value: entry[1]}
    });

    let icd10ToSave = Object.entries(data.icd10).map(entry => {
      return {key: entry[0], value: entry[1]}
    });

    let cptToSave = Object.entries(data.cpt).map(entry => {
      return {key: entry[0], value: entry[1]}
    });

    loginStorageService.saveEntry(userDataToSave, 'user_data').then((res) => {
      console.log(res);
    }).catch((err) => console.log(err));
    
    loginStorageService.getSingleEntryByKeyReturnValue('icd10', 'date_updated').then((du) => {
      if(du.result === data.icd10.date_updated) {
        loginStorageService.validateStoreCount('himsDb', 'icd10_list').then((res: number) => {
          console.log(res);
          if (res === 0) {
            fetchIcd10();
          } else {
            redirect();
          }
        })
      } else {
        fetchIcd10Update();
        loginStorageService.updateEntry('icd10', 'date_updated', data.icd10.date_updated).then((r) => {
        }).catch(err => console.log(err));
      }
    }).catch(() => {
      loginStorageService.saveEntry(icd10ToSave, 'icd10').then((res) => {
        console.log(res);
        fetchIcd10(); 
      }).catch((err) => console.log(err));
    });

    loginStorageService.getSingleEntryByKeyReturnValue('cpt', 'date_updated').then((du) => {
      if(du.result === data.cpt.date_updated) {
        
        loginStorageService.validateStoreCount('himsDb', 'cpt_list').then((res: number) => {
          if (res === 0) {
            fetchCpt();
          } else {
            redirect();
          }
        })
      } else {
        fetchCptUpdate();
        loginStorageService.updateEntry('cpt', 'date_updated', data.cpt.date_updated).then((r) => {
          console.log(r);
        }).catch(err => console.log(err));
      }
    }).catch(() => {
      loginStorageService.saveEntry(cptToSave, 'cpt').then((res) => {
        fetchCpt(); 
      }).catch((err) => console.log(err));
    });
  }

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleTextFieldOnChange = (name: string) => (event: any) => {
    const data = { ...loginData, [name]: event.target.value };
    setLoginData(data);
  };

  const login = async () => {
    let url = `${process.env.REACT_APP_HIMS_API_CLIENT_URL}login`;
    let options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    }

    setFetchingState(true);

    await fetch(url, options)
      .then((resp: any)=> resp.json())
      .then(async (data: any) => {
        if (!data.error) {
          localStorage.setItem('api_token',data.login['access_token']);
          localStorage.setItem('pm_token',data.login['access_token']);
          localStorage.setItem('user_id',data.login.user_id);
          localStorage.setItem('employee_id',data.login.employee_id);
          localStorage.setItem('first_name',data.login.first_name);
          localStorage.setItem('last_name',data.login.last_name);
          if (data.login.main_module === 'Underwriting') {
            localStorage.setItem('sidebar','dashboard');
            // window.location.replace(underwritingUrl);
          } else if (data.login.main_module === 'Customer Care') {
            // window.location.replace(customerCareUrl);
          } else if (data.login.main_module === 'Membership') {
            localStorage.setItem('sidebar','dashboard');
            // window.location.replace(membershipUrl);
          } else {
            // window.location.replace(systemAdminUrl);
          }
          
          mainModule = data.login.main_module;

          data.login.pm_token = data.login['access_token'];
          await saveToIndexedDB(data);
        } else {
          setFetchingState(false);
          alert(data.error.message)
          window.location.reload();
        }

      })
      .catch((err: any) => {
        alert(err.message)
        window.location.reload();
      })
  }

  const onLogin = async () => {
    if (loginData.username.length === 0) {
      alert('Username is required.');
      window.location.reload();
      return;
    }

    if (loginData.password.length === 0) {
      alert('Password is required.');
      window.location.reload();
      return;
    }
    await login();
  };

  const callLoginPost = async () => {
    const backendLoginUrl = process.env.REACT_APP_HIMS_API_CLIENT_URL+'oidc/token';

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
          } else if(data.error_description !== undefined && data.error_description !== null
            && data.error_description !== ""
            && data.error_description.toLowerCase().includes("user not found.")){
              alert(`Invalid Username or Password`);
              window.location.reload();
          }else{
            alert(`${data.error_description}`);
            window.location.reload();
            return;
          }
        } else {
          await callUserMeGet(data);
        }
      })
      .catch(error => {
        console.error(error);
        alert(error);
        window.location.reload();
      });
  };

  const callUserMeGet = (requestData: any) => {
    const backendUserUrl = process.env.REACT_APP_HIMS_API_CLIENT_URL+'users/me';
      
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
          window.location.reload();
          return;
        } else {
          localStorage.setItem('user_id',data._id);
          localStorage.setItem('employee_id',data.employee_id);
          localStorage.setItem('first_name',data.first_name);
          localStorage.setItem('last_name',data.last_name);
          if (data.main_module === 'Underwriting') {
            localStorage.setItem('sidebar','dashboard');
            window.location.replace(underwritingUrl);
          } else if (data.main_module === 'Customer Care') {
            window.location.replace(customerCareUrl);
          } else if (data.main_module === 'Membership') {
            localStorage.setItem('sidebar','dashboard');
            window.location.replace(membershipUrl);
          } else {
            window.location.replace(systemAdminUrl);
          }
        }
      })
      .catch(error => {
        console.error(error);
        alert(error);
        window.location.reload();
      });
  };
  const claimsLoginPost = async () => {

    await fetch(process.env.REACT_APP_HIMS_API_PARTNER_URL+"/auth/login", {
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
            window.location.reload();
          }
          return;
        }
      })
      .catch(error => {
        console.error(error);
        alert(error);
        window.location.reload();
      });
  };

  const claimsUserMe = (requestData: any) => {

    fetch(process.env.REACT_APP_HIMS_API_PARTNER_URL+"/me", {
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
          window.location.reload();
          return;
        } else {
          localStorage.setItem('token',requestData.data.token);
          window.location.replace(claimsPageURL);
        }
      })
      .catch(error => {
        console.error(error);
        alert(error);
        window.location.reload();
      });
  };

  const onForgotPassword = () => {
    alert('onForgotPassword() clicked');
  };

  const onContact = () => {
    alert('onContact() clicked');
  };

  const [isFetching, setFetchingState] = useState(false);

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
        <Button disabled={isFetching ? true : false} className="login-button" onClick={onLogin}>
          {isFetching ? "Initializing..." : "LOG IN"}
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



