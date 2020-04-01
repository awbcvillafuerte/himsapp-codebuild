import React, { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import InputBase from '@material-ui/core/InputBase';
import './style.scss';
import LoginStorageService from './LoginStorageService';
import {
  PasswordSetupModal,
  MessageDialog,
  LoadingIndicator,
  ForgotPassword
 } from '../../Components'

interface LoginDataType {
  username: string;
  password: string;
}

// Module URL
const cssCustomerCareUrl = 'customer-care/index.html#/customer-care/create-ticket';
const customerCareUrl = 'customer-care/index.html#/customer-care/';
const membershipUrl = 'membership/index.html#/membership/';
const systemAdminUrl = 'system-admin/index.html#/system-admin/';
const underwritingUrl = 'underwriting/index.html#/underwriting/';
const claimsUrl = 'claims';

let mainModule = '';
let cptFetchDone = false;
let icd10FetchDone = false;
let icd10ToSave: any = [];
let cptToSave: any = [];
let tmpData: any = {};
//Claims URL
const claimsPageURL = "claims/index.html";

const loginStorageService = new LoginStorageService();

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
    loginStorageService.initStorage('himsDb');
  }, [])

  const redirect = async () => {
    console.log(mainModule);
    if (mainModule === 'Underwriting') {
      localStorage.setItem('sidebar','dashboard');
      window.location.replace(underwritingUrl);
    } else if (mainModule === 'Customer Care') {
      let query = await loginStorageService.getSingleEntryByKeyReturnValue('user_data', 'group');
      const logingroup = query && query.result ? query.result : null;
      if(logingroup && logingroup.name === 'Customer Service Specialist GROUP'){
        window.location.replace(cssCustomerCareUrl);
      }
      else{
        window.location.replace(customerCareUrl);
      }
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
              loginStorageService.saveEntry(icd10ToSave, 'icd10').then((res) => {
                redirect();
              }).catch((err) => console.log(err));
            }
          }).catch((err) => console.log(err));
        }
      })
      .catch((err) => {
        setFetchingState(false);
        setModalProps({
          open: true,
          title: 'Error',
          message: err.message,
          buttonText: 'Okay'
        })
      })
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
        loginStorageService.saveEntry(data, 'icd10_list').then((res) => {
          loginStorageService.saveEntry(icd10ToSave, 'icd10').then((res) => {
            icd10FetchDone = true;
            if (cptFetchDone) {
              redirect();
            } 
          }).catch((err) => console.log(err));
        }).catch((err) => console.log(err));
      })
      .catch((err) => {
        setFetchingState(false);
        setModalProps({
          open: true,
          title: 'Error',
          message: err.message,
          buttonText: 'Okay'
        })
      });

       
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
        loginStorageService.saveEntry(cptToSave, 'cpt').then((res) => {
          console.log(res)
        }).catch((err) => console.log(err));
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
      .catch((err) => {
        setFetchingState(false);
        setModalProps({
          open: true,
          title: 'Error',
          message: err.message,
          buttonText: 'Okay'
        })
      })
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
        loginStorageService.saveEntry(data, 'cpt_list').then((res) => {
          loginStorageService.saveEntry(cptToSave, 'cpt').then((res) => {
            cptFetchDone = true;
            if (icd10FetchDone) {
              redirect();
            } 
          }).catch((err) => console.log(err));
        }).catch((err) => console.log(err));
      })
      .catch((err) => {
        setFetchingState(false);
        setModalProps({
          open: true,
          title: 'Error',
          message: err.message,
          buttonText: 'Okay'
        })
      });
  }

  // Process saving to indexedDB
  const saveToIndexedDB = async (data: any) => {

    icd10ToSave = Object.entries(data.icd10).map(entry => {
      return {key: entry[0], value: entry[1]}
    });

    cptToSave = Object.entries(data.cpt).map(entry => {
      return {key: entry[0], value: entry[1]}
    });

    loginStorageService.getSingleEntryByKeyReturnValue('icd10', 'juday').then((juday: any) => {
      
      let newJuday = data.icd10.juday ? new Date(data.icd10.juday) : null;
      
      let existingJuday = new Date(juday.result);

      // console.log("new", newJuday);
      // console.log("old", existingJuday);
      if(newJuday && (newJuday > existingJuday)) {
        loginStorageService.clearList('icd10_list').then(() => {
          fetchIcd10();
        })
      }else {
        loginStorageService.getSingleEntryByKeyReturnValue('icd10', 'date_updated').then((du) => {
          if(du.result === data.icd10.date_updated) {
            loginStorageService.validateStoreCount('himsDb', 'icd10_list').then((res: number) => {
              console.log(res);
              if (res === 0) {
                fetchIcd10();
              } else {
                icd10FetchDone = true;
                loginStorageService.validateStoreCount('himsDb', 'cpt_list').then((res: number) => {
                  if (res > 0) {
                    redirect();
                  }
                }) 
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
      }
    }).catch(() => {
      // console.log("wala akong juday kaya mag clear ako tapos fetch ulit hehe");
      loginStorageService.clearList('icd10_list').then(() => {
        fetchIcd10();
      })
    })
    
    
    loginStorageService.getSingleEntryByKeyReturnValue('cpt', 'juday').then((juday: any) => {
      
      let newJuday = data.cpt.juday ? new Date(data.cpt.juday) : null;
      let existingJuday = new Date(juday.result);

      // console.log("new", newJuday);
      // console.log("old", existingJuday);

      if (newJuday && (newJuday > existingJuday)) {
        // console.log("my juday")
        loginStorageService.clearList('cpt_list').then(() => {
          fetchCpt();
        })
      } else {
        loginStorageService.getSingleEntryByKeyReturnValue('cpt', 'date_updated').then((du) => {
          if(du.result === data.cpt.date_updated) {
            
            loginStorageService.validateStoreCount('himsDb', 'cpt_list').then((res: number) => {
              if (res === 0) {
                fetchCpt();
              } else {
                cptFetchDone = true;
                loginStorageService.validateStoreCount('himsDb', 'icd10_list').then((res: number) => {
                  if (res > 0) {
                    redirect();
                  }
                }) 
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

    }).catch(() => {
      // console.log("wala akong juday kaya mag clear ako tapos fetch ulit hehe");
      
      loginStorageService.clearList('cpt_list').then(() => {
        fetchCpt();
      })
    })
    
  }

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleTextFieldOnChange = (name: string) => (event: any) => {
    const data = { ...loginData, [name]: event.target.value };
    setLoginData(data);
  };

  const login = async () => {
     //set localstorage variable for modules
      localStorage.setItem('CLIENT_URL',process.env.REACT_APP_HIMS_API_CLIENT_URL!);
      localStorage.setItem('PARTNER_URL',process.env.REACT_APP_HIMS_API_PARTNER_URL!);
      localStorage.setItem('PMAKER_BASE_URL',process.env.REACT_APP_PMAKER_BASE_URL!);

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
          tmpData = data;
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

          let userDataToSave = Object.entries(data.login).map(entry => {
            return {key: entry[0], value: entry[1]}
          });

          loginStorageService.saveEntry(userDataToSave, 'user_data').then((res) => {
            console.log(res);
          }).catch((err) => console.log(err));
          
          if (data.needs_password_update) {
            setpwSetupModal(true)
          } else {
            await saveToIndexedDB(data);
          }
        } else {
          setFetchingState(false);
          setModalProps({
            open: true,
            title: 'Error',
            message: data.error.message,
            buttonText: 'Okay'
          })
        }

      })
      .catch((err: any) => {
        setModalProps({
          open: true,
          title: 'Error',
          message: err.message,
          buttonText: 'Okay'
        })
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

  const onForgotPassword = () => {
    setForgotPassword(true);
  };

  const onForgotPasswordSubmit = async (username: string) => {
    setForgotPassword(false);
    setChanging(true);

    const request: RequestInit = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
       }
    }

    let requestSetup = await fetch(`${process.env.REACT_APP_HIMS_API_CLIENT_URL}password/reset/${username}`, request).catch(err => {
      // BEGIN HANDLING OF FAILED HTTP REQUEST
      setModalProps({
        open: true,
        title: 'Error',
        message: err.message,
        buttonText: 'Okay'
      })
    })

    if (requestSetup) {
      let respjson = await requestSetup.json();
      if (respjson && !respjson.error) {
        setModalProps({
          open: true,
          title: 'Update Password Success',
          message: 'New password has been set.',
          buttonText: 'Continue',
        })
        
        // await saveToIndexedDB(tmpData);
      } else {
        setModalProps({
          open: true,
          title: 'Error',
          message: respjson.error.message,
          buttonText: 'Okay'
        })
      }
    }
    setChanging(false)
  }

  const onContact = () => {
    alert('onContact() clicked');
  };

  const handleModalClose = () => {
    window.location.reload()
  }

  const onSetupPasswordSubmit = async (value: any) => {
    setpwSetupModal(false);
    setChanging(true)

    let token = tmpData.login.access_token;
    const request: RequestInit = {
      method: 'PATCH',
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
       },
      body: JSON.stringify(value)
    }

    let requestSetup = await fetch(`${process.env.REACT_APP_HIMS_API_CLIENT_URL}user/password`, request).catch(err => {
      // BEGIN HANDLING OF FAILED HTTP REQUEST
      setModalProps({
        open: true,
        title: 'Error',
        message: err.message,
        buttonText: 'Okay'
      })
    })

    if (requestSetup) {
      let respjson = await requestSetup.json();
      if (respjson && !respjson.error) {
        setModalProps({
          open: true,
          title: 'Success',
          message: 'Password setup success',
          buttonText: 'Okay'
        })
        
        // await saveToIndexedDB(tmpData);
      } else {
        setModalProps({
          open: true,
          title: 'Error',
          message: respjson.error.message,
          buttonText: 'Okay'
        })
      }
    }

    setChanging(false)
  }

  const [pwSetupModal, setpwSetupModal] = React.useState(false);
  const [isFetching, setFetchingState] = useState(false);
  const [isChanging, setChanging] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [modalProps, setModalProps] = useState({
    open: false,
    title: '',
    message: '',
    buttonText: '',
  });

  return (
    <>
      { isChanging && <LoadingIndicator /> }
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
              autoFocus
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

        {/* Modals */}
        <MessageDialog
          isModalOpen = {modalProps.open}
          onClose = {handleModalClose}
          title = {modalProps.title}
          message = {modalProps.message}
          buttonText = {modalProps.buttonText !== '' ? modalProps.buttonText : 'Okay'}  
        />

        <PasswordSetupModal
          onSubmit={onSetupPasswordSubmit}
          open = {pwSetupModal}
          onClose = {() => {
            setpwSetupModal(false)
            setFetchingState(false)
          }} />

        <ForgotPassword
          onSubmit={onForgotPasswordSubmit}
          open = {forgotPassword}
          onClose = {() => setForgotPassword(false)} />

      </Grid>
    </>
  );
};

export default LoginPage;






