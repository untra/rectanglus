/* eslint-disable */

// import fetch from 'isomorphic-fetch'
import { polyfill } from 'es6-promise'
import * as _ from 'lodash'

const { scheme, hostname } =
  process.env.NODE_ENV === 'production'
    ? { scheme: 'http'
      , hostname: window.location.host }
    : { scheme: 'http'
      , hostname: 'localhost:8080' }

function buildHeaders() {
  const defaultHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${getAuthToken()}`
  }

  return new Headers({
    ...defaultHeaders
  })
}

function checkStatus(response: any) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText)
    _.assign(error, response)
    throw error
  }
}

export function getAuthToken() {
  const authToken = localStorage.getItem('authToken') || ''
  return JSON.parse(authToken)
}

export function setAuthToken(token: object) {
  localStorage.setItem('authToken', JSON.stringify(token))
}

export function removeAuthToken() {
  localStorage.removeItem('authToken')
}

export const apiURL = `${scheme}://${hostname}/api/v1`

export async function httpGet(url: string) {
  const response = await fetch(url, {
    headers: buildHeaders()
  })

  return checkStatus(response).json()
}

export async function httpPost(url: string, data: object) {
  const body = JSON.stringify(data)
  const response = await fetch(url, {
    method: 'POST',
    headers: buildHeaders(),
    body
  })

  return checkStatus(response).json()
}

export async function httpDelete(url: string) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: buildHeaders()
  })

  return checkStatus(response).json()
}

export async function httpUpdate(url: string, data: object) {
  const body = JSON.stringify(data)
  const response = await fetch(url, {
    method: 'PUT',
    headers: buildHeaders(),
    body
  })

  return checkStatus(response).json()
}
