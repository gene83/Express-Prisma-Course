import * as user from '../user';

/**
 * use before all or config to clear database after each suite
 * 
 */

describe('user handler', () => {
    it('Should create a new user', async () => {
        const req = {
            body: {
                username: 'test',
                password: 'password',
            }
        };

        const res = {
            json({token}) {
                console.log(token)
                expect(token).toBeTruthy();
            }
        }

        await user.createNewUser(req, res, () => {});

        // expect to see at least one expect call
    })
})