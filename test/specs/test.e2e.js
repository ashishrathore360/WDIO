import { expect } from '@wdio/globals'
import LoginPage from '../../y/login.page.js'
import SecurePage from '../../y/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')
        await expect(SecurePage.flashAlert).toMatchElementSnapshot('flashAlert')
    })
})

