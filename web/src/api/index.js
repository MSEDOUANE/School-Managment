import { password } from '../config.json'

export const getAuthBase64 = () =>
{
	var username = 'user';
	var basicAuth = 'Basic ' + btoa(username + ':' + password);
	return basicAuth;
}