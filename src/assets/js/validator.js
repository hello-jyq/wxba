import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';

const config = {
  // events: ' ',
  locale: 'en',
};

Vue.use(VeeValidate, config);

// 自定义validate 
const dictionary = {
  en: {
    messages: {
      email: () => 'Please enter a valid email.',
      password_confirm: () => 'The password you entered twice is inconsistent.',
      required: (field) => 'Please enter your ' + field + '.'
    },
    attributes: {
      company: 'company name',
      abn: 'ABN/ACN',
      firstName: 'first name',
      lastName: 'last name',
      password_confirm: 'password'
    }
  }
}

// Validator.updateDictionary(dictionary);
Validator.localize(dictionary);

Validator.extend('mobile', {
  messages: {
    en: field => 'Please enter a vaild ' + field,
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
});

Validator.extend('password', {
  messages: {
    en: field => field + ' Enter 8-22 characters. Contain one uppercase letter, one lowercase letter and one digit',
  },
  validate: value => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{8,22}$/.test(value)
  }
});

Validator.extend('nameValidator', {
  messages: {
    en: field => 'Please enter a valid ' + field + ' .',
  },
  validate: value => {
    return /^[0-9a-zA-Z\s?]{1,50}$/.test(value)
  }
});


