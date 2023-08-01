import HttpService from '../../shared/services/HttpService';

import { AuthenticationModel, AuthenticationSendModel } from './interfaces/AuthenticationInitial';

// https://devprogramaavisos.rigorcg.pt/ProgramaAvisos/sign-in/13
class AuthenticationInitialApi {
	public login = (data: AuthenticationSendModel['loginToken']): Promise<AuthenticationModel> => {
		const url = 'sign-in/' + localStorage.getItem('Current')
		const headers = {
			'Content-Type': 'application/json',
			loginToken: data
		}
	
		return HttpService.sing(url, data)
	};
}

export default new AuthenticationInitialApi();



