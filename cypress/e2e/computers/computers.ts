// const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

import {When} from '@badeball/cypress-cucumber-preprocessor'

import HomePage from '../pages/homepage'

When("I visit the computers", () => {
  new HomePage().open()
});
