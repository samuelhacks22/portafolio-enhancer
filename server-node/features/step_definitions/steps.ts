import { Given, When, Then } from '@cucumber/cucumber';
import request from 'supertest';
import assert from 'assert';
import app from '../../src/app';

let response: any;

Given('the API is running', function () {
  // App is imported, effectively running
});

When('I send a GET request to {string}', async function (path: string) {
  response = await request(app).get(path);
});

Then('I should receive a {int} status code', function (statusCode: number) {
  assert.equal(response.status, statusCode);
});

Then('the response should contain {string}', function (content: string) {
  assert(JSON.stringify(response.body).includes(content));
});
