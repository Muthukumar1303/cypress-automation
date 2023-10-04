import {HOST} from '../constants'
import Utilities from "../utilities.cy"

describe('Login Page', () => {
  const utilities = new Utilities();
  it('login as super user check home path', () => {
    utilities.navigate(`${HOST}/app/login`);
    utilities.textInput('input[name=username]', 'kishores@francium.tech')
    utilities.textInput('input[name=password]', 'kishore@2799')
    utilities.clickButton('button[type=submit]')
    cy.wait(7000)
    cy.location().then(({pathname}) => {
        expect(pathname.trim()).to.equal('/app/client-accounts');
      })
    utilities.clickButton("a[href='/app/account']")
    cy.wait(7000)
    utilities.clickButton("a[href='/app/logout']")
  })

  it('login as parent user check home path', () => {
    utilities.navigate(`${HOST}/app/login`);
    utilities.textInput('input[name=username]', 'aravind@francium.tech')
    utilities.textInput('input[name=password]', 'kishore@2799')
    utilities.clickButton('button[type=submit]')
    cy.wait(7000)
    cy.location().then(({pathname}) => {
        expect(pathname.trim()).to.equal('/app/feed');
      })
    utilities.clickButton("a[href='/app/account']")
    cy.wait(7000)
    utilities.clickButton("a[href='/app/logout']")
  })
})