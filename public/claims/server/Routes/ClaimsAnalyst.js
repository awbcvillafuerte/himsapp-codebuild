const Router = require('express').Router()

Router.get('/claims', (req, res) => {
  return res.send({
    status: 200,
    message: 'Success',
    data: [
      {
        _id: '5d8b28829f1e7d5c6a749052',
        member_account_number: '5874987527',
        room_rate: 8000,
        approval_code: '5214789634',
        loa_number: '5821479637',
        pro_id: '58479652187',
        member_last_name: 'Cruz',
        member_middle_name: 'Reyes',
        claim_sub_sub_type: 'Physical Therapy',
        claim_sub_type: 'Therapy',
        pro_name: 'Petey Cruiser',
        room_type: 'Private',
        member_first_name: 'Jonathan',
        soa_number: '4578452367',
        facility_partner_id: '2587413695',
        facility_name: 'Quirino Memorial Medical Center',
        date_from: '2019-09-25T07:33:29.375Z',
        date_to: '2019-09-25T07:33:29.375Z',
        batch_number: 'OP091900005',
        doctor_name: 'Dr. Peter Leavitt',
        doctor_partner_id: null,
        claim_number: '1569400962737',
        case_number: '1569400962737',
        icd_list: [],
        procedures_list: [],
        hospital_items: [],
        professional_fee: [],
        analysis_results: [],
        __v: 0
      },
      {
        _id: '5d8b283d9f1e7d5c6a749051',
        member_account_number: '5874987527',
        room_rate: 8000,
        approval_code: '5214789634',
        loa_number: '5821479637',
        pro_id: '58479652187',
        member_last_name: 'Cruz',
        member_middle_name: 'Reyes',
        claim_sub_sub_type: 'Physical Therapy',
        claim_sub_type: 'Therapy',
        pro_name: 'Petey Cruiser',
        room_type: 'Private',
        member_first_name: 'Jonathan',
        soa_number: '4578452367',
        facility_partner_id: '2587413695',
        facility_name: 'Quirino Memorial Medical Center',
        date_from: '2019-09-25T07:33:29.375Z',
        date_to: '2019-09-25T07:33:29.375Z',
        batch_number: 'OP091900005',
        doctor_name: 'Dr. Peter Leavitt',
        doctor_partner_id: null,
        claim_number: '1569400893390',
        case_number: '1569400893390',
        icd_list: [],
        procedures_list: [],
        hospital_items: [],
        professional_fee: [],
        analysis_results: [],
        __v: 0
      },
      {
        _id: '5d8b19b79f1e7d5c6a749050',
        member_account_number: '5874987527',
        room_rate: 8000,
        approval_code: '5214789634',
        loa_number: '5821479637',
        pro_id: '58479652187',
        member_last_name: 'Cruz',
        member_middle_name: 'Reyes',
        claim_sub_sub_type: 'Physical Therapy',
        claim_sub_type: 'Therapy',
        pro_name: 'Petey Cruiser',
        room_type: 'Private',
        member_first_name: 'Jonathan',
        soa_number: '4578452367',
        facility_partner_id: '2587413695',
        facility_name: 'Quirino Memorial Medical Center',
        date_from: '2019-09-25T07:33:29.375Z',
        date_to: '2019-09-25T07:33:29.375Z',
        batch_number: 'OP091900005',
        doctor_name: 'Dr. Peter Leavitt',
        doctor_partner_id: null,
        claim_number: '1569397175561',
        case_number: '1569397175561',
        icd_list: [],
        procedures_list: [],
        hospital_items: [],
        professional_fee: [],
        analysis_results: [],
        __v: 0
      }
    ]
  })
})

Router.get('/claims/1569400962737', (req, res) => {
  return res.send({
    status: 200,
    message: 'Success',
    data: {
      claim: {
        _id: '5d8b28829f1e7d5c6a749052',
        member_account_number: '5874987527',
        room_rate: 8000,
        approval_code: '5214789634',
        loa_number: '5821479637',
        pro_id: '58479652187',
        member_last_name: 'Cruz',
        member_middle_name: 'Reyes',
        claim_sub_sub_type: 'Physical Therapy',
        claim_sub_type: 'Therapy',
        pro_name: 'Petey Cruiser',
        room_type: 'Private',
        member_first_name: 'Jonathan',
        soa_number: '4578452367',
        facility_partner_id: '2587413695',
        facility_name: 'Quirino Memorial Medical Center',
        date_from: '2019-09-25T07:33:29.375Z',
        date_to: '2019-09-25T07:33:29.375Z',
        batch_number: 'OP091900005',
        doctor_name: 'Dr. Peter Leavitt',
        doctor_partner_id: null,
        claim_number: '1569400962737',
        case_number: '1569400962737',
        icd_list: [],
        procedures_list: [],
        hospital_items: [],
        professional_fee: [],
        analysis_results: [],
        __v: 0
      },
      adjudication: { partner_affiliated: false, details: {} }
    }
  })
})

Router.get('/claims/1569400893390', (req, res) => {
  return res.send({
    status: 200,
    message: 'Success',
    data: {
      claim: {
        _id: '5d8b283d9f1e7d5c6a749051',
        member_account_number: '5874987527',
        room_rate: 8000,
        approval_code: '5214789634',
        loa_number: '5821479637',
        pro_id: '58479652187',
        member_last_name: 'Cruz',
        member_middle_name: 'Reyes',
        claim_sub_sub_type: 'Physical Therapy',
        claim_sub_type: 'Therapy',
        pro_name: 'Petey Cruiser',
        room_type: 'Private',
        member_first_name: 'Jonathan',
        soa_number: '4578452367',
        facility_partner_id: '2587413695',
        facility_name: 'Quirino Memorial Medical Center',
        date_from: '2019-09-25T07:33:29.375Z',
        date_to: '2019-09-25T07:33:29.375Z',
        batch_number: 'OP091900005',
        doctor_name: 'Dr. Peter Leavitt',
        doctor_partner_id: null,
        claim_number: '1569400893390',
        case_number: '1569400893390',
        icd_list: [],
        procedures_list: [],
        hospital_items: [],
        professional_fee: [],
        analysis_results: [],
        __v: 0
      },
      adjudication: { partner_affiliated: false, details: {} }
    }
  })
})

Router.get('/claims/1569397175561', (req, res) => {
  return res.send({
    status: 200,
    message: 'Success',
    data: {
      claim: {
        _id: '5d8b19b79f1e7d5c6a749050',
        member_account_number: '5874987527',
        room_rate: 8000,
        approval_code: '5214789634',
        loa_number: '5821479637',
        pro_id: '58479652187',
        member_last_name: 'Cruz',
        member_middle_name: 'Reyes',
        claim_sub_sub_type: 'Physical Therapy',
        claim_sub_type: 'Therapy',
        pro_name: 'Petey Cruiser',
        room_type: 'Private',
        member_first_name: 'Jonathan',
        soa_number: '4578452367',
        facility_partner_id: '2587413695',
        facility_name: 'Quirino Memorial Medical Center',
        date_from: '2019-09-25T07:33:29.375Z',
        date_to: '2019-09-25T07:33:29.375Z',
        batch_number: 'OP091900005',
        doctor_name: 'Dr. Peter Leavitt',
        doctor_partner_id: '4546464487',
        claim_number: '1569397175561',
        case_number: '1569397175561',
        icd_list: [],
        procedures_list: [],
        hospital_items: [],
        professional_fee: [],
        analysis_results: [],
        __v: 0
      },
      adjudication: { partner_affiliated: false, details: {} }
    }
  })
})

module.exports = {
  basePath: '/c/ca',
  Router
}
