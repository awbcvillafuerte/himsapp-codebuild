import React, { useState, useRef, useEffect } from 'react';
import {
  OutlinedInput,
  Link,
  Grid,
  Button,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import './style.scss';
import LoginStorageService from './LoginStorageService';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {
  PasswordSetupModal,
  MessageDialog,
  LoadingIndicator,
  ForgotPassword,
  SecondInstanceError
} from '../../Components'
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import ErrorIcon from '@material-ui/icons/Error';
import { withRouter } from 'react-router-dom';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { generateRequestArrayIcd10, generateRequestArrayCpt, listToMatrix } from '../../utils';
import get from 'lodash/get';

interface LoginDataType {
  username: string;
  password: string;
}

// Module URL
// const cssCustomerCareUrl = 'customer-care/index.html#/customer-care/create-ticket';
const customerCareUrl = 'customer-care/index.html#/customer-care/';
const CSSModuleUrl = 'customer-care/index.html#/customer-care/create-ticket';
const membershipUrl = 'membership/index.html#/membership/';
const systemAdminUrl = 'system-admin/index.html#/system-admin/';
const underwritingUrl = 'underwriting/index.html#/underwriting/';
const claimsUrl = 'claims/index.html';
const BillingUrl = 'billing/index.html';
const PnUrl = 'partner_network/index.html';
const franchisingUrl = 'franchising/index.html#/franchising/';
const treasuryUrl = 'treasury/';
const distributionUrl = 'dds-requestor/index.html#';

const abortController = new AbortController();
const signal = abortController.signal;

let firstActiveRole: any = {};
let mainModule = '';
let groupName = '';
let cptFetchDone = false;
let icd10FetchDone = false;
let icd10ToSave: any = [];
let cptToSave: any = [];
let tmpData: any = {};

let cptBatchSize: any = 1000;
let icd10BatchSize: any = 5000;

const loginStorageService = new LoginStorageService();

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    flexDirection: 'column'
  },
  percentage: {
    color: '#fff',
  },
  circularProgress: {
    color: '#fff',
    width: '100px !important',
    height: '100px !important'

  },
  fields: {
    '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3AB77D'
    }
  },
  inputField: {
    height: '50px',
    marginTop: '10px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px'
  },
  iconError: {
    color: '#E53935',
    fontSize: '18px'
  },
  errorMessageContainer: {
    marginTop: '10px',
    display: 'flex'
  },
  errText: {
    color: '#E53935',
    fontSize: '12px'
  },
  errorString: {
    marginLeft: '8px'
  },
  eyeIcon: {
    opacity: 0.5
  }
}))

const LoginPage = (props: any) => {
  const [loginData, setLoginData] = useState<LoginDataType>({
    username: '',
    password: '',
  });

  const [initializingStatus] = useState<string>('Initializing...')

  const [totalIcd10, setTotalIcd10] = useState<any>(0)
  const [fetchedIcd10, setFetchedIcd10] = useState<any>(0)

  const [totalCpt, setTotalCpt] = useState<any>(0)
  const [fetchedCpt, setFetchedCpt] = useState<any>(0)
  const [visible, setVisible] = React.useState<boolean>(false);

  const [open, setOpen] = React.useState(false);

  const [secondInstanceModal, setSecondInstanceModal] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const closeSecondInstanceModal = () => {
    setFetchingState(false)
    setSecondInstanceModal(false)
  }


  useEffect(() => {
    loginStorageService.initStorage('himsDb');
  }, [])

  let redirecting: boolean = false
  const redirect = async () => {
    if (redirecting) return // NOTE (TJ): TO MAKE SURE THIS EXECUTE ONLY ONCE

    try {
      // NOTE (TJ): HAS SIDE EFFECTS
      redirecting = true
      let modules: any = []
      let token = await loginStorageService.getSingleEntryByKeyReturnValue('user_data', 'access_token') // GET ACCEESS TOKEN
      let urls = await fetch(`${process.env.REACT_APP_HIMS_API_CLIENT_URL}modules`, {
        method: 'GET',
        headers: {
          'Content-Tyoe': 'application/json',
          'Authorization': `Bearer ${token.result}`
        }
      })

      if (urls) {
        modules = await urls.json();
      }

      // let foundIndex = modules.findIndex((el: any) => el.name === mainModule) // Get index of module
      console.log(modules, "MODULES");
      let foundIndex = modules.findIndex((el: any) => Boolean(el.name && firstActiveRole && firstActiveRole.module === el.name));

      console.log(`FOUND INDEX ${foundIndex} from array ${JSON.stringify(modules, null, 2)}`);
      console.log('FIRST ACTIVE ROLE ID: ', firstActiveRole);
      if (foundIndex >= 0) {
        const module = modules[foundIndex]
        
        localStorage.setItem('sidebar', 'dashboard')
        if (module.name.toLowerCase() === 'customer care' && groupName === 'CSS GROUP') 
          window.location.replace(CSSModuleUrl)
        else
        window.location.replace(module.dashboard_url)
        // if (mainModule.toLowerCase() === 'customer care') {
        //   window.location.replace(module.dashboard_url)
        // } else {
        //   localStorage.setItem('sidebar', 'dashboard')
        //   window.location.replace(module.dashboard_url)
        // }
      } else {
        setFetchingState(false);
        props.history.push('profile')
      }
    } catch (err) { // NOTE (TJ): Fallback redirect statements incase module fetch to failed
      console.log(err)
      if (mainModule.toLowerCase() === 'underwriting') {
        localStorage.setItem('sidebar', 'dashboard');
        window.location.replace(underwritingUrl);
      } else if (mainModule.toLowerCase() === 'customer care') {
        groupName === 'CSS GROUP' ? window.location.replace(CSSModuleUrl) : window.location.replace(customerCareUrl);
      } else if (mainModule.toLowerCase() === 'membership') {
        localStorage.setItem('sidebar', 'dashboard');
        window.location.replace(membershipUrl);
      } else if (mainModule.toLowerCase() === 'claims') {
        localStorage.setItem('sidebar', 'dashboard');
        window.location.replace(claimsUrl);
      } else if (mainModule.toLowerCase() === 'user management') {
        localStorage.setItem('sidebar', 'dashboard');
        window.location.replace(systemAdminUrl);
      } else if (mainModule.toLowerCase() === 'franchising') {
        localStorage.setItem('sidebar', 'dashboard');
        window.location.replace(franchisingUrl);
      } else if (mainModule.toLowerCase() === 'billing and collections') {
        localStorage.setItem('sidebar', 'dashboard');
        window.location.replace(BillingUrl);
      } else if (mainModule.toLowerCase() === 'partner network') {
        localStorage.setItem('sidebar', 'dashboard');
        window.location.replace(PnUrl);
      } else if (mainModule.toLowerCase() === 'treasury') {
        localStorage.setItem('sidebar', 'dashboard');
        window.location.replace(treasuryUrl);
      } else if (mainModule.toLowerCase() === 'document distribution') {
        localStorage.setItem('sidebar', 'dashboard');
        window.location.replace(distributionUrl);
      } else {
        setFetchingState(false);
        props.history.push('profile')
      }
    }
  }

  let icd10_collection: any[] = [];

  const fetchIcd10 = async (data: any, defaultSkip?: number) => {
    let count: any = data.icd10.count
    setTotalIcd10(count)
    let limit = icd10BatchSize;

    if (defaultSkip) {
      count = count - defaultSkip
    }

    if (count) {

      let callCount = Math.ceil(count / limit);

      let requests = generateRequestArrayIcd10(callCount, {
        limit,
        signal,
        defaultSkip: defaultSkip ? defaultSkip : 0
      })

      const chunkRequest = listToMatrix(requests, 3)

      for (let i = 0; i < chunkRequest.length; i++) {
        let startTime: any = null
        let endTime: any = null
        const promiseCall = () => {
          startTime = moment()
          return Promise.all(chunkRequest[i].map((promise: any) =>
            fetch(promise.url, { method: promise.method }).then(async res => {
              const resp = await res.clone().json()
              return resp
            })
          )).catch((err: any) => {
            // setinitializingStatus('Download failed retrying...')
          })
        }

        let icd10List: any = await promiseCall()

        if (!icd10List) {
          // Retry the batch if request was failed
          icd10BatchSize = Math.round(icd10BatchSize / 2)

          fetchIcd10(data, icd10_collection.length)
          return
        }

        // Otherwise push to icd10 collection variable
        icd10List.map((icd10s: any) => {
          for (let i = 0; i < icd10s.length; i++) {
            if (icd10s[i].illness_code) {
              icd10s[i].diagnosis_code = icd10s[i].illness_code
            }
          }
          icd10_collection.push(...icd10s);
          return icd10s;
        })
        setFetchedIcd10(icd10_collection.length)

        endTime = moment()
        const requestBatchDuration = endTime.diff(startTime, 'seconds')

        if (requestBatchDuration > 10) {
          icd10BatchSize = Math.round(icd10BatchSize / 2)
          fetchIcd10(data, icd10_collection.length)

          return
        }
      }

      let saveEntry = await loginStorageService.saveEntry(icd10_collection, 'icd10_list')
        .catch(err => console.log(err));

      if (saveEntry) {
        icd10FetchDone = true;
        let saveUpdatedIcd10Config = await loginStorageService.saveEntry(icd10ToSave, 'icd10')
          .catch(err => console.log(err));
        if (cptFetchDone && saveUpdatedIcd10Config) {
          redirect();
        }
      }
    }
  }

  // Fetch Icd10 updates
  const fetchIcd10Update = async () => {
    let query = await loginStorageService.getSingleEntryByKeyReturnValue('icd10', 'date_updated');
    let url = `${process.env.REACT_APP_HIMS_API_CLIENT_URL}icd10-codes/latest/${query.result}`;
    let options = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    await fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          if (data.illness_code) {
            data.diagnosis_code = data.illness_code;
          }
        }
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
          ...modalProps,
          open: true,
          title: 'Incomplete Data Download',
          message: 'Please click the button below.',
          buttonText: 'Retry Downoad'
        })
      });


  }

  let cpt_collection: any[] = [];

  const fetchCpt = async (data: any, defaultSkip?: number) => {
    let count: any = data.cpt.count;
    setTotalCpt(count)
    let limit = cptBatchSize;

    if (defaultSkip) {
      count = count - defaultSkip
    }

    if (count) {

      let callCount = Math.ceil(count / limit)

      let requests = generateRequestArrayCpt(callCount, {
        limit,
        signal,
        defaultSkip: defaultSkip ? defaultSkip : 0
      })

      const chunkRequest = listToMatrix(requests, 3)


      for (let i = 0; i < chunkRequest.length; i++) {
        let startTime: any = null
        let endTime: any = null
        const promiseCall = () => {
          startTime = moment()
          return Promise.all(chunkRequest[i].map((promise: any) =>
            fetch(promise.url, { method: promise.method }).then(async res => {
              const resp = await res.clone().json()
              return resp
            })
          )).catch((err: any) => {
            // setinitializingStatus('Download failed retrying...')
          })
        }

        let cptList: any = await promiseCall()



        if (!cptList) {
          // Retry the batch if request was failed
          cptBatchSize = Math.round(cptBatchSize / 2)

          fetchCpt(data, cpt_collection.length)
          return
        }

        // Otherwise push to icd10 collection variable
        cptList.map((cpts: any) => cpt_collection.push(...cpts))
        setFetchedCpt(cpt_collection.length)

        endTime = moment()
        const requestBatchDuration = endTime.diff(startTime, 'seconds')

        if (requestBatchDuration > 10) {
          cptBatchSize = Math.round(cptBatchSize / 2)
          fetchCpt(data, cpt_collection.length)



          return
        }
      }

      let saveEntry = await loginStorageService.saveEntry(cpt_collection, 'cpt_list')
        .catch(err => console.log(err));

      if (saveEntry) {
        cptFetchDone = true;
        let saveUpdatedCptConfig = await loginStorageService.saveEntry(cptToSave, 'cpt')
          .catch(err => console.log(err));
        if (icd10FetchDone && saveUpdatedCptConfig) {
          redirect();
        }
      }
    }
  }

  // Fetch Cpt updates
  const fetchCptUpdate = async () => {
    let query = await loginStorageService.getSingleEntryByKeyReturnValue('cpt', 'date_updated');
    let url = `${process.env.REACT_APP_HIMS_API_CLIENT_URL}cpts/latest/${query.result}`;
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
          ...modalProps,
          open: true,
          title: 'Incomplete Data Download',
          message: 'Please click the button below.',
          buttonText: 'Retry Downoad'
        })
      });
  }

  // Process saving to indexedDB
  const saveToIndexedDB = async (data: any) => {

    icd10ToSave = Object.entries(data.icd10).map(entry => {
      return { key: entry[0], value: entry[1] }
    });

    cptToSave = Object.entries(data.cpt).map(entry => {
      return { key: entry[0], value: entry[1] }
    });

    loginStorageService.getSingleEntryByKeyReturnValue('icd10', 'juday').then((juday: any) => {

      let newJuday = data.icd10.juday ? data.icd10.juday : null;

      let existingJuday = juday.result;

      // console.log("new", newJuday);
      // console.log("old", existingJuday);
      if (newJuday && (moment(newJuday).isAfter(existingJuday))) {
        loginStorageService.clearList('icd10_list').then(() => {
          setOpen(true)
          fetchIcd10(data);
        })
      } else {
        loginStorageService.getSingleEntryByKeyReturnValue('icd10', 'date_updated').then((du) => {
          if (!moment(data.icd10.date_updated).isAfter(du.result)) {
            loginStorageService.validateStoreCount('himsDb', 'icd10_list').then((res: number) => {
              // console.log(res);
              if (res === 0) {
                setOpen(true);
                fetchIcd10(data);
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
            // console.log(res);
            setOpen(true);
            fetchIcd10(data);
          }).catch((err) => console.log(err));
        });
      }
    }).catch(() => {
      // console.log("wala akong juday kaya mag clear ako tapos fetch ulit hehe");
      loginStorageService.clearList('icd10_list').then(() => {
        setOpen(true);
        fetchIcd10(data);
      }).catch(() => {
        loginStorageService.deleteDb('himsDb');
        setModalProps({
          ...modalProps,
          open: true,
          title: 'Error',
          message: <span>Something went wrong in indexedDB. Please try again</span>,
          buttonText: 'Okay'
        })
      })
    })


    loginStorageService.getSingleEntryByKeyReturnValue('cpt', 'juday').then((juday: any) => {

      let newJuday = data.cpt.juday ? data.cpt.juday : null;
      let existingJuday = juday.result;

      // console.log("new", newJuday);
      // console.log("old", existingJuday);

      if (newJuday && (moment(newJuday).isAfter(existingJuday))) {
        // console.log("my juday")
        loginStorageService.clearList('cpt_list').then(() => {
          setOpen(true);
          fetchCpt(data);
        })
      } else {

        loginStorageService.getSingleEntryByKeyReturnValue('cpt', 'date_updated').then((du) => {
          if (!moment(data.cpt.date_updated).isAfter(du.result)) {

            loginStorageService.validateStoreCount('himsDb', 'cpt_list').then((res: number) => {
              if (res === 0) {
                fetchCpt(data);
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
              // console.log(r);
            }).catch(err => console.log(err));
          }
        }).catch(() => {
          loginStorageService.saveEntry(cptToSave, 'cpt').then((res) => {
            setOpen(true);
            fetchCpt(data);
          }).catch((err) => console.log(err));
        });
      }

    }).catch(() => {
      // console.log("wala akong juday kaya mag clear ako tapos fetch ulit hehe");

      loginStorageService.clearList('cpt_list').then(() => {
        setOpen(true);
        fetchCpt(data);
      }).catch(() => {
        loginStorageService.deleteDb('himsDb');
        setModalProps({
          ...modalProps,
          open: true,
          title: 'Error',
          message: <span>Something went wrong in indexedDB. Please try again</span>,
          buttonText: 'Okay'
        })
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
    localStorage.setItem('CLIENT_URL', process.env.REACT_APP_HIMS_API_CLIENT_URL!);
    localStorage.setItem('PARTNER_URL', process.env.REACT_APP_HIMS_API_PARTNER_URL!);
    localStorage.setItem('CLAIMS_URL', process.env.REACT_APP_HIMS_API_CLAIMS_URL!);
    localStorage.setItem('OCP_URL', process.env.REACT_APP_HIMS_API_OCP_URL!);
    localStorage.setItem('DDS_URL', process.env.REACT_APP_HIMS_API_DDS_URL!);
    localStorage.setItem('FRANCHISING_URL', process.env.REACT_APP_HIMS_API_FRANCHISING!);
    localStorage.setItem('DDS_USERNAME', process.env.REACT_APP_DDS_USERNAME!);
    localStorage.setItem('DDS_PASSWORD', process.env.REACT_APP_DDS_PASSWORD!);
    localStorage.setItem('PMAKER_BASE_URL', process.env.REACT_APP_PMAKER_BASE_URL!);
    localStorage.setItem('HIMS_TITLE', process.env.REACT_APP_HIMS_TITLE! || "");
    localStorage.setItem('HIMS_ICON', process.env.REACT_APP_ICON! || "");
    localStorage.removeItem('CC_TICKET_TRANSACTION_ID');

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
      .then((resp: any) => resp.json())
      .then(async (data: any) => {
        if (!data.error) {
          tmpData = data;
          localStorage.setItem('api_token', data.login['access_token']);
          localStorage.setItem('pm_token', data.login['access_token']);
          localStorage.setItem('token', data.login['access_token'])
          localStorage.setItem('user_id', data.login.user_id);
          localStorage.setItem('employee_id', data.login.employee_id);
          localStorage.setItem('first_name', data.login.first_name);
          localStorage.setItem('last_name', data.login.last_name);
          if (data.login.main_module.toLowerCase() === 'underwriting') {
            localStorage.setItem('sidebar', 'dashboard');
            // window.location.replace(underwritingUrl);
          } else if (data.login.main_module.toLowerCase() === 'customer care') {
            // window.location.replace(customerCareUrl);
          } else if (data.login.main_module.toLowerCase() === 'membership') {
            localStorage.setItem('sidebar', 'dashboard');
            // window.location.replace(membershipUrl);
          } else {
            // window.location.replace(systemAdminUrl);
          }

          mainModule = data.login.main_module;
          if (data.login && data.login['group'] && data.login['group']['name']) {
            groupName = data.login['group']['name'];
          }
          const login_roles = get(data, "login.role", []);
          const main_role_id = get(data, "login.main_role_id", "");
          if (Array.isArray(login_roles) && login_roles.length && main_role_id) {
            const activeMainRole: any = login_roles.find(rl => rl.role_id === main_role_id && rl.status === 'active');
            if (activeMainRole) {
              firstActiveRole = activeMainRole;
            } else {
              const activeRole = login_roles.find(rl => rl.status === 'active');
              if (activeRole) {
                firstActiveRole = activeRole;
              }
            }
          }
          cptBatchSize = data.cpt.batch_size;
          icd10BatchSize = data.icd10.batch_size;



          data.login.pm_token = data.login['access_token'];

          let userDataToSave = Object.entries(data.login).map(entry => {
            return { key: entry[0], value: entry[1] }
          });

          loginStorageService.saveEntry(userDataToSave, 'user_data').then((res) => {
            // console.log(res);
          }).catch((err) => console.log(err));

          await fetch(`${process.env.REACT_APP_HIMS_API_CLIENT_URL}system-settings/config`, {
            method: 'GET',
            headers: {
              'Content-type': 'application/json',
              'Authorization': `Bearer ${data.login.access_token}`
            }
          }).then((res: any) => res.json()).then((data) => {
            setPwSetupProps({
              regex: data.password.regex,
              character: data.password.character,
              min: data.password.min_length,
              max: data.password.max_length
            })
            let configtosave = Object.entries(data).map(entry => {
              return { key: entry[0], value: entry[1] }
            });
            loginStorageService.saveEntry(configtosave, 'config').then((res) => {
              // console.log(res);
            }).catch((err) => console.log(err));

          }).catch(err => console.log(err))

          if (data.login.needs_password_update) {
            setpwSetupModal(true)
          } else {
            await saveToIndexedDB(data);
          }
        } else {
          if (data.error.message.includes('UM06')) {
            setError(true);
            setErrorMessage(data.error.message.replace(/Code UM06/, ''))
            setFetchingState(false);
            setModalProps({
              ...modalProps,
              open: true,
              title: 'Login Failed',
              message: data.error.message.replace(/Code UM06/, ''),
              buttonText: 'Okay',
              onClose: () => { setModalProps({ ...modalProps, open: false }) }
            })
          } else if (data.error.message.includes('UM03')) {
            // console.log(data.error.message)
            setError(true);
            setFetchingState(false);
            setModalProps({
              ...modalProps,
              open: true,
              title: 'Login Failed',
              message: data.error.message.replace(/Code UM03/, ''),
              buttonText: 'Okay',
              onClose: () => { setModalProps({ ...modalProps, open: false }) }
            })
          } else if (data.error.message.includes('UM04')) {
            setFetchingState(false);
            setModalProps({
              ...modalProps,
              open: true,
              title: 'This Account Is Locked',
              message: <span>Please contact your <strong>Department Head</strong> to unlock your account.</span>,
              buttonText: 'Okay'
            })
          } else if (data.error.message.includes('UM53')) {
            setFetchingState(false);
            setModalProps({
              ...modalProps,
              open: true,
              title: 'You have exceeded your login attempts',
              message: <span>Your account is temporarily suspended. Please contact support for assistance.</span>,
              buttonText: 'Okay'
            })
          } else if (data.error.message.includes('UM05')) {
            setFetchingState(false);
            setModalProps({
              ...modalProps,
              open: true,
              title: 'This Account Is Deactivated',
              message: <span>Please contact your <strong>Department Head</strong> to activate your account.</span>,
              buttonText: 'Okay'
            })
          } else if (data.error.message.includes('UM61')) {
            setFetchingState(false);
            setModalProps({
              ...modalProps,
              open: true,
              title: 'Account has not been activated yet',
              message: <span>Your account will be activated on <strong>{data.error.message.replace(/Code UM61/, '').trim()}</strong>.</span>,
              buttonText: 'Okay'
            })
          } else {
            setFetchingState(false);
            setModalProps({
              ...modalProps,
              open: true,
              title: 'Login Failed',
              message: data.error.message,
              buttonText: 'Okay'
            })
          }
        }

      })
      .catch((err: any) => {
        console.log(err)
        setSecondInstanceModal(true)
        // setModalProps({
        //   ...modalProps,
        //   open: true,
        //   title: 'Error',
        //   message: err.message,
        //   buttonText: 'Okay'
        // })
      })
  }

  const onLogin = async (e: any) => {
    e.preventDefault()
    if (loginData.username.length === 0 && loginData.password.length === 0) {
      setModalProps({
        ...modalProps,
        open: true,
        title: 'Login Failed',
        message: 'Username and Password are required.',
        buttonText: 'Okay',
        onClose: () => {
          setModalProps({ ...modalProps, open: false })
          window.location.reload();
        }
      })

      return;
    }
    if (loginData.username.length === 0 && loginData.password.length > 0) {
      // alert('Username is required.');
      setModalProps({
        ...modalProps,
        open: true,
        title: 'Login Failed',
        message: 'Username is required.',
        buttonText: 'Okay',
        onClose: () => {
          setModalProps({ ...modalProps, open: false })
          window.location.reload();
        }
      })
      return;
    }

    if (loginData.password.length === 0 && loginData.username.length > 0) {
      // alert('Password is required.');
      setModalProps({
        ...modalProps,
        open: true,
        title: 'Login Failed',
        message: 'Password is required.',
        buttonText: 'Okay',
        onClose: () => {
          setModalProps({ ...modalProps, open: false })
          window.location.reload();
        }
      })
      setError(true);
      setErrorMessage('The password is required.');
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

    let requestSetup = await fetch(`${process.env.REACT_APP_HIMS_API_CLIENT_URL}password/forgot/${username}`, request).catch(err => {
      // BEGIN HANDLING OF FAILED HTTP REQUEST
      setModalProps({
        ...modalProps,
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
          ...modalProps,
          open: true,
          title: 'Forgot Password',
          message: 'A reset password email will be sent to the email address of the account.',
          buttonText: 'Okay',
        })

        // await saveToIndexedDB(tmpData);
      } else {
        setModalProps({
          ...modalProps,
          open: true,
          title: 'Error',
          message: respjson.error.message,
          buttonText: 'Okay'
        })
      }
    }
    setChanging(false)
  }

  const onContact = async () => {
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
        ...modalProps,
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
          ...modalProps,
          open: true,
          title: 'Update Password Success',
          message: 'New password has been set.',
          buttonText: 'Okay'
        })

        // await saveToIndexedDB(tmpData);
      } else {

        if (respjson.error.message.includes('UM90')) {
          let message = respjson.error.message.split('last')
          let attempts = message[1].split('password')
          setModalProps({
            ...modalProps,
            open: true,
            title: 'Password History Validation',
            message: <span style={{ display: 'inlne-block', width: 350 }}>
              The last <strong>{attempts[0]}</strong> password/s may not be reused as new password.
            </span>,
            buttonText: 'Okay'
          })
        } else {
          setModalProps({
            ...modalProps,
            open: true,
            title: 'Error',
            message: respjson.error.message,
            buttonText: 'Okay'
          })
        }
      }
    }

    setChanging(false)
  }

  const [pwSetupModal, setpwSetupModal] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isError, setError] = React.useState(false);
  const [isFetching, setFetchingState] = useState(false);
  const [isChanging, setChanging] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [modalProps, setModalProps] = useState<any>({
    open: false,
    title: '',
    message: '',
    buttonText: '',
    onClose: handleModalClose
  });

  const [pwSetupProps, setPwSetupProps] = React.useState<any>({
    regex: '',
    character: [],
    min: 0,
    max: 0
  })

  const classes = useStyles();

  return (
    <form onSubmit={onLogin}>
      {isChanging && <LoadingIndicator />}
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
          {/* <form onSubmit={onLogin}> */}
          <img
            alt="logo"
            className="login-logo"
            src={require('./icons/logo/logo@2x.png')}
          />
          <div className="login-project-name">Intellicare HIMS</div>
          <div className={`login-input-area ${classes.fields}`}>
            <span className="login-text">Username</span>
            <OutlinedInput
              error={isError}
              className={classes.inputField}
              autoFocus
              fullWidth
              value={loginData.username}
              onChange={handleTextFieldOnChange('username')}
              inputRef={usernameRef}
              labelWidth={0}
            />
          </div>
          <div className={`login-input-area ${classes.fields}`}>
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
            <OutlinedInput
              error={isError}
              className={classes.inputField}
              fullWidth
              type={visible ? 'text' : 'password'}
              onChange={handleTextFieldOnChange('password')}
              inputRef={passwordRef}
              labelWidth={0}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton style={{ cursor: 'pointer' }}
                    onClick={() => {
                      setVisible(!visible)
                    }}
                  >
                    {visible ? <Visibility className={classes.eyeIcon} /> : <VisibilityOff className={classes.eyeIcon} />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {
              isError ?
                <div className={classes.errorMessageContainer}>
                  <div>
                    <ErrorIcon className={classes.iconError} />
                  </div>
                  <div className={classes.errorString}>
                    <span className={classes.errText}>
                      {
                        errorMessage
                      }
                    </span>
                  </div>
                </div> : ''
            }
          </div>
          <Button disabled={isFetching ? true : false} className="login-button" type="submit">
            {isFetching ? "Initializing..." : "LOG IN"}
          </Button>
          <div style={{ paddingTop: '3rem' }}>
            Problems logging in? Please &nbsp;
            <Link className="login-link" onClick={onContact}>
              contact your IT Team
            </Link>
            &nbsp; for assistance.
          </div>
          {/* </form> */}
        </Grid>

        {/* Modals */}
        <MessageDialog
          isModalOpen={modalProps.open}
          onClose={modalProps.onClose}
          title={modalProps.title}
          message={modalProps.message}
          buttonText={modalProps.buttonText !== '' ? modalProps.buttonText : 'Okay'}
        />

        <PasswordSetupModal
          onSubmit={onSetupPasswordSubmit}
          open={pwSetupModal}
          setup={pwSetupProps}
          onClose={() => {
            setOpen(false)
            setpwSetupModal(false)
            setFetchingState(false)
          }} />

        <ForgotPassword
          onSubmit={onForgotPasswordSubmit}
          open={forgotPassword}
          onClose={() => setForgotPassword(false)} />

        <SecondInstanceError open={secondInstanceModal} onClose={closeSecondInstanceModal} />

      </Grid>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        <Typography>
          {Math.round((fetchedCpt + fetchedIcd10) / (totalCpt + totalIcd10) * 100) === 100 ? 'Redirecting...' : initializingStatus}
        </Typography>
        <Box position="relative" display="inline-flex">
          <CircularProgress className={classes.circularProgress} />
          <Box
            top={0}
            left={0}
            bottom={0}
            right={0}
            position="absolute"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="caption" component="div" className={classes.percentage}>
              {`${isNaN(Math.round((fetchedCpt + fetchedIcd10) / (totalCpt + totalIcd10) * 100)) ? 0 : Math.round((fetchedCpt + fetchedIcd10) / (totalCpt + totalIcd10) * 100)}%`}
            </Typography>
          </Box>
        </Box>
      </Backdrop>
    </form>
  );
};

export default withRouter(LoginPage);
