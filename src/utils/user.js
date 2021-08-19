import api from "./api";

let err = {message: "Invalid parameters!"};
export const loginUser = async (details) => {
  try {
    let invalidParams = ['', null, undefined];

    if (invalidParams.includes(details)) {
        throw err;
    }

    const keys = Object.keys(details);
    const keysToCheck = ['username', 'password']

    keysToCheck.forEach(key =>{
        if (!keys.includes(key) || invalidParams.includes(details[key])) {
            throw err;
        }
    })

    let response = await api.post({
        route: 'user/login',
        data: details,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
export const createUser = async (details) => {
    try {
        let invalidParams = ['', null, undefined];

        if (invalidParams.includes(details)) {
            throw err;
        }

        const keys = Object.keys(details);
        const keysToCheck = ['username', 'email', 'password', 'firstname', 'middlename', 'lastname', 'address', 'country_code', 'mobile_number', 'confirm_passwords']

        keysToCheck.forEach(key => {
            if (!keys.includes(key) || invalidParams.includes(details[key])) {
                throw err;
            }
        })
        let response = await api.post({
            route: 'user/createUser',
            data: details,
        });

        return response;
    } catch (error) {
        throw error;
    }
};