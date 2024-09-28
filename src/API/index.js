import axios from 'axios';
import { ACCESS_TOKEN, API_BASE_URL } from 'utils/constants';

export const sendRequest = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
        'Cache-Control': 'no-cache, no-store',
        Pragma: 'no-cache',
        Expires: 0,
        'X-XSS-Protection': '1;mode=block',
        'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
        'Expect-CT': 'enforce, max-age=86400',
    },
});

sendRequest.interceptors.request.use(
    config => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
    },
    error => {
        if (window.location.pathname.includes('login') && error?.response?.status === 401) {
            return;
        }
        if (error?.response?.status === 401) {
            window.location.href = '/login';
            return;
        }
        console.error(error?.response?.data?.status);
    }
);

sendRequest.interceptors.response.use(
    success => success,
    error => {
        if (error?.response?.status === 403) {
            localStorage.removeItem(ACCESS_TOKEN);
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export const api = {
    // POST login
    login: body => sendRequest.post('/api/Account/login', body),

    // POST register
    register: body => sendRequest.post('/api/Account/register', body),

    // POST logout
    logout: () => sendRequest.post('/api/Account/logout'),

    // PUT update account
    updateAccount: body => sendRequest.put('/api/Account/update', body),

    // GET single account by ID
    getAccountById: id => sendRequest.get(`/api/Account/${id}`),

    // GET all accounts
    getAllAccounts: () => sendRequest.get('/api/Account'),

    // DELETE account by ID
    deleteAccount: id => sendRequest.delete(`/api/Account/${id}`),

    // GET all contact groups
    getContactGroups: () => sendRequest.get('/api/ContactGroups'),

    // POST new contact group
    createContactGroup: body => sendRequest.post('/api/ContactGroups', body),

    // GET contact group by ID
    getContactGroupById: id => sendRequest.get(`/api/ContactGroups/${id}`),

    // PUT update contact group by ID
    updateContactGroup: (id, body) => sendRequest.put(`/api/ContactGroups/${id}`, body),

    // DELETE contact group by ID
    deleteContactGroup: id => sendRequest.delete(`/api/ContactGroups/${id}`),

    // GET all contacts
    getContacts: () => sendRequest.get('/api/Contacts'),

    // POST new contact
    createContact: body => sendRequest.post('/api/Contacts', body),

    // GET contact by ID
    getContactById: id => sendRequest.get(`/api/Contacts/${id}`),

    // PUT update contact by ID
    updateContact: (id, body) => sendRequest.put(`/api/Contacts/${id}`, body),

    // DELETE contact by ID
    deleteContact: id => sendRequest.delete(`/api/Contacts/${id}`),

    // GET all contact addresses
    getContactAddresses: () => sendRequest.get('/api/ContactAddresses'),

    // POST new contact address
    createContactAddress: body => sendRequest.post('/api/ContactAddresses', body),

    // GET contact address by ID
    getContactAddressById: id => sendRequest.get(`/api/ContactAddresses/${id}`),

    // PUT update contact address by ID
    updateContactAddress: (id, body) => sendRequest.put(`/api/ContactAddresses/${id}`, body),

    // DELETE contact address by ID
    deleteContactAddress: id => sendRequest.delete(`/api/ContactAddresses/${id}`),

    // GET user by username in contact group
    getUserInContactGroup: userName => sendRequest.get(`/api/ContactGroupUsers/getForUser/${userName}`),

    // GET users by group ID
    getUsersInGroup: groupId => sendRequest.get(`/api/ContactGroupUsers/getForGroup/${groupId}`),

    // POST new user in contact group
    createUserInContactGroup: body => sendRequest.post('/api/ContactGroupUsers', body),

    // PUT update user in contact group
    updateUserInContactGroup: (id, body) => sendRequest.put(`/api/ContactGroupUsers/${id}`, body),

    // DELETE user from contact group
    deleteUserFromContactGroup: id => sendRequest.delete(`/api/ContactGroupUsers/${id}`),

    // GET all messages
    getMessages: () => sendRequest.get('/api/Messages'),

    // POST new message
    createMessage: body => sendRequest.post('/api/Messages', body),

    // GET message by ID
    getMessageById: id => sendRequest.get(`/api/Messages/${id}`),

    // PUT update message by ID
    updateMessage: (id, body) => sendRequest.put(`/api/Messages/${id}`, body),

    // DELETE message by ID
    deleteMessage: id => sendRequest.delete(`/api/Messages/${id}`),

    // GET all message attachments
    getMessageAttachments: () => sendRequest.get('/api/MessageAttachments'),

    // POST new message attachment
    createMessageAttachment: body => sendRequest.post('/api/MessageAttachments', body),

    // GET message attachment by ID
    getMessageAttachmentById: id => sendRequest.get(`/api/MessageAttachments/${id}`),

    // PUT update message attachment by ID
    updateMessageAttachment: (id, body) => sendRequest.put(`/api/MessageAttachments/${id}`, body),

    // DELETE message attachment by ID
    deleteMessageAttachment: id => sendRequest.delete(`/api/MessageAttachments/${id}`),
};
